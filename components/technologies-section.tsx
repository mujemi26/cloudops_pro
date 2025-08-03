"use client"

import { motion } from "framer-motion"
import { Code, BarChart3, Package } from "lucide-react"
import { Cloud, Container, Settings, GitBranch } from "lucide-react"

export default function TechnologiesSection() {
  const technologies = [
    { name: "AWS", icon: Cloud, category: "Cloud", color: "text-orange-500" },
    { name: "Docker", icon: Container, category: "Containers", color: "text-blue-500" },
    { name: "Kubernetes", icon: Settings, category: "Orchestration", color: "text-blue-600" },
    { name: "Terraform", icon: Code, category: "IaC", color: "text-purple-600" },
    { name: "Jenkins", icon: GitBranch, category: "CI/CD", color: "text-blue-700" },
    { name: "Prometheus", icon: Cloud, category: "Monitoring", color: "text-orange-600" },
    { name: "Grafana", icon: BarChart3, category: "Visualization", color: "text-orange-500" },
    { name: "GitLab", icon: GitBranch, category: "DevOps", color: "text-orange-600" },
    { name: "Azure", icon: Cloud, category: "Cloud", color: "text-blue-600" },
    { name: "Ansible", icon: Settings, category: "Automation", color: "text-red-600" },
    { name: "Helm", icon: Package, category: "Package Manager", color: "text-blue-500" },
    { name: "ArgoCD", icon: GitBranch, category: "GitOps", color: "text-orange-500" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="technologies"
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Technologies We Master</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We work with the latest and most reliable tools in the DevOps ecosystem to deliver exceptional results
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <tech.icon
                      className={`w-12 h-12 ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{tech.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Background Elements */}
        <div className="relative mt-20">
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-5"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 60,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div className="w-96 h-96 border-2 border-blue-600 rounded-full"></div>
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-5"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 45,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div className="w-64 h-64 border-2 border-indigo-600 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
