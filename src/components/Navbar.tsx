import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { developerProfile } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
    setIsOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0f19]/80 backdrop-blur-md border-b border-gray-800/50 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand/Logo */}
        <a
          id="navbar-logo"
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center space-x-2 text-white font-display text-xl font-bold tracking-tight hover:text-emerald-400 transition-colors"
        >
          <div className="p-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400">
            <Terminal size={18} />
          </div>
          <span>
            {developerProfile.name.split(' ')[0]}
            <span className="text-emerald-400">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              id={`nav-link-${link.id}`}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-medium tracking-wide transition-all duration-200 relative py-1 hover:text-white ${
                activeSection === link.id ? 'text-emerald-400 font-semibold' : 'text-gray-400'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Call to action (Resume / Connect) */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            id="nav-connect-github"
            href={developerProfile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <Github size={20} />
          </a>
          <a
            id="nav-connect-linkedin"
            href={developerProfile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <Linkedin size={20} />
          </a>
          <a
            id="nav-hire-cta"
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="px-4 py-2 text-sm font-medium bg-emerald-500 text-gray-950 rounded-lg hover:bg-emerald-400 transition-colors duration-200 shadow-lg shadow-emerald-500/10 font-display font-semibold"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-3">
          <a
            id="mobile-nav-hire-cta"
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="px-3 py-1.5 text-xs font-semibold bg-emerald-500 text-gray-950 rounded-lg hover:bg-emerald-400 transition-colors duration-200"
          >
            Hire
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white focus:outline-none p-1.5 rounded-lg border border-gray-800 bg-[#0f172a]/40"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#0d1321] border-b border-gray-800 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`mobile-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'bg-emerald-500/10 text-emerald-400 font-semibold border-l-2 border-emerald-500'
                      : 'text-gray-400 hover:bg-gray-800/40 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-800 flex items-center justify-between px-4">
                <div className="flex space-x-4">
                  <a
                    href={developerProfile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-emerald-400"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={developerProfile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-emerald-400"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${developerProfile.email}`}
                    className="text-gray-400 hover:text-emerald-400"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
