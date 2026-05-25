"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Language = "en" | "th";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function Providers({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  const [language, setLanguage] = React.useState<Language>("en");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("resume-lang") as Language;
    if (savedLang === "en" || savedLang === "th") {
      setLanguage(savedLang);
    }
  }, []);

  // Update font family dynamically
  React.useEffect(() => {
    if (mounted) {
      if (language === "th") {
        document.body.style.fontFamily = "var(--font-sarabun), sans-serif";
      } else {
        document.body.style.fontFamily = "var(--font-inter), sans-serif";
      }
    }
  }, [language, mounted]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("resume-lang", lang);
  };

  const translations: Record<string, Record<Language, string>> = {
    "About": { en: "About", th: "เกี่ยวกับ" },
    "Experience": { en: "Experience", th: "ประสบการณ์" },
    "Skills": { en: "Skills", th: "ทักษะ" },
    "Contact": { en: "Contact", th: "ติดต่อ" },
    "Download CV": { en: "Download CV", th: "ดาวน์โหลดประวัติ" },
    "Theme": { en: "Theme", th: "ธีม" },
    "Language": { en: "Language", th: "ภาษา" },
    "Education": { en: "Education", th: "การศึกษา" },
    "Projects": { en: "Projects & Open Source", th: "ผลงานและโปรเจกต์" },
    "Frontend": { en: "Frontend", th: "ระบบหน้าบ้าน (Frontend)" },
    "Backend & APIs": { en: "Backend & APIs", th: "ระบบหลังบ้านและ API" },
    "Databases": { en: "Databases", th: "ระบบฐานข้อมูล" },
    "DevOps, Tools & Concepts": { en: "DevOps, Tools & Concepts", th: "ระบบปฏิบัติการและเครื่องมือ" },
  };

  const t = (key: string) => {
    if (!mounted) return key; // Prevent hydration mismatch by returning key or default initially
    return translations[key]?.[language] || key;
  };

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
        {children}
      </LanguageContext.Provider>
    </NextThemesProvider>
  );
}
