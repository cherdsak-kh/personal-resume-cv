export type LocalizedString = { en: string; th: string };

export interface Skill {
  name: string;
  category: 'Backend & APIs' | 'Frontend' | 'Databases' | 'DevOps, Tools & Concepts';
}

export interface Experience {
  company: LocalizedString;
  role: LocalizedString;
  duration: LocalizedString;
  achievements: { en: string[]; th: string[] };
}

export interface Education {
  institution: LocalizedString;
  degree: LocalizedString;
  duration: LocalizedString;
}

export interface Project {
  title: string;
  description: LocalizedString;
  techStack: string[];
  link?: string;
  github?: string;
}

export const personalInfo = {
  name: { en: "Cherdsak Khamlai", th: "เชิดศักดิ์ คำไล้" },
  title: { en: "Software Developer", th: "Software Developer" },
  location: { en: "Ramkhamhaeng 24, Bang Kapi, Bangkok, TH", th: "รามคำแหง 24, บางกะปิ, กรุงเทพมหานคร ประเทศไทย" },
  profileImage: "/profile.jpg",
  summary: {
    en: "Software Developer experienced in both Backend (Node.js, TypeScript) and Frontend (React.js, HTML/CSS) development, along with DevOps tools. Passionate about building robust and practical web applications. Committed to continuous learning, effective teamwork, and leveraging AI integrations to optimize workflows.",
    th: "นักพัฒนาซอฟต์แวร์ที่มีประสบการณ์ทำงานทั้งฝั่ง Backend (Node.js, TypeScript) และ Frontend (React.js, HTML/CSS) รวมถึงการใช้เครื่องมือด้าน DevOps สนใจในการพัฒนาเว็บแอปพลิเคชันที่สามารถตอบสนองการใช้งานจริงได้อย่างมีประสิทธิภาพ ให้ความสำคัญกับการเรียนรู้สิ่งใหม่ การทำงานร่วมกับทีม และการประยุกต์ใช้ AI เพื่อช่วยในการทำงาน"
  },
  email: "cherd8524@gmail.com",
  phone: "081-116-8524",
  github: "https://github.com/cherdsak-kh",
  linkedin: "https://www.linkedin.com/in/cherdsak-khamlai",
  resumeFile: "https://drive.google.com/file/d/1bSVB8eHaSLKZ3hx7aPTMvUE_1RdQxiVy/view?usp=sharing",
  resumeFileName: "Resume (TH-EN) - Cherdsak Kh.pdf"
};

export const skills: Skill[] = [
  // Backend & APIs
  { name: "TypeScript", category: "Backend & APIs" },
  { name: "JavaScript", category: "Backend & APIs" },
  { name: "Python", category: "Backend & APIs" },
  { name: "PHP", category: "Backend & APIs" },
  { name: "Node.js (Express, NestJS)", category: "Backend & APIs" },
  { name: "Python (FastAPI, Django)", category: "Backend & APIs" },
  { name: "PHP (Laravel)", category: "Backend & APIs" },

  // Frontend
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "HTML/CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },

  // Databases
  { name: "PostgreSQL", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "Supabase", category: "Databases" },
  { name: "Cloudflare R2", category: "Databases" },
  { name: "Azure Blob Storage", category: "Databases" },

  // DevOps, Tools & Concepts
  { name: "Docker (Dockerfile, Container Management)", category: "DevOps, Tools & Concepts" },
  { name: "CI/CD Pipelines", category: "DevOps, Tools & Concepts" },
  { name: "Linux/Windows Server (SSH)", category: "DevOps, Tools & Concepts" },
  { name: "PM2", category: "DevOps, Tools & Concepts" },
  { name: "Nginx Proxy Manager", category: "DevOps, Tools & Concepts" },
  { name: "Cloudflare", category: "DevOps, Tools & Concepts" },
  { name: "Portainer", category: "DevOps, Tools & Concepts" },
  { name: "Apache", category: "DevOps, Tools & Concepts" },
  { name: "Infisical", category: "DevOps, Tools & Concepts" },
  { name: "HashiCorp Vault", category: "DevOps, Tools & Concepts" },
  { name: "Git, GitHub, GitLab", category: "DevOps, Tools & Concepts" },
  { name: "Agentic AI IDEs (Cursor, Kiro)", category: "DevOps, Tools & Concepts" }
];

