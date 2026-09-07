export type LocalizedString = { en: string; th: string };

export interface Skill {
  name: string;
  category: 'Languages' | 'Backend Frameworks' | 'Frontend Frameworks' | 'DevOps & Infrastructure' | 'Database & Storage' | 'Tools';
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
    en: "Backend Developer with hands-on experience in building and maintaining service-oriented architectures, RESTful APIs, and database schemas using Node.js (Nest.js) and Python (FastAPI, Django). Experienced in multi-service orchestration, inter-service data integration, and collaborating with cross-functional teams including researchers and Data Scientists. Complemented by a strong foundation in IT operations, infrastructure, and end-to-end technical troubleshooting.",
    th: "นักพัฒนาแบ็กเอนด์ (Backend Developer) ที่มีประสบการณ์จริงในการออกแบบและพัฒนาระบบสถาปัตยกรรมแบบ Service-Oriented, การสร้าง RESTful API และการออกแบบ Database Schema ด้วย Node.js (Nest.js) และ Python (FastAPI, Django) มีความเชี่ยวชาญในการจัดการหลายเซอร์วิสควบคู่กัน การเชื่อมต่อข้อมูลระหว่างระบบ และการทำงานร่วมกับทีมสหสาขา เช่น นักวิจัยและ Data Scientist พร้อมด้วยพื้นฐานที่มั่นคงด้าน IT Operations และการดูแลระบบโครงสร้างพื้นฐาน"
  },
  email: "cherd8524@gmail.com",
  phone: "081-116-8524",
  github: "https://github.com/cherdsak-kh",
  linkedin: "https://www.linkedin.com/in/cherdsak-khamlai",
  resumeFile: "https://drive.google.com/file/d/1bSVB8eHaSLKZ3hx7aPTMvUE_1RdQxiVy/view?usp=sharing",
  resumeFileName: "Resume (EN-TH) - Cherdsak Kh.pdf"
};

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "PHP", category: "Languages" },

  // Backend Frameworks
  { name: "Node.js (Express, NestJS)", category: "Backend Frameworks" },
  { name: "PHP (Laravel)", category: "Backend Frameworks" },
  { name: "Python (FastAPI, Django)", category: "Backend Frameworks" },

  // Frontend Frameworks
  { name: "React.js", category: "Frontend Frameworks" },
  { name: "Next.js", category: "Frontend Frameworks" },
  { name: "HTML/CSS", category: "Frontend Frameworks" },
  { name: "Tailwind CSS", category: "Frontend Frameworks" },
  { name: "Bootstrap", category: "Frontend Frameworks" },

  // DevOps & Infrastructure
  { name: "Cloudflare", category: "DevOps & Infrastructure" },
  { name: "Nginx Proxy Manager", category: "DevOps & Infrastructure" },
  { name: "Portainer", category: "DevOps & Infrastructure" },
  { name: "Linux/Windows Server (SSH)", category: "DevOps & Infrastructure" },
  { name: "CI/CD Pipelines", category: "DevOps & Infrastructure" },
  { name: "Docker (Dockerfile, Container Management)", category: "DevOps & Infrastructure" },

  // Database & Storage
  { name: "MySQL", category: "Database & Storage" },
  { name: "PostgreSQL", category: "Database & Storage" },
  { name: "Supabase", category: "Database & Storage" },
  { name: "MongoDB", category: "Database & Storage" },
  { name: "Cloudflare R2", category: "Database & Storage" },
  { name: "Azure Blob Storage", category: "Database & Storage" },

  // Tools
  { name: "Git, GitHub, GitLab", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Swagger / OpenAPI", category: "Tools" },
  { name: "Docker", category: "Tools" }
];

