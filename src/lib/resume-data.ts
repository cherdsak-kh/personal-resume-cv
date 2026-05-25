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
  title: { en: "Backend & AI Systems Engineer", th: "วิศวกรซอฟต์แวร์ Backend และระบบ AI" },
  location: { en: "Ramkhamhaeng 24, Bang Kapi, Bangkok, Thailand", th: "รามคำแหง 24, บางกะปิ, กรุงเทพมหานคร, ประเทศไทย" },
  profileImage: "/profile.jpg",
  summary: {
    en: "Experienced Software Engineer with deep expertise in Python, Node.js, and DevOps. Specialized in building scalable backend systems, robust RESTful APIs, and Agentic AI architectures to deliver highly efficient and intelligent solutions.",
    th: "วิศวกรซอฟต์แวร์ผู้มีประสบการณ์และความเชี่ยวชาญเชิงลึกใน Python, Node.js และ DevOps มุ่งเน้นการสร้างระบบ Backend ที่รองรับการขยายตัว, RESTful API ที่แข็งแกร่ง และสถาปัตยกรรม AI Agent เพื่อส่งมอบโซลูชันที่มีประสิทธิภาพและชาญฉลาด"
  },
  email: "cherd8524@gmail.com",
  phone: "+66 811168524",
  github: "https://github.com/cherdsak-kh",
  linkedin: "https://www.linkedin.com/in/cherdsak-khamlai-967806401/"
};

export const skills: Skill[] = [
  // Backend
  { name: "Python", category: "Backend & APIs" },
  { name: "Django", category: "Backend & APIs" },
  { name: "FastAPI", category: "Backend & APIs" },
  { name: "Node.js", category: "Backend & APIs" },
  { name: "NestJS", category: "Backend & APIs" },
  { name: "Express.js", category: "Backend & APIs" },
  { name: "RESTful APIs", category: "Backend & APIs" },
  { name: "PHP", category: "Backend & APIs" },
  { name: "Laravel", category: "Backend & APIs" },
  
  // Frontend
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "HTML/CSS", category: "Frontend" },

  // Database
  { name: "PostgreSQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "SQL Query", category: "Databases" },
  { name: "Redis", category: "Databases" },
  { name: "Supabase", category: "Databases" },

  // DevOps
  { name: "Docker", category: "DevOps, Tools & Concepts" },
  { name: "GitHub", category: "DevOps, Tools & Concepts" },
  { name: "GitLab", category: "DevOps, Tools & Concepts" },
  { name: "Azure", category: "DevOps, Tools & Concepts" },
  { name: "Blob Storage", category: "DevOps, Tools & Concepts" },
  { name: "Portainer", category: "DevOps, Tools & Concepts" },
  { name: "Vault", category: "DevOps, Tools & Concepts" },
  { name: "Infisical", category: "DevOps, Tools & Concepts" },
  { name: "Gemini CLI", category: "DevOps, Tools & Concepts" },
  { name: "Claude CLI", category: "DevOps, Tools & Concepts" },
  { name: "MVC", category: "DevOps, Tools & Concepts" },
  { name: "SDLC", category: "DevOps, Tools & Concepts" },
];

