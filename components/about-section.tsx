"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { SimpleTypewriter } from "@/components/simple-typewriter"

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "Node.js",
  "MongoDB",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "C++",
  "Java",
  "MySQL",
  "RESTful APIs",
  "Git/GitHub"
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative z-10">
                <Image
                  src="/images/ankit-profile.png"
                  alt="Ankit Kumar"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-blue-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-purple-500/20 rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-600 to-yellow-600 mb-3 sm:mb-4 tracking-wide">
                <SimpleTypewriter 
                  text="About Me" 
                  speed={150}
                  delay={500}
                />
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="w-16 sm:w-20 h-1 bg-gradient-to-r from-rose-500 via-orange-500 to-yellow-500 rounded-full mx-auto lg:mx-0 mb-4 sm:mb-6"
              />
            </div>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium tracking-wide">
              <SimpleTypewriter 
                text="I'm a passionate full-stack web developer currently pursuing B.Tech at Kalinga Institute of Industrial Technology with a CGPA of 8.08/10. I have strong expertise in React, TypeScript, and MERN stack technologies, with experience in building high-performance applications and AI-integrated tools."
                speed={20}
                delay={1500}
              />
            </motion.p>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium tracking-wide">
              <SimpleTypewriter 
                text="I've successfully improved user engagement, performance, and conversion rates across various projects. When I'm not coding, you'll find me exploring new technologies, working on innovative solutions, or contributing to open-source projects."
                speed={25}
                delay={6500}
              />
            </motion.p>

            {/* Skills */}
            <motion.div variants={itemVariants} className="mt-6 sm:mt-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center lg:text-left tracking-wide">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-gray-800 rounded-full text-xs sm:text-sm font-semibold shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow tracking-wide"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
