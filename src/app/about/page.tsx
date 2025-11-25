"use client";
import AboutServiceCard from "./AboutServiceCard";

const services = [
  {
    icon: <i className="fa-solid fa-paint-brush"></i>,
    title: "Design",
    description:
      "Drawing on my extensive experience in creating websites and applications, I deliver robust and intuitive designs. Establishing a strong corporate identity is crucial for the success of any website.",
    delay: 0,
  },
  {
    icon: <i className="fa-solid fa-code"></i>,
    title: "Development",
    description:
      "I build scalable websites from scratch that fit seamlessly with design. I have extensive experience in implementing responsive web design, ensuring that websites are fully accessible and functional on all devices, including desktops, tablets, and mobile phones.",
    delay: 200,
  },
  {
    icon: <i className="fa-solid fa-cubes"></i>,
    title: "AI Integration",
    description:
      "Enhances apps and websites by enabling intelligent features like personalization, automation, and data-driven decision-making to improve user experience and efficiency.",
    delay: 400,
  },
  {
    icon: <i className="fa-solid fa-box-open"></i>,
    title: "The full package",
    description:
      "A complete website from concept to implementation: that's what makes me stand out. My great sense for design and my development skills enable me to create great projects.",
    delay: 600,
  },
];

export default function About() {
  return (
    <>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(.39,.575,.565,1) both;
        }
      `}</style>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#18181b] to-[#232326] px-4 py-16">
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 items-center md:items-stretch min-h-[32rem]">
          {/* Left: Developer Image */}
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto mb-8 md:mb-0 h-auto md:h-full">
            <div className="overflow-hidden border-[#38bdf8] shadow-lg lg:mt-40 md:w-64 md:h-full  bg-[#232326] flex items-center justify-center md:self-stretch">
              <img
                src="/developer.jpg"
                alt="Developer"
                className=" lg:w-120 lg:h-130 object-cover"
                loading="lazy"
                style={{ minHeight: '20rem', maxHeight: '100%' }}
              />
            </div>
          </div>
          {/* Right: Service Cards */}
          <div className="flex-1 flex flex-col gap-10 items-start w-full justify-between">
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4 mt-4">I Can Help You With...</h2>
            <div className="flex flex-col gap-8 w-full">
              {services.map((service) => (
                <AboutServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={service.delay}
                />
              ))}
            </div>


            {/* Download Resume Button */}
            <button
              onClick={() => {
                // Open resume page in new tab and trigger print
                const resumeWindow = window.open('/resume', '_blank');
                if (resumeWindow) {
                  resumeWindow.onload = () => {
                    setTimeout(() => {
                      resumeWindow.print();
                    }, 500);
                  };
                }
              }}
              className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group"
              suppressHydrationWarning
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
