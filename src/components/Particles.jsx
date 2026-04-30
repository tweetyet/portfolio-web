import { useEffect, useRef, useMemo } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

const defaultColors = ["#ffffff", "#8ab4f8", "#c084fc"];

const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex.split("").map((c) => c + c).join("");
  }
  const int = parseInt(hex, 16);
  return [
    ((int >> 16) & 255) / 255,
    ((int >> 8) & 255) / 255,
    (int & 255) / 255,
  ];
};

const vertex = /* glsl */ `
attribute vec3 position;
attribute vec4 random;
attribute vec3 color;

uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform float uSpread;
uniform float uBaseSize;
uniform float uSizeRandomness;

varying vec4 vRandom;
varying vec3 vColor;

void main() {
  vRandom = random;
  vColor = color;

  vec3 pos = position * uSpread;
  pos.z *= 3.0;

  vec4 mPos = modelMatrix * vec4(pos, 1.0);

  float t = uTime;
  mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.05, 0.5, random.x);
  mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.05, 0.5, random.w);
  mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.05, 0.5, random.z);

  vec4 mvPos = viewMatrix * mPos;

  gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);

  gl_Position = projectionMatrix * mvPos;
}
`;

const fragment = /* glsl */ `
precision highp float;

uniform float uTime;
varying vec4 vRandom;
varying vec3 vColor;

void main() {
  vec2 uv = gl_PointCoord.xy;
  float d = length(uv - vec2(0.5));

  float circle = smoothstep(0.5, 0.3, d);

  vec3 color = vColor + 0.15 * sin(uv.yxx + uTime + vRandom.y * 6.28);

  gl_FragColor = vec4(color, circle);
}
`;

const Particles = ({
  particleCount = 120,
  particleSpread = 8,
  speed = 0.3,
  particleColors,
  moveParticlesOnHover = true,
  particleHoverFactor = 0.5,
  particleBaseSize = 12,
  sizeRandomness = 0.8,
  cameraDistance = 18,
  disableRotation = false,
  pixelRatio = Math.min(window.devicePixelRatio, 1.5),
  className,
}) => {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const palette = useMemo(
    () => (particleColors?.length ? particleColors : defaultColors),
    [particleColors]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      dpr: pixelRatio,
      alpha: true,
    });

    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, cameraDistance);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = container;
      renderer.setSize(w, h);
      camera.perspective({ aspect: w / h });
    };

    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    if (moveParticlesOnHover) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    // geometry
    const positions = new Float32Array(particleCount * 3);
    const randoms = new Float32Array(particleCount * 4);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      let x, y, z, len;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);

      const r = Math.cbrt(Math.random());
      positions.set([x * r, y * r, z * r], i * 3);

      randoms.set(
        [Math.random(), Math.random(), Math.random(), Math.random()],
        i * 4
      );

      const col = hexToRgb(
        palette[Math.floor(Math.random() * palette.length)]
      );
      colors.set(col, i * 3);
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: colors },
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: particleSpread },
        uBaseSize: { value: particleBaseSize * pixelRatio },
        uSizeRandomness: { value: sizeRandomness },
      },
      transparent: true,
      depthTest: false,
    });

    const mesh = new Mesh(gl, {
      mode: gl.POINTS,
      geometry,
      program,
    });

    let raf;
    let last = performance.now();
    let elapsed = 0;

    const update = (t) => {
      raf = requestAnimationFrame(update);

      const delta = t - last;
      last = t;
      elapsed += delta * speed;

      program.uniforms.uTime.value = elapsed * 0.001;

      if (moveParticlesOnHover) {
        mesh.position.x = -mouseRef.current.x * particleHoverFactor;
        mesh.position.y = -mouseRef.current.y * particleHoverFactor;
      }

      if (!disableRotation) {
        mesh.rotation.y += 0.0015;
      }

      renderer.render({ scene: mesh, camera });
    };

    raf = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", resize);
      if (moveParticlesOnHover) {
        container.removeEventListener("mousemove", handleMouseMove);
      }

      cancelAnimationFrame(raf);

      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }

      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    particleCount,
    particleSpread,
    speed,
    palette,
    moveParticlesOnHover,
    particleHoverFactor,
    particleBaseSize,
    sizeRandomness,
    cameraDistance,
    disableRotation,
    pixelRatio,
  ]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full ${className || ""}`}
    />
  );
};

export default Particles;