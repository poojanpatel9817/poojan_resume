import { personalInfo } from '../data';
import { Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-10 py-10 border-t border-academy-border flex flex-col md:flex-row justify-between items-center bg-white dark:bg-black/20 shrink-0 mt-20">
      <div className="text-[10px] text-academy-muted uppercase tracking-widest text-center md:text-left mb-6 md:mb-0">
        © {currentYear} {personalInfo.name} · Academic Portfolio
      </div>
      <div className="flex space-x-8 text-[10px] font-bold text-academy-text uppercase tracking-[0.2em]">
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">LinkedIn</a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">GitHub</a>
        <a href={`mailto:${personalInfo.email}`} className="hover:text-brand transition-colors">Email</a>
      </div>
    </footer>
  );
}
