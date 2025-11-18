import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  glowing?: boolean;
}

export function Card({ children, className = "", glowing = false }: CardProps) {
  return (
    <div
      className={`bg-[#141B1B] rounded-xl border ${
        glowing ? "border-[#00FF9D]/30 shadow-[0_0_20px_rgba(0,255,157,0.1)]" : "border-[#00FF9D]/10"
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}
