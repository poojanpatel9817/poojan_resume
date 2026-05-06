import { NavLink, useLocation } from 'react-router-dom';
import { Linkedin, Github, Mail, FileText, Menu, X } from 'lucide-react';
import { personalInfo } from '../data';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', path: '/' },
    { name: 'Teaching', path: '/teaching' },
    { name: 'Research', path: '/research' },
    { name: 'Blog', path: '/blog' },
  ];

  const socialLinks = [
    { icon: <FileText size={18} />, href: personalInfo.cvUrl, label: 'CV' },
    { icon: <Linkedin size={18} />, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: <Github size={18} />, href: personalInfo.github, label: 'GitHub' },
    { icon: <Mail size={18} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <nav className={`sticky top-0 z-50 bg-academy-bg transition-all duration-300 border-b ${scrolled ? 'py-4 border-academy-border' : 'py-8 border-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="font-serif font-bold tracking-tight hover:text-accent transition-all duration-300 text-2xl">
            {personalInfo.name}
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex items-center space-x-10 text-[10px] uppercase tracking-[0.25em] font-bold text-academy-muted">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors hover:text-accent relative ${
                      isActive ? 'text-academy-text after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-accent' : ''
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academy-muted hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
              <div className="pl-4 border-l border-academy-border">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-academy-text/70 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-academy-bg border-b border-black/5 dark:border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg font-medium ${
                      isActive ? 'text-brand' : 'text-academy-text/70'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-black/5 flex space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-academy-text/60"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
