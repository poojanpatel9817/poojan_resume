import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Linkedin, 
  Github, 
  Mail, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  FileText, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

// Data imports
import { aboutData } from './data/about';
import { teachingData } from './data/teaching';
import { researchData } from './data/research';

// Page components (to be created)
import AboutPage from './pages/About';
import TeachingPage from './pages/Teaching';
import ResearchPage from './pages/Research';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Teaching', path: '/teaching' },
    { name: 'Research', path: '/research' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cream py-3 shadow-sm border-b border-ink/10' : 'bg-cream py-6 border-b border-ink/10'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl font-bold tracking-tight text-ink hover:text-accent transition-colors">
          {aboutData.name}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-ink/70">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={aboutData.cvPath} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors flex items-center gap-1"
          >
            CV <FileText size={12} />
          </a>
          <div className="flex items-center gap-4 text-ink border-l pl-8 border-ink/10">
            <a href={aboutData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Linkedin size={16} />
            </a>
            <a href={aboutData.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Github size={16} />
            </a>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-1 rounded-full hover:bg-accent/5 transition-colors"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-accent/10 transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map(link => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <a href={aboutData.cvPath} className="text-lg font-medium flex items-center gap-2">
                CV <FileText size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#F5F4E5] dark:bg-zinc-900 border-t border-ink/5 py-12 mt-24">
      <div className="max-w-6xl mx-auto px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50 flex flex-wrap justify-center gap-6">
          <span>{aboutData.email}</span>
          <span>{aboutData.phone}</span>
          <span>© {new Date().getFullYear()} {aboutData.name}</span>
        </div>
        <div className="flex gap-4">
          {aboutData.memberships.slice(0, 2).map((member, i) => (
            <span key={i} className="px-3 py-1 bg-ink/5 text-[9px] font-black uppercase tracking-widest text-ink/40 rounded-full whitespace-nowrap">
              {member}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/teaching" element={<TeachingPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
