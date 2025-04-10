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
                  src="/me.jpg"
                  alt="Jonathan Gobiel"
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
            I'm a passionate Full Stack Engineer with over 5 years of experience building modern, scalable web applications. While my core expertise lies in frontend development—using technologies like Vue 3, React, and TypeScript—I also have solid backend experience working with Node.js and PHP to deliver robust, end-to-end solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My journey in web development started when I was in college, and since then, I've worked with various
              technologies and frameworks to deliver high-quality solutions for clients across different industries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Name</h4>
                <p className="font-medium">Jonathan Gobiel</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Email</h4>
                <p className="font-medium">jonathangobiel13@gmail.com</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Location</h4>
                <p className="font-medium">Jakarta, Indonesia</p>
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

