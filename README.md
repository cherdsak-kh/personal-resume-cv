# Personal Resume and CV 🚀

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-0055FF?logo=framer)](https://www.framer.com/motion/)

เว็บไซต์ Portfolio และ Resume ส่วนตัวที่พัฒนาด้วย **Next.js (App Router)** ออกแบบมาเพื่อนำเสนอประสบการณ์ทำงาน ทักษะ และผลงาน (Projects) อย่างมืออาชีพ รูปแบบ Single-page Scroll ที่ไหลลื่น พร้อมเทคโนโลยีล้ำสมัย

> 🌐 **Live Demo:** [ดูเว็บไซต์จริงได้ที่นี่ (ใส่ลิงก์ Vercel ของคุณ)](https://your-domain.com)

---

## 🌟 จุดเด่นของโปรเจกต์ (Features)

- **Bilingual System (EN/TH):** รองรับระบบ 2 ภาษา สลับได้แบบ Real-time พร้อมฟังก์ชันเปลี่ยนฟอนต์อักษรให้เข้ากับภาษาอัตโนมัติ (`Inter` สำหรับ EN และ `Sarabun` สำหรับ TH)
- **Premium Aesthetics:** การออกแบบ UI ที่เน้นความสวยงาม ทันสมัย แบบฉบับสาย Tech / AI 
- **Micro-animations:** ยกระดับประสบการณ์ผู้ใช้งานด้วยแอนิเมชันที่ลื่นไหลจาก `framer-motion` (เช่น Image Modal ขยายรูปโปรไฟล์, Fade-in scroll)
- **Dark / Light Mode:** รองรับการสลับธีมเพื่อความสะดวกสบายในการอ่าน พร้อมโทนสีปรับเปลี่ยนแบบไดนามิก
- **Single-page Scroll & Navigation:** มีแถบ Navbar นำทางกดกระโดดไปยังหัวข้อต่างๆ (Projects, Education, Skills, Experience) ได้อย่างนุ่มนวล
- **Downloadable CV:** รองรับการแนบไฟล์และดาวน์โหลด PDF เรซูเม่โดยตรงจากหน้าเว็บ

---

## 🛠 เทคโนโลยีหลัก (Tech Stack)

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (Using `@theme` features)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (Recommended)

---

## 📁 โครงสร้างโปรเจกต์ (Folder Structure)

- `/src/app` - ส่วนของ Pages, Layouts, และ Routing หลัก
- `/src/components` - UI Components ที่แยกเป็นสัดส่วน (Layout, Sections, UI elements)
- `/src/lib/resume-data.ts` - ศูนย์รวมข้อมูลเรซูเม่ จัดการแก้ไขประวัติส่วนตัว ทักษะ ผลงาน ได้ที่ไฟล์นี้ไฟล์เดียว!
- `/public` - ไฟล์ Asset ต่างๆ เช่น รูปภาพประกอบ, ไฟล์ `resume.pdf`

---

## 💻 การติดตั้งและรันโปรเจกต์ (Getting Started)

1. **Clone repository และติดตั้ง Dependencies**

```bash
npm install
```

2. **รัน Development Server**

```bash
npm run dev
```

3. **เปิดเบราว์เซอร์**
   ไปที่ [http://localhost:3000](http://localhost:3000) เพื่อดูผลลัพธ์การทำงาน

---

## 📝 วิธีแก้ไขเนื้อหา (How to update content)

แก้ไขข้อมูลส่วนตัวของคุณได้ง่ายๆ ในไฟล์ **`src/lib/resume-data.ts`** โดยแก้ไขเพียงจุดเดียว ระบบจะอัปเดตทั้งในฝั่งภาษาไทยและอังกฤษให้ทันที
- อัปเดตไฟล์ PDF เรซูเม่ของคุณโดยนำไฟล์ไปวางไว้ที่ `public/cherdsak-resume.pdf` 

---

## 📬 ติดต่อ (Contact)

- **Email:** [cherd8524@gmail.com](mailto:cherd8524@gmail.com)
- **LinkedIn:** [Cherdsak Kh. - LinkedIn](https://www.linkedin.com/in/cherdsak-khamlai-967806401/)
- **GitHub:** [Cherdsak Kh. - GitHub](https://github.com/cherdsak-kh)