export const experiences: Experience[] = [
  {
    company: { en: "Vekin (Thailand) Co.,Ltd.", th: "บริษัท เวคิน (ประเทศไทย) จำกัด" },
    role: { en: "Backend Developer", th: "Backend Developer" },
    duration: { en: "SEP 2025 - MAR 2026", th: "ก.ย. 2568 - มี.ค. 2569" },
    achievements: {
      en: [
        "Developed features and RESTful APIs primarily using Nest.js and Node.js to meet business requirements.",
        "Accelerated Agile development cycles by 30% utilizing Agentic AI IDEs (Cursor, Kiro, Antigravity IDE) for rapid prototyping and implementation.",
        "Engineered data automation workflows by integrating Gemini API for dynamic data generation and implementing OCR technology to extract and store data into the database.",
        "Collaborated within Agile/Scrum teams (PO, DevOps, Frontend, QA) to drive on-time production deployments.",
        "Authored Swagger documentation and conducted testing via Postman/Bruno, reducing integration conflicts by 25%.",
        "Integrated backend systems with enterprise infrastructure, including HashiCorp Vault for secrets, Azure Blob Storage, PostgreSQL, and Redis."
      ],
      th: [
        "พัฒนาฟีเจอร์และ RESTful API ตาม Requirement โดยใช้โครงสร้างของ Nest.js และ Node.js เป็นหลัก",
        "ประยุกต์ใช้ AI IDEs (Cursor, Kiro, Antigravity IDE) เพื่อเร่งความเร็วในการพัฒนาและ Implement ระบบตามแนวทาง Agile ทำให้วงจรการทำโปรโตไทป์เร็วขึ้น 30%",
        "พัฒนาระบบจัดการข้อมูลอัตโนมัติ โดยเชื่อมต่อ Gemini API เพื่อสร้างข้อมูลตั้งต้น (Data Generation) และผสานระบบ OCR เพื่อสกัดข้อความและจัดเก็บลงฐานข้อมูล",
        "ร่วมทีมแบบ Agile/Scrum (PO, DevOps, Frontend, QA) ผลักดันการส่งมอบฟีเจอร์ขึ้นระบบจริง (Production) ได้ตรงตามกำหนด",
        "ทำเอกสาร API ด้วย Swagger และทดสอบผ่าน Postman/Bruno ลดข้อผิดพลาดในการเชื่อมต่อระบบลง 25%",
        "นำเทคโนโลยีโครงสร้างพื้นฐานมาประยุกต์ใช้ร่วมกับระบบ Backend เช่น HashiCorp Vault (จัดการความปลอดภัย), Azure Blob Storage, PostgreSQL และ Redis"
      ]
    }
  },
  {
    company: { en: "ABSOLUTE WELLNESS COMPANY LIMITED", th: "บริษัท แอ็บโซลูท เวลเนส จำกัด" },
    role: { en: "Backend Developer", th: "Backend Developer" },
    duration: { en: "OCT 2023 - JUL 2025", th: "ต.ค. 2566 - ก.ค. 2568" },
    achievements: {
      en: [
        "Designed and developed secure RESTful APIs with Node.js and Express.js, minimizing data latency between frontend and backend systems.",
        "Assisted in setting up and managing infrastructure including MySQL, MongoDB, and Cloudflare R2, optimizing database queries to cut data retrieval times by 20%.",
        "Configured secure reverse proxies using Nginx Proxy Manager and managed environment variables securely via Infisical.",
        "Partnered with Frontend and UX/UI teams to resolve cross-origin data communication barriers and enhance platform stability."
      ],
      th: [
        "ออกแบบและพัฒนา RESTful API ด้วย Node.js และ Express.js ลดความหน่วงในการรับส่งข้อมูลระหว่างหน้าบ้านและหลังบ้าน",
        "มีส่วนร่วมในการติดตั้งและจัดการโครงสร้างพื้นฐาน (MySQL, MongoDB, Cloudflare R2) รวมถึงทำ Query Optimization เพื่อลดเวลาดึงข้อมูลลง 20%",
        "ติดตั้งและจัดการ Nginx Proxy Manager เพื่อควบคุมการเข้าถึงระบบ และใช้งาน Infisical ในการจัดการความปลอดภัยของข้อมูล (Secrets Management)",
        "ประสานงานทีม Frontend และ UX/UI แก้ไขปัญหาข้อจำกัดการสื่อสารข้อมูล ช่วยเพิ่มความเสถียรให้แพลตฟอร์ม"
      ]
    }
  },
  {
    company: { en: "Dungbhumi Corporation Co.,Ltd.", th: "บริษัท ดังภูมิ จำกัด" },
    role: { en: "Junior Frontend Developer (Outsource)", th: "Junior Frontend Developer (Outsource)" },
    duration: { en: "MAY 2023 - AUG 2023", th: "พ.ค. 2566 - ส.ค. 2566" },
    achievements: {
      en: [
        "Developed responsive web interfaces for Local Government Organization portals using HTML, CSS, and Bootstrap, while occasionally assisting with PHP backend tasks.",
        "Built an internal CRM back-office web portal to streamline customer configurations and system settings.",
        "Executed comprehensive front-end QA testing to identify and eliminate UI/UX bugs prior to production deployment."
      ],
      th: [
        "พัฒนา Web Interface สำหรับระบบขององค์การปกครองส่วนท้องถิ่นด้วย HTML, CSS และ Bootstrap โดยรับผิดชอบส่วนหน้าบ้านเป็นหลัก และช่วยพัฒนาระบบหลังบ้าน (PHP) ในบางโอกาส",
        "สร้างระบบหลังบ้าน (Back-office web portal) สำหรับ CRM เพื่อให้ทีมงานสามารถตั้งค่าและจัดการข้อมูลลูกค้าได้สะดวกยิ่งขึ้น",
        "ทดสอบระบบส่วนหน้า (QA Testing) ตรวจจับและแก้ไขบั๊ก UI/UX ทั้งหมดก่อนนำระบบขึ้นใช้งานจริง (Deploy)"
      ]
    }
  },
  {
    company: { en: "The Stock Exchange of Thailand", th: "ตลาดหลักทรัพย์แห่งประเทศไทย" },
    role: { en: "Junior Software Tester & DAP Operator (Outsource)", th: "Junior Software Tester & DAP Operator (Outsource)" },
    duration: { en: "MAR 2022 - APR 2023", th: "มี.ค. 2565 - เม.ย. 2566" },
    achievements: {
      en: [
        "Analyzed business requirements and designed comprehensive test plans for core enterprise shareholder meeting system application.",
        "Conducted end-to-end web performance testing, collaborating with developers to isolate and resolve critical runtime bugs.",
        "Configured client data systems and provided on-site technical support, ensuring high platform reliability and customer satisfaction."
      ],
      th: [
        "วิเคราะห์ Requirement และออกแบบ Test Plans ครอบคลุมการทดสอบแอปพลิเคชันระบบประชุมผู้ถือหุ้นขององค์กร",
        "ทดสอบประสิทธิภาพระบบแบบ End-to-End ร่วมมือกับทีม Developer เพื่อแก้ไข Runtime Bugs ระดับวิกฤต",
        "จัดการโครงสร้างข้อมูลลูกค้าและให้ On-site Support เพื่อรักษาความน่าเชื่อถือและความเสถียรสูงสุดของระบบ"
      ]
    }
  }
];

