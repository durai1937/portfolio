import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Terminal, Sparkles, Code2, Briefcase, Award } from 'lucide-react';
import { developerProfile } from '../data';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'System initialization successful.',
    'Establishing secure connection to portfolio database...',
    'Welcome to Chinna Durai\'s Interactive Space.',
    'Type "help" to see available terminal actions.'
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const historyEndRef = useRef<HTMLDivElement>(null);

  const fullHeadline = 'Building reliable software. Creating meaningful experiences.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullHeadline.slice(0, index));
      index++;
      if (index > fullHeadline.length) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const command = terminalInput.trim().toLowerCase();
    if (!command) return;

    let response = '';
    switch (command) {
      case 'help':
        response = 'Available actions:\n  - "about": Read my design philosophy\n  - "skills": Print core tech list\n  - "projects": View key achievements\n  - "contact": Print email and socials\n  - "clear": Clean terminal console screen';
        break;
      case 'about':
        response = `Profile: ${developerProfile.title}\nBio: ${developerProfile.shortBio}\nLocation: ${developerProfile.location}`;
        break;
      case 'skills':
        response = 'Core Stacks:\n  - Frontend: React, Next.js, TypeScript, Tailwind\n  - Backend: Node.js, GraphQL, PostgreSQL, Redis\n  - Cloud: Docker, AWS, Kubernetes, CI/CD';
        break;
      case 'projects':
        response = 'Key Achievements:\n  - Aether Analytics: 50k nodes at 60fps canvas\n  - Synapse IDE: Real-time p2p visual collaborative editor\n  - Veloce Commerce: 100/100 performance index scores';
        break;
      case 'contact':
        response = `Email: ${developerProfile.email}\nGitHub: ${developerProfile.github}\nLinkedIn: ${developerProfile.linkedin}`;
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        response = `Command "${command}" not recognized. Type "help" for a list of valid terminal keys.`;
        break;
    }

    setTerminalHistory((prev) => [...prev, `chinna@portfolio:~$ ${terminalInput}`, response]);
    setTerminalInput('');
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase':
        return <Briefcase className="text-emerald-400" size={20} />;
      case 'Code2':
        return <Code2 className="text-emerald-400" size={20} />;
      case 'Award':
        return <Award className="text-emerald-400" size={20} />;
      default:
        return <Sparkles className="text-emerald-400" size={20} />;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-[#0b0f19]"
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-[150px]" />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-indigo-500/5 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-semibold tracking-wide uppercase"
          >
            <Sparkles size={12} className="animate-pulse" />
            <span>Open to Opportunities</span>
          </motion.div>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-lg font-medium tracking-wide font-mono"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-display leading-[1.1]"
            >
              {developerProfile.name}
            </motion.h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-emerald-400 tracking-tight font-display h-[64px] sm:h-auto">
              {typedText}
              <span className="animate-ping ml-1 text-emerald-400">|</span>
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            {developerProfile.shortBio}
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              id="hero-view-projects"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-6 py-3.5 bg-emerald-500 text-gray-950 font-display font-semibold rounded-xl hover:bg-emerald-400 transition-all flex items-center space-x-2 shadow-lg shadow-emerald-500/10 group"
            >
              <span>View Projects</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              id="hero-contact"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-6 py-3.5 bg-gray-900 border border-gray-800 text-white font-display font-medium rounded-xl hover:bg-gray-800 hover:border-gray-700 transition-all flex items-center space-x-2"
            >
              <span>Let's Talk</span>
            </a>
          </motion.div>

          {/* Real stats row with hover effects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-800/60 max-w-2xl"
          >
            {developerProfile.stats.map((stat, i) => (
              <div
                key={i}
                id={`stat-card-${i}`}
                className="p-3 bg-gray-950/30 border border-gray-800/40 rounded-xl hover:border-emerald-500/20 transition-all hover:bg-gray-900/30"
              >
                <div className="flex items-center space-x-2 text-gray-400 mb-1">
                  {getIcon(stat.iconName)}
                </div>
                <div className="text-2xl font-bold text-white font-display leading-tight">{stat.value}</div>
                <div className="text-xs text-gray-400 leading-tight">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Beautiful Interactive Terminal Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 h-[420px] bg-slate-950/90 border border-gray-800 rounded-2xl overflow-hidden flex flex-col shadow-2xl relative border-glow"
        >
          {/* Terminal Window Header */}
          <div className="px-4 py-3 bg-[#0f1424] border-b border-gray-800/80 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 block" />
            </div>
            <div className="text-xs text-gray-400 font-mono flex items-center space-x-1.5">
              <Terminal size={12} className="text-emerald-400" />
              <span>portfolio-session — zsh</span>
            </div>
            <div className="w-12" />
          </div>

          {/* Terminal Body */}
          <div className="flex-1 p-4 font-mono text-xs sm:text-sm overflow-y-auto space-y-3 bg-[#080c14] text-gray-300 scrollbar-thin">
            {terminalHistory.map((line, idx) => (
              <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                {line}
              </div>
            ))}
            <div ref={historyEndRef} />
          </div>

          {/* Terminal Input Form */}
          <form
            onSubmit={handleTerminalSubmit}
            className="p-3 bg-[#0a0f1d] border-t border-gray-800/60 flex items-center space-x-2 font-mono text-xs"
          >
            <span className="text-emerald-400 font-bold shrink-0">chinna@portfolio:~$</span>
            <input
              id="terminal-interactive-input"
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="e.g. help, skills, about..."
              className="flex-1 bg-transparent border-none text-white focus:outline-none focus:ring-0 placeholder-gray-500 caret-emerald-400"
              autoComplete="off"
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
}
