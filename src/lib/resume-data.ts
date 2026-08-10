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
  title: { en: "Full Stack Developer", th: "Full Stack Developer" },
  location: { en: "Ramkhamhaeng 24, Bang Kapi, Bangkok, TH", th: "รามคำแหง 24, บางกะปิ, กรุงเทพมหานคร ประเทศไทย" },
  profileImage: "/profile.jpg",
  summary: {
    en: "I have a hybrid background in IT Operations and Software Development, with experience ranging from managing infrastructure and providing technical support to building practical full-stack web applications. Additionally, I enjoy leveraging new tools and AI technologies to solve technical challenges, streamline workflows, and support my team efficiently.",
    th: "ผมมีประสบการณ์แบบผสมผสานทั้งด้าน IT Operations และการพัฒนาระบบ (Software Development) มีความสามารถดูแลตั้งแต่ระบบโครงสร้างพื้นฐาน การซัพพอร์ตผู้ใช้งาน ไปจนถึงการพัฒนาเว็บแอปพลิเคชัน (Frontend & Backend) ให้ใช้งานได้จริง นอกจากนี้ ผมชอบศึกษาและนำเครื่องมือใหม่ๆ รวมถึงเทคโนโลยี AI มาประยุกต์ใช้เพื่อแก้ไขปัญหาทางเทคนิคและลดขั้นตอนการทำงานในทีมอย่างมีประสิทธิภาพครับ"
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
    role: { en: "IT Operation Support", th: "IT Operation Support" },
    duration: { en: "OCT 2023 - JUL 2025", th: "ต.ค. 2566 - ก.ค. 2568" },
    achievements: {
      en: [
        "Engineered an internal IT Helpdesk application using LINE LIFF, Express.js, and Bootstrap, with Supabase integration and automated LINE notifications, streamlining issue tracking and resolution.",
        "Designed secure RESTful APIs with Node.js and Express.js, and managed core infrastructure (MySQL, MongoDB, Cloudflare R2), optimizing database queries to cut data retrieval times by 20%.",
        "Managed end-to-end IT operations including network/server maintenance, secure reverse proxies (Nginx Proxy Manager), secrets management (Infisical), and routine data backups.",
        "Facilitated the deployment of a new Clinic Management System by collaborating with external developers, conducting UAT, and delivering comprehensive training to medical staff.",
        "Provided daily technical support and hardware provisioning (Onboarding) for cross-functional teams, while effectively managing IT assets and vendor relations."
      ],
      th: [
        "พัฒนาระบบแจ้งซ่อมไอทีภายใน (Helpdesk) ผ่าน LINE LIFF ด้วย Express.js และ Bootstrap พร้อมฐานข้อมูล Supabase และระบบแจ้งเตือนอัตโนมัติ ช่วยเปลี่ยนจากการแจ้งผ่านแชทให้เป็นระบบที่ติดตาม log ได้",
        "ออกแบบ RESTful API และจัดการโครงสร้างพื้นฐาน (MySQL, MongoDB, Cloudflare R2) พร้อมทำ Query Optimization ซึ่งช่วยลดเวลาการดึงข้อมูลลง 20%",
        "ดูแลงาน IT Operations ทั้งระบบเครือข่าย, เซิร์ฟเวอร์, การทำ Reverse Proxy (Nginx Proxy Manager), การจัดการความปลอดภัย (Infisical) และการทำระบบสำรองข้อมูลสำคัญของคลินิก",
        "ประสานงานกับทีมผู้พัฒนาภายนอกเพื่อติดตั้งระบบจัดการคลินิก โดยมีส่วนร่วมตั้งแต่เริ่มโปรเจกต์ ทดสอบระบบ (UAT) ติดตั้งใช้งาน และจัดอบรมให้กับทีมแพทย์และพนักงาน",
        "ให้บริการแก้ไขปัญหาไอที จัดเตรียมอุปกรณ์ (Onboarding) และบริหารจัดการทรัพย์สินไอที (IT Asset) รวมถึงประสานงานกับ Vendor ภายนอกเพื่อจัดซื้อและซ่อมบำรุง"
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
  },
  {
    institution: { en: "Ayutthayanusorn School", th: "โรงเรียนอยุธยานุสรณ์" },
    degree: { en: "High School (M.6) - Mathematics-English Program", th: "ม.6 (สายคณิตศาสตร์-ภาษาอังกฤษ)" },
    duration: { en: "Graduated 2017", th: "จบการศึกษา 2560" }
  },
  {
    institution: { en: "Wang Noi Wittyapoom School", th: "โรงเรียนวังน้อยวิทยาภูมิ" },
    degree: { en: "Middle School (M.3)", th: "ม.3" },
    duration: { en: "Graduated 2014", th: "จบการศึกษา 2557" }
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
