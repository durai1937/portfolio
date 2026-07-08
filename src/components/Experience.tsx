import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Sparkles, Award } from 'lucide-react';
import { experienceData } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0b0f19] relative overflow-hidden">
      {/* Decorative Blur sphere */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3 flex items-center justify-center space-x-1"
          >
            <Sparkles size={12} />
            <span>Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight"
          >
            Career History
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '60px' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="h-1 bg-emerald-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-gray-800/80 ml-4 sm:ml-32 space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              id={`experience-timeline-node-${exp.id}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Date Column (Desktop only, positioned absolute left of the timeline) */}
              <div className="hidden sm:block absolute right-full mr-10 top-1 text-right w-24">
                <span className="text-sm font-mono font-bold text-gray-400 block">{exp.duration.split(' ')[0]}</span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">{exp.duration.includes('-') ? exp.duration.split('-')[1].trim() : ''}</span>
              </div>

              {/* Glowing Node Dot on Timeline */}
              <div className="absolute -left-3.5 top-1.5 w-7 h-7 bg-[#0b0f19] border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-400 shadow-md shadow-emerald-500/20">
                <Briefcase size={12} />
              </div>

              {/* Content Card */}
              <div className="p-6 bg-gray-950/40 border border-gray-800/80 rounded-2xl hover:border-emerald-500/20 hover:bg-gray-900/10 transition-all duration-300">
                {/* Meta details */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display tracking-tight">{exp.role}</h3>
                    <p className="text-sm font-medium text-emerald-400 font-display mt-0.5">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end text-xs text-gray-400 space-y-1 font-mono">
                    <span className="sm:hidden flex items-center space-x-1">
                      <Calendar size={13} className="text-emerald-400" />
                      <span>{exp.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin size={13} className="text-emerald-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Accomplishments checklist */}
                <ul className="space-y-2.5 mb-5 text-sm text-gray-400 leading-relaxed list-none">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-2">
                      <span className="text-emerald-500 shrink-0 mt-1">
                        <Award size={14} className="opacity-80" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Learned badges */}
                <div className="border-t border-gray-800/40 pt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-medium font-mono px-2 py-0.5 bg-[#0d1321] text-emerald-400/80 border border-emerald-500/10 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
