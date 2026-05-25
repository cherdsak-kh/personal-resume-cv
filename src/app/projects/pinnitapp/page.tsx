"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ImageGrid = ({ images, onImageClick }: { images: string[], onImageClick: (src: string) => void }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
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

export default function PinnitAppArticle() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
      <Link 
        href="/#projects" 
        className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        กลับสู่หน้าหลัก (Back to Home)
      </Link>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-none"
      >
        <header className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 mb-4">
            PinnitApp: Tech Stack & Architecture
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            เอกสารอธิบายสถาปัตยกรรมและเทคโนโลยีเบื้องหลังการพัฒนาแอปพลิเคชัน PinnitApp
          </p>
        </header>

        <section className="space-y-12">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-blue-500 pl-4">ภาพรวมของแอปพลิเคชัน</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              PinnitApp พัฒนาด้วยเทคโนโลยีหลักคือ <strong>Expo / React Native</strong> และภาษา <strong>TypeScript</strong> โดยใช้ <code>expo-router</code> เป็นระบบ routing หลัก ร่วมกับ React Navigation ในการจัดการโครงสร้างหน้าจอ ด้านแผนที่ใช้ไลบรารี <code>react-native-maps</code> ควบคู่กับ <code>expo-location</code> ในการอ่านตำแหน่ง GPS ของผู้ใช้ 
              <br/><br/>
              สำหรับการจัดเก็บข้อมูลถาวรในเครื่อง (Offline Support) ใช้ <code>@react-native-async-storage/async-storage</code> ส่วนการซิงค์ข้อมูลบน Cloud ใช้บริการ <strong>Supabase</strong> (Database, Auth, Storage)
            </p>
            <ImageGrid images={["/pinnitapp/image1.jpg", "/pinnitapp/image2.jpg", "/pinnitapp/image3.jpg"]} onImageClick={setSelectedImage} />
          </div>

          {/* 1. Navigation */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-blue-500 pl-4">1. ระบบ Navigation</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              ระบบ Navigation ออกแบบบนพื้นฐานของ <strong>expo-router</strong> ซึ่งเป็น file-based routing ทำให้ผู้ใช้สามารถสลับระหว่างหน้าแรก หน้าแผนที่ และหน้าตั้งค่าได้อย่างสะดวกผ่าน Bottom Tabs โดยไม่ได้บังคับให้เข้าสู่ระบบก่อน
            </p>
            <ImageGrid images={["/pinnitapp/image4.jpg", "/pinnitapp/image5.jpg", "/pinnitapp/image6.jpg"]} onImageClick={setSelectedImage} />
          </div>

          {/* 2. Home */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-blue-500 pl-4">2. หน้า Home (หน้าแรกของแอป)</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              จุดเริ่มต้นหลักของการใช้งาน แสดงรายการปักหมุดทั้งหมดที่ผู้ใช้สามารถมองเห็นได้ ทั้งที่มาจาก Local Storage และ Database เมื่อผู้ใช้กดปุ่มปักหมุดตำแหน่งปัจจุบัน ระบบจะอ่าน GPS และสร้างรายการใหม่ทันที
            </p>
            <ImageGrid images={["/pinnitapp/image7.jpg", "/pinnitapp/image8.jpg", "/pinnitapp/image9.jpg"]} onImageClick={setSelectedImage} />
          </div>

          {/* 3. FlatList */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-blue-500 pl-4">3. การแสดงผลด้วย FlatList</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              การแสดงรายการปักหมุดในหน้า Home ใช้คอมโพเนนต์ <code>FlatList</code> เพื่อรองรับรายการจำนวนมากอย่างมีประสิทธิภาพด้วยแนวคิด virtualization (เรนเดอร์เฉพาะรายการที่มองเห็น) ช่วยลดการใช้หน่วยความจำและทำให้การเลื่อนหน้าจอราบรื่น
            </p>
            <ImageGrid images={["/pinnitapp/image10.jpg", "/pinnitapp/image11.jpg", "/pinnitapp/image12.jpg"]} onImageClick={setSelectedImage} />
          </div>

          {/* 4. Fetch */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-blue-500 pl-4">4. Fetch (Data Fetching)</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              การดึงข้อมูลจากบริการภายนอกใช้ Web API <code>fetch</code> สำหรับเรียก API reverse geocoding เพื่อนำพิกัดละติจูดและลองจิจูดไปแปลงเป็นชื่อสถานที่ นอกจากนั้น การเชื่อมต่อกับ Supabase ก็ใช้คำสั่งผ่าน SDK ซึ่งรองรับการจัดการข้อผิดพลาดและข้อมูลสำรองเมื่อออฟไลน์
            </p>
            <ImageGrid images={["/pinnitapp/image13.jpg", "/pinnitapp/image14.jpg", "/pinnitapp/image15.jpg"]} onImageClick={setSelectedImage} />
          </div>

          {/* 5. Async Storage */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-blue-500 pl-4">5. Async Storage</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              ใช้สำหรับเก็บการตั้งค่าของผู้ใช้ สถานะโหมดมืด (Dark Mode) และเก็บแคช (Cache) ของข้อมูลปักหมุด เพื่อให้ผู้ใช้สามารถใช้งานแอปได้แบบ Offline และซิงค์เมื่อมีอินเทอร์เน็ต
            </p>
            <ImageGrid images={["/pinnitapp/image16.jpg", "/pinnitapp/image17.jpg", "/pinnitapp/image18.jpg"]} onImageClick={setSelectedImage} />
          </div>

          {/* 6. GPS & Maps */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-blue-500 pl-4">6. การจัดการ GPS และ แผนที่</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              ทำงานร่วมกับ GPS ผ่าน <code>expo-location</code> สำหรับจัดการการขออนุญาต (Permissions) และอ่านตำแหน่งปัจจุบัน <code>getCurrentPositionAsync</code> และแสดงผลบน <code>react-native-maps</code> โดยควบคุมมุมมองแผนที่ให้เลื่อนและซูมไปยังจุดที่ผู้ใช้เลือกได้โดยอัตโนมัติ
            </p>
            <ImageGrid images={["/pinnitapp/image19.jpg", "/pinnitapp/image20.jpg", "/pinnitapp/image21.jpg"]} onImageClick={setSelectedImage} />
          </div>

          {/* 7. Supabase Backend */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-blue-500 pl-4">7. Supabase Backend & Database</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              ออกแบบตาราง <code>pins</code> เพื่อเก็บข้อมูลพิกัด พร้อมเปิดใช้ Row Level Security (RLS) เพื่อกำหนดให้ผู้ใช้เห็นและแก้ไขได้เฉพาะข้อมูลของตนเอง
            </p>
            <ImageGrid images={["/pinnitapp/image22.jpg", "/pinnitapp/image23.jpg", "/pinnitapp/image24.jpg"]} onImageClick={setSelectedImage} />
          </div>

          {/* 8. Supabase Storage */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-blue-500 pl-4">8. Supabase Storage</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              ใช้เก็บไฟล์รูปโปรไฟล์ผู้ใช้ โดยมีการจัดการสิทธิ์ RLS เช่นกัน ป้องกันการแก้ไขรูปของผู้อื่น และแปลงภาพด้วย base64 arraybuffer ก่อนอัปโหลดขึ้น Cloud
            </p>
            <ImageGrid images={["/pinnitapp/image25.jpg", "/pinnitapp/image26.jpg", "/pinnitapp/image27.jpg", "/pinnitapp/image28.jpg", "/pinnitapp/image29.jpg", "/pinnitapp/image30.jpg"]} onImageClick={setSelectedImage} />
          </div>

          {/* 9. Supabase Auth */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-blue-500 pl-4">9. Supabase Auth</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              ใช้รูปแบบ Email/Password โดยสร้าง Session ที่ผูกกับ AsyncStorage เพื่อให้ผู้ใช้ไม่ต้องล็อกอินใหม่ทุกครั้งที่เปิดแอป และจัดเก็บข้อมูล Metadata ของผู้ใช้
            </p>
            <ImageGrid images={["/pinnitapp/image31.jpg", "/pinnitapp/image32.jpg", "/pinnitapp/image33.jpg", "/pinnitapp/image34.jpg", "/pinnitapp/image35.jpg"]} onImageClick={setSelectedImage} />
          </div>

        </section>

        <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            เอกสารนี้เป็นส่วนหนึ่งของแฟ้มสะสมผลงาน (Portfolio) ของ Cherdsak Khamlai
          </p>
        </footer>
      </motion.article>

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
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] w-auto h-auto flex flex-col items-center justify-center"
            >
              {/* Toolbar - Desktop Only */}
              <div className="hidden md:flex absolute -top-14 left-1/2 -translate-x-1/2 items-center bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700 shadow-xl z-50">
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

              {/* Close Button - Mobile Only (Matches Profile Style) */}
              <button 
                onClick={() => { setSelectedImage(null); setScale(1); }}
                className="md:hidden absolute top-4 right-4 p-2 bg-slate-900/50 text-white rounded-full hover:bg-slate-900/70 backdrop-blur-md transition-colors z-50"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Draggable Image Area */}
              <div className={`w-full h-full overflow-visible flex items-center justify-center ${scale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}>
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
