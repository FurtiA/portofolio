"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-[#FAFAFA] px-8 py-4 flex items-center justify-between ${inter.className}`}
    >
      {/* left side: name */}
      <div className="flex items-center gap-10">
        <span
          className={`${playfair.className} text-[#002B5B] font-bold text-xl tracking-wide`}
        >
          Furtuna Estifanos
        </span>

        {/* navigation links */}
        <div className={`flex gap-6 text-[#002B5B] text-sm font-medium ${inter.className}`}>
          <a href="#home" className="hover:text-[#00BFA6] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[#00BFA6] transition">
            About
          </a>
          <a href="#experience" className="hover:text-[#00BFA6] transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-[#00BFA6] transition">
            Projects
          </a>
        </div>
      </div>

      {/* right side: icons */}
      <div className="flex items-center gap-6 text-[#002B5B] text-lg">
        <a
          href="mailto:furtiarone@gmail.com"
          className="hover:text-[#00BFA6] transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/FurtiA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00BFA6] transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/furtuna-stephanos-7aa75b2b0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00BFA6] transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}
