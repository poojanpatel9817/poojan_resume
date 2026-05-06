import { motion } from 'framer-motion';
import { FileText, Book, Quote, ExternalLink, Bookmark } from 'lucide-react';
import { researchData } from '../data/research';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Research() {
  return (
    <div className="max-w-6xl mx-auto px-12 py-12">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24 border-b border-ink/10 pb-16"
      >
        <h1 className="text-6xl font-bold mb-8">Research</h1>
        <p className="text-2xl font-serif italic border-l-4 border-accent pl-6 py-2 text-ink/80 dark:text-ink/60 leading-relaxed max-w-3xl">
          {researchData.intro}
        </p>
        <div className="flex flex-wrap gap-2 mt-8">
          {researchData.interests.map(interest => (
            <span key={interest} className="px-3 py-1 rounded-full bg-ink/5 text-ink/60 text-[10px] font-black uppercase tracking-widest border border-transparent">
              {interest}
            </span>
          ))}
        </div>
      </motion.header>

      {/* PUBLICATIONS */}
      <section className="space-y-16 mb-32">
        <div className="flex items-center gap-6">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-ink/40 whitespace-nowrap">Publications</h2>
          <div className="h-[1px] flex-grow bg-ink/10" />
        </div>
        
        <div className="space-y-12">
          {researchData.publications.map((pub, i) => (
            <motion.div 
              key={i} 
              {...fadeIn} 
              className="group relative"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">{pub.year}</div>
                  <div className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">{pub.venue}</div>
                </div>
                <div className="md:w-3/4 space-y-4">
                  <h3 className="text-2xl font-bold leading-tight group-hover:text-accent transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-ink/70 dark:text-ink/50 leading-relaxed">
                    <span className="font-bold text-ink dark:text-cream italic">{pub.authors}</span>.
                  </p>
                  {pub.abstract && (
                    <p className="text-sm text-ink/60 leading-relaxed max-w-2xl bg-ink/5 p-4 rounded-sm italic">
                      {pub.abstract}
                    </p>
                  )}
                  {pub.link && (
                    <a 
                      href={pub.link} 
                      className="inline-flex items-center gap-2 text-accent text-xs font-black uppercase tracking-widest hover:underline pt-2 border-b-2 border-transparent hover:border-accent pb-1 transition-all"
                    >
                      View Publication <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOOKS */}
      <section className="space-y-16 mb-32 border-t border-ink/10 pt-16">
        <div className="flex items-center gap-6">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-ink/40 whitespace-nowrap">Books & Textbooks</h2>
          <div className="h-[1px] flex-grow bg-ink/10" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {researchData.books.map((book, i) => (
            <motion.div 
              key={i} 
              {...fadeIn} 
              className="group p-8 rounded-sm bg-[#F5F4E5]/30 border border-ink/5 hover:bg-white transition-all shadow-sm flex flex-col"
            >
              <div className="mb-6">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center mb-4">
                  <Book size={20} />
                </div>
                <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-accent transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm font-bold italic text-ink/70 mb-4">{book.authors}</p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-accent/60">
                   <span>{book.venue}</span>
                   <span>•</span>
                   <span>{book.year}</span>
                </div>
              </div>
              {book.abstract && (
                <p className="text-sm text-ink/60 leading-relaxed italic border-t border-ink/5 pt-6 mt-auto">
                  {book.abstract}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
