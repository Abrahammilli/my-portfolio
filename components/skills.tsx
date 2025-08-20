"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  Code2, Code, Palette, FileJson2, GitBranch, ServerCog, Wrench, TerminalSquare,
  FileCode2, FileStack, FileJson, FileText, Atom, BookOpenCheck
} from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: Atom },
        { name: "JavaScript", icon: FileJson2 },
        { name: "HTML5", icon: Code },
        { name: "CSS3", icon: Palette },
        { name: "Tailwind CSS", icon: FileStack },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "Webpack", icon: Wrench },
        { name: "Vite", icon: TerminalSquare },
        { name: "Node.js", icon: ServerCog },
        { name: "REST APIs", icon: FileJson },
      ],
    },
    {
      title: "Currently Learning",
      skills: [
        { name: "React Native", icon: Atom },
        { name: "Next.js", icon: FileCode2 },
        { name: "Python", icon: FileText },
        { name: "Docker", icon: Code2 },
        { name: "React Router", icon: BookOpenCheck },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:px-6 lg:px-8  text-white overflow-hidden"
    >
      {/* Background blob */}
      <motion.div
        className="absolute -top-40 left-1/2 w-[60vw] h-[60vw] bg-blue-500/20 rounded-full blur-3xl animate-pulse -z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are the tools and technologies I use to build, create, and scale modern web experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg backdrop-blur-sm hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-center mb-4">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map(({ name, icon: Icon }) => (
                  <Badge
                    key={name}
                    className="text-sm py-1.5 px-3 flex items-center gap-2 bg-white/10 text-white hover:bg-white/20 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                    {name}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
