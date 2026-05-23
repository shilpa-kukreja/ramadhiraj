"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import Navbar from "./Navbar";
import {
  categories,
  productsByCategory,
  getProductImageSrc,
} from "@/lib/products";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("emergency");

  return (
    <>
      <Navbar />

      <section className="relative py-24 sm:mt-10 bg-gray-100 overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-6"
          >
            <span className="text-xs tracking-[0.4em] uppercase font-semibold text-[#e21d23]">
              Our Product Portfolio
            </span>

            <h2 className="text-4xl md:text-4xl lg:text-4xl font-semibold text-gray-900 mt-5 leading-tight">
              Industrial Lighting
              <span className="text-[#e21d23]"> Solutions</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mt-4 max-w-3xl mx-auto text-center">
              Premium BIS-certified lighting systems engineered for industrial
              safety and reliability.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-500 border
                ${
                  activeCategory === category.id
                    ? "bg-[#e21d23] text-white border-[#e21d23]"
                    : "bg-white text-gray-700 border-gray-200 hover:border-[#e21d23] hover:text-[#e21d23]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {productsByCategory[activeCategory].map((product, index) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="block group"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.08,
                      }}
                      className="relative bg-white rounded-[14px] overflow-hidden border border-gray-100 hover:-translate-y-2 transition-all duration-700 h-full"
                    >
                      <div className="relative h-[260px] overflow-hidden">
                        <img
                          src={getProductImageSrc(product.image)}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-7">
                        <div className="mb-5">
                          <div className="w-12 h-[2px] bg-[#e21d23] mb-5" />

                          <h3 className="text-[22px] font-semibold text-gray-900 leading-snug line-clamp-1">
                            {product.name}
                          </h3>
                        </div>

                        <p className="text-sm text-gray-500 leading-relaxed mb-7 min-h-[30px]">
                          {product.specs}
                        </p>

                        <span className="block w-full py-3.5 rounded-md bg-[#e21d23] text-white font-medium text-center group-hover:bg-red-700 transition">
                          View Product
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
