import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowRight, Download, MousePointer2, Terminal, Code2, Database, Github, Linkedin } from 'lucide-react';
import { DATA } from '../constants';

const roles = ["Full Stack Developer", "Java Expert", "Tech Trainer", "Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = roles[roleIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center bg-[#0f1115] overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.03),transparent_50%)]" />

      <div className="section-padding grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
            {DATA.name.split(' ')[0]} <br />
            <span className="text-gradient inline-block">{DATA.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-light">
            Results-driven <span className="text-white font-medium">Full Stack Developer</span> with hands-on experience in Java, Spring Boot, and Microservices. 
            Proficient in <span className="text-white font-medium">Manual & Selenium Testing</span>, with a proven track record of mentoring 100+ learners 
            in core programming and DSA.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-sm tracking-widest flex items-center space-x-3 transition-all shadow-[0_20px_50px_rgba(59,130,246,0.3)] hover:shadow-blue-500/40"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <div className="flex gap-8 items-center text-gray-500 pl-4 border-l border-white/5">
              <a href={DATA.contact.github} className="hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
              <a href={DATA.contact.linkedin} className="hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" 
              alt="Programming" 
              className="relative z-10 w-full h-auto rounded-[3rem] border border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs uppercase tracking-widest font-medium dark:text-white">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full"
        />
      </div>
    </section>
  );
}
