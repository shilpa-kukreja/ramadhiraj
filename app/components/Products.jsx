"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import {
  categories,
  defaultCategoryId,
  getProductsForCategory,
  getProductImageSrc,
} from "@/lib/products";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(defaultCategoryId);
  const activeProducts = getProductsForCategory(activeCategory);

  return (
    <>
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
              OUR PRODUCT PORTFOLIO
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-gray-900 mt-5 leading-tight">
              Industrial Emergency
              <span className="text-[#e21d23]"> Lighting Solutions</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mt-4 max-w-3xl mx-auto text-center">
              Reliable industrial lighting systems engineered for safety,
              durability, and dependable performance across critical operational
              environments.{" "}
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
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                {" "}
                {activeProducts.map((product, index) => (
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
                      <div className="relative h-[140px] md:h-[260px] overflow-hidden">
                        {" "}
                        <img
                          src={getProductImageSrc(product.image)}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-3 md:p-7">
                        <div className="mb-5">
                          <div className="w-12 group-hover:w-34 h-[2px] bg-[#e21d23] mb-5 transition-all duration-500" />
                          <h3 className="text-sm md:text-[18px] font-semibold text-gray-900 leading-snug line-clamp-1 md:line-clamp-1">
                            {" "}
                            {product.name}
                          </h3>
                        </div>

                        {/* <p className="text-sm text-gray-500 leading-relaxed mb-7 min-h-[30px]">
                          {product.specs}
                        </p> */}

                        <div className="relative overflow-hidden rounded-md">
                          {/* Shine Effect */}
                          <span className="absolute top-0 left-[-120%] h-full w-[50%] animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-10" />

                          <span className="relative block w-full py-2 md:py-3.5 rounded-md bg-[#e21d23] text-white text-xs md:text-base font-medium text-center group-hover:bg-red-700 transition">
                            {" "}
                            View Product
                          </span>
                        </div>
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
