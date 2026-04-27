import React from 'react';
import { motion } from 'motion/react';
import { DATA } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0f1115] transition-colors relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px]" />
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-blue-500 font-black tracking-[0.3em] text-[10px] uppercase mb-4">Expertise</h2>
            <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter">Core <span className="text-gray-600">Capabilities.</span></h3>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed font-light">
            Architecting robust backends and expressive frontends with industry-standard patterns and clean-code principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA.skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 hover:border-white/20 transition-all duration-500 group"
            >
              <div className="flex items-center space-x-5 mb-8">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500 text-blue-500 group-hover:text-white">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-xl text-white tracking-tight">{skill.name}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-black/40 border border-white/5 rounded-xl text-xs font-bold text-gray-400 group-hover:text-blue-200 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
