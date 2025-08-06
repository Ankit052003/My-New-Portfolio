"use client"

import dynamic from "next/dynamic"

const TypewriterText = dynamic(() => import("./typewriter-text").then(mod => ({ default: mod.TypewriterText })), {
  ssr: false,
  loading: () => <span>Loading...</span>
})

interface TypewriterWrapperProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  showCursor?: boolean
}

export function TypewriterWrapper(props: TypewriterWrapperProps) {
  return <TypewriterText {...props} />
}
