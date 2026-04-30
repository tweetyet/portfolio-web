import { useEffect, useRef } from "react";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub, FaInstagram } from "react-icons/fa";


export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const particleCount = 80;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 0.6 - 0.3;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = "black"; // 🔥 black particles
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Hello, I'm <br />
          Yamin Theint Theint Wai
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto mb-6">
          A passionate Frontend Developer crafting clean and interactive web
          experiences.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
          >
            Contact Me
          </a>

          
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="/cv.pdf"
            download
            className=" px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
          >
            Download CV
          </a>
        </div>

       
           <div className="flex items-center justify-center gap-5 mt-6">
                
                {/* GitHub */}
                <a
                  href="https://github.com/tweetyet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-md hover:shadow-xl 
                  transition transform hover:-translate-y-1 hover:scale-110"
                >
                  <FaGithub className="w-5 h-5 text-black" />
                </a>
          
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/tweety_et?igsh=amZpOHN1d3ljdTlp&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-md hover:shadow-xl 
                  transition transform hover:-translate-y-1 hover:scale-110"
                >
                  <FaInstagram className="w-5 h-5 text-pink-500" />
                </a>
          
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/tweetyet-frontend/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-md hover:shadow-xl 
                  transition transform hover:-translate-y-1 hover:scale-110"
                >
                  <LiaLinkedin className="w-5 h-5 text-blue-600" />
                </a>
          
              </div>
        
      </div>
    </section>
  );
}
