import { motion } from 'motion/react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { developerProfile } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#080b12] border-t border-gray-900 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand / Logo */}
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400">
            <Terminal size={16} />
          </div>
          <span className="text-white font-display text-lg font-bold tracking-tight">
            {developerProfile.name.split(' ')[0]}
            <span className="text-emerald-400">.dev</span>
          </span>
        </div>

        {/* Copy block */}
        <div className="flex flex-col items-center md:items-start text-xs text-gray-500 font-mono space-y-1.5 order-3 md:order-2">
          <p>© {currentYear} {developerProfile.name}. All rights reserved.</p>
        </div>

        {/* Back to top button */}
        <button
          id="footer-back-to-top-btn"
          onClick={handleBackToTop}
          className="p-3 bg-gray-950 border border-gray-800 hover:border-emerald-500/30 text-gray-400 hover:text-emerald-400 rounded-xl transition-all duration-300 shadow-md group order-2 md:order-3 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={16} className="transform group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
