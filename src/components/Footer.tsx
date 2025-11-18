import { Shield, Twitter, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#141B1B] border-t border-[#00FF9D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-[#00FF9D]" />
              <span className="tracking-tight">
                <span className="text-white">Scam</span>
                <span className="text-[#00FF9D]">Shield</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Protecting you from scams in real-time with advanced AI detection.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white mb-4">Product</h4>
            <div className="space-y-2">
              <Link to="/analyzer" className="block text-gray-400 hover:text-[#00FF9D] text-sm transition-colors">
                Scam Analyzer
              </Link>
              <Link to="/lookup" className="block text-gray-400 hover:text-[#00FF9D] text-sm transition-colors">
                Phone Lookup
              </Link>
              <Link to="/report" className="block text-gray-400 hover:text-[#00FF9D] text-sm transition-colors">
                Report Scam
              </Link>
              <Link to="/dashboard" className="block text-gray-400 hover:text-[#00FF9D] text-sm transition-colors">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <div className="space-y-2">
              <Link to="/awareness" className="block text-gray-400 hover:text-[#00FF9D] text-sm transition-colors">
                Awareness Hub
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-[#00FF9D] text-sm transition-colors">
                About Us
              </Link>
              <a href="#" className="block text-gray-400 hover:text-[#00FF9D] text-sm transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#00FF9D] text-sm transition-colors">
                API
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1A2525] flex items-center justify-center text-gray-400 hover:text-[#00FF9D] hover:bg-[#00FF9D]/10 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1A2525] flex items-center justify-center text-gray-400 hover:text-[#00FF9D] hover:bg-[#00FF9D]/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1A2525] flex items-center justify-center text-gray-400 hover:text-[#00FF9D] hover:bg-[#00FF9D]/10 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1A2525] flex items-center justify-center text-gray-400 hover:text-[#00FF9D] hover:bg-[#00FF9D]/10 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#00FF9D]/10 text-center text-gray-400 text-sm">
          <p>&copy; 2025 ScamShield. All rights reserved. Protecting users worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
