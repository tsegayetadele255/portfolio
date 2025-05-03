"use client";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';


const BASE_PATH = `M10,40 H390 V260 H10 Z`;


const AnimatedFlag: React.FC = () => {
  // Ref for animating the clipPath width
  const clipRectRef = useRef<SVGRectElement>(null);
  const rightPoleRef = useRef<SVGGElement>(null);
  const [flagRevealed, setFlagRevealed] = useState(false);

  useEffect(() => {
    if (clipRectRef.current) {
      gsap.fromTo(
        clipRectRef.current,
        { width: 0 },
        { width: 380, duration: 1.5, ease: 'power2.out',
          onComplete: () => setFlagRevealed(true) }
      );
    }
  }, []);

  useEffect(() => {
    if (rightPoleRef.current) {
      gsap.to(rightPoleRef.current, {
        opacity: flagRevealed ? 1 : 0,
        x: flagRevealed ? 0 : 30, // slide in from right
        duration: 0.7,
        ease: 'power2.out',
        overwrite: true
      });
    }
  }, [flagRevealed]);

  return (
    <svg viewBox="0 0 400 350" width="100%" height="100%" style={{ display: 'block' }}>
      <defs>
        {/* ClipPath for left-to-right reveal */}
        <clipPath id="flagRevealClip">
          <rect ref={clipRectRef} x="10" y="40" width="380" height="220" rx="0" />
        </clipPath>
        <linearGradient id="flagBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f172a"/>
          <stop offset="100%" stopColor="#1e293b"/>
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g>
        {/* Left Flagpole */}
        <rect x="0" y="40" width="10" height="220" rx="4" fill="url(#poleGradient)" stroke="#64748b" strokeWidth="1" />
        {/* Right Flagpole and ties (hidden until flag is revealed) */}
        <g ref={rightPoleRef} style={{ opacity: 0 }}>
          <rect x="390" y="40" width="10" height="220" rx="4" fill="url(#poleGradient)" stroke="#64748b" strokeWidth="1" />
          {/* Right Top tie */}
          <ellipse cx="390" cy="70" rx="3" ry="3" fill="#e5e7eb" stroke="#64748b" strokeWidth="0.5" />
          <line x1="387" y1="70" x2="382" y2="70" stroke="#64748b" strokeWidth="1.2" />
          {/* Right Bottom tie */}
          <ellipse cx="390" cy="210" rx="3" ry="3" fill="#e5e7eb" stroke="#64748b" strokeWidth="0.5" />
          <line x1="387" y1="210" x2="382" y2="210" stroke="#64748b" strokeWidth="1.2" />
        </g>
        <linearGradient id="poleGradient" x1="0" y1="40" x2="0" y2="260">
          <stop offset="0%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        {/* Left Top tie */}
        <ellipse cx="10" cy="70" rx="3" ry="3" fill="#e5e7eb" stroke="#64748b" strokeWidth="0.5" />
        <line x1="13" y1="70" x2="18" y2="70" stroke="#64748b" strokeWidth="1.2" />
        {/* Left Bottom tie */}
        <ellipse cx="10" cy="210" rx="3" ry="3" fill="#e5e7eb" stroke="#64748b" strokeWidth="0.5" />
        <line x1="13" y1="210" x2="18" y2="210" stroke="#64748b" strokeWidth="1.2" />
        {/* Flag and code lines group with reveal animation */}
        <g clipPath="url(#flagRevealClip)">
          {/* Flag fabric */}
          <path d={BASE_PATH} fill="url(#flagBg)" stroke="#334155" strokeWidth={1.5}  />
          {/* Static code lines inside the flag */}
          <text x={40} y={70} fontFamily="monospace" fontSize={18} fill="#38bdf8" filter="url(#glow)" >Hello! I am Tsegaye! a full-stack  </text>
          <text x={40} y={110} fontFamily="monospace" fontSize={18} fill="#38bdf8" filter="url(#glow)" > and mobile app developer, </text>
          <text x={40} y={150} fontFamily="monospace" fontSize={18} fill="#38bdf8" filter="url(#glow)" >AI Integration Specialist and </text>
          <text x={40} y={190} fontFamily="monospace" fontSize={18} fill="#38bdf8" filter="url(#glow)" > UI/UX Designer, Biomedical Engineer </text>
          <text x={40} y={230} fontFamily="monospace" fontSize={18} fill="#38bdf8" filter="url(#glow)" >feel free to contact me !</text>
        </g>
      </g>
    </svg>
  );
};

export default AnimatedFlag;
