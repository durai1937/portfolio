import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Sparkles, Filter, Code2, ChevronDown, ChevronUp } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filters = ['All', 'Full-stack', 'Frontend', 'Cloud & DevOps', 'AI & Data'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 bg-[#0a0d16] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3 flex items-center justify-center space-x-1"
          >
            <Sparkles size={12} />
            <span>Showcase</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight"
          >
            Selected Work
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '60px' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="h-1 bg-emerald-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories / Filter Pill Row */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center space-x-2 text-gray-400 text-xs font-mono mb-4">
            <Filter size={14} className="text-emerald-400" />
            <span>FILTER PROJECTS BY CATEGORY</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#0f172a]/60 border border-gray-800/80 rounded-2xl max-w-3xl">
            {filters.map((filter) => (
              <button
                key={filter}
                id={`filter-btn-${filter.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => {
                  setActiveFilter(filter);
                  setExpandedProjectId(null); // Close any expanded when switching filters
                }}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-emerald-500 text-gray-950 shadow-md shadow-emerald-500/10 font-semibold scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/40'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-950/40 border border-gray-800/80 rounded-2xl overflow-hidden shadow-xl hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col group h-full border-glow"
              >
                {/* Project Image Top Frame */}
                <div className="relative h-48 overflow-hidden bg-slate-900 border-b border-gray-800/50 shrink-0">
                  <div className="absolute top-3 left-3 z-20 px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase bg-gray-900/90 text-emerald-400 border border-emerald-500/20 rounded-lg">
                    {project.category}
                  </div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white font-display leading-snug group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges / Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium font-mono px-2 py-0.5 bg-gray-900 border border-gray-800/60 text-gray-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Expander */}
                  <div className="mt-4 border-t border-gray-800/50 pt-3">
                    <button
                      id={`project-expand-btn-${project.id}`}
                      onClick={() => toggleExpand(project.id)}
                      className="w-full flex items-center justify-between text-xs text-gray-400 hover:text-white font-mono focus:outline-none py-1"
                    >
                      <span className="flex items-center space-x-1">
                        <Code2 size={13} className="text-emerald-400" />
                        <span>TECH ACHIEVEMENTS</span>
                      </span>
                      {expandedProjectId === project.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    <AnimatePresence initial={false}>
                      {expandedProjectId === project.id && (
                        <motion.div
                          id={`project-expand-panel-${project.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden mt-2"
                        >
                          <ul className="space-y-2 text-[11px] text-gray-400 leading-relaxed bg-[#0b0f19]/80 p-3 rounded-lg border border-gray-800/60">
                            {project.highlights.map((highlight, hIdx) => (
                              <li key={hIdx} className="flex items-start space-x-1.5">
                                <span className="text-emerald-400 font-bold shrink-0 mt-0.5">›</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer Action Links */}
                  <div className="flex items-center justify-between gap-3 mt-5 border-t border-gray-800/50 pt-4">
                    <a
                      id={`project-code-link-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 text-xs font-semibold text-center bg-gray-900 border border-gray-800 hover:border-gray-700 hover:bg-gray-800/40 text-gray-300 rounded-lg flex items-center justify-center space-x-1.5 transition-all"
                    >
                      <Github size={14} />
                      <span>Source Code</span>
                    </a>
                    <a
                      id={`project-live-link-${project.id}`}
                      href={project.liveUrl}
                      className="flex-1 py-2 px-3 text-xs font-semibold text-center bg-emerald-500 hover:bg-emerald-400 text-gray-950 rounded-lg flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-emerald-500/5"
                    >
                      <span>Live Site</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
