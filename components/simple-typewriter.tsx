"use client"

import { useState, useEffect } from "react"

interface SimpleTypewriterProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

function AnimatedText({ text, speed, delay }: { text: string; speed: number; delay: number }) {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let intervalId: NodeJS.Timeout

    const startAnimation = () => {
      let index = 0
      intervalId = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index))
          index++
        } else {
          setIsComplete(true)
          clearInterval(intervalId)
        }
      }, speed)
    }

    timeoutId = setTimeout(startAnimation, delay)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [text, speed, delay])

  return (
    <>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </>
  )
}

export function SimpleTypewriter({ text, speed = 50, delay = 0, className = "" }: SimpleTypewriterProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return static text for SSR
    return <span className={className}>{text}</span>
  }

  // Return animated text only after hydration
  return (
    <span className={className}>
      <AnimatedText text={text} speed={speed} delay={delay} />
    </span>
  )
}

// Also provide a default export for compatibility
export default SimpleTypewriter
