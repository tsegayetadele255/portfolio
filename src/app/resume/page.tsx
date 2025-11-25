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
            <div className="mb-8 w-full">
              <h2 className="text-lg font-bold tracking-widest mb-2">CONTACT</h2>
              <ul className="space-y-1 text-sm">
                <li><span className="font-semibold">📞</span> +251 927191851</li>
                <li><span className="font-semibold">✉️</span> tsegayetadele92@gmail.com</li>
                <li><span className="font-semibold">📍</span> Addis Ababa, Ethiopia</li>
                <li><span className="font-semibold">🌐</span> tsegaye-tadele.dev</li>
              </ul>
            </div>
            <div className="mb-8 w-full">
              <h2 className="text-lg font-bold tracking-widest mb-2">EDUCATION</h2>
              <div className="text-sm mb-1">2021 - present</div>
              <div className="font-semibold text-base">ADDIS ABABA UNIVERSITY</div>
              <div className="text-sm">BSc in Biomedical Engineering</div>
            </div>
            <div className="mb-8 w-full">
              <h2 className="text-lg font-bold tracking-widest mb-2">SKILLS</h2>
              <ul className="space-y-1 text-sm">
                <li>Project Management</li>
                <li>Public Relations</li>
                <li>Teamwork</li>
                <li>Time Management</li>
                <li>Effective Communication</li>
                <li>Critical Thinking</li>
              </ul>
            </div>
            <div className="w-full">
              <h2 className="text-lg font-bold tracking-widest mb-2">LANGUAGES</h2>
              <ul className="space-y-1 text-sm">
                <li>English (Fluent)</li>
                <li>Amharic (Fluent)</li>
                <li>Afan Oromo (Fluent)</li>
              </ul>
            </div>
          </aside>
          {/* Right Content (Paper) */}
          <main className="flex-1 w-full max-w-3xl bg-white rounded-none md:rounded-r-xl shadow-none border-none p-8">
            <div className="mb-6 border-b pb-4">
              <h1 className="text-3xl font-extrabold text-[#23395d]">TSEGAYE <span className="text-blue-500">TADELE</span></h1>
              <div className="uppercase tracking-widest text-md font-bold text-[#23395d] mt-1">Software Developer</div>
            </div>
            <section className="mb-6">
              <h2 className="text-lg font-bold text-[#23395d] tracking-wide mb-1">PROFILE</h2>
              <p className="text-gray-800 text-[15px] leading-relaxed">
                Skilled Software Developer and Biomedical Engineer with expertise in designing and building a wide range of software solutions, including websites, mobile applications, and custom platforms. Passionate about creating impactful technologies that blend engineering, healthcare innovation, and digital experiences. Skilled in full-stack development, mobile technologies, biomedical systems, and user-centered design. Known for rapid learning, creative problem-solving, and delivering high-quality, scalable products. Committed to pushing the boundaries of technology to improve lives and drive meaningful progress across industries.
              </p>
            </section>
            <section className="mb-6">
              <h2 className="text-lg font-bold text-[#23395d] tracking-wide mb-1">WORK EXPERIENCE</h2>
              <div className="mb-2 flex justify-between items-center">
                <div>
                  <div className="font-bold text-md">I4S PLC</div>
                  <div className="text-gray-600 text-sm">Software Developer and IT Manager</div>
                </div>
                <div className="text-gray-600 text-sm">2023 - PRESENT</div>
              </div>
              <ul className="list-disc ml-6 text-gray-800 text-[15px]">
                <li>Maintain existing Softwares.</li>
                <li>Develop New Tailored and Custom Softwares.</li>
                <li>Customise their Odoo ERP Software.</li>
              </ul>
            </section>
            <section className="mb-6">
              <h2 className="text-lg font-bold text-[#23395d] tracking-wide mb-1">HOBBIES</h2>
              <ul className="list-disc ml-6 text-gray-800 text-[15px]">
                <li>Reading about scientific and technological advancements</li>
                <li>Fitness and wellness tracking</li>
                <li>Problem solving challenges (coding puzzles, engineering competitions)</li>
                <li>Playing Chess</li>
                <li>Open source contribution</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-bold text-[#23395d] tracking-wide mb-1">REFERENCE</h2>
              <div className="flex flex-col md:flex-row gap-6 mt-2">
                <div>
                  <div className="font-bold">Adane Bulo</div>
                  <div className="text-gray-700 text-sm">I4S PLC / CEO</div>
                  <div className="text-gray-700 text-sm">Email: Adaneb@gmail.com</div>
                </div>

              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
