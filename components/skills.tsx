"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Layout, Layers, PenTool, Server, Settings, Smartphone } from "lucide-react"

const skills = [
  {
    category: "Frontend Development",
    icon: <Layout className="h-10 w-10 text-primary" />,
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js"],
  },
  {
    category: "Backend Development",
    icon: <Server className="h-10 w-10 text-primary" />,
    items: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel"],
  },
  {
    category: "Database",
    icon: <Database className="h-10 w-10 text-primary" />,
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"],
  },
  {
    category: "UI/UX Design",
    icon: <PenTool className="h-10 w-10 text-primary" />,
    items: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    items: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    category: "DevOps",
    icon: <Settings className="h-10 w-10 text-primary" />,
    items: ["Git", "Docker", "Kubernetes", "AWS", "CI/CD", "Vercel"],
  },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my career. Here are some of my key skills
            and expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div key={skill.category} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{skill.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.items.map((item) => (
                      <motion.span
                        key={item}
                        className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-card rounded-lg p-8 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Coding Journey</h3>
              <p className="text-muted-foreground mb-4">
                I started coding when I was in high school and have been passionate about it ever since. Over the years,
                I've worked on various projects and continuously expanded my skill set to stay up-to-date with the
                latest technologies.
              </p>
              <p className="text-muted-foreground">
                I believe in writing clean, maintainable code and creating intuitive user experiences. I'm always eager
                to learn new technologies and tackle challenging problems.
              </p>
            </div>
            <div className="relative">
              <Code className="h-40 w-40 text-primary/20 absolute -top-10 -right-10 rotate-12" />
              <Layers className="h-32 w-32 text-primary/20 absolute -bottom-8 -left-8 -rotate-12" />
              <div className="bg-muted rounded-lg p-6 relative z-10">
                <div className="mb-4">
                  <div className="text-lg font-bold">Years of Experience</div>
                  <div className="w-full bg-muted-foreground/20 h-2 rounded-full mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-primary h-2 rounded-full"
                    ></motion.div>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>0</span>
                    <span>5+</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-lg font-bold">Projects Completed</div>
                  <div className="w-full bg-muted-foreground/20 h-2 rounded-full mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="bg-primary h-2 rounded-full"
                    ></motion.div>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>0</span>
                    <span>50+</span>
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold">Client Satisfaction</div>
                  <div className="w-full bg-muted-foreground/20 h-2 rounded-full mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="bg-primary h-2 rounded-full"
                    ></motion.div>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

