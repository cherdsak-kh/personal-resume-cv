"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function PinnitAppArticle() {
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
            </p>
            {/* Image Placeholder 1 */}
            <div className="w-full aspect-video bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center overflow-hidden mb-6">
              <img src="/pinnitapp/overview.jpg" alt="PinnitApp Overview" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <div className="hidden text-slate-400 dark:text-slate-500 flex-col items-center">
                <span className="text-sm font-medium">รอใส่รูปภาพ (Overview)</span>
                <span className="text-xs">public/pinnitapp/overview.jpg</span>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
              สำหรับการจัดเก็บข้อมูลถาวรในเครื่อง (Offline Support) ใช้ <code>@react-native-async-storage/async-storage</code> ส่วนการซิงค์ข้อมูลบน Cloud ใช้บริการ <strong>Supabase</strong> (Database, Auth, Storage)
            </p>
          </div>

          {/* 1. Navigation */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-blue-500 pl-4">1. ระบบ Navigation</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              ระบบ Navigation ออกแบบบนพื้นฐานของ <strong>expo-router</strong> ซึ่งเป็น file-based routing ทำให้ผู้ใช้สามารถสลับระหว่างหน้าแรก หน้าแผนที่ และหน้าตั้งค่าได้อย่างสะดวกผ่าน Bottom Tabs โดยไม่ได้บังคับให้เข้าสู่ระบบก่อน
            </p>
          </div>

          {/* 2. FlatList */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-blue-500 pl-4">2. การแสดงผลด้วย FlatList</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              การแสดงรายการปักหมุดในหน้า Home ใช้คอมโพเนนต์ <code>FlatList</code> เพื่อรองรับรายการจำนวนมากอย่างมีประสิทธิภาพด้วยแนวคิด virtualization (เรนเดอร์เฉพาะรายการที่มองเห็น) ช่วยลดการใช้หน่วยความจำและทำให้การเลื่อนหน้าจอราบรื่น
            </p>
            {/* Image Placeholder 2 */}
            <div className="w-full aspect-video bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center overflow-hidden mb-6">
              <img src="/pinnitapp/home-list.jpg" alt="Home List View" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <div className="hidden text-slate-400 dark:text-slate-500 flex-col items-center">
                <span className="text-sm font-medium">รอใส่รูปภาพ (Home / FlatList)</span>
                <span className="text-xs">public/pinnitapp/home-list.jpg</span>
              </div>
            </div>
          </div>

          {/* 3. API Integration */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-blue-500 pl-4">3. Data Fetching & APIs</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              การดึงข้อมูลจากบริการภายนอกใช้ Web API <code>fetch</code> สำหรับเรียก API reverse geocoding เพื่อนำพิกัดละติจูดและลองจิจูดไปแปลงเป็นชื่อสถานที่ นอกจากนั้น การเชื่อมต่อกับ Supabase ก็ใช้คำสั่งผ่าน SDK ซึ่งรองรับการจัดการข้อผิดพลาดและข้อมูลสำรองเมื่อออฟไลน์
            </p>
          </div>

          {/* 4. GPS & Maps */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-blue-500 pl-4">4. การจัดการ GPS และ แผนที่</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              ทำงานร่วมกับ GPS ผ่าน <code>expo-location</code> สำหรับจัดการการขออนุญาต (Permissions) และอ่านตำแหน่งปัจจุบัน <code>getCurrentPositionAsync</code> และแสดงผลบน <code>react-native-maps</code> โดยควบคุมมุมมองแผนที่ให้เลื่อนและซูมไปยังจุดที่ผู้ใช้เลือกได้โดยอัตโนมัติ
            </p>
            {/* Image Placeholder 3 */}
            <div className="w-full aspect-video bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center overflow-hidden mb-6">
              <img src="/pinnitapp/map-view.jpg" alt="Map View" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <div className="hidden text-slate-400 dark:text-slate-500 flex-col items-center">
                <span className="text-sm font-medium">รอใส่รูปภาพ (Map / GPS)</span>
                <span className="text-xs">public/pinnitapp/map-view.jpg</span>
              </div>
            </div>
          </div>

          {/* 5. Supabase */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 border-l-4 border-blue-500 pl-4">5. Supabase Backend (Auth, Database, Storage)</h2>
            <ul className="list-disc list-inside space-y-3 text-slate-700 dark:text-slate-300 mb-6">
              <li><strong>Auth:</strong> ใช้รูปแบบ Email/Password โดยสร้าง Session ที่ผูกกับ AsyncStorage เพื่อให้ผู้ใช้ไม่ต้องล็อกอินใหม่ทุกครั้ง</li>
              <li><strong>Database:</strong> ออกแบบตาราง <code>pins</code> เพื่อเก็บข้อมูลพิกัด พร้อมเปิดใช้ Row Level Security (RLS) เพื่อกำหนดให้ผู้ใช้เห็นและแก้ไขได้เฉพาะข้อมูลของตนเอง</li>
              <li><strong>Storage:</strong> ใช้เก็บไฟล์รูปโปรไฟล์ผู้ใช้ โดยมีการจัดการสิทธิ์ RLS เช่นกัน ป้องกันการแก้ไขรูปของผู้อื่น และแปลงภาพด้วย base64 arraybuffer ก่อนอัปโหลดขึ้น Cloud</li>
            </ul>
            {/* Image Placeholder 4 */}
            <div className="w-full aspect-video bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center overflow-hidden mb-6">
              <img src="/pinnitapp/supabase.jpg" alt="Supabase Backend" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <div className="hidden text-slate-400 dark:text-slate-500 flex-col items-center">
                <span className="text-sm font-medium">รอใส่รูปภาพ (Supabase / Backend)</span>
                <span className="text-xs">public/pinnitapp/supabase.jpg</span>
              </div>
            </div>
          </div>

        </section>

        <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            เอกสารนี้เป็นส่วนหนึ่งของแฟ้มสะสมผลงาน (Portfolio) ของ Cherdsak Khamlai
          </p>
        </footer>
      </motion.article>
    </div>
  );
}
