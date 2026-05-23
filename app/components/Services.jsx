"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Environmental Impact Assessments",
      description:
        "Structured environmental audits ensuring regulatory compliance, risk mitigation, and sustainable industrial development.",
    },
    {
      id: 2,
      title: "Health & Safety Risk Management",
      description:
        "Comprehensive workplace hazard analysis and preventive safety frameworks designed for high-risk industrial environments.",
    },
    {
      id: 3,
      title: "Regulatory Documentation & Compliance",
      description:
        "End-to-end support for statutory filings, ISO documentation, and industry compliance reporting systems.",
    },
    {
      id: 4,
      title: "On-site Safety Training Programs",
      description:
        "Industry-focused safety training modules designed to strengthen workforce awareness and operational discipline.",
    },
  ];

  return (
    <section className="py-12 bg-gray-200 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-amber-50/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* HEADER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="text-center max-w-4xl mx-auto mb-10"
        >
          <motion.p
            variants={fadeUp}
            className="text-[#e21d23] text-xs tracking-[0.3em] uppercase font-semibold"
          >
            What We Offer
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-4xl font-semibold text-gray-900 mt-4"
          >
            EHS Consultancy Services
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 mt-4 text-lg leading-relaxed"
          >
            Certified environmental, health, and safety consulting solutions designed
            for modern industries focusing on compliance, risk reduction, and operational excellence.
          </motion.p>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              className="group relative"
            >
              {/* premium border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-100 via-white to-gray-100 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

              <div className="relative h-full rounded-xl bg-white border border-gray-100 p-8 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">

                {/* top accent line */}
                <div className="w-12 h-1 bg-[#e21d23] rounded-full mb-5 group-hover:w-20 transition-all duration-500" />

                <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-justify text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* bottom subtle line */}
                <div className="mt-6 h-[1px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-[#e21d23] to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}