"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Email" },
  ]

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">© 2025 Oludare Abraham. All rights reserved.</p>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start mt-1">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> and lots of coffee
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-2 rounded-full hover:bg-accent transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
