"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/components/providers";
import { Moon, Sun, Languages } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "th" : "en");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
        
        {/* Navigation Links (Hidden on small mobile) */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("Projects")}</a>
          <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("Education")}</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("Skills")}</a>
          <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t("Experience")}</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Language"
          >
            <Languages className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300 uppercase">
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
        </div>
      </div>
    </header>
  );
}
