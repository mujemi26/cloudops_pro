"use client"

import { motion, Variants } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Cloud, GitBranch, Container, Activity, Shield, Settings } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure as Code",
      description:
        "Automate your cloud infrastructure with Terraform, AWS CloudFormation, and Azure Resource Manager for consistent, scalable deployments.",
      technologies: ["Terraform", "AWS", "Azure", "GCP"],
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description:
        "Streamline your development workflow with automated testing, building, and deployment pipelines using industry-leading tools.",
      technologies: ["GitHub Actions", "Jenkins", "GitLab CI", "ArgoCD"],
    },
    {
      icon: Container,
      title: "Kubernetes & Container Orchestration",
      description:
        "Deploy, scale, and manage containerized applications with Kubernetes, Docker, and advanced orchestration strategies.",
      technologies: ["Kubernetes", "Docker", "Helm", "Istio"],
    },
    {
      icon: Activity,
      title: "Monitoring & Observability",
      description:
        "Gain complete visibility into your systems with comprehensive monitoring, logging, and alerting solutions.",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
    },
    {
      icon: Shield,
      title: "DevSecOps & Compliance",
      description:
        "Integrate security into your DevOps pipeline with automated security scanning, compliance monitoring, and governance.",
      technologies: ["SonarQube", "Snyk", "Vault", "Falco"],
    },
    {
      icon: Settings,
      title: "Automation at Scale",
      description:
        "Implement enterprise-grade automation solutions that reduce manual work and increase operational efficiency.",
      technologies: ["Ansible", "Puppet", "Chef", "Python"],
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="services" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Our DevOps Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive cloud and DevOps solutions tailored to accelerate your digital transformation journey
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}