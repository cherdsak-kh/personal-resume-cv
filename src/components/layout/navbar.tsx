"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/components/providers";
import { Moon, Sun, Languages, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "th" : "en");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { href: "#projects", label: t("Projects") },
    { href: "#education", label: t("Education") },
    { href: "#skills", label: t("Skills") },
    { href: "#experience", label: t("Experience") },
  ];

  // Prevent hydration mismatch
  if (!mounted) return <header className="h-16 w-full fixed top-0 z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800" />;

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          CK.
        </div>
        
        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-2 md:space-x-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Language"
          >
            <Languages className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300 uppercase hidden sm:inline-block">
              {language}
            </span>
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
