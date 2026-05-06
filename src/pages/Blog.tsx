import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import matter from 'gray-matter';
import { motion } from 'motion/react';

// Use Vite's glob import to get all markdown files in the blog directory
const postFiles = import.meta.glob('/src/content/blog/*.md', { query: '?raw', eager: true });

interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

export default function Blog() {
  const posts: PostMetadata[] = Object.entries(postFiles).map(([path, content]) => {
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    const { data } = matter(content as string);
    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      summary: data.summary || '',
      tags: data.tags || [],
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <PageHeader 
        title="Blog" 
        subtitle="Notes on research, teaching, and ideas at the intersection of AI and finance."
      />

      <Section className="max-w-3xl mx-auto">
        <div className="space-y-20">
          {posts.map((post, idx) => (
            <motion.article 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4 text-[10px] uppercase tracking-[0.2em] font-bold text-academy-muted">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  <span className="w-1 h-px bg-academy-border" />
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-accent underline decoration-academy-border underline-offset-4">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <Link to={`/blog/${post.slug}`} className="block group">
                  <h2 className="text-3xl md:text-4xl font-serif italic leading-tight group-hover:text-accent transition-colors underline decoration-academy-border decoration-1 underline-offset-8">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-lg text-academy-text font-light leading-relaxed opacity-80 line-clamp-3">
                  {post.summary}
                </p>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] font-bold text-academy-text hover:text-accent transition-colors pt-2"
                >
                  Read Full Post →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </div>
  );
}
