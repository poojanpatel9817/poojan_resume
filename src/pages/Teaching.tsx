import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import { teachingContent } from '../data';
import { BookOpen, MapPin, FileDown } from 'lucide-react';

export default function Teaching() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <PageHeader 
        title="Teaching" 
        subtitle={teachingContent.intro}
      />

      <div className="space-y-24 mt-8">
        {teachingContent.institutions.map((inst, instIdx) => (
          <div key={instIdx}>
            <Section className="relative">
              <div className="flex flex-col mb-16">
                <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-3">{String(instIdx + 1).padStart(2, '0')}. Institution</div>
                <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight italic border-b border-academy-border pb-6">{inst.name}</h2>
              </div>

            <div className="space-y-20">
              {inst.roles.map((role, roleIdx) => (
                <div key={roleIdx}>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-academy-muted mb-10 border-l-2 border-accent/20 pl-4">{role.title}</h3>
                  <div className="space-y-6">
                    {role.courses.map((course, cIdx) => (
                      <div key={cIdx} className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-academy-border last:border-0 hover:border-accent transition-colors">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-3">
                            <span className="font-mono text-[10px] text-accent font-bold tracking-widest">{course.code}</span>
                            <span className="w-1 h-1 bg-academy-border rounded-full" />
                            <h4 className="text-xl font-serif font-medium group-hover:text-accent transition-colors">
                              {course.name}
                            </h4>
                          </div>
                        </div>
                        <div className="mt-2 md:mt-0 flex flex-wrap gap-2">
                          {course.semesters.split(',').map((sem, sIdx) => (
                            <span key={sIdx} className="text-[9px] uppercase font-bold text-academy-muted bg-slate-50 dark:bg-white/5 border border-academy-border px-3 py-1 rounded-sm">
                              {sem.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
        ))}
      </div>

      {/* SYLLABI SECTION */}
      <Section className="border-t border-academy-border mt-20 pt-20">
        <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-12">03. Course Resources</h3>
        {teachingContent.syllabi.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {teachingContent.syllabi.map((syl, idx) => (
              <a 
                key={idx}
                href={syl.link}
                className="flex items-center space-x-4 p-6 border border-academy-border rounded-sm hover:border-accent hover:bg-slate-50 dark:hover:bg-white/5 transition-all group"
              >
                <div className="p-3 bg-accent/5 text-accent rounded-sm group-hover:bg-accent group-hover:text-white transition-all">
                  <FileDown size={24} />
                </div>
                <span className="font-serif italic text-lg">{syl.name}</span>
              </a>
            ))}
          </div>
        ) : (
          <div className="p-16 border border-academy-border rounded-sm text-center bg-white shadow-sm ring-1 ring-academy-border/50">
            <p className="text-sm text-academy-muted italic font-medium tracking-wide">
              Syllabi and course materials are currently being updated for the upcoming semester.
            </p>
          </div>
        )}
      </Section>
    </div>
  );
}
