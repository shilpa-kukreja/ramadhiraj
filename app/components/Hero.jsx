"use client";

// components/Hero.jsx

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = ["/hero/1.jpg", "/hero/2.jpg"];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // AUTO SLIDE EVERY 3 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-210 flex items-center overflow-hidden sm:mt-28">
      {/* IMAGE SLIDER */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt={`Hero Slide ${index + 1}`}
              className="w-full h-210 object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 " />
          </div>
        ))}
      </div>

      {/* Simple Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          {/* <h1
            className={`text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            Reliable Emergency Lighting
            <br />

            <span className="text-[#e21d23] text-4xl">
              for Critical Environments
            </span>
          </h1> */}

          {/* Subheading */}
          {/* <p
            className={`text-gray-300 text-lg md:text-lg mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
           Delivering high-performance emergency lighting systems and industrial safety solutions designed to support visibility, safety, and operational continuity across demanding workplaces.
          </p> */}

          {/* CTA Buttons */}
          {/* <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            <Link
              href="/contact-us"
              className="group relative overflow-hidden bg-[#e21d23] hover:bg-[#c81a1f]
  text-white font-semibold px-6 py-3
  rounded-lg transition duration-300 inline-flex items-center justify-center"
            >
              <span className="absolute top-0 left-[-120%] h-full w-[40%] animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />

              <span className="relative z-10">Request Consultation</span>
            </Link>

            <Link
              href="/all-products"
              className="border-2 border-white
              hover:bg-white hover:text-slate-900
              text-white font-semibold px-6 py-3
              rounded-lg transition"
            >
              Explore Product
            </Link>
          </div> */}

          {/* <div className="flex justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-[#e21d23]"
                    : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
