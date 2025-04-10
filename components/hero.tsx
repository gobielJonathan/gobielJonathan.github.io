"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import Link from "next/link"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useMobile()

  // Animated background shapes
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const shapes: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      type: "circle" | "square" | "triangle"
    }[] = []

    // Create random shapes - fewer shapes for cleaner look
    for (let i = 0; i < 8; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 40 + 10, // Smaller shapes
        speedX: (Math.random() - 0.5) * 0.3, // Slower movement
        speedY: (Math.random() - 0.5) * 0.3,
        color: `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(
          Math.random() * 100,
        )}, ${Math.floor(Math.random() * 255)}, 0.05)`, // More transparent
        type: ["circle", "square"][Math.floor(Math.random() * 2)] as any, // Only circles and squares
      })
    }

    const drawShapes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      shapes.forEach((shape) => {
        ctx.fillStyle = shape.color
        ctx.beginPath()

        if (shape.type === "circle") {
          ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2)
        } else if (shape.type === "square") {
          ctx.rect(shape.x - shape.size / 2, shape.y - shape.size / 2, shape.size, shape.size)
        }

        ctx.closePath()
        ctx.fill()

        // Update position
        shape.x += shape.speedX
        shape.y += shape.speedY

        // Bounce off walls
        if (shape.x < 0 || shape.x > canvas.width) shape.speedX *= -1
        if (shape.y < 0 || shape.y > canvas.height) shape.speedY *= -1
      })

      requestAnimationFrame(drawShapes)
    }

    drawShapes()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" aria-hidden="true" />
      <div className="w-full max-w-4xl mx-auto px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm <span className="text-primary">Gobiel 👋</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 text-muted-foreground max-w-2xl"
        >
          Full Stack Developer creating modern digital experiences
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <Link href={'#projects'}>
          <Button size={isMobile ? "default" : "lg"}>View My Work</Button>
          </Link>
          <Button size={isMobile ? "default" : "lg"} variant="outline" onClick={() => {
            window.open("https://drive.google.com/file/d/1a1-wxCLWo7g_69liq2J3YrXAMpy06GnA/view", "_blank")
          }}>
            Download CV
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="h-8 w-8 text-muted-foreground" />
      </motion.div>
    </section>
  )
}

