import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { DATA } from '../constants';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: null,
      email: null,
      emailVerified: null,
      isAnonymous: null,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    
    // Save to Firestore
    const path = 'messages';
    try {
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      // Send Email via Backend (Resend)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-[#0f1115] transition-colors relative overflow-hidden">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-500 font-black tracking-[0.3em] text-[10px] uppercase mb-4">Inquiry</h2>
            <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-8 text-gradient">Start a <br /> Conversation.</h3>
            <p className="text-gray-400 mb-12 leading-relaxed text-lg font-light">
              Always open to discussing new engineering projects, architectural challenges or high-impact opportunities in Java ecosystems.
            </p>

            <div className="space-y-4">
              <ContactCard 
                icon={<Mail className="w-5 h-5" />}
                title="Email"
                value={DATA.contact.email}
                href={`mailto:${DATA.contact.email}`}
              />
              <ContactCard 
                icon={<Phone className="w-5 h-5" />}
                title="Direct"
                value={DATA.contact.phone}
                href={`tel:${DATA.contact.phone}`}
              />
              <ContactCard 
                icon={<MapPin className="w-5 h-5" />}
                title="Base"
                value={DATA.location}
              />
            </div>

            <div className="flex space-x-4 mt-12">
               <SocialLink icon={<Github className="w-5 h-5" />} href={DATA.contact.github} />
               <SocialLink icon={<Linkedin className="w-5 h-5" />} href={DATA.contact.linkedin} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px]" />
            
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center h-full space-y-4 text-center relative z-10"
              >
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h4 className="text-2xl font-black text-white tracking-tight">Transmission Received</h4>
                <p className="text-gray-400 font-light max-w-xs">
                  Your message has been securely stored. I'll review your inquiry and respond shortly.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-blue-500 font-black uppercase tracking-widest text-[10px] hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Identity</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-6 py-5 bg-white/5 rounded-2xl border border-white/5 focus:outline-none focus:border-blue-500/50 transition-all text-white text-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Endpoint</label>
                    <input 
                      type="email" 
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-5 bg-white/5 rounded-2xl border border-white/5 focus:outline-none focus:border-blue-500/50 transition-all text-white text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Payload</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Your message goes here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-5 bg-white/5 rounded-2xl border border-white/5 focus:outline-none focus:border-blue-500/50 transition-all text-white text-sm resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-bold uppercase tracking-widest">
                    <AlertCircle className="w-4 h-4" />
                    Failed to transmit message. Please try again.
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-white text-black font-black uppercase tracking-[0.2em] text-xs py-6 rounded-2xl transition-all hover:bg-blue-600 hover:text-white shadow-2xl flex items-center justify-center disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black"
                >
                  {status === 'submitting' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    'Transmit Message'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href?: string }) {
  const Content = (
    <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all">
      <div className="p-4 bg-white dark:bg-slate-950 rounded-xl shadow-sm text-blue-600">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{title}</p>
        <p className="font-semibold text-slate-900 dark:text-white">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href} className="block">{Content}</a> : <div>{Content}</div>;
}

function SocialLink({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <motion.a
      whileHover={{ y: -5 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-all"
    >
      {icon}
    </motion.a>
  );
}
