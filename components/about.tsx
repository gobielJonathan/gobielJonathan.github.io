"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"

export default function About() {
  const isMobile = useMobile()

  return (
    <section id="about" className="py-24">
      <div className="w-full max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-16 h-1 bg-primary mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="relative">
              <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Your Name"
                  fill
                  className="object-cover"
                  priority
                />
                <motion.div
                  initial={{ height: "100%" }}
                  whileInView={{ height: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute inset-0 bg-primary z-10"
                ></motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-4 -right-4 h-24 w-24 border-2 border-primary rounded-lg hidden md:block"
              ></motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building modern web applications. With over 5
              years of experience, I specialize in creating responsive, user-friendly interfaces and robust backend
              systems.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My journey in web development started when I was in college, and since then, I've worked with various
              technologies and frameworks to deliver high-quality solutions for clients across different industries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Name</h4>
                <p className="font-medium">Your Name</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Email</h4>
                <p className="font-medium">your.email@example.com</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Location</h4>
                <p className="font-medium">City, Country</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Availability</h4>
                <p className="font-medium">Available for freelance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

