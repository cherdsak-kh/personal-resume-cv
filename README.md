# Personal Resume and CV 🚀

เว็บไซต์ Portfolio และ Resume ส่วนตัวที่พัฒนาด้วย **Next.js (App Router)** ออกแบบมาเพื่อนำเสนอประสบการณ์ทำงาน ทักษะ และผลงานอย่างมืออาชีพ รองรับระบบการคัดกรองเรซูเม่ด้วย AI (ATS-Friendly) และปรับแต่ง SEO อย่างเต็มรูปแบบเพื่อการค้นหาและการแชร์บนโซเชียลมีเดีย

## 🌟 จุดเด่นของโปรเจกต์ (Features)

- **Premium Aesthetics:** การออกแบบ UI ที่เน้นความสวยงาม ทันสมัย และเป็นมืออาชีพ (Visual Hierarchy)
- **Micro-animations:** ยกระดับประสบการณ์ผู้ใช้งานด้วยแอนิเมชันที่ลื่นไหล
- **ATS-Friendly Structure:** โครงสร้างเว็บ Semantic HTML ที่ช่วยให้ AI หรือระบบสแกนเอกสารของบริษัท (ATS) ดึงข้อมูลไปประมวลผลได้อย่างแม่นยำ
- **SEO Optimized:** ตั้งค่า Metadata, Open Graph และ Schema.org อย่างสมบูรณ์ เพื่อรองรับการทำ Personal Branding
- **Dark / Light Mode:** รองรับการสลับธีมเพื่อความสะดวกสบายในการอ่าน

## 🛠 เทคโนโลยีหลัก (Tech Stack)

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS / CSS Modules
- **Deployment:** Vercel (Recommended)

## 📁 โครงสร้างโปรเจกต์

- `/app` - ส่วนของ Pages, Layouts, และ Routing หลักตามมาตรฐาน Next.js
- `/components` - UI Components ที่ถูกแยกส่วนให้สามารถนำกลับมาใช้ใหม่ได้ (Reusable Components)
- `/_planning` - โฟลเดอร์สำหรับเอกสาร Workflow 4 ระยะ (Research, Plan, Implement, Verify) ของแต่ละฟีเจอร์ที่ AI ใช้เป็นแหล่งอ้างอิง
- `/public` - ไฟล์ Asset ต่างๆ เช่น รูปภาพประกอบ, ไฟล์ PDF
- `/lib` และ `/hooks` - ฟังก์ชัน Utility และ Custom Hooks

## 🚀 การติดตั้งและรันโปรเจกต์ (Getting Started)

1. **ติดตั้ง Dependencies**

```bash
npm install
```

2. **รัน Development Server**

```bash
npm run dev
```

3. **เปิดเบราว์เซอร์**
   ไปที่ [http://localhost:3000](http://localhost:3000) เพื่อดูผลลัพธ์การทำงาน

## 🤖 สำหรับ AI Agent (Workflow Rules)

โปรเจกต์นี้ใช้ **4-Phase Feature Development Workflow** อย่างเคร่งครัด:

- ห้ามแก้ไขโค้ดหลักใน `src/` หรือ `app/` จนกว่าจะได้รับอนุมัติแผน (Approval)
- ศึกษาโครงสร้างและการตัดสินใจในอดีตจาก `/_planning/FEATURES_INDEX.md` เป็นสารบัญหลักเสมอ
- อ่านกฎเกณฑ์ฉบับเต็มได้จากระบบ Knowledge Item (KI) ที่ฝังไว้กับ Workspace ของคุณ
