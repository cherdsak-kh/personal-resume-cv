"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers";
import { skills } from "@/lib/resume-data";
import { SectionTitle } from "@/components/ui/section-title";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const { t } = useLanguage();

  const categories = Array.from(new Set(skills.map(s => s.category)));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-16 md:py-24 scroll-mt-16">
      <SectionTitle>{t("Skills")}</SectionTitle>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {categories.map((category) => (
          <motion.div
            key={category}
            variants={item}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
              {t(category)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter(s => s.category === category)
                .map(skill => (
                  <Badge key={skill.name}>{skill.name}</Badge>
                ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
