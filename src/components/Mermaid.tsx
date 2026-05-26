"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: theme === "dark" ? "dark" : "default",
      securityLevel: "loose",
      fontFamily: "inherit",
    });

    let isMounted = true;
    
    const renderChart = async () => {
      try {
        if (ref.current) {
          const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
          const { svg: svgCode } = await mermaid.render(id, chart);
          if (isMounted) {
            setSvg(svgCode);
          }
        }
      } catch (error) {
        console.error("Mermaid rendering failed", error);
        if (isMounted) {
            setSvg(`<div class="text-red-500">Failed to render diagram</div>`);
        }
      }
    };
    
    renderChart();
    
    return () => {
      isMounted = false;
    };
  }, [chart, theme]);

  return (
    <div 
      className="flex justify-center my-6 overflow-x-auto p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700" 
      ref={ref} 
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
}
