"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  technologies: string[]
}

interface DevOpsPipelineProps {
  services: Service[]
}

export default function DevOpsPipeline({ services }: DevOpsPipelineProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  })

  // Smoother animation for the timeline fill
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="relative max-w-5xl mx-auto" ref={ref}>
      {/* The timeline bar */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 lg:left-1/2 lg:-translate-x-1/2">
        <motion.div
          className="h-full w-full bg-gradient-to-b from-blue-500 to-indigo-500"
          style={{ scaleY, transformOrigin: "top" }}
        />
      </div>

      <div className="space-y-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative flex items-start"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 top-5 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 z-10 lg:left-1/2"></div>

            <div
              className={`w-full pl-12 lg:w-1/2 ${
                index % 2 === 0 ? "lg:pl-0 lg:pr-12 lg:ml-0 lg:mr-auto" : "lg:pl-12 lg:ml-auto lg:mr-0"
              }`}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white dark:bg-gray-800">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{service.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}