export const experiences: Experience[] = [
  {
    company: { en: "Vekin (Thailand) Co.,Ltd.", th: "บริษัท เวคิน (ประเทศไทย) จำกัด" },
    role: { en: "Backend Developer", th: "นักพัฒนาส่วนหลัง (Backend Developer)" },
    duration: { en: "Sep 2025 - Mar 2026", th: "ก.ย. 2568 - มี.ค. 2569" },
    achievements: {
      en: [
        "Developed backend web applications/features using Nest.js Framework, FastAPI, and Django.",
        "Responsible for Restful API design, research requirements, planning, and implementation.",
        "Incorporated AI native tools like Gemini, Claude, and Composer via CLI and IDEs such as Cursor and Kiro.",
        "Coordinated with PO, DevOps, Frontend, and QA to develop applications according to client requirements.",
        "Supported API implementation with the frontend using Postman and Bruno, and documented APIs using Swagger."
      ],
      th: [
        "พัฒนา web application/feature ส่วนหลังบ้านด้วย Nest.js Framework / FastAPI / Django",
        "รับผิดชอบงานด้าน Restful API, Research requirements, Planning และ Implement",
        "ประยุกต์ใช้ AI Native เช่น Gemini, Claude, Composer ผ่านการใช้งาน CLI และ IDE อย่าง Cursor และ Kiro",
        "ประสานงานกับ PO, DevOps, Frontend, QA เพื่อดำเนินการจัดทำ feature ตามความต้องการของลูกค้า",
        "สนับสนุนการเชื่อมต่อ API กับ Frontend โดยใช้ Postman/Bruno และทำเอกสาร API ด้วย Swagger"
      ]
    }
  },
  {
    company: { en: "ABSOLUTE WELLNESS COMPANY LIMITED", th: "บริษัท แอบโซลูท เวลเนส จำกัด" },
    role: { en: "Back-End Developer and Support Officer", th: "นักพัฒนาส่วนหลังและเจ้าหน้าที่สนับสนุน" },
    duration: { en: "Oct 2023 - Jul 2025", th: "ต.ค. 2566 - ก.ค. 2568" },
    achievements: {
      en: [
        "Designed and developed RESTful APIs using Node.js and Express.js to connect with Front-end systems and Mobile Applications.",
        "Structured and managed databases with MySQL/MongoDB, including designing ER Diagrams and writing practical queries.",
        "Collaborated with the Front-end and UX/UI teams to efficiently develop and troubleshoot data communication between systems."
      ],
      th: [
        "ออกแบบและพัฒนา RESTful API โดยใช้ Node.js และ Express.js เพื่อเชื่อมต่อกับระบบส่วนหน้าและแอปพลิเคชันมือถือ",
        "จัดโครงสร้างและจัดการฐานข้อมูลด้วย MySQL/MongoDB รวมถึงการออกแบบแผนภาพ ER และเขียนคำสั่ง SQL",
        "ทำงานร่วมกับทีม Frontend และ UX/UI เพื่อพัฒนาและแก้ไขปัญหาการสื่อสารข้อมูลระหว่างระบบอย่างมีประสิทธิภาพ"
      ]
    }
  },
  {
    company: { en: "Dungbhumi Corporation Co.,Ltd.", th: "บริษัท ดังภูมิ คอร์ปอเรชั่น จำกัด" },
    role: { en: "Front-End Developer / Support Tester", th: "นักพัฒนาส่วนหน้าและผู้ทดสอบระบบ" },
    duration: { en: "May 2023 - Aug 2023", th: "พ.ค. 2566 - ส.ค. 2566" },
    achievements: {
      en: [
        "Developed web page structure and Responsive Design to support all devices.",
        "Maintained and supported the usage of the CRM system to help manage customers better.",
        "Tested and ensured software quality before deployment."
      ],
      th: [
        "พัฒนาโครงสร้างหน้าเว็บและออกแบบ Responsive Design ให้รองรับทุกหน้าจออุปกรณ์",
        "ดูแลและสนับสนุนการใช้งานระบบ CRM เพื่อช่วยให้ธุรกิจบริหารจัดการลูกค้าได้ดียิ่งขึ้น",
        "ทดสอบและควบคุมคุณภาพของซอฟต์แวร์ก่อนส่งมอบ"
      ]
    }
  },
  {
    company: { en: "The Stock Exchange of Thailand", th: "ตลาดหลักทรัพย์แห่งประเทศไทย (SET)" },
    role: { en: "Software Tester & DAP Operator", th: "ผู้ทดสอบซอฟต์แวร์และพนักงานควบคุมระบบ" },
    duration: { en: "Mar 2022 - Apr 2023", th: "มี.ค. 2565 - เม.ย. 2566" },
    achievements: {
      en: [
        "Analyzed and designed test plans for web applications.",
        "Tested the functional performance of the web/application and coordinated with Developers to resolve errors.",
        "Updated customer data and ensured the system operated efficiently.",
        "Provided on-site support for customers requesting program services."
      ],
      th: [
        "วิเคราะห์และออกแบบแผนการทดสอบ (Test plans) สำหรับแอปพลิเคชัน",
        "ทดสอบประสิทธิภาพการทำงานของเว็บ/แอปพลิเคชัน และประสานงานกับนักพัฒนาเพื่อแก้ไขบั๊ก",
        "อัปเดตข้อมูลลูกค้าและดูแลระบบให้สามารถทำงานได้อย่างมีประสิทธิภาพ",
        "ให้ความช่วยเหลือและสนับสนุนลูกค้าที่ขอรับบริการโปรแกรม ณ สถานที่ทำงานของลูกค้า"
      ]
    }
  }
];

