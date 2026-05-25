"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers";
import { educations } from "@/lib/resume-data";
import { SectionTitle } from "@/components/ui/section-title";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  const { language, t } = useLanguage();

  return (
    <section id="education" className="py-16 md:py-24 scroll-mt-16">
      <SectionTitle>{t("Education")}</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educations.map((edu, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            {/* Background Icon */}
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
              <GraduationCap className="w-48 h-48" />
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1 z-10">
                <h4 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {edu.duration[language]}
                </h4>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 leading-tight">
                  {edu.degree[language]}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  {edu.institution[language]}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
