"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers";
import { experiences } from "@/lib/resume-data";
import { SectionTitle } from "@/components/ui/section-title";

export function ExperienceSection() {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="py-16 md:py-24 scroll-mt-16">
      <SectionTitle>{t("Experience")}</SectionTitle>
      
      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row"
          >
            {/* Left Side: Date */}
            <div className="md:w-1/4 md:text-right shrink-0 md:pr-10 mb-2 md:mb-0">
              <h4 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mt-1">
                {exp.duration[language]}
              </h4>
            </div>

            {/* Right Side: Content with Dot & Line */}
            <div className="md:w-3/4 relative pl-8 pb-12 border-l-2 border-slate-200 dark:border-slate-800 ml-2 md:ml-0">
              {/* Dot centered on the border */}
              <div className="absolute left-[-9px] top-1 h-4 w-4 rounded-full bg-slate-50 dark:bg-slate-950 border-[3px] border-blue-600 dark:border-blue-400" />
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                {exp.role[language]}
              </h3>
              <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">
                {exp.company[language]}
              </h4>
              <ul className="list-disc space-y-2 pl-4 text-slate-600 dark:text-slate-400">
                {exp.achievements[language].map((achievement, i) => (
                  <li key={i} className="leading-relaxed marker:text-slate-400 dark:marker:text-slate-600">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
