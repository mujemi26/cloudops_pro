"use client"

import { motion } from "framer-motion"

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <motion.div
      className={`bg-gray-200 dark:bg-gray-700 rounded-lg ${className}`}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  )
}

export function ServiceCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="mb-6">
        <Skeleton className="w-16 h-16 rounded-2xl mb-4" />
        <Skeleton className="h-6 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-6" />
      </div>
      <div className="flex flex-wrap gap-2">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-6 w-16 rounded-full" />
        ))}
      </div>
    </div>
  )
}

export function TestimonialSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 text-center shadow-2xl">
      <Skeleton className="w-12 h-12 mx-auto mb-6 rounded-lg" />
      <Skeleton className="h-6 w-full mb-4" />
      <Skeleton className="h-6 w-5/6 mx-auto mb-4" />
      <Skeleton className="h-6 w-4/6 mx-auto mb-8" />
      <div className="flex items-center justify-center space-x-4">
        <Skeleton className="w-16 h-16 rounded-full" />
        <div className="text-left">
          <Skeleton className="h-5 w-32 mb-2" />
          <Skeleton className="h-4 w-24 mb-1" />
          <Skeleton className="h-4 w-28" />
        </div>
      </div>
    </div>
  )
}
