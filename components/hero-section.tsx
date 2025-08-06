"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Download, Twitter } from "lucide-react" // Added Twitter icon
import { Button } from "@/components/ui/button"
import { SimpleTypewriter } from "@/components/simple-typewriter"

export default function HeroSection() {
  // Fixed positions and timing to prevent hydration mismatch
  const backgroundElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: ((i * 17 + 23) % 100),
    top: ((i * 23 + 37) % 100),
    duration: (i % 5 + 8),
    delay: (i % 8),
  }))

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
    hidden: { opacity: 0, y: 30 },
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-black" />
      
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {backgroundElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full shadow-lg shadow-blue-400/20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: element.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
            }}
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent tracking-tight leading-tight"
        >
          Ankit Kumar
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-6 sm:mb-8 font-light px-2 tracking-wide"
        >
          <SimpleTypewriter 
            text="Full Stack Web Developer" 
            speed={100}
            delay={1000}
          />
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2 font-medium tracking-wide"
        >
          <SimpleTypewriter 
            text="A passionate and skilled full-stack web developer with strong expertise in React, TypeScript, and MERN stack technologies. Experienced in building high-performance applications and AI-integrated tools."
            speed={30}
            delay={3000}
          />
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              size="lg" 
              className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 tracking-wide"
            >
              <a href="#projects" className="flex items-center justify-center font-bold">
                Projects
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="group w-full sm:w-auto border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-full backdrop-blur-sm hover:border-white/50 transition-all duration-300 hover:shadow-lg tracking-wide"
            >
              <a href="#contact" className="flex items-center justify-center font-bold">
                Get In Touch
                <Mail className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              variant="secondary" 
              size="lg" 
              asChild 
              className="group w-full sm:w-auto bg-white/90 hover:bg-white text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 tracking-wide"
            >
              <a
                href="https://drive.google.com/file/d/1AWoMlNqy2Bx2RBY-UihlLtpbk3cri3En/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center font-bold"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                My Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center space-x-4 sm:space-x-6">
          {[
            { icon: Github, href: "https://github.com/Ankit052003", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/ankit-kumar-501356301", label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Email" },
            { icon: Twitter, href: "https://x.com/ANKITKUMAR21063?t=kn8wXH363ZoshJFl0CCJ5g&s=09", label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              aria-label={label}
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:scale-110 transition-transform duration-300" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
