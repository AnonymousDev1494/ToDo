"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Eye } from "lucide-react"
import { Button } from "./ui/button"

export default function BestSellers() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const bestSellers = [
    {
      id: 1,
      title: "Kaju Barfi",
      category: "Cashew Based",
      rating: 4.8,
      price: "₹750/kg",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Soan Papdi",
      category: "Flaky Sweet",
      rating: 4.6,
      price: "₹450/kg",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Rasmalai",
      category: "Bengali Sweet",
      rating: 4.9,
      price: "₹650/kg",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Besan Ladoo",
      category: "Gram Flour Based",
      rating: 4.7,
      price: "₹550/kg",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Mysore Pak",
      category: "South Indian",
      rating: 4.5,
      price: "₹600/kg",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Peda",
      category: "Milk Based",
      rating: 4.4,
      price: "₹500/kg",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Our Best Sellers
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {bestSellers.map((sweet) => (
            <motion.div
              key={sweet.id}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="sweet-[#ffffff] group"
            >
              <div className="relative aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={sweet.thumbnail || "/placeholder.svg"}
                  alt={sweet.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" className="bg-[#e94560] hover:bg-[#e94560]/90 text-white rounded-full h-12 w-12">
                    <Eye className="h-6 w-6" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="text-white font-bold">{sweet.price}</div>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800">
                <h3 className="font-semibold text-lg mb-1">{sweet.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{sweet.category}</p>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                  <span className="text-sm font-medium">{sweet.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

