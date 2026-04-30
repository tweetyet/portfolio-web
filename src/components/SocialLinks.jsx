import { Github, Instagram, Linkedin } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-5 mt-6">
      
      {/* GitHub */}
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-white shadow-md hover:shadow-xl 
        transition transform hover:-translate-y-1 hover:scale-110"
      >
        <Github className="w-5 h-5 text-black" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-white shadow-md hover:shadow-xl 
        transition transform hover:-translate-y-1 hover:scale-110"
      >
        <Instagram className="w-5 h-5 text-pink-500" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-white shadow-md hover:shadow-xl 
        transition transform hover:-translate-y-1 hover:scale-110"
      >
        <Linkedin className="w-5 h-5 text-blue-600" />
      </a>

    </div>
  );
};

export default SocialLinks;