export const educations: Education[] = [
  {
    institution: { en: "Valaya Alongkorn Rajabhat University under the Royal Patronage", th: "มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ ในพระบรมราชูปถัมภ์" },
    degree: { en: "Bachelor of Science in Computer Science (Special Program)", th: "วิทยาการคอมพิวเตอร์ (ภาคพิเศษ)" },
    duration: { en: "Expected Graduation: 2027 | Weekend Program (Available for Full-Time Work)", th: "คาดว่าจะสำเร็จการศึกษา: 2570 | เรียนเสาร์-อาทิตย์ สามารถทำงานเต็มเวลาได้" }
  },
  {
    institution: { en: "Non-Commissioned Officer School, Royal Thai Army", th: "โรงเรียนนายสิบทหารบก" },
    degree: { en: "Army Non-Commissioned Officer Student", th: "นักเรียนนายสิบทหารบก (เหล่าทหารม้า)" },
    duration: { en: "2017 - 2018", th: "2560 - 2561" }
  }
];

export const projects: Project[] = [
  {
    title: "PinnitApp",
    description: {
      en: "A cross-platform mobile application for pinning favorite locations on a map, featuring offline support with local storage and cloud synchronization via Supabase.",
      th: "แอปพลิเคชันปักหมุดตำแหน่งบนแผนที่ (Mobile App) รองรับการใช้งานทั้งแบบออฟไลน์ (Local Storage) และการซิงค์ข้อมูลผ่านระบบคลาวด์ด้วยบัญชีผู้ใช้ (Supabase)"
    },
    techStack: ["React Native", "Expo", "TypeScript", "Supabase", "Maps API"],
    link: "/projects/pinnitapp",
    github: "https://github.com/cherdsak-kh/PinnitApp"
  },
  {
    title: "LINE Bot (Express.js)",
    description: {
      en: "A LINE Messaging API bot built with Express.js to automate user interactions, handle webhook events, and provide instant responses.",
      th: "บอท LINE Messaging API พัฒนาด้วย Express.js สำหรับจัดการ Webhook, โต้ตอบกับผู้ใช้แบบอัตโนมัติ และให้บริการข้อมูลแบบเรียลไทม์"
    },
    techStack: ["Node.js", "Express.js", "LINE Messaging API", "Webhook"],
    link: "/projects/linebot",
    github: "https://github.com/cherdsak-kh/line-bot-expressjs"
  },
  {
    title: "Todo List System",
    description: {
      en: "A comprehensive Todo List management system featuring user authentication, task categorization, and real-time status tracking.",
      th: "ระบบจัดการรายการสิ่งที่ต้องทำ (Todo List) แบบครบวงจร พร้อมระบบจัดการผู้ใช้งาน การจัดหมวดหมู่งาน และติดตามสถานะการทำงาน"
    },
    techStack: ["Node.js", "Backend", "REST API", "Database"],
    link: "/projects/todos",
    github: "https://github.com/cherdsak-kh/Todo-List-System"
  }
];
