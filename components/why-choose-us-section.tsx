"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, DollarSign, TrendingUp, Headphones, Award, Users } from "lucide-react"
import LogoMarquee from "./logo-marquee"

export default function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Faster Deployments",
      description:
        "Reduce deployment time from hours to minutes with automated CI/CD pipelines and infrastructure as code.",
      metric: "10x Faster",
    },
    {
      icon: DollarSign,
      title: "Reduced Cloud Costs",
      description: "Optimize your cloud spending with right-sizing, auto-scaling, and efficient resource management.",
      metric: "Save 60%",
    },
    {
      icon: TrendingUp,
      title: "Automation at Scale",
      description: "Scale your operations efficiently with enterprise-grade automation and orchestration solutions.",
      metric: "99.9% Uptime",
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "24/7 support from certified DevOps engineers and cloud architects with years of experience.",
      metric: "24/7 Support",
    },
  ]

  const trustLogos = [
    { name: "AWS", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aws.svg-VpWwZ4yCgGkIqgQYgY8Z8Z8Z8Z8Z8Z.svg" },
    { name: "Azure", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/azure.svg-Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8.svg" },
    { name: "Google Cloud", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gcp.svg-YgYgYgYgYgYgYgYgYgYgYgYgYgYgYg.svg" },
    { name: "Kubernetes", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kubernetes.svg-Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8.svg" },
    { name: "Docker", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/docker.svg-VpWwZ4yCgGkIqgQYgY8Z8Z8Z8Z8Z8Z.svg" },
    { name: "Terraform", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/terraform.svg-YgYgYgYgYgYgYgYgYgYgYgYgYgYgYg.svg" },
    { name: "GitLab", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gitlab.svg-Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8.svg" },
  ]

  return (
    <section
      id="why-us"
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose CloudOps Pro?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We deliver measurable results that transform your business operations and accelerate growth
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white dark:bg-gray-800">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{benefit.metric}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Trusted by Industry Leaders & Partners
          </h3>
          <LogoMarquee logos={trustLogos} />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Users, number: "500+", label: "Happy Clients" },
            { icon: Award, number: "1000+", label: "Projects Completed" },
            { icon: TrendingUp, number: "99.9%", label: "Success Rate" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}