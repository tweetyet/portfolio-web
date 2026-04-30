import Footer from "./Footer";
import Header from "./Header";
import Particles from "./Particles";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      
      {/* Background Particles */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] z-0">
        <Particles
          particleColors={["#000000"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Header */}
      <Header />

     


      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PublicLayout;