import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#00FF9D] text-[#0A0F0F] hover:bg-[#00FF9D]/90 hover:shadow-[0_0_20px_rgba(0,255,157,0.3)]",
    secondary: "bg-[#1A2525] text-white border border-[#00FF9D]/20 hover:border-[#00FF9D]/50 hover:bg-[#1A2525]/80",
    ghost: "text-gray-300 hover:text-[#00FF9D] hover:bg-[#00FF9D]/5",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
