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
<section className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">      {" "}
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
              className="w-full h-full object-cover object-center"
            />
         
          </div>
        ))}
      </div>
     
    </section>
  );
}
