"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, ExternalLink } from "lucide-react"

const certifications = [
  {
    name: "Full Stack Web Development",
    issuer: "TechBairn",
    link: "https://drive.google.com/file/d/1pNg0Dc6V0LdCih03AlzM7yCWY60Kdqwl/view?usp=drive_link",
    color: "blue"
  },
  {
    name: "Data Structure and Algorithm",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1_IeWwh6wDb8LTVfxrbvYTxK4z738IRdG/view?usp=drive_link",
    color: "green"
  },
  {
    name: "Introduction to DevOps",
    issuer: "IBM",
    link: "https://drive.google.com/file/d/1hQVXTCOM_x1a1d_vuNB0mfvTrLdxEUG5/view?usp=drive_link",
    color: "purple"
  },
  {
    name: "Cloud Computing",
    issuer: "Juniper Networks",
    link: "https://drive.google.com/file/d/1l_h2VKG1iybZG9fSqiJAmNs8y5l2k_pg/view?usp=drive_link",
    color: "orange"
  },
]

export default function CertificationsSection() {
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

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-500",
        bgHover: "hover:bg-blue-600",
        bgLight: "bg-blue-100",
        bgLightDark: "dark:bg-blue-900/30",
        text: "text-blue-600",
        textDark: "dark:text-blue-400",
        shadow: "hover:shadow-blue-500/25"
      },
      green: {
        bg: "bg-green-500",
        bgHover: "hover:bg-green-600",
        bgLight: "bg-green-100",
        bgLightDark: "dark:bg-green-900/30",
        text: "text-green-600",
        textDark: "dark:text-green-400",
        shadow: "hover:shadow-green-500/25"
      },
      purple: {
        bg: "bg-purple-500",
        bgHover: "hover:bg-purple-600",
        bgLight: "bg-purple-100",
        bgLightDark: "dark:bg-purple-900/30",
        text: "text-purple-600",
        textDark: "dark:text-purple-400",
        shadow: "hover:shadow-purple-500/25"
      },
      orange: {
        bg: "bg-orange-500",
        bgHover: "hover:bg-orange-600",
        bgLight: "bg-orange-100",
        bgLightDark: "dark:bg-orange-900/30",
        text: "text-orange-600",
        textDark: "dark:text-orange-400",
        shadow: "hover:shadow-orange-500/25"
      }
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
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
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 mb-3 sm:mb-4 tracking-wide">
              Certifications
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 font-medium tracking-wide leading-relaxed">
              Professional certifications and achievements that validate my skills and expertise.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {certifications.map((cert, index) => {
                const colors = getColorClasses(cert.color)
                return (
                  <motion.a
                    key={cert.name}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                    whileHover={{ scale: 1.05, y: -8, rotate: 1 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl ${colors.shadow} transition-all duration-300 cursor-pointer overflow-hidden`}
                  >
                    {/* Background gradient overlay */}
                    <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center flex-1">
                        <div className={`p-2 sm:p-3 ${colors.bgLight} ${colors.bgLightDark} rounded-full mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <GraduationCap className={`h-4 w-4 sm:h-5 sm:w-5 ${colors.text} ${colors.textDark}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                            {cert.name}
                          </h3>
                          <p className={`text-xs sm:text-sm ${colors.text} ${colors.textDark} font-medium mt-1`}>
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                      
                      {/* External link icon */}
                      <div className={`p-2 rounded-full ${colors.bg} ${colors.bgHover} text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300`}>
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      </div>
                    </div>
                    
                    {/* Hover effect border */}
                    <div className={`absolute bottom-0 left-0 h-1 ${colors.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
