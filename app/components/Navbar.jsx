"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  FileText,
  Phone,
  Mail,
  ShieldCheck,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import EnquirySideModal from "./EnquiryModel";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const services = [
  //   {
  //     name: "EHS Consulting",
  //     desc: "Industrial safety & compliance solutions",
  //     icon: ShieldCheck,
  //   },
  //   {
  //     name: "ESG Services",
  //     desc: "Sustainable ESG transformation",
  //     icon: TrendingUp,
  //   },
  //   {
  //     name: "Safety Audits",
  //     desc: "Risk assessment & inspections",
  //     icon: BadgeCheck,
  //   },
  // ];
  const productOptions = [
    "Twin Beam Emergency Light",
    "Round Emergency Light",
    "Central Battery System",
    "Compact Emergency Unit",
    "LED Exit Sign Board",
    "Photoluminescent Exit Sign",
    "LED Arrow Exit Sign",
    "Slim Exit Panel",
    "High Bay LED Light",
    "Flood Light LED",
    "Street Light LED",
    "Industrial Ceiling Light",
    "Rechargeable Search Light",
    "LED Work Light",
    "Portable Emergency Lantern",
    "Rechargeable LED Torch",
    "Flame Proof LED Light",
    "Hazardous Area Exit Light",
    "Hazardous Area Batten",
    "Explosion Proof Unit",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [submitMessage, setSubmitMessage] = useState("");

  const [formData, setFormData] = useState({
    productName: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post("/api/product-enquiry", {
        ...formData,
        formSource: "consultation",
      });

      if (response.data.success) {
        setSubmitMessage("Enquiry submitted successfully!");

        setFormData({
          productName: "",
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitMessage("");
        }, 1500);
      }
    } catch (error) {
      console.log(error);

      setSubmitMessage("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm "
        }`}
      >
        {/* Top Bar */}
        <div className="hidden lg:block bg-slate-950 text-slate-300 text-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-10">
              <div className="flex items-center gap-6">
                <p className="font-medium tracking-wide">
                  BIS Certified Industrial Safety Company
                </p>

                <span className="w-px h-4 bg-slate-700"></span>

                <p className="text-slate-400">
                  Pan India EHS & ESG Consulting Services
                </p>
              </div>

              <div className="flex items-center gap-6">
                <a
                  href="mailto:info@ramadhiraj.in"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>ramadhirajpowersystems@gmail.com</span>
                </a>

                <a
                  href="tel:+917428855574"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 7428855574</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {" "}
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="/logo/Logo-Web-a1.png"
                alt="Ramadhiraj Logo"
                className="w-20 sm:w-24 object-contain"
              />
            </a>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Products", href: "/all-products" },
                // { name: "Services", href: "/services" },
                // { name: "Industries", href: "/industries" },
                { name: "Contact", href: "/contact-us" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-[15px] font-medium text-slate-700 rounded-lg hover:text-[#e21d23] hover:bg-red-50 transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
              {/* Services Dropdown */}
              {/* <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-slate-700 rounded-lg hover:text-[#e21d23] hover:bg-red-50 transition-all duration-200">
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 mt-3 w-[360px] rounded-2xl bg-white border border-slate-100 shadow-2xl p-3 transition-all duration-300 origin-top ${
                  activeDropdown === "services"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {services.map((service, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all group"
                  >
                   

                    <div>
                      <h4 className="font-semibold text-slate-800">
                        {service.name}
                      </h4>

                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div> */}
            </nav>
            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-medium hover:border-[#e21d23] hover:text-[#e21d23] transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                Brochure
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative overflow-hidden px-6 py-3 rounded-xl bg-[#e21d23] text-white font-semibold shadow-lg shadow-red-500/20 hover:bg-[#c81a1f] hover:shadow-red-500/30 transition-all duration-300"
              >
                {/* Shine Effect */}
                <span className="absolute top-0 left-[-120%] h-full w-[40%] animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />

                <span className="relative z-10">Get Consultation</span>
              </button>
            </div>
            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden w-11 h-11 rounded-xl border border-slate-200 bg-white flex items-center justify-center"
            >
              {mobileMenu ? (
                <X className="w-5 h-5 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenu && (
            <div className="lg:hidden pb-5">
              <div className="mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 space-y-1">
                {[
                  { name: "Home", link: "/" },
                  { name: "About", link: "/about" },
                  { name: "Products", link: "/all-products" },

                  { name: "Contact", link: "/contact-us" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    onClick={() => setMobileMenu(false)}
                    className="block px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-red-50 hover:text-[#e21d23] transition-all"
                  >
                    {item.name}
                  </a>
                ))}

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setIsModalOpen(true);
                      setMobileMenu(false);
                    }}
                    className="w-full py-3 rounded-xl bg-[#e21d23] text-white font-semibold shadow-lg"
                  >
                    Get Consultation
                  </button>

                  <div className="flex items-center justify-center gap-5 mt-4 text-sm text-slate-500">
                    <a
                      href="mailto:info@ramadhiraj.in"
                      className="flex items-center gap-1.5 hover:text-[#e21d23] transition"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>

                    <span className="w-px h-4 bg-slate-200"></span>

                    <a
                      href="tel:+919999999999"
                      className="flex items-center gap-1.5 hover:text-[#e21d23] transition"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center px-4 mt-80 sm:mt-120"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white w-full max-w-xl rounded-2xl p-6 relative sm:mt-0 mt-60"
              >
                {/* CLOSE */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
                >
                  ×
                </button>

                {/* HEADING */}
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                  Get Consultation
                </h2>

                {/* MESSAGE */}
                {submitMessage && (
                  <div className="mb-4 text-center text-green-600 font-medium">
                    {submitMessage}
                  </div>
                )}

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* PRODUCT DROPDOWN */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Select Product
                    </label>

                    <select
                      name="productName"
                      value={formData.productName}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                    >
                      <option value="">Choose Product</option>

                      {productOptions.map((product, index) => (
                        <option key={index} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* NAME */}
                  <div>
                    {/* <label className="block text-sm font-medium mb-2">
                      Name
                    </label> */}

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    {/* <label className="block text-sm font-medium mb-2">
                      Email
                    </label> */}

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    {/* <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label> */}

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    {/* <label className="block text-sm font-medium mb-2">
                      Message
                    </label> */}

                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none"
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#e21d23] text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <EnquirySideModal />
    </>
  );
}
