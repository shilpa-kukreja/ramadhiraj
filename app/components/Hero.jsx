"use client";
// components/Hero.jsx
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 min-h-screen flex items-center">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          
       

          {/* Main Heading */}
          <h1 className={`text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Industrial LED Lights
            <br />
            <span className="text-[#e21d23] text-4xl">& EHS Consultancy</span>
          </h1>

          {/* Subheading */}
          <p className={`text-gray-300 text-lg md:text-lg mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            BIS-certified emergency lighting solutions & ISO-certified safety consulting across India.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <Link href="/contact-us" className="bg-[#e21d23] hover:bg-[#c81a1f] text-white font-semibold px-6 py-3 rounded-lg transition">
              Request a Quote
            </Link>
            <Link href="all-products" className="border-2 border-white hover:bg-white hover:text-slate-900 text-white font-semibold px-6 py-3 rounded-lg transition">
              Explore Products
            </Link>
          </div>

          {/* Simple Stats */}
          {/* <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div>
              <p className="text-2xl font-bold text-yellow-400">50+</p>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-400">PAN</p>
              <p className="text-gray-400 text-sm">India Service</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-400">24/7</p>
              <p className="text-gray-400 text-sm">Support</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-400">100%</p>
              <p className="text-gray-400 text-sm">Compliant</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}