import { motion } from 'motion/react';
import { Mail, Linkedin, FileText, MapPin, Briefcase, GraduationCap, Medal, Globe } from 'lucide-react';
import { personalInfo, aboutContent } from '../data';
import Section from '../components/Section';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* HERO SECTION */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-20 pb-20 grid grid-cols-1 md:grid-cols-12 gap-16 items-start shrink-0"
      >
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-serif italic leading-[1.1]">
                {personalInfo.title.split(',')[0]}
              </h1>
              <p className="text-lg md:text-xl text-academy-muted font-light leading-relaxed max-w-xl">
                {personalInfo.tagline}
              </p>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-5">
              <a href={personalInfo.cvUrl} className="px-10 py-5 bg-academy-text text-white text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm hover:bg-accent transition-all">
                Download CV
              </a>
              <a href={`mailto:${personalInfo.email}`} className="px-10 py-5 border border-academy-border text-academy-text text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm hover:border-accent transition-all">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="md:col-span-4 md:col-start-9">
            <div className="relative group">
              <div className="aspect-[4/5] bg-slate-50 border border-academy-border overflow-hidden rounded-sm">
                <img 
                  src={personalInfo.headshot} 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* THREE COLUMN SUMMARY SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-academy-border pt-16 overflow-hidden">
        {/* EXPERIENCE */}
        <div className="space-y-6">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">01. Experience</h3>
          <div className="space-y-6">
            {aboutContent.experience.slice(0, 3).map((exp, idx) => (
              <div key={idx} className={`group ${idx > 0 ? 'opacity-60' : ''}`}>
                <div className="text-[10px] text-academy-muted font-bold tracking-widest">{exp.period.toUpperCase()}</div>
                <div className="text-lg font-serif font-medium leading-tight group-hover:text-accent transition-colors">{exp.role}</div>
                <div className="text-xs text-academy-muted mt-1">{exp.institution}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SELECTED RESEARCH (Using Working Papers as placeholder for summary) */}
        <div className="space-y-6">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">02. Selected Research</h3>
          <div className="space-y-8">
            <div>
              <div className="text-sm font-serif leading-tight font-bold underline decoration-academy-border underline-offset-4 pointer-events-none">Prompt Engineering for Finance</div>
              <div className="text-[9px] uppercase tracking-[0.2em] mt-3 text-academy-muted font-bold">Book · Palgrave Macmillan</div>
            </div>
            <div>
              <div className="text-sm font-serif leading-tight font-bold italic underline decoration-academy-border underline-offset-4 pointer-events-none">"Clinical Regulation Risk Exposure"</div>
              <div className="text-[9px] uppercase tracking-[0.2em] mt-3 text-academy-muted font-bold">Working Paper · 2026</div>
            </div>
            <div>
              <div className="text-sm font-serif leading-tight font-bold italic underline decoration-academy-border underline-offset-4 pointer-events-none">"AI Washing in Corporate Lending"</div>
              <div className="text-[9px] uppercase tracking-[0.2em] mt-3 text-academy-muted font-bold">Working Paper (2025)</div>
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="space-y-6">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">03. Education</h3>
          <div className="space-y-6">
            {aboutContent.education.slice(0, 3).map((edu, idx) => (
              <div key={idx} className="relative pl-6 border-l border-academy-border hover:border-accent transition-colors">
                <div className="text-sm font-serif font-bold">{edu.degree.split(',')[0]}</div>
                <div className="text-[10px] uppercase tracking-widest mt-2 text-academy-muted font-bold">{edu.institution}, {edu.period.split('–')[1] || edu.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED BIO */}
      <Section className="border-t border-academy-border pt-20">
        <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-serif italic text-academy-text border-b border-academy-border pb-6">Biography</h2>
            <div className="text-lg text-academy-text font-light leading-[1.8] tracking-wide whitespace-pre-wrap opacity-90">
              {aboutContent.prose}
            </div>
            <div className="pt-8 border-t border-academy-border/30 flex justify-center space-x-12 text-sm text-academy-muted italic tracking-widest uppercase font-bold">
              <span>{personalInfo.email}</span>
              <span>{personalInfo.phone}</span>
            </div>
        </div>
      </Section>

      {/* AWARDS & RECOGNITIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16 border-t border-black/5 dark:border-white/5">
        <div>
          <h2 className="text-2xl font-serif font-bold mb-8 flex items-center space-x-3 text-brand">
            <Medal size={22} className="text-accent" />
            <span>Awards & Honors</span>
          </h2>
          <ul className="space-y-4">
            {aboutContent.awards.map((award, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-academy-text hover:text-accent transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <span className="text-sm font-medium leading-relaxed">{award}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-bold mb-8 flex items-center space-x-3 text-brand">
            <Globe size={22} className="text-accent" />
            <span>Professional Memberships</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {aboutContent.memberships.map((member, idx) => (
              <span key={idx} className="px-4 py-2 bg-white text-academy-text border border-academy-border rounded-sm text-[10px] font-bold uppercase tracking-wider shadow-sm hover:border-accent hover:text-accent transition-all cursor-default">
                {member}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
