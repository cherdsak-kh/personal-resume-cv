import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 dark:border-slate-800 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:focus:ring-slate-300",
        "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
