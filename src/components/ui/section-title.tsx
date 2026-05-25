import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionTitle({ className, children, ...props }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-8",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}
