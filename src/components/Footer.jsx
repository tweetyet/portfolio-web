import {   Mail } from "lucide-react";
import { DiGithub } from "react-icons/di";
import { LiaLinkedin } from "react-icons/lia";

export default function Footer() {
  return (
    <footer className="py-10 border-t">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Name */}
        <h3 className="text-lg font-semibold mb-2">
          Yamin Theint Theint Wai
        </h3>

        {/* Short sentence */}
        <p className="text-gray-600 text-sm mb-6">
          Frontend Developer building clean and modern web applications.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/tweetyet"
            
            rel="noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <DiGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/tweetyet-frontend/"
           
            rel="noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <LiaLinkedin size={20} />
          </a>

          <a
            href="mailto:ytheint80@gmail.com"
            className="text-gray-600 hover:text-black transition"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Bottom text */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Yamin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}