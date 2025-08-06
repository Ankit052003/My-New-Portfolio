"use client"

import { useTypewriter } from "@/hooks/use-typewriter"

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  showCursor?: boolean
}

export function TypewriterText({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = "", 
  showCursor = true 
}: TypewriterTextProps) {
  const { displayText, isComplete } = useTypewriter({ text, speed, delay })

  return (
    <span className={className} suppressHydrationWarning>
      {displayText}
      {showCursor && !isComplete && (
        <span className="animate-pulse" suppressHydrationWarning>|</span>
      )}
    </span>
  )
}
