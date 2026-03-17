"use client";

export default function ResumePage() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <>
      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          /* Remove default margins */
          @page {
            margin: 0.5cm;
            size: A4 portrait;
          }
          
          html, body {
            margin: 0;
            padding: 0;
            background: white !important;
            width: 100%;
            height: 100%;
          }
          
          /* Hide everything except resume content */
          body > * {
            display: none !important;
          }
          
          /* Show only the resume container */
          #resume-container {
            display: flex !important;
            visibility: visible !important;
            min-height: auto !important;
            padding: 0 !important;
            background: white !important;
            align-items: flex-start !important;
            justify-content: center !important;
          }
          
          #resume-container * {
            visibility: visible !important;
          }
          
          /* Hide download button, navbar, footer, chatbot, header */
          .no-print,
          nav,
          footer,
          button {
            display: none !important;
          }
          
          /* Position resume content */
          #resume-content {
            position: relative !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            page-break-inside: avoid;
            display: flex !important;
            flex-direction: row !important;
          }
          
          /* Preserve sidebar styling - force desktop layout for print */
          #resume-content aside {
            background-color: #23395d !important;
            color: white !important;
            width: 33.333333% !important;
            max-width: 33.333333% !important;
            flex-shrink: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            padding: 1.5rem 1rem !important;
          }
          
          /* Preserve main content styling */
          #resume-content main {
            background-color: white !important;
            flex: 1 !important;
            width: 66.666667% !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            padding: 1.5rem !important;
          }
          
          /* Ensure colors are printed */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          /* Preserve text colors */
          .text-blue-500,
          .text-\\[\\#23395d\\] {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Ensure images print */
          img {
            max-width: 100% !important;
            page-break-inside: avoid;
          }
          
          /* Prevent content from breaking across pages */
          h1, h2, h3 {
            page-break-after: avoid;
          }
          
          ul, ol {
            page-break-inside: avoid;
          }
        }
      `}</style>

      {/* Download Button - Better mobile positioning */}
      <button
        onClick={handleDownload}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-3 sm:p-4 flex items-center gap-2 transition-colors print:hidden no-print"
        title="Download Resume as PDF"
        suppressHydrationWarning
        aria-label="Download Resume as PDF"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="hidden sm:inline font-semibold text-sm">Download PDF</span>
      </button>

      <h2 className="text-4xl sm:text-5xl font-style-italic text-[white] text-center py-6 bg-gradient-to-b from-[#18181b] to-[#232326] no-print">Here is My Resume...</h2>

      <div id="resume-container" className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#18181b] to-[#232326] py-8 px-2">
        {/* Unified Paper Container */}
        <div id="resume-content" className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Left Sidebar */}
          <aside className="w-full md:w-1/3 bg-[#23395d] text-white flex flex-col items-center py-8 px-6">
            <img src="/me.jpg" alt="Tsegaye Tadele" className="w-48 h-48 rounded-full border-4 border-white shadow mb-6 object-cover object-top" />
            <div className="mb-6 w-full">
              <h2 className="text-lg font-bold tracking-widest mb-2 border-b border-blue-400 pb-1">CONTACT</h2>
              <ul className="space-y-2 text-sm">
                <li><span className="font-semibold text-blue-300">📞</span> +251 927191851</li>
                <li><span className="font-semibold text-blue-300">✉️</span> tsegayetadele92@gmail.com</li>
                <li><span className="font-semibold text-blue-300">📍</span> Addis Ababa, Ethiopia</li>
                <li className="break-all"><span className="font-semibold text-blue-300">🌐</span> [Portfolio Site](https://portfolio-xi-bice-r04ngxw2c2.vercel.app/)</li>
                <li className="break-all"><span className="font-semibold text-blue-300">💻</span> [GitHub](https://github.com/tsegayetadele255)</li>
              </ul>
            </div>
            <div className="mb-6 w-full">
              <h2 className="text-lg font-bold tracking-widest mb-2 border-b border-blue-400 pb-1">EDUCATION</h2>
              <div className="text-sm italic mb-1">2020 - 2024</div>
              <div className="font-bold text-base">ADDIS ABABA UNIVERSITY</div>
              <div className="text-sm">BSc in Biomedical Engineering</div>
            </div>
            <div className="mb-6 w-full text-blue-100/90 italic text-xs leading-relaxed">
              Specialized in RLHF, SFT, and LLM benchmarking for high-quality model training.
            </div>
            <div className="mb-6 w-full">
              <h2 className="text-lg font-bold tracking-widest mb-2 border-b border-blue-400 pb-1 uppercase">Technical Stack</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-bold text-blue-300">Frontend</p>
                  <p>Next.js 14/15, React, TypeScript, Tailwind CSS, GSAP</p>
                </div>
                <div>
                  <p className="font-bold text-blue-300">Backend & API</p>
                  <p>Node.js, Express, PostgreSQL, Groq SDK, REST APIs</p>
                </div>
                <div>
                  <p className="font-bold text-blue-300">AI Specialization</p>
                  <p>RLHF (Reinforcement Learning from Human Feedback), Prompt Engineering, Model Evaluation</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-lg font-bold tracking-widest mb-2 border-b border-blue-400 pb-1">LANGUAGES</h2>
              <ul className="space-y-1 text-sm">
                <li><span className="font-semibold">English</span> (Fluent/Professional)</li>
                <li><span className="font-semibold">Amharic</span> (Fluent)</li>
                <li><span className="font-semibold">Afan Oromo</span> (Native)</li>
              </ul>
            </div>
          </aside>
          {/* Right Content (Paper) */}
          <main className="flex-1 w-full max-w-3xl bg-white rounded-none md:rounded-r-xl shadow-none border-none p-8">
            <div className="mb-6 border-b pb-4">
              <h1 className="text-3xl font-extrabold text-[#23395d]">TSEGAYE <span className="text-blue-500">TADELE</span></h1>
              <div className="uppercase tracking-widest text-md font-bold text-blue-600 mt-1">Full Stack Developer | AI Trainer & Specialist</div>
            </div>
            <section className="mb-6">
              <h2 className="text-lg font-bold text-[#23395d] tracking-wide mb-2 uppercase border-l-4 border-blue-500 pl-2">Professional Summary</h2>
              <p className="text-gray-800 text-[15px] leading-relaxed">
                A skilled Software Developer and Biomedical Engineer specialized in full-stack development and AI integration. Proficient in building high-performance web applications using Next.js, React, and Node.js, and experienced in developing AI-powered solutions like automated proposal generators and custom LLM integrations. Passionate about AI Training, Reinforcement Learning from Human Feedback (RLHF), and optimizing AI models for complex real-world challenges. Combining an analytical engineering mindset with deep technical expertise to deliver scalable, user-centric digital products.
              </p>
            </section>
            <section className="mb-6">
              <h2 className="text-lg font-bold text-[#23395d] tracking-wide mb-3 uppercase border-l-4 border-blue-500 pl-2">Professional Experience</h2>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="font-bold text-lg text-[#23395d]">I4S PLC</div>
                  <div className="text-gray-600 font-semibold italic text-sm">2022 - 2026</div>
                </div>
                <div className="text-blue-600 font-bold text-[15px] mb-2">Software Developer & AI Implementation Lead</div>
                <ul className="list-disc ml-6 space-y-2 text-gray-800 text-[14px]">
                  <li>AI Automation: Architected and developed an AI-powered proposal and report generation system, significantly reducing manual documentation time for engineering projects.</li>
                  <li>E-commerce Development: Designed, Developed and launched "Gulit Marketplace," a full-stack platform (Next.js, PostgreSQL) connecting buyers and local farmers with secure JWT authentication.</li>
                  <li>ERP Systems: Orchestrated complex customizations of Odoo ERP to streamline internal business workflows and data management.</li>
                  <li>Software Maintenance: Managed and optimized legacy software systems, ensuring 99.9% uptime and modernizing performance where critical.</li>
                </ul>
              </div>
            </section>
            <section className="mb-6">
              <h2 className="text-lg font-bold text-[#23395d] tracking-wide mb-3 uppercase border-l-4 border-blue-500 pl-2">Key Projects</h2>
              <div className="space-y-3">
                <div>
                  <span className="font-bold text-[#23395d]">I4S AI Proposal Maker:</span> Developed a custom web app using Next.js and AI APIs to generate tailored engineering proposals and reports.
                </div>
                <div>
                  <span className="font-bold text-[#23395d]">Gulit Marketplace:</span> Built a comprehensive marketplace using a modern stack (Next.js, Express, Node.js, PostgreSQL).
                </div>
                <div>
                  <span className="font-bold text-[#23395d]">Professional CV Maker:</span> Created a specialized tool for resume visualization and professional formatting.
                </div>
              </div>
            </section>
            <section className="mb-6">
              <h2 className="text-lg font-bold text-[#23395d] tracking-wide mb-2 uppercase border-l-4 border-blue-500 pl-2">Aspirations</h2>
              <p className="text-gray-800 text-[14px]">
                Committed to improving AI model accuracy, safety, and performance through rigorous evaluation and expert data curation.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-bold text-[#23395d] tracking-wide mb-3 uppercase border-l-4 border-blue-500 pl-2">References</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg border-l-2 border-gray-200">
                  <div className="font-bold text-[#23395d]">Adane Bulo</div>
                  <div className="text-gray-700 text-sm font-semibold">CEO at I4S PLC</div>
                  <div className="text-blue-600 text-sm">Adane.bulo@gmail.com</div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
