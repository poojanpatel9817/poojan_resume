import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { getBlogPosts } from '../lib/blog';
import { format } from 'date-fns';

export default function BlogIndex() {
  const [posts, setPosts] = useState<any[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPosts().then(res => {
      setPosts(res);
      setLoading(false);
    });
  }, []);

  const allTags = Array.from(new Set(posts.flatMap(p => p.tags)));
  const filteredPosts = selectedTag ? posts.filter(p => p.tags.includes(selectedTag)) : posts;

  if (loading) return (
    <div className="max-w-6xl mx-auto px-12 py-24 flex justify-center">
      <div className="animate-pulse text-accent font-serif text-2xl italic tracking-widest">Loading notes...</div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-12 py-12">
      <header className="mb-24 border-b border-ink/10 pb-16">
        <h1 className="text-6xl font-bold mb-8">Blog</h1>
        <p className="text-2xl font-serif italic border-l-4 border-accent pl-6 py-2 text-ink/80 dark:text-ink/60 leading-relaxed max-w-3xl">
          Notes on research, teaching, and ideas at the intersection of AI and finance.
        </p>
      </header>

      {/* Tag Filters */}
      <div className="mb-16 flex flex-wrap gap-3">
        <button 
          onClick={() => setSelectedTag(null)}
          className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
            !selectedTag ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-ink/5 text-ink/40 border border-transparent'
          }`}
        >
          All Posts
        </button>
        {allTags.map(tag => (
          <button 
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
              selectedTag === tag ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-ink/5 text-ink/40 border border-transparent'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-16">
        {filteredPosts.map((post, i) => (
          <motion.article 
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group grid md:grid-cols-4 gap-8"
          >
            <div className="md:col-span-1">
              <div className="text-[10px] font-black uppercase tracking-widest text-ink/40 mb-1">
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </div>
              <div className="flex flex-wrap gap-1">
                {post.tags.map((t: string) => (
                  <span key={t} className="text-[9px] font-bold text-accent uppercase tracking-widest">{t}</span>
                ))}
              </div>
            </div>
            <div className="md:col-span-3 space-y-4">
              <h2 className="text-3xl font-bold leading-tight group-hover:text-accent transition-colors">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-lg text-ink/70 dark:text-ink/50 leading-relaxed max-w-2xl italic">
                {post.summary}
              </p>
              <Link 
                to={`/blog/${post.slug}`} 
                className="inline-flex items-center gap-2 text-accent text-xs font-black uppercase tracking-widest pt-2 border-b-2 border-transparent hover:border-accent pb-1 transition-all"
              >
                Read article <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.article>
        ))}
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-24 text-ink/30 italic">
            No posts found for this tag.
          </div>
        )}
      </div>
    </div>
  );
}
