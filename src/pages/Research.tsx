import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import { researchContent } from '../data';
import { Book, FileText, Search, Star, ExternalLink, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Research() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <PageHeader 
        title="Research" 
        subtitle={researchContent.intro}
      />

      {/* RESEARCH INTERESTS */}
      <div className="flex flex-wrap justify-center gap-3 mb-20">
        {researchContent.interests.map((interest, idx) => (
          <span 
            key={idx}
            className="px-5 py-2.5 bg-white border border-academy-border text-academy-text rounded-full text-[10px] font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-all cursor-default shadow-sm"
          >
            {interest}
          </span>
        ))}
      </div>

      <div className="space-y-24">
        {/* PUBLICATIONS */}
        <Section>
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-12">01. Peer-Reviewed Publications</h3>
          <div className="space-y-16">
            {researchContent.publications.map((pub, idx) => (
              <div key={idx} className="group relative">
                <div className="space-y-5">
                  <h3 className="text-3xl font-serif font-medium leading-snug group-hover:text-accent transition-colors underline decoration-academy-border decoration-1 underline-offset-8">
                    {pub.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-academy-muted">
                    <span>{pub.authors}</span>
                    <span className="w-1 h-1 bg-academy-muted rounded-full" />
                    <span>{pub.year}</span>
                  </div>
                  <p className="text-sm font-semibold tracking-wide uppercase text-accent/80">{pub.venue}</p>
                  {pub.link && pub.link !== "#" && (
                    <a href={pub.link} className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-academy-text/50 hover:text-brand hover:translate-x-1 transition-all">
                      <span>Full Paper</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* BOOKS */}
        <Section className="border-t border-academy-border pt-20">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-12">02. Books</h3>
          <div className="space-y-10">
            {researchContent.books.map((book, idx) => (
              <div key={idx} className="bg-white border border-academy-border p-10 rounded-sm flex flex-col md:flex-row gap-8 items-start hover:border-accent transition-colors">
                <div className="p-4 bg-slate-50 text-accent rounded-sm border border-academy-border">
                  <Book size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-medium mb-2">{book.title}</h3>
                  <p className="text-academy-text/70">{book.authors}</p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">{book.publisher}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* WORKING PAPERS */}
        <Section className="border-t border-academy-border pt-20">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-12">03. Working Papers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {researchContent.workingPapers.map((paper, idx) => (
              <div key={idx} className="p-10 bg-white border border-academy-border rounded-sm hover:border-accent transition-all group">
                <h3 className="text-2xl font-serif font-medium mb-4 group-hover:text-accent transition-colors leading-tight">
                  {paper.title}
                </h3>
                <p className="text-sm text-academy-muted mb-6 italic leading-relaxed">{paper.authors}</p>
                {paper.notes && (
                   <p className="text-[11px] text-academy-muted font-medium bg-slate-50 p-5 rounded-sm border border-academy-border italic leading-relaxed">
                    {paper.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* SERVICE */}
        <Section className="border-t border-academy-border pt-20">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-12">04. Professional Service</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {researchContent.service.map((group, idx) => (
              <div key={idx} className="group">
                <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-academy-text mb-8 flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span>{group.category}</span>
                </h3>
                <ul className="space-y-6">
                  {group.entries.map((entry, eIdx) => (
                    <li key={eIdx} className="text-sm text-academy-text font-light leading-relaxed border-l border-academy-border pl-6 hover:border-accent transition-colors">
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
