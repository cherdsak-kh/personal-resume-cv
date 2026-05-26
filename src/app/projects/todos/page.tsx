"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Mermaid from "@/components/Mermaid";

const ImageGrid = ({ images, onImageClick }: { images: string[], onImageClick: (src: string) => void }) => {
  if (!images || images.length === 0) {
    return (
      <div className="w-full p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-center text-slate-500 dark:text-slate-400">
        <p>กำลังเตรียมรูปภาพประกอบผลงาน (Images are currently being prepared)</p>
      </div>
    );
  }
  
  const gridColsClass = images.length === 1 
    ? "grid-cols-1" 
    : images.length === 2 
      ? "grid-cols-1 sm:grid-cols-2" 
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";

  return (
    <div className={`grid ${gridColsClass} gap-4 mb-8`}>
      {images.map((src, i) => (
        <div 
          key={i} 
          className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/50 shadow-sm cursor-pointer group"
          onClick={() => onImageClick(src)}
        >
          <img 
            src={src} 
            alt={`Screenshot ${i + 1}`} 
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300" 
            loading="lazy" 
          />
        </div>
      ))}
    </div>
  );
};

export default function TodosArticle() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const techStackDiagram = `graph LR
    A[Client] -->|HTTP Requests| B(Express.js)
    subgraph Backend [Node.js & TypeScript]
        B --> C{Controllers}
        C -->|CRUD| D[Prisma ORM]
    end
    D -->|Read/Write| E[(SQLite)]
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#333,stroke:#fff,stroke-width:2px,color:#fff
    style D fill:#1A202C,stroke:#fff,stroke-width:2px,color:#fff
    style E fill:#003B57,stroke:#fff,stroke-width:2px,color:#fff`;

  const lifecycleDiagram = `stateDiagram-v2
    state "สร้างงานใหม่" as Create
    state "จัดการและติดตามงาน" as Manage
    state "อัปเดตสถานะ/เนื้อหา" as Update
    state "ซ่อน/ย้ายลงถังขยะ" as Trash

    [*] --> Create: POST /todos
    Create --> Manage: GET /todos
    Manage --> Update: PUT /todos/{id}
    Update --> Manage
    Manage --> Trash: DELETE /todos/{id} (Soft Delete)
    Trash --> Manage: POST /todos/{id}/restore (กู้คืน)
    Trash --> [*]: หมดอายุความสำคัญ`;

  const authDiagram = `sequenceDiagram
    participant User
    participant SwaggerUI as Swagger UI
    participant AuthAPI as Auth API
    participant TodoAPI as Todo API

    User->>SwaggerUI: กรอกข้อมูล Login
    SwaggerUI->>AuthAPI: POST /api/v1/auth/login
    AuthAPI-->>SwaggerUI: Return JWT Token
    SwaggerUI-->>SwaggerUI: Auto-Authorization (เซฟ Token ในระบบ)
    User->>SwaggerUI: ทดสอบดึงข้อมูล Todo
    SwaggerUI->>TodoAPI: GET /api/v1/todos (ส่ง Bearer Token อัตโนมัติ)
    TodoAPI-->>SwaggerUI: Return JSON (Todo List)`;

  const architectureDiagram = `flowchart TD
    Req["Client Request"]
    Route["routes/ (กำหนดเส้นทาง API)"]
    MW{"middleware/ (ตรวจสอบสิทธิ์)"}
    Ctrl["controllers/ (ประมวลผลตรรกะ)"]
    Error["Return 401/403"]
    Prisma["Prisma Client"]
    DB[("SQLite Database")]
    Res["Return JSON Response"]

    Req --> Route
    Route --> MW
    MW -- "สิทธิ์ผ่าน" --> Ctrl
    MW -- "สิทธิ์ไม่ผ่าน" --> Error
    Ctrl --> Prisma
    Prisma <--> DB
    Ctrl --> Res`;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
      <Link 
        href="/#projects" 
        className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        กลับสู่หน้าหลัก (Back to Home)
      </Link>

      <article className="prose prose-slate dark:prose-invert max-w-none">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Todo List System
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            ระบบจัดการงานอัจฉริยะที่ครบครันด้วยฟีเจอร์ระดับโปร
          </p>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {['Node.js', 'Express.js', 'TypeScript', 'Prisma', 'SQLite', 'JWT', 'Swagger'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <section className="mb-12">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            โปรเจกต์ <strong>Todo List System</strong> ระบบจัดการรายการสิ่งที่ต้องทำ (Todo List) ที่ถูกออกแบบและพัฒนาขึ้นมาอย่างเป็นระบบ เพื่อตอบโจทย์การจัดการงานในชีวิตประจำวันหรือการทำงานเป็นทีม โปรเจกต์นี้ไม่ได้มีเพียงแค่การเพิ่มหรือลบข้อมูลธรรมดา แต่ยังมาพร้อมกับระบบความปลอดภัย การจัดการข้อมูลแบบ Soft-delete และเอกสาร API ที่พร้อมใช้งาน
            <br /><br />
            <span className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg border border-blue-200 dark:border-blue-800/50 text-sm">
              💡 <strong>หมายเหตุ:</strong> โปรเจกต์นี้เป็น <strong>Pure Backend API</strong> (ไม่มีส่วน Frontend UI) โดยเน้นการออกแบบสถาปัตยกรรมหลังบ้าน การจัดการฐานข้อมูล และการรักษาความปลอดภัยเป็นหลัก การทดสอบและการใช้งานทั้งหมดจะทำผ่าน <strong>Swagger UI</strong>
            </span>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
            🛠️ Tech Stack: เทคโนโลยีที่อยู่เบื้องหลัง
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            โปรเจกต์นี้ถูกพัฒนาด้วยเทคโนโลยีที่ทันสมัยและเป็นที่นิยมในฝั่ง Backend ทำให้ตัวระบบมีประสิทธิภาพและง่ายต่อการดูแลรักษา (Maintainability)
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                Runtime & Framework
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                <li><strong>Node.js:</strong> ขับเคลื่อนการทำงานที่รวดเร็วแบบ Asynchronous</li>
                <li><strong>Express.js:</strong> เฟรมเวิร์กยอดนิยมสำหรับสร้าง RESTful API ที่มีความยืดหยุ่นสูง</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                Language
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                <li><strong>TypeScript:</strong> ช่วยลดข้อผิดพลาด (Bugs) ในระหว่างการพัฒนา ด้วยการตรวจสอบ Type ที่เข้มงวด</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-3 flex items-center">
                Database & ORM
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                <li><strong>Prisma & SQLite:</strong> จัดการฐานข้อมูลได้อย่างเป็นระบบ พัฒนาได้ไว และใช้งานง่ายโดยไม่ต้องตั้งค่าเซิร์ฟเวอร์ฐานข้อมูลแยก</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-3 flex items-center">
                Security & Documentation
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                <li><strong>JWT & bcrypt:</strong> ปกป้องข้อมูลผู้ใช้งานด้วยการเข้ารหัสรหัสผ่านและการยืนยันตัวตนผ่าน Token</li>
                <li><strong>Swagger UI:</strong> มีเอกสาร API ที่สวยงามและสามารถทดสอบได้ทันที</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mt-8 mb-4">
            ภาพรวมเทคโนโลยี (Tech Stack Architecture)
          </h3>
          <Mermaid chart={techStackDiagram} />
          <p className="text-sm text-center text-slate-500 italic mt-2">
            ภาพประกอบ: ภาพรวมเทคโนโลยีที่ใช้ในการพัฒนาโปรเจกต์ (Tech Stack)
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
            ✨ ฟีเจอร์เด่นของโปรเจกต์ (Key Features)
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-blue-500 pl-4">
                1. การจัดการ Todo ที่ทรงประสิทธิภาพ (Core Value)
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                เป้าหมายหลักและหัวใจของโปรเจกต์นี้คือ <strong>การจัดการรายการสิ่งที่ต้องทำ (Todos)</strong> อย่างเป็นระบบ ผู้ใช้สามารถจัดการวงจรชีวิตของงานได้อย่างครบวงจร (CRUD Operations) ตั้งแต่สร้าง เรียกดู แก้ไข ไปจนถึงการลบ โดยออกแบบ API ให้มีมาตรฐานและใช้งานง่าย
              </p>
              
              <Mermaid chart={lifecycleDiagram} />
              <p className="text-sm text-center text-slate-500 italic mt-2 mb-6">
                ภาพประกอบ: วงจรชีวิตและการจัดการสถานะของ Todo (Todo Lifecycle)
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-emerald-500 pl-4">
                2. ระบบรักษาความปลอดภัยของข้อมูล (Data Recovery & Soft Delete)
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                เมื่อเป้าหมายหลักคือ Todos ข้อมูลเหล่านี้จึงมีความสำคัญมาก ระบบจึงไม่ได้ลบข้อมูลทิ้งทันทีเมื่อกดลบ (Soft Delete) แต่มีฟีเจอร์กู้คืนข้อมูล (Restore) ที่เปรียบเสมือนมี "ถังขยะ" ช่วยให้ผู้ใช้ดึงงานที่เผลอลบผิดพลาดกลับมาได้เสมอ
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-purple-500 pl-4">
                3. ระบบยืนยันตัวตนและความเป็นส่วนตัว (Authentication & Isolation)
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                Todo ของใครของมัน! ระบบมีการป้องกันด้วย JSON Web Token (JWT) ทำให้ผู้ใช้แต่ละคนมีพื้นที่ส่วนตัวสำหรับจัดการงานของตัวเองอย่างปลอดภัย โดยที่ผู้อื่นไม่สามารถเข้ามาดูหรือแก้ไขข้อมูลข้ามบัญชีได้
              </p>
              
              <Mermaid chart={authDiagram} />
              <p className="text-sm text-center text-slate-500 italic mt-2 mb-6">
                ภาพประกอบ: ลำดับการทำงาน (Sequence) ของระบบยืนยันตัวตนและการเรียกใช้ API ผ่าน Swagger
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
            🏗️ โครงสร้างการออกแบบ (Architecture & Structure)
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            การออกแบบโครงสร้างโค้ดใช้รูปแบบการแบ่งโฟลเดอร์ตามหน้าที่การทำงาน (Separation of Concerns) ทำให้โค้ดอ่านง่ายและขยายต่อได้สะดวก
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-8">
            <li><code>routes/</code> - กำหนดเส้นทาง URL ทั้งหมดของ API</li>
            <li><code>controllers/</code> - ควบคุมและจัดการตรรกะ (Logic) การประมวลผลข้อมูล</li>
            <li><code>middleware/</code> - ตรวจสอบสิทธิ์การเข้าถึง เช่น การตรวจสอบ JWT Token</li>
            <li><code>prisma/</code> - จัดการโครงสร้างตารางและเชื่อมต่อฐานข้อมูล</li>
          </ul>

          <Mermaid chart={architectureDiagram} />
          <p className="text-sm text-center text-slate-500 italic mt-2">
            ภาพประกอบ: โครงสร้างโฟลเดอร์และการไหลของข้อมูล (Architecture & Data Flow) ภายในระบบ
          </p>
        </section>

      </article>

      <section className="mb-12 mt-12 border-t border-slate-200 dark:border-slate-800 pt-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
          ภาพตัวอย่างการทำงานบน Swagger UI (API Documentation)
        </h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          เนื่องจากโปรเจกต์นี้เป็นระบบ Backend API การโต้ตอบและการทดสอบการทำงานทั้งหมดจึงดำเนินการผ่านระบบเอกสาร Swagger UI ซึ่งถูกสร้างขึ้นแบบอัตโนมัติ (Auto-generated)
        </p>
        <ImageGrid images={["/todos/image1.jpg"]} onImageClick={setSelectedImage} />
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setSelectedImage(null); setScale(1); }}
            className="fixed inset-0 z-100 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer overflow-hidden"
          >
            {/* Toolbar - Desktop Only */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="hidden md:flex absolute top-6 right-6 items-center bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700 shadow-xl z-50 cursor-default"
            >
              <div className="flex items-center space-x-3 pr-3 border-r border-slate-600 mr-3">
                <button 
                  onClick={() => setScale(s => Math.min(s + 0.5, 5))}
                  className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-full transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <div className="w-px h-4 bg-slate-600"></div>
                <button 
                  onClick={() => setScale(s => Math.max(s - 0.5, 0.5))}
                  className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-full transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <div className="w-px h-4 bg-slate-600"></div>
                <button 
                  onClick={() => setScale(1)}
                  className={`p-1.5 rounded-full transition-colors ${scale !== 1 ? 'text-slate-300 hover:text-white hover:bg-slate-700' : 'text-slate-600 cursor-not-allowed'}`}
                  title="Reset Zoom"
                  disabled={scale === 1}
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>

              <button 
                onClick={() => { setSelectedImage(null); setScale(1); }}
                className="p-1.5 text-red-400 hover:text-red-300 hover:bg-slate-700 rounded-full transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-4xl max-h-[90vh] w-auto h-auto flex flex-col items-center justify-center ${scale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
            >
              {/* Close Button - Mobile Only */}
              <button 
                onClick={() => { setSelectedImage(null); setScale(1); }}
                className="md:hidden absolute top-4 right-4 p-2 bg-slate-900/50 text-white rounded-full hover:bg-slate-900/70 backdrop-blur-md transition-colors z-50"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Draggable Image Area */}
              <div className="w-full h-full overflow-visible flex items-center justify-center">
                <motion.img 
                  src={selectedImage} 
                  alt="Enlarged view" 
                  className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-slate-700" 
                  drag={scale > 1}
                  dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
                  dragElastic={0.1}
                  animate={{ scale }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onWheel={(e) => {
                    e.stopPropagation();
                    if (e.deltaY < 0) setScale(s => Math.min(s + 0.25, 5));
                    else setScale(s => Math.max(s - 0.25, 0.5));
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
