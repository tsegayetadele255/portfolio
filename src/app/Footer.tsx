import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2d3635] text-[#c0bba3] py-10 px-4 border-t border-[#02201b] ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        {/* Left: Profile */}
        <div className="flex items-center gap-4 mb-6 md:mb-0">
          <Image src="/me.jpg" alt="Tsegaye" width={56} height={56} className="rounded-full border-2 border-[#b8af8b] object-cover" />
          <span className="text-2xl font-bold text-blue-400 font-dancing-script tracking-wide hover:scale-110 transition-transform duration-300">Tsegaye</span>
        </div>
        {/* Center: Page Links */}
        <div className="flex flex-col gap-2 text-lg text-[#c0bba3] font-medium items-center md:items-start">
          <span className="uppercase text-xs font-bold tracking-widest text-[#38bdf8] mb-2">Links</span>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        {/* Right: Social Icons */}
        <div className="flex flex-col items-center md:items-end">
          <span className="uppercase text-xs font-bold tracking-widest text-[#38bdf8] mb-2">Contacts</span>
          <div className="flex gap-5 text-2xl">
            <a href="https://www.linkedin.com/in/tsegaye-tadele-ba6657329/" target="_blank" rel="noopener noreferrer" className="hover:text-[#38bdf8] transition-colors">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://web.facebook.com/profile.php?id=100049911753229" target="_blank" rel="noopener noreferrer" className="hover:text-[#38bdf8] transition-colors">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://github.com/tsegayetadele255/" target="_blank" rel="noopener noreferrer" className="hover:text-[#38bdf8] transition-colors">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://t.me/tsegish2000" target="_blank" rel="noopener noreferrer" className="hover:text-[#38bdf8] transition-colors">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-[#b8af8b] opacity-70">
        &copy; {new Date().getFullYear()} Tsegaye. All rights reserved.
      </div>
    </footer>
  );
}
