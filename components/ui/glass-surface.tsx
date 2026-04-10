import React from "react";

interface GlassSurfaceProps {
  children: React.ReactNode;
  className?: string; // Untuk kontrol lebar, tinggi, rounded, dan padding
  intensity?: "low" | "medium" | "high"; // Shortcut untuk level blur
}

const GlassSurface: React.FC<GlassSurfaceProps> = ({ 
  children, 
  className = "", 
  intensity = "medium" 
}) => {
  
  // Mapping intensitas blur ke class Tailwind
  const blurMap = {
    low: "backdrop-blur-sm bg-white/5",
    medium: "backdrop-blur-md bg-white/10",
    high: "backdrop-blur-xl bg-white/20",
  };

  return (
    <div
      className={`
        relative 
        overflow-hidden 
        border border-white/20 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
        ${blurMap[intensity]}
        ${className}
      `}
    >
      {/* Efek kilauan diagonal (Glint) agar lebih nyata */}
      <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Konten Utama */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;