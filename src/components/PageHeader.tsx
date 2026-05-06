import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-24 pb-16 text-center"
    >
      <h1 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="max-w-3xl mx-auto text-[10px] uppercase tracking-[0.4em] font-bold text-accent">
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
