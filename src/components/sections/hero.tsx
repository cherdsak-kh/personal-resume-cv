"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/providers";
import { personalInfo } from "@/lib/resume-data";
import { Download, Mail, MapPin, Phone, X } from "lucide-react";
import Image from "next/image";

// Inline SVG for GitHub
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Inline SVG for LinkedIn
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function HeroSection() {
  const { language, t } = useLanguage();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 max-w-3xl flex flex-col items-center"
        >
          {/* Profile Image */}
          <div 
            onClick={() => setIsImageModalOpen(true)}
            className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-white dark:border-slate-900 shadow-xl overflow-hidden bg-slate-200 dark:bg-slate-800 flex items-center justify-center mb-8 md:mb-10 cursor-pointer hover:scale-105 transition-transform"
          >
            <Image 
              src={personalInfo.profileImage}
              alt={personalInfo.name[language]}
              fill
              sizes="(max-width: 768px) 160px, 208px"
              className="object-cover"
              priority
            />
          </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          {personalInfo.name[language]}
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400">
          {personalInfo.title[language]}
        </h2>
        
        <div className="flex items-center justify-center text-slate-500 dark:text-slate-400 space-x-1">
          <MapPin className="w-4 h-4" />
          <span>{personalInfo.location[language]}</span>
        </div>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto pt-2">
          {personalInfo.summary[language]}
        </p>

        <div className="pt-8 flex flex-wrap justify-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email
            </a>
            
            {personalInfo.phone && (
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <Phone className="w-5 h-5 mr-2" />
                {personalInfo.phone}
              </a>
            )}

            <a
              href="/cherdsak-resume.pdf"
              download="Cherdsak_Khamlai_Resume.pdf"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-800 dark:bg-slate-700 text-white font-medium hover:bg-slate-900 dark:hover:bg-slate-600 transition-colors shadow-sm"
            >
              <Download className="w-5 h-5 mr-2" />
              {t("Download CV")}
            </a>
          </div>
          
          <div className="flex gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageModalOpen(false)}
            className="fixed inset-0 z-100 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={personalInfo.profileImage}
                alt={personalInfo.name[language]}
                fill
                sizes="(max-width: 768px) 100vw, 512px"
                className="object-cover"
                priority
              />
              <button 
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-slate-900/50 hover:bg-slate-900/80 text-white rounded-full transition-colors backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
