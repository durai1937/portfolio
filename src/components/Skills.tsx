import { motion } from 'motion/react';
import { Cpu, Database, Cloud, Sliders, Sparkles } from 'lucide-react';
import { skillsData } from '../data';

export default function Skills() {
  const categories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      desc: 'Creating fluid, responsive, stateful client applications and visualizers.',
      icon: <Cpu className="text-emerald-400" size={22} />,
      bgColor: 'bg-emerald-500/5',
      borderColor: 'hover:border-emerald-500/30',
    },
    {
      id: 'backend',
      title: 'Backend Engineering',
      desc: 'Architecting fast, secure microservices, API pathways, and data layers.',
      icon: <Database className="text-blue-400" size={22} />,
      bgColor: 'bg-blue-500/5',
      borderColor: 'hover:border-blue-500/30',
    },
    {
      id: 'devops',
      title: 'Cloud & DevOps',
      desc: 'Managing container workflows, pipelines, and serverless architectures.',
      icon: <Cloud className="text-indigo-400" size={22} />,
      bgColor: 'bg-indigo-500/5',
      borderColor: 'hover:border-indigo-500/30',
    },
    {
      id: 'tools',
      title: 'Tools & Practices',
      desc: 'Employing robust debugging, agile frameworks, and test automation.',
      icon: <Sliders className="text-teal-400" size={22} />,
      bgColor: 'bg-teal-500/5',
      borderColor: 'hover:border-teal-500/30',
    },
  ];

  const getSkillsByCategory = (cat: string) => {
    return skillsData.filter((skill) => skill.category === cat);
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Advanced':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Intermediate':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#0b0f19] relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-emerald-500/5 rounded-full filter blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3 flex items-center justify-center space-x-1"
          >
            <Sparkles size={12} />
            <span>My Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '60px' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="h-1 bg-emerald-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              id={`skills-category-card-${category.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-6 sm:p-8 bg-gray-950/40 border border-gray-800/80 rounded-2xl transition-all duration-300 ${category.borderColor} ${category.bgColor} flex flex-col justify-between`}
            >
              <div>
                {/* Header block */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gray-900/80 border border-gray-800 rounded-xl">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">{category.title}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">{category.desc}</p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="h-px bg-gray-800/60 my-5"
                />

                {/* Skill Lists */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {getSkillsByCategory(category.id).map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      id={`skill-item-${category.id}-${sIdx}`}
                      className="flex items-center justify-between p-2.5 bg-gray-950/60 border border-gray-800/40 rounded-xl hover:bg-gray-900/60 hover:border-gray-800 transition-colors"
                    >
                      <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getLevelBadgeColor(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
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
