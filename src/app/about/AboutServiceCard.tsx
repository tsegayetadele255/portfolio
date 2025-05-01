import React from "react";

interface AboutServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

export default function AboutServiceCard({ icon, title, description, delay }: AboutServiceCardProps) {
  return (
    <div
      className="bg-[#22272b] rounded-lg shadow p-5 border border-[#353a3f] opacity-0 translate-y-8 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className="flex items-start gap-4">
        <span className="text-[#38bdf8] text-xl mr-2">{icon}</span>
        <div>
          <h3 className="font-semibold text-lg text-white mb-1">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
