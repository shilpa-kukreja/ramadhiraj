"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const industries = [
  {
    id: 1,
    name: "Airport Infrastructure",
    image: "/industries/1.jpg",
    description:
      "Emergency lighting systems designed for terminals, passenger movement areas, and critical transit operations.",
  },
  {
    id: 2,
    name: "Metro & Rail",
    image: "/industries/2.jpg",
    description:
      "Reliable lighting solutions for rail corridors, stations, tunnels, and transportation networks.",
  },
  {
    id: 3,
    name: "Healthcare & Hospitals",
    image: "/industries/3.jpg",
    description:
      "Efficient emergency lighting designed for hospitals, healthcare facilities, and patient-care environments.",
  },
  {
    id: 4,
    name: "Hospitality & Hotels",
    image: "/industries/4.jpg",
    description:
      "Modern safety lighting systems developed for hotels, resorts, and commercial hospitality spaces.",
  },
  {
    id: 5,
    name: "Industrial Infrastructure",
    image: "/industries/5.jpg",
    description:
      "Heavy-duty emergency lighting solutions built for factories, plants, and infrastructure projects.",
  },
  {
    id: 6,
    name: "Automobile Manufacturing",
    image: "/industries/6.jpg",
    description:
      "Industrial lighting systems supporting assembly units, manufacturing lines, and production facilities.",
  },
  {
    id: 7,
    name: "Power & Energy Plants",
    image: "/industries/7.jpg",
    description:
      "Reliable lighting solutions engineered for demanding power generation and industrial utility environments.",
  },
  {
    id: 8,
    name: "Electronics & Engineering",
    image: "/industries/8.jpg",
    description:
      "Precision-focused industrial lighting systems designed for technical and engineering operations.",
  },
  {
    id: 9,
    name: "Process Industries",
    image: "/industries/9.jpg",
    description:
      "Dependable emergency lighting solutions for process-driven industrial applications and facilities.",
  },
  {
    id: 10,
    name: "FMCG & Warehousing",
    image: "/industries/10.jpg",
    description:
      "Efficient lighting systems for warehouses, logistics centers, storage units, and distribution operations.",
  },
  {
    id: 11,
    name: "Textile & Export Units",
    image: "/industries/textile.jpg",
    description:
      "Industrial lighting solutions tailored for large-scale manufacturing and export-oriented facilities.",
  },
];

function IndustryCard({ industry, index, visible }) {
  return (
    <article
      className={`group relative h-[240px] md:h-[430px] overflow-hidden rounded-[18px] md:rounded-[26px] transition-transform duration-300 ease-out hover:-translate-y-1.5 ${
        visible ? "industry-card-enter" : "opacity-0"
      }`}
      style={
        visible
          ? { animationDelay: `${Math.min(index, 8) * 0.04}s` }
          : undefined
      }
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          quality={75}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
      <div className="absolute inset-0 rounded-[18px] md:rounded-[26px] border border-white/10" />

      <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#e21d23] transition-[width] duration-500 ease-out group-hover:w-full" />

      <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-7">
        <div className="mb-2 md:mb-5 h-[2px] w-[35px] md:w-[55px] bg-[#e21d23] transition-[width] duration-500 ease-out group-hover:w-[70px] md:group-hover:w-[100px]" />

        <h3 className="mb-2 md:mb-3 text-sm md:text-[26px] font-semibold leading-tight text-white line-clamp-2">
          {industry.name}
        </h3>

        <p className="hidden md:block text-sm leading-relaxed text-white/80">
          {industry.description}
        </p>
      </div>
    </article>
  );
}

export default function Industries() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-12 content-visibility-auto contain-intrinsic-size-[auto_1200px]"
    >
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-10">
        <div
          className={`mx-auto mb-12 max-w-4xl text-center ${
            visible ? "industry-card-enter" : "opacity-0"
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#e21d23]">
            INDUSTRIES WE SERVE
          </span>

          <h2 className="mt-5 text-4xl font-medium leading-tight text-gray-900 md:text-4xl">
            Supporting Safety Across
            <span className="text-[#e21d23]"> Essential Industries</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            Providing dependable industrial emergency lighting solutions
            engineered for operational safety, visibility, and reliable
            performance across critical working environments.{" "}
          </p>
        </div>

<div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.id}
              industry={industry}
              index={index}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
