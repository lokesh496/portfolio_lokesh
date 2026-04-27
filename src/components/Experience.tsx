import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { DATA } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0f1115] transition-colors relative overflow-hidden">
      <div className="section-padding">
        <div className="mb-20">
          <h2 className="text-blue-500 font-black tracking-[0.3em] text-[10px] uppercase mb-4">Professional</h2>
          <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter">Career <span className="text-gray-600">Timeline.</span></h3>
        </div>

        <div className="relative border-l border-white/5 ml-4 md:ml-10 space-y-16">
          {DATA.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-12"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-600/10" />
              
              <div className="glass-card p-10 hover:border-white/10 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                  <div>
                    <h4 className="text-2xl font-black text-white mb-2 tracking-tight">{exp.title}</h4>
                    <p className="text-blue-500 font-bold tracking-wider text-xs uppercase">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 text-gray-500">
                    <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold">
                       <Calendar className="w-3 h-3" />
                       <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-gray-600">
                       <MapPin className="w-3 h-3" />
                       <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start space-x-4 text-gray-400 text-sm leading-relaxed font-light">
                      <span className="w-1.5 h-1.5 bg-blue-600/40 rounded-full mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
