"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const education = [
  {
    id: 1,
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Kalinga Institute Of Industrial Technology",
    location: "Odisha, India",
    duration: "Sep 2022 – Apr 2026",
    grade: "CGPA: 8.08/10",
    description: "Currently pursuing B.Tech with focus on software development and emerging technologies.",
  },
  {
    id: 2,
    degree: "Bihar Intermediate (12th) - PCM",
    institution: "Sachidanand Sinha College",
    location: "Aurangabad, Bihar",
    duration: "Apr 2018 – Apr 2020",
    grade: "Percentage: 87.6%",
    description: "Completed intermediate education with Physics, Chemistry, and Mathematics.",
  },
]



export default function EducationSection() {
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
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 mb-3 sm:mb-4 tracking-wide">
              Education
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 font-medium tracking-wide leading-relaxed">
              My academic journey and educational background.
            </p>
          </motion.div>

          {/* Education */}
          <div>
            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-4 lg:mb-0">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-0 sm:mr-4 mb-3 sm:mb-0 self-center sm:self-auto">
                            <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="text-center sm:text-left">
                            <h4 className="text-lg sm:text-xl font-bold tracking-wide">{edu.degree}</h4>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base tracking-wide">{edu.institution}</p>
                          </div>
                        </div>
                        <div className="text-center lg:text-right">
                          <div className="flex items-center justify-center lg:justify-end text-gray-600 dark:text-gray-300 mb-1">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                            <span className="text-xs sm:text-sm font-medium">{edu.duration}</span>
                          </div>
                          <div className="flex items-center justify-center lg:justify-end text-gray-600 dark:text-gray-300">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                            <span className="text-xs sm:text-sm font-medium">{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 text-center lg:text-left">
                        <span className="inline-block px-2 sm:px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs sm:text-sm rounded-full font-bold tracking-wide">
                          {edu.grade}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base text-center lg:text-left font-medium leading-relaxed">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