export const educations: Education[] = [
  {
    institution: { en: "Valaya Alongkorn Rajabhat University under the Royal Patronage", th: "มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ ในพระบรมราชูปถัมภ์" },
    degree: { en: "Bachelor of Science in Computer Science (Special Program)", th: "ปริญญาตรี สาขาวิชาวิทยาการคอมพิวเตอร์ (ภาคพิเศษ)" },
    duration: { en: "Present", th: "กำลังศึกษา" }
  },
  {
    institution: { en: "Non-Commissioned Officer School, Royal Thai Army", th: "โรงเรียนนายสิบทหารบก" },
    degree: { en: "Army Non-Commissioned Officer Student", th: "นักเรียนนายสิบทหารบก" },
    duration: { en: "2018", th: "2561" }
  },
  {
    institution: { en: "Ayutthayanusorn School", th: "โรงเรียนอยุธยานุสรณ์" },
    degree: { en: "High School (M.6)", th: "มัธยมศึกษาปีที่ 6" },
    duration: { en: "2017", th: "2560" }
  },
  {
    institution: { en: "Wangnoi Witthayapoom School", th: "โรงเรียนวังน้อยวิทยาภูมิ" },
    degree: { en: "Junior High School (M.3)", th: "มัธยมศึกษาปีที่ 3" },
    duration: { en: "2013", th: "2556" }
  }
];

export const projects: Project[] = [
  {
    title: "PinnitApp",
    description: {
      en: "A location saving application that allows users to save favorite spots on a map, and easily view and manage their pins.",
      th: "แอปพลิเคชันบันทึกตำแหน่งที่ชอบบนแผนที่ ช่วยให้ผู้ใช้สามารถบันทึก ดู และจัดการหมุด (Pins) ของตัวเองได้อย่างรวดเร็วและง่ายดาย"
    },
    techStack: ["Node.js", "Frontend", "Database", "Map API"],
    github: "https://github.com/cherdsak-kh/PinnitApp"
  },
  {
    title: "LINE Bot (Express.js)",
    description: {
      en: "A LINE Messaging API bot built with Express.js to automate user interactions, handle webhook events, and provide instant responses.",
      th: "บอท LINE Messaging API พัฒนาด้วย Express.js สำหรับจัดการ Webhook, โต้ตอบกับผู้ใช้แบบอัตโนมัติ และให้บริการข้อมูลแบบเรียลไทม์"
    },
    techStack: ["Node.js", "Express.js", "LINE Messaging API", "Webhook"],
    github: "https://github.com/cherdsak-kh/line-bot-expressjs"
  },
  {
    title: "Todo List System",
    description: {
      en: "A comprehensive Todo List management system featuring user authentication, task categorization, and real-time status tracking.",
      th: "ระบบจัดการรายการสิ่งที่ต้องทำ (Todo List) แบบครบวงจร พร้อมระบบจัดการผู้ใช้งาน การจัดหมวดหมู่งาน และติดตามสถานะการทำงาน"
    },
    techStack: ["Node.js", "Backend", "REST API", "Database"],
    github: "https://github.com/cherdsak-kh/Todo-List-System"
  }
];
