'use client';
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [cardVisible, setCardVisible] = useState(false);
  const [fieldVisible, setFieldVisible] = useState([false, false, false, false]);

  useEffect(() => {
    setCardVisible(true);
    // Staggered field entrance
    const timeouts = [
      setTimeout(() => setFieldVisible(f => [true, f[1], f[2], f[3]]), 200),
      setTimeout(() => setFieldVisible(f => [true, true, f[2], f[3]]), 400),
      setTimeout(() => setFieldVisible(f => [true, true, true, f[3]]), 600),
      setTimeout(() => setFieldVisible(() => [true, true, true, true]), 800),
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setResult("Message sent successfully!");
      formRef.current?.reset();
    } catch {
      setResult("Sorry, something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-zinc-900 to-neutral-800 px-2 py-8 overflow-hidden">
      {/* Decorative Contact SVG Icon */}
      {/* Multiple Decorative SVG Contact Icons */}
      <svg className="absolute inset-0 w-screen h-screen opacity-10 pointer-events-none select-none z-0 animate-[slowspin_60s_linear_infinite]" style={{ willChange: 'transform' }} viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g transform="translate(0,0) scale(1)">
          <circle cx="300" cy="300" r="280" fill="#fff" />
          <g>
            <rect x="170" y="220" width="260" height="160" rx="28" fill="#a78bfa" />
            <rect x="200" y="250" width="200" height="40" rx="10" fill="#fff" />
            <rect x="200" y="310" width="120" height="20" rx="8" fill="#f3e8ff" />
            <rect x="200" y="340" width="80" height="20" rx="8" fill="#f3e8ff" />
            <circle cx="410" cy="320" r="16" fill="#f3e8ff" />
          </g>
          <rect x="170" y="220" width="260" height="160" rx="28" stroke="#7c3aed" strokeWidth="6" />
        </g>
        <g transform="translate(1200,100) scale(0.8) rotate(8)">
          <circle cx="300" cy="300" r="280" fill="#fff" />
          <g>
            <rect x="170" y="220" width="260" height="160" rx="28" fill="#a78bfa" />
            <rect x="200" y="250" width="200" height="40" rx="10" fill="#fff" />
            <rect x="200" y="310" width="120" height="20" rx="8" fill="#f3e8ff" />
            <rect x="200" y="340" width="80" height="20" rx="8" fill="#f3e8ff" />
            <circle cx="410" cy="320" r="16" fill="#f3e8ff" />
          </g>
          <rect x="170" y="220" width="260" height="160" rx="28" stroke="#7c3aed" strokeWidth="6" />
        </g>
        <g transform="translate(600,700) scale(0.7) rotate(-10)">
          <circle cx="300" cy="300" r="280" fill="#fff" />
          <g>
            <rect x="170" y="220" width="260" height="160" rx="28" fill="#a78bfa" />
            <rect x="200" y="250" width="200" height="40" rx="10" fill="#fff" />
            <rect x="200" y="310" width="120" height="20" rx="8" fill="#f3e8ff" />
            <rect x="200" y="340" width="80" height="20" rx="8" fill="#f3e8ff" />
            <circle cx="410" cy="320" r="16" fill="#f3e8ff" />
          </g>
          <rect x="170" y="220" width="260" height="160" rx="28" stroke="#7c3aed" strokeWidth="6" />
        </g>
        <g transform="translate(1450,800) scale(0.6) rotate(20)">
          <circle cx="300" cy="300" r="280" fill="#fff" />
          <g>
            <rect x="170" y="220" width="260" height="160" rx="28" fill="#a78bfa" />
            <rect x="200" y="250" width="200" height="40" rx="10" fill="#fff" />
            <rect x="200" y="310" width="120" height="20" rx="8" fill="#f3e8ff" />
            <rect x="200" y="340" width="80" height="20" rx="8" fill="#f3e8ff" />
            <circle cx="410" cy="320" r="16" fill="#f3e8ff" />
          </g>
          <rect x="170" y="220" width="260" height="160" rx="28" stroke="#7c3aed" strokeWidth="6" />
        </g>
        <g transform="translate(300,1000) scale(0.5) rotate(-15)">
          <circle cx="300" cy="300" r="280" fill="#fff" />
          <g>
            <rect x="170" y="220" width="260" height="160" rx="28" fill="#a78bfa" />
            <rect x="200" y="250" width="200" height="40" rx="10" fill="#fff" />
            <rect x="200" y="310" width="120" height="20" rx="8" fill="#f3e8ff" />
            <rect x="200" y="340" width="80" height="20" rx="8" fill="#f3e8ff" />
            <circle cx="410" cy="320" r="16" fill="#f3e8ff" />
          </g>
          <rect x="170" y="220" width="260" height="160" rx="28" stroke="#7c3aed" strokeWidth="6" />
        </g>
      </svg>
      <div className={`bg-[#18181b] rounded-2xl shadow-2xl max-w-xl w-full p-8 flex flex-col gap-8 items-center relative z-10 border border-zinc-800 transition-all duration-700 ease-out transform
        ${cardVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
        <h1 className="text-4xl font-bold text-white text-center mb-6">Let&apos;s Get in Touch!</h1>
        <form ref={formRef} onSubmit={sendEmail} className="w-full flex flex-col gap-4">
          <label htmlFor="user_name" className={`font-semibold text-gray-200 transition-all duration-700 ${fieldVisible[0] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>Name</label>
          <input name="user_name" id="user_name" type="text" placeholder="Full Name" className={`px-4 py-3 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white bg-[#232326] placeholder-gray-400 transition-all duration-700 focus:shadow-lg focus:scale-[1.03] ${fieldVisible[0] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} required suppressHydrationWarning />
          <label htmlFor="user_email" className={`font-semibold text-gray-200 transition-all duration-700 delay-100 ${fieldVisible[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>Email</label>
          <input name="user_email" id="user_email" type="email" placeholder="Your Email" className={`px-4 py-3 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white bg-[#232326] placeholder-gray-400 transition-all duration-700 delay-100 focus:shadow-lg focus:scale-[1.03] ${fieldVisible[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} required suppressHydrationWarning />
          <label htmlFor="message" className={`font-semibold text-gray-200 transition-all duration-700 delay-200 ${fieldVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>Message</label>
          <textarea name="message" id="message" placeholder="Your Message" className={`px-4 py-3 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white bg-[#232326] placeholder-gray-400 min-h-[120px] transition-all duration-700 delay-200 focus:shadow-lg focus:scale-[1.03] ${fieldVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} required suppressHydrationWarning />
          <button
            type="submit"
            className={`mt-4 w-full text-xl px-2 py-2 rounded border border-[#353a3f] bg-[#232326]/70 text-gray-100 transition-all duration-700 delay-300
              ${fieldVisible[3] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
              hover:bg-[#232326]/90 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            disabled={loading}
            suppressHydrationWarning
          >
            {loading ? "Sending..." : "Submit"}
          </button>
          {result && <div className={`text-center mt-2 ${result.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{result}</div>}
        </form>
      </div>
    </section>
  );
}
