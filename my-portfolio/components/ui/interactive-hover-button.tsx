import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { useState } from "react"

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [hover, setHover] = useState(false)

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(
        "bg-background relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "bg-primary h-2 w-2 rounded-full transition-all duration-300",
            hover && "scale-[100.8]"
          )}
        />
        <span
          className={cn(
            "inline-block transition-all duration-300",
            hover ? "translate-x-12 opacity-0" : "translate-x-0 opacity-100"
          )}
        >
          {children}
        </span>
      </div>

      <div
        className={cn(
          "text-primary-foreground absolute top-0 z-10 flex h-full w-full items-center justify-center gap-2 transition-all duration-300",
          hover ? "-translate-x-5 opacity-100" : "translate-x-12 opacity-0"
        )}
        aria-hidden={!hover}
      >
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  )
}
