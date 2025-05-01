"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between py-4 px-6 bg-gradient-to-r from-black via-zinc-900 to-neutral-800/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-zinc-800 z-50">
      {/* Left: Avatar + Name */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/me.jpg"
            alt="Tsegaye's avatar"
            className="w-11 h-12 rounded-full border-2 border-blue-600 shadow-md object-cover"
          />
          <span className="font-bold text-2xl text-blue-500 dark:text-blue-400 font-dancing-script tracking-wide hover:scale-110 transition-transform duration-300">Tsegaye</span>
        </Link>
      </div>

      {/* Hamburger Icon - mobile only */}
      <div className="md:hidden flex items-center z-50">
        <button
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative w-10 h-10 flex items-center justify-center focus:outline-none group"
        >
          <span className="sr-only">Open main menu</span>
          <span
            className={`block absolute h-0.5 w-6 bg-blue-500 dark:bg-blue-400 rounded transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-45 top-5" : "top-3"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-blue-500 dark:bg-blue-400 rounded transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0 left-5" : "top-5"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-blue-500 dark:bg-blue-400 rounded transition-all duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 top-5" : "top-7"
            }`}
          ></span>
        </button>
      </div>

      {/* Center: Nav Links - desktop only */}
      <div className="hidden md:flex items-center gap-2 lg:mr-100">
        {[
          { href: "/about", label: "Services" },
          { href: "/projects", label: "Projects" },
          { href: "/resume", label: "Resume" },
          { href: "/contact", label: "Contact" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`relative px-3 py-2 rounded transition-all font-medium text-gray-200/90 hover:text-blue-400 hover:scale-105 italic
              after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-1 after:w-0 after:h-[2.5px] after:bg-blue-500 after:rounded-full after:transition-all after:duration-300
              ${pathname === href ? "text-blue-500 after:w-7 after:bg-blue-500 after:opacity-90 font-bold" : ""}
            `}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Animated Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
        tabIndex={-1}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 min-h-screen w-64 bg-gradient-to-b from-black via-zinc-900 to-neutral-800/95 backdrop-blur-md border-l border-zinc-800 shadow-2xl z-50 flex flex-col gap-4 transition-transform duration-500 ease-in-out ${
            menuOpen ? "translate-x-0 scale-100 opacity-100" : "translate-x-full scale-95 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Navigation Links */}
          <div className="pt-16 px-4 flex flex-col gap-3">
            {[
              { href: "/about", label: "Services" },
              { href: "/projects", label: "Projects" },
              { href: "/resume", label: "Resume" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`relative text-lg font-semibold px-3 py-2 my-1 transition-all duration-300 text-gray-200/90 hover:text-blue-400 hover:scale-105 italic
                  after:absolute after:left-1/4 after:-translate-x-3/4 after:bottom-1 after:w-0 after:h-[2.5px] after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-7
                  ${pathname === href ? "text-blue-500 after:w-7 after:bg-blue-500 after:opacity-90 font-bold" : ""}
                `}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
