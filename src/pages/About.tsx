import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowRight, Download, GraduationCap, Award, Briefcase } from 'lucide-react';
import { aboutData } from '../data/about';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-12 py-12">
      {/* HERO SECTION */}
      <section className="mb-32">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl font-serif text-ink mb-2 leading-tight"
            >
              {aboutData.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg font-bold text-accent tracking-[0.2em] uppercase mb-8"
            >
              {aboutData.title}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-serif italic border-l-4 border-accent pl-6 py-2 mb-10 text-ink/80 dark:text-ink/60"
            >
              {aboutData.tagline}
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="flex flex-wrap gap-4 pt-4"
            >
              <a 
                href={aboutData.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-black transition-all flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Download CV <Download size={14} />
              </a>
              <a 
                href={`mailto:${aboutData.email}`}
                className="border-2 border-ink text-ink px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-ink hover:text-cream transition-all flex items-center gap-2"
              >
                Email Me <Mail size={14} />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink/40 mt-12 flex gap-8"
            >
              <span>{aboutData.email}</span>
              <span>{aboutData.phone}</span>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-[320px] aspect-square bg-accent/5 relative rounded-sm shadow-[20px_20px_0px_0px_rgba(128,0,32,0.1)] border border-ink/5 overflow-hidden group self-center md:self-auto"
          >
            <img 
              src={aboutData.headshot} 
              alt={aboutData.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT PROSE */}
      <section className="mb-32 grid md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-ink/40">Our Mission & Background</h3>
          <motion.div {...fadeIn} className="space-y-6">
            {aboutData.bio.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink/90 dark:text-ink/70">
                {para}
              </p>
            ))}
          </motion.div>
        </div>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-ink/40 mb-8">Education</h3>
            <div className="grid gap-6">
              {aboutData.education.map((edu, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <p className="text-sm font-bold text-ink transition-colors group-hover:text-accent">{edu.degree}</p>
                  <p className="text-xs text-ink/60 uppercase tracking-wider">{edu.institution} ({edu.years})</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="mb-32 border-t border-ink/10 pt-16">
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-ink/40 mb-12">Professional Timeline</h3>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 relative border-l-2 border-ink/10 pl-8 ml-4">
          {aboutData.experience.map((exp, i) => (
            <motion.div 
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-cream border-4 border-accent shadow-sm" />
              <div className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase mb-1">{exp.period}</div>
              <h4 className="text-lg font-bold">{exp.role}</h4>
              <div className="text-sm text-ink/60 italic">{exp.institution}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AWARDS & RECOGNITIONS */}
      <section className="mb-32 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-ink/40 mb-8">Awards & Recognitions</h3>
          <div className="grid gap-4">
            {aboutData.awards.map((award, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 text-sm font-medium border-b border-ink/5 pb-4"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-ink/80">{award}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-ink/40 mb-8">Memberships</h3>
          <div className="flex flex-col gap-3">
            {aboutData.memberships.map((member, i) => (
              <motion.span 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.05 }}
                className="text-[10px] font-bold uppercase tracking-widest text-ink/60 bg-ink/5 px-3 py-1.5 rounded-full w-fit"
              >
                {member}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
