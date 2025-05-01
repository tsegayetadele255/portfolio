export default function ResumePage() {
  return (
    <>
      <h2 className="text-4xl sm:text-5xl font-style-italic text-[white] text-center py-6 bg-gradient-to-b from-[#18181b] to-[#232326] ">Here is My Resume...</h2>
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#18181b] to-[#232326] py-8 px-2">
        {/* Unified Paper Container */}
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden">
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
                Versatile and result-driven Software Developer and Biomedical Engineer with expertise in designing and building a wide range of software solutions, including websites, mobile applications, and custom platforms. Passionate about creating impactful technologies that blend engineering, healthcare innovation, and digital experiences. Skilled in full-stack development, mobile technologies, biomedical systems, and user-centered design. Known for rapid learning, creative problem-solving, and delivering high-quality, scalable products. Committed to pushing the boundaries of technology to improve lives and drive meaningful progress across industries.
              </p>
            </section>
            <section className="mb-6">
              <h2 className="text-lg font-bold text-[#23395d] tracking-wide mb-1">WORK EXPERIENCE</h2>
              <div className="mb-2 flex justify-between items-center">
                <div>
                  <div className="font-bold text-md">I4S PLC</div>
                  <div className="text-gray-600 text-sm">IT Manager</div>
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
                  <div className="text-gray-700 text-sm">Phone: +251900000000</div>
                  <div className="text-gray-700 text-sm">Email: Adaneb@gmail.com</div>
                </div>
                <div>
                  <div className="font-bold">Harper Richard</div>
                  <div className="text-gray-700 text-sm">Wardiner Inc. / CEO</div>
                  <div className="text-gray-700 text-sm">Phone: +256-789-456-789</div>
                  <div className="text-gray-700 text-sm">Email: harper.richard@wardiner.com</div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
