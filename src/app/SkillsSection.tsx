"use client";

import React from "react";
import barArrowStyles from "./AnimatedBarArrow.module.css";

export default function SkillsSection() {
  
  return (
    <>
      {/* SEE MORE section */}
      <div className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-black via-zinc-900 to-neutral-800/90 py-8">
        <div className="flex flex-col items-center">
          <div className={barArrowStyles["animated-bar"]}></div>
          <svg className={barArrowStyles["animated-arrow"]} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 32L12 18H36L24 32Z" fill="#fff"/>
          </svg>
          
        </div>
        <span className="text-white font-medium tracking-wide mt-2">SEE MORE</span>
      </div>
      <section className="w-full bg-[#02201b] py-8 sm:py-16 px-4 flex flex-col items-center">
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-between">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#c0bba3] mb-8 md:mb-0 md:w-1/3 text-center md:text-left">Skills</h2>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-16 sm:gap-y-6 w-full">
  {/* First column: HTML, CSS, JS, React, Next.js, Flutter, React Native, Tailwind CSS */}
  <div className="flex flex-col w-full py-1">
  {/* HTML */}
  <div className="flex flex-row items-center w-full border-b border-[#41544e] py-2">
    <div className="flex items-center justify-center w-8 sm:w-10"><i className="fa-brands fa-html5 text-[#e34c26] text-xl sm:text-2xl"></i></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">HTML</span></div>
  </div>
  {/* CSS */}
  <div className="flex flex-row items-center w-full border-b border-[#41544e] py-2">
    <div className="flex items-center justify-center w-8 sm:w-10"><i className="fa-brands fa-css3-alt text-[#264de4] text-xl sm:text-2xl ml-2"></i></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">CSS</span></div>
  </div>
 
  {/* Python */}
  <div className="flex flex-row items-center w-full border-b border-[#41544e] py-2">
    <div className="flex items-center justify-center w-10"><i className="fa-brands fa-python text-[#f7df1e] text-2xl"></i></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">Python</span></div>
  </div>
   {/* Elementor */}
   <div className="flex flex-row items-center w-full border-b border-[#41544e] py-2">
    <div className="flex items-center justify-center w-10"><i className="fa-brands fa-elementor text-[#f7df1e] text-2xl"></i></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">Elementor</span></div>
  </div>
  {/* React */}
  <div className="flex flex-row items-center w-full border-b border-[#41544e] py-2">
    <div className="flex items-center justify-center w-10"><i className="fa-brands fa-react text-[#61dafb] text-2xl"></i></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">React</span></div>
  </div>
  {/* Next.js */}
  <div className="flex flex-row items-center w-full border-b border-[#41544e] py-2">
    <div className="flex items-center justify-center w-8 sm:w-10"><svg width='24' height='24' viewBox='0 0 91 93' fill='none' xmlns='http://www.w3.org/2000/svg' className='inline-block align-middle w-6 h-6 sm:w-7 sm:h-7'><circle cx='45.5' cy='46.5' r='45.5' fill='black'/><path d='M25 68V26.5H34.5L56.5 63.5V26.5H65.5V68H56L34.5 31V68H25Z' fill='white'/></svg></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">Next.js</span></div>
  </div>
  {/* Flutter */}
  <div className="flex flex-row items-center w-full border-b border-[#41544e] py-2">
    <div className="flex items-center justify-center w-10"><svg width='24' height='24' viewBox='0 0 256 256' className='inline-block align-middle' style={{height: '1.75em', width: '1.75em', minWidth: '1.75em'}} xmlns='http://www.w3.org/2000/svg'><g><polygon fill='#02569B' points='156.8,0 20.3,136.5 57.2,173.3 230.5,0 '/><polygon fill='#02569B' points='156.7,103.3 78.9,181.1 115.8,218 152.7,181.1 115.8,144.2 '/><polygon fill='#39C1F7' points='115.8,218 152.7,181.1 230.5,258.9 193.6,258.9 '/><polygon fill='#39C1F7' points='115.8,144.2 152.7,181.1 230.5,103.3 193.6,103.3 '/></g></svg></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">Flutter</span></div>
  </div>
  {/* React Native */}
  <div className="flex flex-row items-center w-full border-b border-[#41544e] py-2">
    <div className="flex items-center justify-center w-10"><i className="fa-solid fa-mobile-alt text-[#38bdf8] text-2xl"></i></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">React Native</span></div>
  </div>
  {/* Tailwind CSS */}
  <div className="flex flex-row items-center w-full py-2">
    <div className="flex items-center justify-center w-10"><i className="fa-solid fa-wind text-[#38bdf8] text-2xl"></i></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">Tailwind CSS</span></div>
  </div>
</div>
  {/* Second column: Bootstrap, Website Design, Website Development, Figma, Concept Development, Project Management, Soft Skills */}
  <div className="flex flex-col w-full py-1">
  {/* Bootstrap */}
  <div className="flex flex-row items-center w-full border-b border-[#41544e] py-2">
    <div className="flex items-center justify-center w-10"><i className="fa-brands fa-bootstrap text-[#563d7c] text-2xl"></i></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">Bootstrap</span></div>
  </div>
  <div className="flex flex-row items-center w-full border-b border-[#41544e] py-2">
    <div className="flex items-center justify-center w-10"><i className="fa-brands fa-wordpress text-[#563d7c] text-2xl"></i></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">Wordpress</span></div>
  </div>
  {/* Website Design */}
  <div className="flex flex-row items-center w-full border-b border-[#41544e] py-2">
    <div className="flex items-center justify-center w-10"><i className="fa-solid fa-paint-brush text-[#38bdf8] text-2xl"></i></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">Website Design</span></div>
  </div>
  {/* Website Development */}
  <div className="flex flex-row items-center w-full border-b border-[#41544e] py-2">
    <div className="flex items-center justify-center w-10"><i className="fa-solid fa-code text-[#38bdf8] text-2xl"></i></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">Website Development</span></div>
  </div>
  {/* Figma */}
  <div className="flex flex-row items-center w-full border-b border-[#41544e] py-2">
    <div className="flex items-center justify-center w-10"><i className="fa-brands fa-figma text-[#a259ff] text-2xl"></i></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">Figma</span></div>
  </div>
   {/* Website Development */}
   <div className="flex flex-row items-center w-full border-b border-[#41544e] py-2">
    <div className="flex items-center justify-center w-10"><i className="fa-solid fa-code text-[#38bdf8] text-2xl"></i></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">Website Development</span></div>
  </div>
  {/* odoo */}
  <div className="flex flex-row items-center w-full border-b border-[#41544e] py-2">
    <div className="flex items-center justify-center w-10"><i className="fa-solid fa-lightbulb text-[#facc15] text-2xl"></i></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">odoo</span></div>
  </div>
  {/* Project Management */}
  <div className="flex flex-row items-center w-full border-b border-[#41544e] py-2">
    <div className="flex items-center justify-center w-10"><i className="fa-solid fa-tasks text-[#38bdf8] text-2xl"></i></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">Project Management</span></div>
  </div>
  {/* Soft Skills */}
  <div className="flex flex-row items-center w-full py-2">
    <div className="flex items-center justify-center w-10"><i className="fa-solid fa-user-friends text-[#38bdf8] text-2xl"></i></div>
    <div className="border-l border-[#41544e] opacity-50 sm:opacity-100 mx-2 sm:mx-4 h-5 sm:h-6"></div>
    <div className="flex items-center flex-1"><span className="text-[#c0bba3] text-lg sm:text-xl">Soft Skills</span></div>
  </div>
</div>
</div>
      </div>
    </section>
    {/* Certificates Section */}
    <section className="w-full bg-[#02201b] py-8 sm:py-16 px-4 flex flex-col items-center border-t border-[#41544e]">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#c0bba3] mb-12 text-center">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {/* Web Certificate */}
          <div
            className="cursor-pointer rounded-lg shadow-xl p-6 hover:shadow-2xl transition border-2 border-[#353a3f] bg-[#232326]/40 backdrop-blur-sm hover:bg-[#232326]/60 text-gray-100 flex flex-col justify-between h-[420px]"
            onClick={() => window.open('/certificates/web.pdf', '_blank')}
          >
            <div
              className="rounded w-full h-60 object-cover border border-[#353a3f] mb-4 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/certificates/web.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '12rem',
              }}
            ></div>
            <div className="flex-1 flex flex-col justify-end">
              <h3 className="text-xl font-semibold mb-2 text-[#c0bba3]">Web Development</h3>
              <p className="mb-2 text-gray-100 line-clamp-3">Full Stack Web Development Certificate from Udemy, covering modern web technologies and best practices.</p>
            </div>
          </div>
          {/* Data Certificate */}
          <div
            className="cursor-pointer rounded-lg shadow-xl p-6 hover:shadow-2xl transition border-2 border-[#353a3f] bg-[#232326]/40 backdrop-blur-sm hover:bg-[#232326]/60 text-gray-100 flex flex-col justify-between h-[420px]"
            onClick={() => window.open('/certificates/Data.pdf', '_blank')}
          >
            <div
              className="rounded w-full h-60 object-cover border border-[#353a3f] mb-4 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/certificates/data.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '12rem',
              }}
            ></div>
            <div className="flex-1 flex flex-col justify-end">
              <h3 className="text-xl font-semibold mb-2 text-[#c0bba3]">Data Science</h3>
              <p className="mb-2 text-gray-100 line-clamp-3">Comprehensive Data Science and Machine Learning certification, focusing on Python and advanced analytics.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Testimonials Section */}
    <section className="w-full bg-gradient-to-b from-[#02201b] to-[#18181b] py-12 px-4 flex flex-col items-center border-t border-[#41544e]">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#c0bba3] mb-12 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {/* Testimonial 1 */}
          <div className="rounded-lg shadow-xl p-6 bg-[#232326]/40 backdrop-blur-sm border border-[#353a3f] text-gray-100 flex flex-col items-center">
            <div className="mb-4">
              <svg className="w-10 h-10 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6.17A7 7 0 0 0 3 13v2a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-2a7 7 0 0 0-2.83-6.83zM5 13a5 5 0 0 1 5-5 5 5 0 0 1 5 5v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-2z"/></svg>
            </div>
            <p className="text-lg italic mb-4">&quot;Tsegaye is a highly skilled developer who delivered our project on time and exceeded expectations. Communication was excellent throughout!&quot;</p>
            <div className="font-semibold text-[#38bdf8]">Adane Bulo</div>
            <div className="text-sm text-[#c0bba3]">General Manager, I4s PLC</div>
          </div>
          {/* Testimonial 2 */}
          <div className="rounded-lg shadow-xl p-6 bg-[#232326]/40 backdrop-blur-sm border border-[#353a3f] text-gray-100 flex flex-col items-center">
            <div className="mb-4">
              <svg className="w-10 h-10 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6.17A7 7 0 0 0 3 13v2a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-2a7 7 0 0 0-2.83-6.83zM5 13a5 5 0 0 1 5-5 5 5 0 0 1 5 5v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-2z"/></svg>
            </div>
            <p className="text-lg italic mb-4">&quot;Professional, creative, and detail-oriented. The website looks amazing and works flawlessly on all devices.&quot;</p>
            <div className="font-semibold text-[#38bdf8]">Michael Lee</div>
            <div className="text-sm text-[#c0bba3]">Founder, LeeTech Solutions</div>
          </div>
        </div>
      </div>
    </section>
    {/* Stats Bar */}
    <div className="w-full bg-[#2d3635] flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#02201b] border-t border-[#02201b]">
      <div className="flex-1 flex flex-col items-center justify-center py-8">
        <span className="text-5xl font-bold text-[#38bdf8]">4+</span>
        <span className="text-[#38bdf8] mt-2">years experience</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center py-8">
        <span className="text-5xl font-bold text-[#38bdf8]">10+</span>
        <span className="text-[#38bdf8] mt-2">websites developed</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center py-8">
        <span className="text-5xl font-bold text-[#38bdf8]">15+</span>
        <span className="text-[#38bdf8] mt-2">clients served</span>
      </div>
    </div>

    
    </>
  );
}
