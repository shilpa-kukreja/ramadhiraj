"use client";
// components/Industries.jsx

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Industries() {
  const industries = [
    {
      id: 1,
      name: "Airport Infrastructure",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
      description:
        "Terminal lighting systems, emergency evacuation guidance, and critical passenger safety infrastructure.",
    },

    {
      id: 2,
      name: "Metro & Rail",
      image: "/industries/industries1.jpg",
      description:
        "Platform lighting, underground tunnel safety, and emergency exit systems for public transit.",
    },

    {
      id: 3,
      name: "Healthcare & Hospitals",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
      description:
        "Reliable lighting for operation theaters, ICUs, corridors, and critical healthcare facilities.",
    },

    {
      id: 4,
      name: "Hospitality & Hotels",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Premium emergency lighting and compliance systems for hospitality environments.",
    },

    {
      id: 5,
      name: "Industrial Infrastructure",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
      description:
        "Heavy-duty lighting systems engineered for infrastructure, tunnels, and industrial facilities.",
    },

    {
      id: 6,
      name: "Automobile Manufacturing",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop",
      description:
        "Assembly line lighting and industrial safety systems for automotive production plants.",
    },

    {
      id: 7,
      name: "Thermal Power Plants",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
      description:
        "Hazardous area lighting solutions designed for power generation and control environments.",
    },

    {
      id: 8,
      name: "Process Industries",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
      description:
        "Reliable industrial lighting systems for chemical, pharmaceutical, and refinery operations.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12">
      {/* LIGHT BACKGROUND EFFECTS */}
      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full  blur-2xl" />

      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-gray-200/60 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-12 max-w-4xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#e21d23]">
            Industries We Serve
          </span>

          <h2 className="mt-5 text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
            Trusted Across
            <span className="text-[#e21d23]">
              {" "}
              Critical Industries
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            Delivering industrial-grade lighting and safety systems engineered
            for mission-critical environments where compliance, durability, and
            operational excellence matter most.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              variants={cardAnimation}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.28,
                  ease: "easeOut",
                },
              }}
              className="group relative h-[430px] overflow-hidden rounded-[26px] will-change-transform transform-gpu"
            >
              {/* IMAGE */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />

              {/* BORDER */}
              <div className="absolute inset-0 rounded-[26px] border border-white/10" />

              {/* TOP LINE */}
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#e21d23] transition-all duration-500 ease-out group-hover:w-full" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                {/* MINI LINE */}
                <div className="mb-5 h-[2px] w-[55px] bg-[#e21d23] transition-all duration-500 ease-out group-hover:w-[100px]" />

                <h3 className="mb-3 text-[26px] font-semibold leading-tight text-white">
                  {industry.name}
                </h3>

                <p className="text-sm leading-relaxed text-white/80">
                  {industry.description}
                </p>

                {/* BUTTON */}
                {/* <div className="mt-6"> */}
                  {/* <button className="relative overflow-hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-lg transition-all duration-300 hover:scale-[1.03]"> */}
                
                    {/* <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-[1400ms] group-hover:translate-x-full" />

                    <span className="relative z-10">
                      Explore Industry
                    </span> */}
                  {/* </button> */}
                {/* </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}