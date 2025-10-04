"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { NTR } from "next/font/google";

const ntr = NTR({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav
      className={`${ntr.className} fixed top-0 left-0 w-full z-50 bg-[#0a192f]/90 backdrop-blur-md px-8 py-4 flex items-center justify-between shadow`}
    >
      {/* left side: name */}
      <div className="flex items-center gap-10">
        <span className="text-[#ccd6f6] font-bold text-xl tracking-wide">
          Furtuna Estifanos
        </span>

        {/* navigation links */}
        <div className="flex gap-6 text-[#8892b0] text-sm font-semibold">
          <a href="#home" className="hover:text-[#f9a8d4] transition">
            home
          </a>
          <a href="#about" className="hover:text-[#f9a8d4] transition">
            about me
          </a>
          <a href="#experience" className="hover:text-[#f9a8d4] transition">
            experience
          </a>
          <a href="#projects" className="hover:text-[#f9a8d4] transition">
            projects
          </a>
        </div>
      </div>

      {/* right side: icons */}
      <div className="flex items-center gap-6 text-[#ccd6f6] text-lg">
        <a
          href="mailto:furtiarone@gmail.com"
          className="hover:text-[#f9a8d4] transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/FurtiA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#f9a8d4] transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/furtuna-stephanos-7aa75b2b0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#f9a8d4] transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}
