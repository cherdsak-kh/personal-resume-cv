"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers";
import { projects } from "@/lib/resume-data";
import { SectionTitle } from "@/components/ui/section-title";
import { Badge } from "@/components/ui/badge";
import { FolderGit2, ExternalLink } from "lucide-react";
import Link from "next/link";

// Inline SVG for GitHub
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function ProjectsSection() {
  const { language, t } = useLanguage();

  return (
    <section id="projects" className="py-16 md:py-24 scroll-mt-16">
      <SectionTitle>{t("Projects")}</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl group-hover:scale-110 transition-transform">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <div className="flex space-x-3 text-slate-400 dark:text-slate-500">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Source Code" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                )}
                {project.link && (
                  project.link.startsWith("/") ? (
                    <Link href={project.link} title="View Documentation" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  ) : (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" title="View Documentation" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
              {project.title}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 grow">
              {project.description[language]}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
              {project.techStack.map((tech) => (
                <Badge key={tech} className="text-xs py-0.5 px-2 font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
