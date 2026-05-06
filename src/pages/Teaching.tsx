import { motion } from 'framer-motion';
import { BookOpen, FileText, ExternalLink, Calendar } from 'lucide-react';
import { teachingData } from '../data/teaching';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Teaching() {
  return (
    <div className="max-w-6xl mx-auto px-12 py-12">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24 border-b border-ink/10 pb-16"
      >
        <h1 className="text-6xl font-bold mb-8">Teaching</h1>
        <p className="text-2xl font-serif italic border-l-4 border-accent pl-6 py-2 text-ink/80 dark:text-ink/60 leading-relaxed max-w-3xl">
          {teachingData.intro}
        </p>
      </motion.header>

      {/* INSTITUTIONS */}
      <div className="space-y-32">
        {teachingData.institutions.map((inst, i) => (
          <motion.section 
            key={inst.name}
            {...fadeIn}
            className="space-y-16"
          >
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-ink/40 whitespace-nowrap">
                {inst.name}
              </h2>
              <div className="h-[1px] flex-grow bg-ink/10" />
            </div>

            <div className="space-y-20">
              {inst.roles.map((role, idx) => (
                <div key={idx} className="space-y-10">
                  <h3 className="text-2xl font-bold text-accent italic">{role.title}</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {role.courses.map((course, cIdx) => (
                      <div 
                        key={cIdx} 
                        className="group p-8 rounded-sm border border-ink/5 bg-[#F5F4E5]/30 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-[10px_10px_0px_0px_rgba(128,0,32,0.05)] transition-all"
                      >
                        <div className="flex flex-col justify-between h-full gap-6">
                          <div>
                            <div className="text-[10px] font-bold text-ink/30 tracking-widest uppercase mb-2">{course.code}</div>
                            <h4 className="text-xl font-bold group-hover:text-accent transition-colors leading-tight">
                              {course.name}
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {course.semesters.map(sem => (
                              <span 
                                key={sem}
                                className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.1em] bg-ink/5 text-ink/40"
                              >
                                {sem}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* SYLLABI GRID */}
      <section className="mt-48 pt-16 border-t border-ink/10">
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-ink/40 mb-12">Course Syllabi</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachingData.syllabi.map((syllabus, i) => (
            <div 
              key={i}
              className="flex items-center justify-between p-6 rounded-sm bg-ink/5 border border-transparent hover:border-accent/10 transition-all"
            >
              <div className="flex items-center gap-4">
                <FileText className="text-ink/20" size={20} />
                <span className="font-bold text-sm tracking-tight">{syllabus.name}</span>
              </div>
              {syllabus.path ? (
                <a 
                  href={syllabus.path} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1 text-[10px] font-black uppercase tracking-widest"
                >
                  PDF <ExternalLink size={12} />
                </a>
              ) : (
                <span className="text-[10px] font-black uppercase tracking-widest text-ink/30">Upcoming</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
