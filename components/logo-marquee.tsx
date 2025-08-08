"use client"

import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface Logo {
  name: string
  logo: string
}

interface LogoMarqueeProps {
  logos: Logo[]
  className?: string
  duration?: number
}

export default function LogoMarquee({ logos, className, duration = 40 }: LogoMarqueeProps) {
  const marqueeVariants: Variants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      },
    },
  }

  return (
    <div className={cn("w-full overflow-x-hidden", className)}>
      <motion.div
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-8 md:px-12 py-4 flex items-center justify-center"
            style={{ minWidth: "160px" }}
          >
            <img
              src={logo.logo}
              alt={logo.name}
              className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}