"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Images are now hardcoded directly in their respective sections.

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
            alt={`Line Bot Screenshot ${i + 1}`} 
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300" 
            loading="lazy" 
          />
        </div>
      ))}
    </div>
  );
};

export default function LineBotArticle() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);

  // Disable body scroll when modal is open
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
            LINE Bot with Express.js
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Tech Stack Overview & Architecture Documentation
          </p>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {['Node.js', 'Express.js', 'LINE API', 'Google Gemini', 'Supabase', 'Swagger'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
            ภาพรวมโปรเจกต์ (Project Overview)
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            โปรเจกต์นี้คือการพัฒนาระบบ LINE Bot ภายใต้สถาปัตยกรรมแบบ Lightweight Backend โดยใช้ <strong>Express.js</strong> เป็น API Server ในการรับส่งและจัดการ Webhook Events จาก <strong>LINE Messaging API</strong> 
            ตัวระบบมีการบูรณาการเข้ากับ <strong>Google Gemini (LLM)</strong> เพื่อใช้ในการประมวลผลภาษาธรรมชาติ (NLP) สำหรับการโต้ตอบอัตโนมัติ 
            และใช้บริการของ <strong>Supabase</strong> (PostgreSQL-based BaaS) ทำหน้าที่เป็น Data Layer สำหรับจัดการ Data Persistence อย่างมีประสิทธิภาพ
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
            เทคโนโลยีหลักที่ใช้ (Core Technologies)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                1. Framework & Core Environment
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                <li><strong>Node.js:</strong> Runtime environment สำหรับฝั่ง Server-side (CommonJS)</li>
                <li><strong>Express.js:</strong> Web framework สำหรับสร้าง API Server และจัดการ Webhook</li>
                <li><strong>Nodemon:</strong> เครื่องมือสำหรับ Live reload ระหว่างการพัฒนา</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-3 flex items-center">
                2. LINE Integration
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                <li><strong>LINE Messaging API SDK:</strong> เครื่องมือหลักในการเชื่อมต่อ รับ Event และตอบกลับผู้ใช้งานผ่านแอปพลิเคชัน LINE</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-3 flex items-center">
                3. Artificial Intelligence (AI)
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                <li><strong>Google Gemini:</strong> ใช้งาน Generative AI สำหรับประมวลผลข้อความและสร้างคำตอบอัตโนมัติอัจฉริยะ</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center">
                4. Database & BaaS
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                <li><strong>Supabase:</strong> จัดการฐานข้อมูล (PostgreSQL) และ Data Layer ผ่าน API แบบรวดเร็วและปลอดภัย</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-orange-600 dark:text-orange-400 mb-3 flex items-center">
                5. API Documentation
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                <li><strong>Swagger UI Express:</strong> แสดงเอกสาร API แบบ Interactive</li>
                <li><strong>Swagger JSDoc:</strong> แปลง comment (JSDoc) เป็น OpenAPI Specification</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-600 dark:text-slate-400 mb-3 flex items-center">
                6. Utility & Middleware
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                <li><strong>Dotenv:</strong> จัดการตัวแปร Environment Variables รักษาความปลอดภัย</li>
                <li><strong>Morgan:</strong> HTTP request logger middleware</li>
                <li><strong>CORS:</strong> จัดการ Cross-Origin Resource Sharing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
            โครงสร้างและการทำงาน (Architecture Summary)
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            ตัวระบบทำงานโดยใช้ <code>Express.js</code> ในการตั้ง API Server และเปิด Webhook endpoint เพื่อรอรับ Event ที่ถูกส่งมาจากทางฝั่ง LINE Platform เมื่อมีผู้ใช้ส่งข้อความ:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li>ระบบจะรับข้อมูลผ่าน Webhook ที่กำหนดใน <code>src/index.js</code></li>
            <li>ข้อมูลจะถูกประมวลผลตามเงื่อนไข (Logic) ที่อยู่ใน <code>src/handlers.js</code></li>
            <li>ในการทำงานอาจจะมีการเชื่อมต่อไปหาฐานข้อมูลผ่าน <code>src/supabase.js</code> หรือเชื่อมต่อไปที่ AI (Google Gemini) เพื่อช่วยวิเคราะห์ประโยคและตอบคำถาม</li>
            <li>ท้ายที่สุด ระบบจะส่งการตอบกลับ (Reply) ให้ผู้ใช้ผ่าน LINE Bot SDK</li>
          </ol>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4 italic">
            "โครงสร้างโค้ดเน้นความกะทัดรัด แยกส่วน Configuration, Database Connection, API Documentation และ Business Logic ออกจากกันเพื่อง่ายต่อการปรับปรุงและดูแลรักษา"
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-2">
            ภาพตัวอย่างการทำงาน (Showcase & Screenshots)
          </h2>

          <div className="space-y-12">
            {/* 1. LINE Chat Interface */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-green-500 pl-4">1. การสนทนากับ LINE Bot (LINE Chat Interface)</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                ตัวอย่างหน้าจอการสนทนาในแอปพลิเคชัน LINE ที่บอทสามารถโต้ตอบกับผู้ใช้ได้อย่างเป็นธรรมชาติผ่านการประมวลผลของ Google Gemini
              </p>
              <ImageGrid images={["/linebot/image1.jpg", "/linebot/image2.jpg", "/linebot/image3.jpg"]} onImageClick={setSelectedImage} />
            </div>

            {/* 2. Swagger UI */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-orange-500 pl-4">2. การทำงานของ Swagger UI (API Documentation)</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                ระบบ API Documentation ที่จัดทำไว้ผ่าน Swagger UI ช่วยให้นักพัฒนาและผู้เกี่ยวข้องสามารถตรวจสอบและทดสอบ Endpoint ต่างๆ ได้อย่างสะดวก
              </p>
              <ImageGrid images={["/linebot/image4.jpg"]} onImageClick={setSelectedImage} />
            </div>

            {/* 3. Supabase Database */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-emerald-500 pl-4">3. ข้อมูลในระบบฐานข้อมูล Supabase (Database Table)</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                ข้อมูลตารางบน Dashboard ของ Supabase ซึ่งแสดงให้เห็นว่าระบบสามารถบันทึกข้อมูลต่างๆ ลงฐานข้อมูลได้อย่างสมบูรณ์
              </p>
              <ImageGrid images={["/linebot/image5.jpg"]} onImageClick={setSelectedImage} />
            </div>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            เอกสารนี้เป็นส่วนหนึ่งของแฟ้มสะสมผลงาน (Portfolio) ของ Cherdsak Khamlai
          </p>
        </footer>
      </article>

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
            {/* Toolbar - Desktop Only (Moved outside scaling div to prevent jump/flicker) */}
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
              {/* Close Button - Mobile Only (Matches Profile Style) */}
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
