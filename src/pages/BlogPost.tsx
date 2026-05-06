import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import matter from 'gray-matter';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

const postFiles = import.meta.glob('/src/content/blog/*.md', { query: '?raw', eager: true });

export default function BlogPost() {
  const { slug } = useParams();
  const filePath = `/src/content/blog/${slug}.md`;
  const rawContent = postFiles[filePath];

  if (!rawContent) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl font-serif mb-8">Post Not Found</h1>
        <Link to="/blog" className="text-accent underline">Back to Blog</Link>
      </div>
    );
  }

  const { data, content } = matter(rawContent as string);

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link 
          to="/blog" 
          className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[.2em] font-bold text-academy-muted hover:text-accent mb-12 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Blog</span>
        </Link>

        <header className="mb-16 space-y-6">
          <div className="flex items-center space-x-4 text-[10px] uppercase tracking-[0.2em] font-bold text-academy-muted">
            <time>{new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span className="w-1 h-px bg-academy-border" />
            <div className="flex gap-2">
              {data.tags?.map((tag: string) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif italic leading-tight text-academy-text">
            {data.title}
          </h1>
        </header>

        <div className="markdown-content prose prose-slate dark:prose-invert max-w-none prose-headings:font-serif prose-headings:italic prose-a:text-accent prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:py-1 prose-blockquote:rounded-r-lg">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>

        <div className="mt-20 pt-12 border-t border-academy-border flex justify-between items-center">
          <Link 
            to="/blog" 
            className="text-xs uppercase tracking-[.2em] font-bold text-academy-text hover:text-accent transition-colors"
          >
            ← Back to All Posts
          </Link>
          <div className="text-[10px] uppercase tracking-[.2em] font-bold text-academy-muted underline underline-offset-4 pointer-events-none">
            {data.tags?.[0]} Section
          </div>
        </div>
      </motion.div>
    </div>
  );
}
