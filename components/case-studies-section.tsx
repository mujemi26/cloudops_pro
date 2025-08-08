"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Clock, DollarSign } from "lucide-react"

const caseStudies = [
  {
    title: "E-commerce Platform Transformation",
    industry: "Retail",
    challenge: "Legacy monolithic architecture causing slow deployments and frequent downtime",
    solution: "Migrated to microservices on Kubernetes with automated CI/CD pipelines",
    results: [
      { metric: "75%", label: "Faster Deployments", icon: Clock },
      { metric: "99.9%", label: "Uptime Achieved", icon: TrendingUp },
      { metric: "50%", label: "Cost Reduction", icon: DollarSign },
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecommerce.jpg-KtOmU4glRwoEf38xH89JJ9z5PZ41hI.jpeg",
    bgColor: "from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-800",
  },
  {
    title: "FinTech Startup Scaling",
    industry: "Financial Services",
    challenge: "Rapid growth requiring scalable infrastructure and compliance requirements",
    solution: "Implemented Infrastructure as Code with automated security scanning and monitoring",
    results: [
      { metric: "10x", label: "Traffic Scaling", icon: TrendingUp },
      { metric: "90%", label: "Deployment Speed", icon: Clock },
      { metric: "100%", label: "Compliance Score", icon: TrendingUp },
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fintech.jpg-ra4mmWSDIIZ6zT2ouoJASPoinfeLyu.jpeg",
    bgColor: "from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-800",
  },
  {
    title: "Healthcare Platform Modernization",
    industry: "Healthcare",
    challenge: "HIPAA compliance requirements with need for high availability and disaster recovery",
    solution: "Multi-region cloud deployment with automated backup and compliance monitoring",
    results: [
      { metric: "99.99%", label: "Availability", icon: TrendingUp },
      { metric: "60%", label: "Cost Savings", icon: DollarSign },
      { metric: "100%", label: "HIPAA Compliant", icon: TrendingUp },
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/health.jpg-CFzzT6XWZ0cIIHM9u5BVOe9KXCLVrr.jpeg",
    bgColor: "from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-800",
  },
]

const CaseStudyCard = ({ study, i, progress, range, targetScale }: any) => {
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div className="sticky top-0 h-screen flex items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 5}vh)`,
        }}
        className={`relative h-[80vh] w-[90vw] max-w-6xl transform-gpu bg-gradient-to-br ${study.bgColor} rounded-3xl shadow-2xl`}
      >
        <Card className="w-full h-full overflow-hidden shadow-none border-0 bg-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* Content */}
            <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-white/70 dark:bg-gray-700 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full mb-4">
                  {study.industry}
                </span>
                <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {study.title}
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
                  <p className="text-gray-600 dark:text-gray-300">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                  <p className="text-gray-600 dark:text-gray-300">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Results</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {study.results.map((result: any, index: number) => (
                      <div key={index} className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                        <result.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                          {result.metric}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>

            {/* Image */}
            <div className="relative hidden lg:flex items-center justify-center p-8">
              <img
                src={study.image || "/placeholder.svg"}
                alt={study.title}
                className="w-full h-auto max-w-md object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

export default function CaseStudiesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <section id="case-studies" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Success Stories</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real results from real clients. See how we've helped businesses transform their operations
          </p>
        </motion.div>
      </div>

      <div ref={containerRef} className="relative h-[300vh]">
        {caseStudies.map((study, i) => {
          const targetScale = 1 - (caseStudies.length - i) * 0.05
          const range: [number, number] = [i / caseStudies.length, 1]
          return <CaseStudyCard key={i} i={i} {...{ study, progress: scrollYProgress, range, targetScale }} />
        })}
      </div>
    </section>
  )
}