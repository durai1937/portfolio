import { motion } from 'motion/react';
import { MapPin, Mail, Sparkles, Target, Shield, Zap } from 'lucide-react';
import { developerProfile } from '../data';

export default function About() {
  const coreValues = [
    {
      title: 'Performance First',
      desc: 'Building optimized assets, server rendering, and lightweight bundlers for fast user transitions.',
      icon: <Zap className="text-emerald-400" size={20} />,
    },
    {
      title: 'Architectural Safety',
      desc: 'Establishing type safety, robust test coverage, and strict containerized sandboxing environments.',
      icon: <Shield className="text-emerald-400" size={20} />,
    },
    {
      title: 'User Centricity',
      desc: 'Collaborating directly on layouts, typography, micro-interactions, and accessibility standards.',
      icon: <Target className="text-emerald-400" size={20} />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0d16] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full filter blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3 flex items-center justify-center space-x-1"
          >
            <Sparkles size={12} />
            <span>My Profile</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '60px' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="h-1 bg-emerald-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Overlapping professional photo frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 group"
            >
              {/* Decorative back block */}
              <div className="absolute top-4 left-4 w-full h-full border border-emerald-500/30 rounded-2xl -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-300" />
              {/* Decorative glow block */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-emerald-500 rounded-tl-xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-emerald-500 rounded-br-xl -z-10" />
              
              {/* Main image */}
              <img
                src={developerProfile.aboutImageUrl}
                alt={`${developerProfile.name} Headshot`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-gray-800"
              />
            </motion.div>
          </div>

          {/* Right Column: Professional Copy & Info Cards */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-2xl font-bold font-display text-white tracking-tight"
            >
              Architecting clean software with a design-first focus
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-gray-400 text-base leading-relaxed"
            >
              {developerProfile.longBio}
            </motion.p>

            {/* Quick stats / contacts */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              <div className="flex items-center space-x-3 text-gray-300 p-3 bg-gray-950/40 border border-gray-800/40 rounded-xl">
                <MapPin className="text-emerald-400 shrink-0" size={18} />
                <span className="text-sm">{developerProfile.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 p-3 bg-gray-950/40 border border-gray-800/40 rounded-xl">
                <Mail className="text-emerald-400 shrink-0" size={18} />
                <span className="text-sm truncate">{developerProfile.email}</span>
              </div>
            </motion.div>

            {/* Core Values / Pillar Boxes */}
            <div className="space-y-4 pt-4">
              <h4 className="text-sm font-semibold tracking-wider text-emerald-400 uppercase font-mono">My Design Philosophy</h4>
              <div className="grid grid-cols-1 gap-4">
                {coreValues.map((val, i) => (
                  <motion.div
                    key={i}
                    id={`about-value-box-${i}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 bg-[#0d1321] border border-gray-800/50 rounded-xl hover:border-emerald-500/20 transition-all flex items-start space-x-4"
                  >
                    <div className="p-2 bg-emerald-500/10 rounded-lg shrink-0">
                      {val.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-white text-sm font-display">{val.title}</h5>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">{val.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