export const experiences: Experience[] = [
  {
    company: { en: "Freelance (Tha Khlong 1 Municipal School)", th: "ฟรีแลนซ์ (โรงเรียนเทศบาลท่าโขลง 1)" },
    role: { en: "Freelance Full Stack Developer", th: "Freelance Full Stack Developer" },
    duration: { en: "APR 2026 - PRESENT", th: "เม.ย. 2569 - ปัจจุบัน" },
    achievements: {
      en: [
        "Gathered requirements and engineered \"EasyBook\", a full-stack facility and event booking platform (90% completed) serving school personnel via a mobile-first LINE LIFF web application.",
        "Architected normalized relational database schemas using Prisma ORM on PostgreSQL and developed robust RESTful APIs with NestJS to manage booking schedules and prevent reservation conflicts.",
        "Built responsive user interfaces using React, Vite, TypeScript, and Tailwind CSS, leveraging OpenAPI-generated types for strict type safety between frontend and backend.",
        "Collaborated with a DevOps engineer to deploy the system into production while conducting hands-on training sessions and handover documentation for school staff."
      ],
      th: [
        "สำรวจ Requirement และพัฒนาระบบจองสถานที่จัดกิจกรรม \"EasyBook\" แบบ Full Stack (ดำเนินการแล้วเสร็จ 90%) เพื่อรองรับการใช้งานของบุคลากรภายในโรงเรียนผ่าน LINE LIFF",
        "ออกแบบ Database Schema แบบ Relational ด้วย Prisma ORM บน PostgreSQL และพัฒนา RESTful API ด้วย NestJS เพื่อจัดการคิวการจอง การอนุมัติ และป้องกันการจองสถานที่ซ้ำซ้อน",
        "พัฒนาหน้าเว็บ Responsive รองรับการใช้งานบนมือถือด้วย React, Vite, TypeScript และ Tailwind CSS พร้อมสร้าง Type Definition อัตโนมัติจาก OpenAPI เพื่อความแม่นยำในการเชื่อมต่อระหว่างหน้าบ้านและหลังบ้าน",
        "ประสานงานร่วมกับผู้ดูแลระบบ (DevOps Engineer) ในการขึ้นระบบจริง (Production) พร้อมจัดอบรมสอนการใช้งานและส่งมอบคู่มือแก่บุคลากรโรงเรียน"
      ]
    }
  },
  {
    company: { en: "VEKIN (THAILAND) CO., LTD.", th: "บริษัท เวคิน (ประเทศไทย) จำกัด" },
    role: { en: "Backend Developer", th: "Backend Developer" },
    duration: { en: "SEP 2025 - MAR 2026", th: "ก.ย. 2568 - มี.ค. 2569" },
    achievements: {
      en: [
        "Maintained and actively developed 3 concurrent backend services across diverse tech stacks (FastAPI, Nest.js, Django), dynamically prioritizing tasks and delivering features according to active project requirements.",
        "Co-designed database schemas and relational data models on PostgreSQL, developing comprehensive CRUD RESTful APIs for a greenhouse gas and carbon emission platform in close collaboration with researchers.",
        "Implemented mathematical calculation models and complex data processing logic within the climate finance service, collaborating with Data Scientists to successfully achieve 60–70% project milestone completion.",
        "Refactored existing codebase and developed flexible API endpoints with advanced query parameters for the central Master Data service, integrating third-party data to serve as a reliable single source of truth for internal enterprise services.",
        "Engineered specialized API endpoints on DEMP (Digital Energy Management Platform), a real-time large-scale energy analytics system, enabling seamless data exchange with the Climate Finance platform.",
        "Authored Swagger/OpenAPI documentation and conducted comprehensive Postman testing for over 20+ endpoints, while integrating backend systems with PostgreSQL, Redis for caching, and Azure Blob Storage."
      ],
      th: [
        "ดูแลและพัฒนา 3 เซอร์วิสหลักของบริษัทควบคู่กัน (FastAPI, Nest.js, Django) บริหารจัดการและสลับการทำงานตาม Requirement ของแต่ละโปรเจกต์ได้อย่างคล่องตัวและส่งมอบงานตรงตามกำหนด",
        "ร่วมออกแบบ Database Schema และแบบจำลองข้อมูลบน PostgreSQL พร้อมพัฒนา RESTful API (CRUD) ครบวงจรสำหรับแพลตฟอร์มวิเคราะห์การปล่อยก๊าซเรือนกระจก ร่วมกับทีมนักวิจัย",
        "พัฒนาตรรกะการคำนวณทางคณิตศาสตร์และการประมวลผลข้อมูลตามหลัก Data Science ร่วมกับ Data Scientist ผลักดันให้โปรเจกต์สำเร็จลุล่วงไปได้กว่า 60–70%",
        "ทำการ Refactor โครงสร้างโค้ดเดิมและพัฒนา API เพิ่มเติมพร้อม Parameter ที่ยืดหยุ่น สำหรับระบบ Master Data เพื่อเชื่อมโยงข้อมูลจากภายนอกและให้บริการข้อมูลส่วนกลางแก่ทุกเซอร์วิสในองค์กร",
        "พัฒนา API บนแพลตฟอร์ม DEMP (ระบบวิเคราะห์ข้อมูลพลังงานขนาดใหญ่แบบเรียลไทม์) เพื่อดึงและส่งต่อข้อมูลที่จำเป็นไปยังระบบ Climate Finance ได้อย่างราบรื่น",
        "จัดทำเอกสาร Swagger/OpenAPI และทดสอบระบบด้วย Postman กว่า 20+ Endpoints ช่วยให้ทีม Frontend นำไปใช้งานได้ทันที พร้อมเชื่อมต่อระบบเข้ากับ PostgreSQL, Redis Caching, และ Azure Blob Storage"
      ]
    }
  },
  {
    company: { en: "ABSOLUTE HEALTH MEDICAL SERVICES CO., LTD.", th: "บริษัท แอ็บโซลูท เฮลธ์ เมดิคอล เซอร์วิสเซส จำกัด" },
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
    company: { en: "The Stock Exchange of Thailand", th: "ตลาดหลักทรัพย์แห่งประเทศไทย" },
    role: { en: "DAP Operator and Tester (Outsource)", th: "DAP Operator and Tester (Outsource)" },
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
  },
  {
    company: { en: "18th Military District", th: "มณฑลทหารบกที่ 18" },
    role: { en: "Military Instructor", th: "ครูฝึกทหาร" },
    duration: { en: "MAY 2018 - JAN 2022", th: "พ.ค. 2561 - ม.ค. 2565" },
    achievements: {
      en: [
        "Conducted comprehensive military training and evaluations in accordance with Royal Thai Army standards, fostering discipline and operational efficiency among personnel.",
        "Executed rapid-response disaster relief operations, providing timely assistance and support to communities affected by natural disasters.",
        "Provided high-level security and VIP protection during special royal missions, ensuring strict adherence to maximum security protocols.",
        "Performed area patrols and maintained regional security to uphold public safety and operational readiness."
      ],
      th: [
        "ดำเนินการฝึกอบรมและประเมินผลกำลังพลตามมาตรฐานของกองทัพบก เพื่อเสริมสร้างระเบียบวินัยและประสิทธิภาพในการปฏิบัติงาน",
        "ปฏิบัติภารกิจบรรเทาสาธารณภัยและให้ความช่วยเหลือประชาชนในพื้นที่ที่ได้รับผลกระทบจากภัยพิบัติทางธรรมชาติอย่างทันท่วงที",
        "ถวายความปลอดภัยและรักษาความสงบเรียบร้อยในภารกิจพิเศษต่างๆ อย่างรัดกุมและเป็นไปตามมาตรการรักษาความปลอดภัยสูงสุด",
        "ปฏิบัติงานลาดตระเวนและรักษาความปลอดภัยในพื้นที่รับผิดชอบ เพื่อรักษาความสงบเรียบร้อยให้แก่ส่วนรวม"
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
    duration: { en: "Graduated 2018", th: "สำเร็จการศึกษาปี 2561" }
  },
  {
    institution: { en: "Ayutthayanusorn School", th: "โรงเรียนอยุธยานุสรณ์" },
    degree: { en: "High School (M.6) (Mathematics-English Program)", th: "มัธยมศึกษาตอนปลาย (ม.6) (สายการเรียนคณิตศาสตร์-ภาษาอังกฤษ)" },
    duration: { en: "Graduated 2017", th: "สำเร็จการศึกษาปี 2560" }
  },
  {
    institution: { en: "Wang Noi Witthayaphoom School", th: "โรงเรียนวังน้อยวิทยาภูมิ" },
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
