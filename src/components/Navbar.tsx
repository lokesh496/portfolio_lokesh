import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DATA } from '../constants';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0f1115]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex justify-between h-24 items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center gap-4 py-2"
          >
            <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-black text-xl">LV</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-widest text-white uppercase leading-none">
                {DATA.name.split(' ')[0]} {DATA.name.split(' ')[1]}
              </span>
              <span className="text-[9px] font-black tracking-[0.3em] text-blue-500 uppercase mt-1">Portfolio</span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-all font-medium text-xs tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/resume.pdf"
              download="resume.pdf"
              className="bg-white text-black px-8 py-3 rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 shadow-xl"
            >
              RESUME
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
             <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f1115] border-b border-white/5"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-bold tracking-widest text-gray-400 hover:text-white hover:bg-white/5 uppercase transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/resume.pdf"
                download="resume.pdf"
                className="block w-full text-center bg-blue-600 text-white px-6 py-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] mt-4"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
