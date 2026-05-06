import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Clock } from 'lucide-react';
import { getBlogPost } from '../lib/blog';
import { format } from 'date-fns';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      getBlogPost(slug).then(res => {
        setPost(res);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) return (
    <div className="max-w-3xl mx-auto px-6 py-24 flex justify-center">
      <div className="animate-pulse text-accent font-serif text-2xl italic tracking-widest">Loading...</div>
    </div>
  );

  if (!post) return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl font-bold mb-4">Post not found</h1>
      <Link to="/blog" className="text-accent underline font-bold uppercase tracking-widest text-xs">Back to blog</Link>
    </div>
  );

  const readingTime = Math.ceil(post.content.split(/\s+/).length / 200);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto px-6 py-12"
    >
      <Link 
        to="/blog" 
        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-ink/40 hover:text-accent transition-colors mb-12 group"
      >
        <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Back to blog
      </Link>

      <article>
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-widest text-ink/40 mb-6">
            <span className="flex items-center gap-1"><Calendar size={12} /> {format(new Date(post.date), 'MMMM d, yyyy')}</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {readingTime} min read</span>
            <div className="flex gap-2">
              {post.tags.map((tag: string) => (
                <span key={tag} className="text-accent"># {tag}</span>
              ))}
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            {post.title}
          </h1>
          <div className="h-1 w-24 bg-accent/20 rounded-full" />
        </header>

        <div className="markdown-body dark:prose-invert max-w-none text-lg">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <footer className="mt-32 pt-12 border-t border-ink/10">
           <div className="bg-[#F5F4E5] dark:bg-zinc-900 rounded-sm p-10 flex flex-col md:flex-row items-center gap-10">
             <div className="w-20 h-20 rounded-sm overflow-hidden bg-accent/5 shadow-[10px_10px_0px_0px_rgba(128,0,32,0.1)]">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" 
                  alt="Poojan Patel" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div>
               <h4 className="text-xl font-bold mb-2">Poojan Patel</h4>
               <p className="text-zinc-500 leading-relaxed italic">
                 Assistant Professor of Finance at Bryant University. Researching the intersections of Large Language Models and financial markets.
               </p>
             </div>
           </div>
        </footer>
      </article>
    </motion.div>
  );
}
