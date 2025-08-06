"use client"

import { useState, useEffect } from "react"

interface UseTypewriterProps {
  text: string
  speed?: number
  delay?: number
}

export function useTypewriter({ text, speed = 50, delay = 0 }: UseTypewriterProps) {
  const [displayText, setDisplayText] = useState(text) // Start with full text for SSR
  const [isComplete, setIsComplete] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setDisplayText("") // Clear text after mount
    setIsComplete(false)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const timeout = setTimeout(() => {
      let index = 0

      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1))
          index++
        } else {
          setIsComplete(true)
          clearInterval(interval)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, delay, isMounted])

  return { displayText, isComplete: isMounted ? isComplete : true }
}
