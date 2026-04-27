import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Code2, ArrowRight } from 'lucide-react';
import { DATA } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0f1115] transition-colors relative overflow-hidden">
       <div className="section-padding">
        <div className="mb-20">
          <h2 className="text-blue-500 font-black tracking-[0.3em] text-[10px] uppercase mb-4">Portfolio</h2>
          <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter">My <span className="text-gray-600">Projects.</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DATA.projects.map((project: any, idx: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col glass-card overflow-hidden group hover:border-white/20 transition-all duration-500 bg-black/20"
            >
              <div className="h-60 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl hover:text-blue-500 hover:border-blue-500/50 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl hover:text-blue-500 hover:border-blue-500/50 transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[9px] font-black uppercase tracking-widest text-blue-400 bg-blue-500/5 px-2.5 py-1 rounded-md border border-blue-500/10">
                      {t}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-black text-white mb-4 group-hover:text-blue-500 transition-colors tracking-tight">
                  {project.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1 font-light">
                  {project.description}
                </p>
                <a 
                  href={project.github}
                  className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-[0.2em] text-white hover:text-blue-500 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
