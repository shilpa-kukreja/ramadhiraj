"use client";

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

const leftSlide = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const rightItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function WhyChooseUs() {
  const features = [
    {
      title: "BIS & ISO Certified",
      desc: "Fully compliant systems ensuring safety, quality, and regulatory approval.",
    },
    {
      title: "Pan India Presence",
      desc: "Strong nationwide network for fast deployment and support.",
    },
    {
      title: "End-to-End Solutions",
      desc: "Manufacturing + EHS consulting under one integrated system.",
    },
    {
      title: "Expert Engineering Team",
      desc: "Industry professionals with deep compliance and safety expertise.",
    },
    {
      title: "24/7 Support",
      desc: "Continuous assistance for industrial and emergency requirements.",
    },
    {
      title: "Cost Efficient Approach",
      desc: "Optimized pricing with no compromise on quality or compliance.",
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">

      {/* background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gray-50 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.35em] uppercase text-[#e21d23] font-semibold">
            Why Ramadhiraj
          </span>

          <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 mt-5">
            Why Choose Us
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-justify">
            A trusted industrial partner delivering certified manufacturing and EHS consultancy solutions
            built for safety, compliance, and long-term reliability.
          </p>
        </div>

        {/* MAIN GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >

          {/* LEFT SIDE */}
          <motion.div variants={leftSlide} className="space-y-8">

            <div className="space-y-5">
              <div className="w-20 h-[2px] bg-[#e21d23]" />

              <h3 className="text-3xl font-semibold text-gray-900 leading-tight">
                Engineering Safety
                <br />
                <span className="text-[#e21d23]">with Precision & Trust</span>
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                We combine industrial manufacturing excellence with advanced EHS consultancy
                to help businesses achieve compliance, reduce risks, and operate safely at scale.
              </p>
            </div>

            {/* badge */}
            <div className="inline-flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-full border border-gray-200">
              <p className="text-sm text-gray-700">
                Trusted by Industrial Enterprises Across India
              </p>
            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={rightItem}
                className="border border-gray-200 rounded-xl p-6 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >

                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  {item.desc}
                </p>

                <div className="w-0 h-[2px] bg-[#e21d23] mt-3 group-hover:w-14 transition-all duration-500" />
              </motion.div>
            ))}

          </div>

        </motion.div>
      </div>
    </section>
  );
}