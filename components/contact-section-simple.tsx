"use client"

import React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ankitaur2022@gmail.com",
      href: "mailto:ankitaur2022@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-6200196357",
      href: "tel:+916200196357",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bhubaneswar, Odisha",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-green-600 to-emerald-600 mb-3 sm:mb-4 tracking-wide">
              Get In Touch
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-teal-500 via-green-500 to-emerald-500 mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 font-medium tracking-wide leading-relaxed">
              I'm always open to discussing new opportunities and interesting projects. Let's connect!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center lg:text-left">Let's Connect</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-center lg:text-left">
                  I'm always open to discussing new opportunities, innovative projects, or potential collaborations.
                  Let's build something amazing together!
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={info.href}
                      className="flex items-center p-3 sm:p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-700"
                    >
                      <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400 mr-3 sm:mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm sm:text-base">{info.title}</p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{info.value}</p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Simple Contact Message */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">Send a Message</h3>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                  Feel free to reach out via email or phone. I'll get back to you as soon as possible!
                </p>
                <div className="text-center">
                  <a
                    href="mailto:ankitaur2022@gmail.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
