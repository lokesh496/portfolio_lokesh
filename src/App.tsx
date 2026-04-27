import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { DATA } from './constants';
import { Trophy, GraduationCap, Github, Linkedin, Heart, Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 selection:bg-blue-600/30">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="bg-[#0f1115] transition-colors relative overflow-hidden">
          <div className="section-padding">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl" />
                <h2 className="text-blue-500 font-black tracking-[0.3em] text-[10px] uppercase mb-4">Philosophy</h2>
                <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-10 leading-tight">
                  Crafting code with <span className="text-gray-600">architectural precision.</span>
                </h3>
                <div className="space-y-8 text-gray-400 text-lg leading-relaxed font-light">
                  <p>{DATA.summary}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    <div className="glass-card p-8">
                      <GraduationCap className="w-8 h-8 text-blue-500 mb-4" />
                      <h4 className="font-bold text-white text-lg mb-2">Education</h4>
                      <p className="text-sm text-gray-500">{DATA.education.degree}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Score</span>
                        <span className="text-xs font-mono font-bold text-white bg-white/5 px-2 py-1 rounded">CGPA: {DATA.education.cgpa}</span>
                      </div>
                    </div>
                    <div className="glass-card p-8">
                      <Trophy className="w-8 h-8 text-amber-500 mb-4" />
                      <h4 className="font-bold text-white text-lg mb-2">Impact</h4>
                      <p className="text-sm text-gray-500">Mentored 100+ Students</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Status</span>
                        <span className="text-xs font-mono font-bold text-white bg-white/5 px-2 py-1 rounded">COMPLETED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="glass-card p-1 pb-1 pr-1 bg-gradient-to-br from-blue-600/20 to-transparent">
                  <div className="bg-black rounded-[2.2rem] p-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px]" />
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-10 flex items-center gap-3">
                      <span className="w-1 h-1 bg-blue-600 rounded-full" />
                      Technical Certifications
                    </h4>
                    <div className="space-y-3">
                      {DATA.certifications.map((cert) => (
                        <div key={cert.name} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 group hover:bg-white/10 transition-all">
                          <span className="text-xs font-bold text-gray-300 group-hover:text-blue-400 tracking-wide uppercase">{cert.name}</span>
                          <span className="text-[10px] text-gray-600 font-mono tracking-tighter uppercase">{cert.issuer}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Experience />
        <Projects />
        <Contact />

        {/* Global Resume CTA Section */}
        <section className="bg-[#0f1115] py-32 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
              Download My <span className="text-blue-500">Professional CV</span>
            </h3>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              For a detailed look at my technical expertise, academic record, and project history, you can download a copy of my resume below.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/LokeshKumar_Resume.pdf"
              download="LokeshKumar_Resume.pdf"
              className="inline-flex items-center space-x-4 bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-xs tracking-[0.3em] uppercase transition-all shadow-[0_20px_50px_rgba(37,99,235,0.2)] hover:bg-white hover:text-black"
            >
              <Download className="w-5 h-5" />
              <span>Get PDF Version</span>
            </motion.a>
          </motion.div>
        </section>
      </main>

      <footer className="bg-[#0f1115] border-t border-white/5 py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-[10px] font-bold">LV</div>
              <span className="font-bold text-white tracking-widest uppercase">Lokesh.</span>
            </div>
            <p className="text-gray-500 text-xs tracking-wider">
              © {new Date().getFullYear()} LOKESH KUMAR VEERANKI. ALL RIGHTS RESERVED.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href={DATA.contact.github} className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-blue-600 transition-all shadow-lg"><Github className="w-5 h-5" /></a>
            <a href={DATA.contact.linkedin} className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-blue-600 transition-all shadow-lg"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
