"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const industries = [
  {
    id: 1,
    name: "Airport Infrastructure",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=640&q=75",
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
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=640&q=75",
    description:
      "Reliable lighting for operation theaters, ICUs, corridors, and critical healthcare facilities.",
  },
  {
    id: 4,
    name: "Hospitality & Hotels",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=640&q=75",
    description:
      "Premium emergency lighting and compliance systems for hospitality environments.",
  },
  {
    id: 5,
    name: "Industrial Infrastructure",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=640&q=75",
    description:
      "Heavy-duty lighting systems engineered for infrastructure, tunnels, and industrial facilities.",
  },
  {
    id: 6,
    name: "Automobile Manufacturing",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=640&q=75",
    description:
      "Assembly line lighting and industrial safety systems for automotive production plants.",
  },
  {
    id: 7,
    name: "Thermal Power Plants",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=640&q=75",
    description:
      "Hazardous area lighting solutions designed for power generation and control environments.",
  },
  {
    id: 8,
    name: "Electronic Technology",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=640&q=75",
    description:
      "Reliable industrial lighting systems for chemical, pharmaceutical, and refinery operations.",
  },
  {
    id: 9,
    name: "Process Industries",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=640&q=75",
    description:
      "Reliable industrial lighting systems for chemical, pharmaceutical, and refinery operations.",
  },
  {
    id: 10,
    name: "FMCG",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=75",
    description:
      "Reliable industrial lighting systems for chemical, pharmaceutical, and refinery operations.",
  },
  {
    id: 11,
    name: "Textile and Export Houses",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=640&q=75",
    description:
      "Reliable industrial lighting systems for chemical, pharmaceutical, and refinery operations.",
  },
];

function IndustryCard({ industry, index, visible }) {
  return (
    <article
      className={`group relative h-[430px] overflow-hidden rounded-[26px] transition-transform duration-300 ease-out hover:-translate-y-1.5 ${
        visible ? "industry-card-enter" : "opacity-0"
      }`}
      style={visible ? { animationDelay: `${Math.min(index, 8) * 0.04}s` } : undefined}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          quality={75}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
      <div className="absolute inset-0 rounded-[26px] border border-white/10" />
      <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#e21d23] transition-[width] duration-500 ease-out group-hover:w-full" />

      <div className="absolute inset-0 flex flex-col justify-end p-7">
        <div className="mb-5 h-[2px] w-[55px] bg-[#e21d23] transition-[width] duration-500 ease-out group-hover:w-[100px]" />
        <h3 className="mb-3 text-[26px] font-semibold leading-tight text-white">
          {industry.name}
        </h3>
        <p className="text-sm leading-relaxed text-white/80">
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
            Industries We Serve
          </span>

          <h2 className="mt-5 text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
            Trusted Across
            <span className="text-[#e21d23]"> Critical Industries</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            Delivering industrial-grade lighting and safety systems engineered
            for mission-critical environments where compliance, durability, and
            operational excellence matter most.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
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
