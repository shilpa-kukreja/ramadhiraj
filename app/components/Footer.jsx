"use client";

import Link from "next/link";
import {
  FaArrowUp,
} from "react-icons/fa";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiChevronRight,
} from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
        { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Products", href: "/all-products" },
      { name: "Contact Us", href: "/contact" },
      // { name: "Blog", href: "/blog" },
    ],
    category: [
  {
    name: "Industrial Emergency Light",
    href: "/all-products?category=industrial",
  },
 
  {
    name: "Flame Proof Industrial Emergency Light",
    href: "/all-products?category=flame",
  },
  {
    name: "Flood Light",
    href: "/all-products?category=flood",
  },
  {
    name: "Street Light",
    href: "/all-products?category=street",
  },
],
  };

  return (
    <footer className="relative bg-[#030712] text-white overflow-hidden border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-red-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* MAIN FOOTER */}
        <div className="py-12 border-b border-white/10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand */}
            <div>
              <img
                src="/logo/footerlogo.png"
                alt="Logo"
                className="w-25 mb-5"
              />

              <p className="text-gray-400 text-sm leading-relaxed mb-6 text-justify">
                Ramadhiraj Power Systems delivers reliable industrial emergency lighting solutions engineered for safety, visibility, and dependable performance across critical environments.
              </p>

              {/* Social */}
                      <div className="flex gap-5 mt-4 text-2xl">

            <span className="cursor-pointer text-[#1877F2] hover:scale-110 transition">
              <FaFacebook />
            </span>

            <span className="cursor-pointer text-[#FF0000] hover:scale-110 transition">
              <FaYoutube />
            </span>

            <span className="cursor-pointer text-[#E4405F] hover:scale-110 transition">
              <FaInstagram />
            </span>

            <span className="cursor-pointer text-white hover:scale-110 transition">
              <FaSquareXTwitter />
            </span>

          </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative">
                Company
                <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-[#e21d23]"></span>
              </h3>

              <ul className="space-y-3">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                    >
                      <HiChevronRight className="text-[#e21d23]" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative">
                Category
                <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-[#e21d23]"></span>
              </h3>

              <ul className="space-y-3">
                {footerLinks.category.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                    >
                      <HiChevronRight className="text-[#e21d23]" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative">
                Contact
                <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-[#e21d23]"></span>
              </h3>

              <div className="space-y-4 text-gray-400 text-sm">

                <div className="flex gap-3">
                  <HiOutlineLocationMarker className="text-[#e21d23] text-3xl" />
                  <p>A35/A Sector 67 Noida Uttar Pradesh - 201309</p>
                </div>

                <div className="flex gap-3">
                  <HiOutlinePhone className="text-[#e21d23] text-lg" />
                  <p>+91 7428855574</p>
                </div>

                <div className="flex gap-3">
                  <HiOutlineMail className="text-[#e21d23] text-lg" />
                  <p>ramadhirajpowersystems@gmail.com</p>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Ramadhiraj Power Systems. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <Link className="hover:text-white transition" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="hover:text-white transition" href="/terms-and-conditions">
              Terms & Conditions
            </Link>
            <Link className="hover:text-white transition" href="/cookie-policy">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* BACK TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-11 h-11 flex items-center justify-center rounded-xl bg-[#e21d23] hover:bg-red-700 shadow-lg transition"
      >
        <FaArrowUp className="text-white text-sm" />
      </button>
    </footer>
  );
}