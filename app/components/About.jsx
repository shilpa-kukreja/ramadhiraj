"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

/* ---------- Animation Variants ---------- */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function About() {
  return (
    <section className="relative py-12 bg-gray-100 overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-amber-50/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-[#e21d23] font-medium tracking-[0.25em] uppercase text-xs"
          >
            About Our Company
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-4xl font-semibold text-gray-900 mt-4 leading-tight"
          >
            Engineering Safety with
            <br />
            Precision & Reliability
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 mt-4 text-lg leading-relaxed"
          >
            Delivering high-performance industrial emergency lighting solutions
            designed to support safety, visibility, and dependable operation
            across critical industrial environments.{" "}
          </motion.p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-gray-100">
              <img
                src="/about/1.jpg"
                alt="Industrial Facility"
                className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-7"
          >
            <motion.div variants={fadeRight}>
              <h3 className="text-2xl font-semibold text-gray-900">
                BIS-Certified Industrial Emergency Lighting Solutions{" "}
              </h3>
              <div className="w-16 h-0.5 bg-[#e21d23] mt-4" />
            </motion.div>

            <motion.p
              variants={fadeRight}
              className="text-gray-600 leading-relaxed text-justify"
            >
              Ramadhiraj Power Systems Pvt. Ltd. specializes in manufacturing
              industrial emergency lighting systems engineered for performance,
              durability, and operational reliability. Our solutions are
              designed to support critical environments where safety and
              uninterrupted visibility are essential.
            </motion.p>

            <motion.p
              variants={fadeRight}
              className="text-gray-600 leading-relaxed text-justify"
            >
              With a strong focus on quality manufacturing and industry
              standards, we deliver dependable lighting systems trusted across
              factories, warehouses, infrastructure projects, commercial
              facilities, and industrial operations.
            </motion.p>

            <motion.p
              variants={fadeRight}
              className="text-gray-600 leading-relaxed text-justify"
            >
              Backed by technical expertise and a commitment to innovation, we
              continue to provide reliable safety lighting solutions built for
              modern industrial requirements.
            </motion.p>

            {/* CTA BUTTON */}
            <motion.div variants={fadeUp} className="pt-6">
              <button className="relative overflow-hidden px-5 py-3 rounded-md bg-[#e21d23] text-white font-medium tracking-wide shadow-lg">
                {/* Shine Effect */}
                <span className="absolute top-0 left-[-120%] h-full w-[50%] animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />

                <Link href="/about" className="relative z-10">
                  Learn More
                </Link>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
