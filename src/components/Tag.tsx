import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  variant?: "default" | "danger" | "warning" | "success";
  className?: string;
}

export function Tag({ children, variant = "default", className = "" }: TagProps) {
  const variants = {
    default: "bg-[#1A2525] text-gray-300 border-[#00FF9D]/20",
    danger: "bg-red-500/10 text-red-400 border-red-500/30",
    warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    success: "bg-[#00FF9D]/10 text-[#00FF9D] border-[#00FF9D]/30",
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
