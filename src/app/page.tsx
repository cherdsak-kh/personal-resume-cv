import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { EducationSection } from "@/components/sections/education";
import { ProjectsSection } from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full grow">
        <HeroSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
      </main>
      <footer className="w-full py-8 text-center text-slate-500 dark:text-slate-400 text-sm border-t border-slate-200 dark:border-slate-800 mt-16">
        <p>© {new Date().getFullYear()} Cherdsak Kh. All rights reserved.</p>
      </footer>
    </>
  );
}
