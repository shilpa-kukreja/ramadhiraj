"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  categories,
  defaultCategoryId,
  isValidCategoryId,
  getProductsForCategory,
  useCases,
  getProductImageSrc,
} from "@/lib/products";

function resolveCategoryId(urlCategory) {
  if (urlCategory && isValidCategoryId(urlCategory)) return urlCategory;
  return defaultCategoryId;
}

export default function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(() =>
    resolveCategoryId(categoryFromUrl),
  );
  const activeProducts = getProductsForCategory(activeCategory);

  useEffect(() => {
    setActiveCategory(resolveCategoryId(categoryFromUrl));
  }, [categoryFromUrl]);

  return (
    <>
      <Navbar />
      <section className="w-full">
        <div className=" w-full">
          <img
            src="/allproduct/banner.jpg"
            alt="Industrial lighting banner"
            className="w-full  sm:h-[300px] md:h-[400px] lg:h-[320px] object-cover object-center"
          />
        </div>
      </section>
      <section className="relative py-12 bg-gray-100 overflow-hidden">
        <div className="max-w-[1500px] mx-auto lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-6"
          >
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

                        {/* <p className="text-sm text-gray-500 leading-relaxed mb-2 min-h-[30px]">
                          {product.specs}
                        </p>

                        <p className="text-[#e21d23] font-semibold mb-5">
                          {product.price}
                        </p> */}

                       <div className="relative overflow-hidden rounded-md">
  
  {/* Shine Effect */}
  <span className="absolute top-0 left-[-120%] h-full w-[50%] animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-10" />

  <span className="relative block w-full py-3.5 rounded-md bg-[#e21d23] text-white font-medium text-center group-hover:bg-red-700 transition">
    View Product
  </span>

</div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* <div className="py-12">
              <div className="text-center mb-10">
                <span className="text-xs tracking-[0.4em] uppercase font-semibold text-[#e21d23]">
                  Applications & Industries
                </span>

                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-4">
                  Where These Products Are
                  <span className="text-[#e21d23]"> Used</span>
                </h3>

                <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
                  Our lighting and safety systems are trusted across multiple
                  industrial and commercial environments worldwide.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {useCases[activeCategory]?.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                    }}
                    className="group relative overflow-hidden rounded-[18px] bg-white border border-gray-100 hover:-translate-y-2 transition-all duration-700"
                  >
                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute bottom-0 left-0 p-8">
                        <div className="w-14 h-[2px] bg-[#e21d23] mb-5 group-hover:w-24 transition-all duration-500" />

                        <h4 className="text-2xl font-semibold text-white mb-3">
                          {item.name}
                        </h4>

                        <p className="text-gray-200 text-sm leading-relaxed max-w-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </>
  );
}
