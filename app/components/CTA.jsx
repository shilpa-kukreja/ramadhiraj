"use client";
// components/CTA.jsx
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-12 bg-gray-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Glowing Orbs */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full"
        style={{
          backgroundColor: "#e21d23",
          opacity: 0.1,
          filter: "blur(100px)",
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
        style={{
          backgroundColor: "#e21d23",
          opacity: 0.1,
          filter: "blur(100px)",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h2
            className={`text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            Power Your Facility with{" "}
            <span style={{ color: "#e21d23" }}>Reliable Safety Lighting Solutions</span>
          </h2>

          {/* Description */}
          <p
            className={`text-gray-300 text-[15px] max-w-2xl mx-auto mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            Discover industrial emergency lighting systems engineered for dependable performance, operational safety, and uninterrupted visibility across critical environments.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {/* Primary Button */}
            <Link
              href="/contact-us"
              className="group relative px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: "#e21d23" }}
            >
              {/* Shine Effect */}
              <span className="absolute top-0 left-[-120%] h-full w-[40%] animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />

              <span className="relative z-10 flex items-center gap-2">
                Request a Quote
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Link>

            {/* Secondary Button */}
            <button className="px-6 py-2 rounded-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300">
              Call Us: +91 74288 55573
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
