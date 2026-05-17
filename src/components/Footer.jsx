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
       

        {/* Bottom text */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Yamin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}