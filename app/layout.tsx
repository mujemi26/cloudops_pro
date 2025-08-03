import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CloudOps Pro - DevOps Solutions & Cloud Infrastructure Services",
  description:
    "Accelerate your cloud journey with expert DevOps solutions. We provide cloud infrastructure automation, CI/CD pipelines, Kubernetes orchestration, and managed services for enterprises and startups.",
  keywords: "DevOps, Cloud Infrastructure, CI/CD, Kubernetes, AWS, Azure, Terraform, Docker, Automation",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
