"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, TrendingUp, Clock, DollarSign } from "lucide-react"

export default function CaseStudiesSection() {
  const [currentCase, setCurrentCase] = useState(0)

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
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecommerce.jpg-KtOmU4glRwoEf38xH89JJ9z5PZ41hI.jpeg",
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
    },
  ]

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length)
  }

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

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

        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCase}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden shadow-2xl border-0 bg-white dark:bg-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Content */}
                  <CardContent className="p-8 lg:p-12">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                        {caseStudies[currentCase].industry}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {caseStudies[currentCase].title}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
                        <p className="text-gray-600 dark:text-gray-300">{caseStudies[currentCase].challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                        <p className="text-gray-600 dark:text-gray-300">{caseStudies[currentCase].solution}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Results</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {caseStudies[currentCase].results.map((result, index) => (
                            <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
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
                  <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
                    <img
                      src={caseStudies[currentCase].image || "/placeholder.svg"}
                      alt={caseStudies[currentCase].title}
                      className="w-full h-auto max-w-md object-contain"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button variant="outline" size="sm" onClick={prevCase} className="p-2 bg-transparent">
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCase(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentCase ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={nextCase} className="p-2 bg-transparent">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
