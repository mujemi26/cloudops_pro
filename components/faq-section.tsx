"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is DevOps and why is it important?",
    answer:
      "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. It's important for increasing an organization's speed to deliver applications and services.",
  },
  {
    question: "Which cloud platforms do you support?",
    answer:
      "We are cloud-agnostic and have extensive experience with all major cloud providers, including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). We can help you choose the best platform for your needs or work with your existing infrastructure.",
  },
  {
    question: "How do you ensure the security of our infrastructure?",
    answer:
      "We practice DevSecOps, integrating security into every stage of the development lifecycle. This includes automated security scanning, infrastructure as code (IaC) security analysis, compliance monitoring, and implementing the principle of least privilege.",
  },
  {
    question: "Can you help us migrate our existing application to the cloud?",
    answer:
      "Absolutely. We specialize in cloud migration projects, from planning and assessment to execution and post-migration optimization. We can help you with lift-and-shift, re-platforming, or a complete re-architecture for a cloud-native approach.",
  },
  {
    question: "What kind of cost savings can we expect?",
    answer:
      "Our clients typically see significant cost savings through cloud resource optimization, automation of manual tasks, and improved operational efficiency. We focus on right-sizing infrastructure and leveraging auto-scaling to ensure you only pay for what you use.",
  },
  {
    question: "How long does it take to set up a CI/CD pipeline?",
    answer:
      "The timeline can vary depending on the complexity of your application and existing infrastructure. However, for a standard application, we can often have a basic, functional CI/CD pipeline up and running within a few weeks.",
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-50 dark:bg-gray-800 rounded-xl border px-6 transition-all duration-300 hover:shadow-lg"
              >
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 dark:text-gray-300 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}