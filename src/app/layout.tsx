import type { Metadata } from "next";
import { Inter, Sarabun } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sarabun = Sarabun({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["thai", "latin"], 
  variable: "--font-sarabun" 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // TODO: Update with actual domain
  title: "Cherdsak Kh. | Backend & AI Systems Engineer",
  description: "Portfolio and Resume of Cherdsak Kh., a Software Engineer specializing in Python, Node.js, DevOps, and Agentic AI Architecture.",
  keywords: ["Cherdsak Khamlai", "Backend Developer", "AI Engineer", "Software Engineer", "Resume", "Portfolio", "Thailand", "Node.js", "Python", "FastAPI"],
  authors: [{ name: "Cherdsak Khamlai" }],
  openGraph: {
    title: "Cherdsak Kh. | Backend & AI Systems Engineer",
    description: "Portfolio and Resume of Cherdsak Kh., a Software Engineer specializing in Python, Node.js, DevOps, and Agentic AI Architecture.",
    url: "https://your-domain.com", // TODO: Update with actual domain
    siteName: "Cherdsak Kh. Portfolio",
    images: [
      {
        url: "/profile.jpg", // TODO: Can be replaced with a dedicated OG image banner
        width: 800,
        height: 600,
        alt: "Cherdsak Khamlai Profile Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cherdsak Kh. | Backend & AI Systems Engineer",
    description: "Portfolio and Resume of Cherdsak Kh., a Software Engineer specializing in Python, Node.js, DevOps, and Agentic AI Architecture.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sarabun.variable} font-sans min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 antialiased`}>
        <Providers>
          <div className="relative min-h-screen overflow-hidden selection:bg-blue-500/30">
            {/* 1. Grid Background (Tech vibe) */}
            <div className="fixed inset-0 z-[-2] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
            
            {/* 2. Glowing Ambient Orbs (Depth & AI Aesthetic) */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-40 dark:opacity-20 pointer-events-none z-[-1]">
              <div className="absolute inset-0 bg-blue-500/30 blur-[120px] rounded-full mix-blend-screen dark:mix-blend-lighten"></div>
            </div>
            <div className="fixed bottom-0 right-[-20%] w-[600px] h-[600px] opacity-30 dark:opacity-20 pointer-events-none z-[-1]">
              <div className="absolute inset-0 bg-indigo-500/20 blur-[120px] rounded-full mix-blend-screen dark:mix-blend-lighten"></div>
            </div>

            {/* 3. Content */}
            <div className="relative z-0">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
