"use client"

import { motion } from "framer-motion"
import { Cloud, GitBranch, Container, Activity, Shield, Settings } from "lucide-react"
import DevOpsPipeline from "./devops-pipeline"

export default function ServicesSection() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure as Code",
      description:
        "Automate your cloud infrastructure with Terraform and IaC for consistent, scalable, and version-controlled deployments.",
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
      icon: Shield,
      title: "DevSecOps & Compliance",
      description:
        "Integrate security into your DevOps pipeline with automated scanning, compliance monitoring, and governance.",
      technologies: ["SonarQube", "Snyk", "Vault", "Falco"],
    },
    {
      icon: Container,
      title: "Kubernetes & Container Orchestration",
      description:
        "Deploy, scale, and manage containerized applications with Kubernetes, Docker, and advanced orchestration strategies.",
      technologies: ["Kubernetes", "Docker", "Helm", "Istio"],
    },
    {
      icon: Settings,
      title: "Automation at Scale",
      description:
        "Implement enterprise-grade automation solutions that reduce manual work and increase operational efficiency.",
      technologies: ["Ansible", "Puppet", "Chef", "Python"],
    },
    {
      icon: Activity,
      title: "Monitoring & Observability",
      description:
        "Gain complete visibility into your systems with comprehensive monitoring, logging, and alerting solutions.",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
    },
  ]

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

        <DevOpsPipeline services={services} />
      </div>
    </section>
  )
}