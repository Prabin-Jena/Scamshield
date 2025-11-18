import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && <label className="text-sm text-gray-300">{label}</label>}
      <input
        className={`w-full px-4 py-3 bg-[#1A2525] border border-[#00FF9D]/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D] transition-colors ${className}`}
        {...props}
      />
    </div>
  );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, className = "", ...props }: TextareaProps) {
  return (
    <div className="space-y-2">
      {label && <label className="text-sm text-gray-300">{label}</label>}
      <textarea
        className={`w-full px-4 py-3 bg-[#1A2525] border border-[#00FF9D]/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D] transition-colors resize-none ${className}`}
        {...props}
      />
    </div>
  );
}

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: () => void;
}

export function SearchBar({ onSearch, className = "", ...props }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        className={`w-full px-4 py-3 pl-12 bg-[#1A2525] border border-[#00FF9D]/20 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D] transition-colors ${className}`}
        {...props}
      />
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
