"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Advanced Weather Station",
    description:
      "Advance-Weather-Station is a feature-rich full-stack weather application utilizing React, Next.js, and TypeScript. It provides real-time weather updates via the OpenWeatherMap API, supports geolocation, voice assistant, dynamic maps, and AI-powered weather tips. The app delivers an engaging, mobile-first user experience through responsive design, weather-based theming, interactive charts, and performance enhancements.",
    image: "/images/weatherapp.png", 
    technologies: ["React", "JavaScript", "CSS", "Local Storage"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ankit052003",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "Built a high-performance e-commerce website using React, TypeScript, and Tailwind CSS. Optimized for fast load times and responsive design, achieving 15% boost in conversions and 40% speed improvement.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ankit052003",
  },
  {
    id: 3,
    title: "OMR Evaluation & Text Extraction",
    description:
      "Built a Flask-based system using Python, OpenCV, and Tesseract OCR for automated OMR evaluation. Integrated Groq LLaMA 3.2 90B achieving 80% detection and 75% handwriting extraction accuracy.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "Flask", "OpenCV", "Tesseract OCR", "LLaMA"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ankit052003",
  },
  {
    id: 4,
    title: "Calculator",
    description:
      "Developed a responsive calculator using JavaScript, HTML, and CSS with cross-device compatibility. Improved user efficiency by 40% and reduced load times by 25% with optimized interface.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["JavaScript", "HTML", "CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ankit052003",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({})

  const toggleProjectDescription = (projectId: number) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 mb-3 sm:mb-4 tracking-wide">Featured Projects</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full mx-auto mb-4 sm:mb-6" />
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 font-medium tracking-wide leading-relaxed">
              Here are some of my recent projects that showcase my skills and passion for creating amazing digital
              experiences.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden h-full group hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2 sm:space-x-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm">
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                          <span className="hidden sm:inline">Live Demo</span>
                          <span className="sm:hidden">Demo</span>
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm">
                          <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center tracking-wide">{project.title}</h3>
                    
                    <div className="mb-3 sm:mb-4">
                      <p className={`text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed ${
                        expandedProjects[project.id] ? '' : 'line-clamp-3'
                      }`}>
                        {project.description}
                      </p>
                      
                      {project.description.length > 150 && (
                        <button
                          onClick={() => toggleProjectDescription(project.id)}
                          className="mt-2 flex items-center text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
                        >
                          {expandedProjects[project.id] ? (
                            <>
                              <span>Show less</span>
                              <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                            </>
                          ) : (
                            <>
                              <span>Read more</span>
                              <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
