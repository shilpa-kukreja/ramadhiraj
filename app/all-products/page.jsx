"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Products() {
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  // MODAL STATES
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [submitMessage, setSubmitMessage] = useState("");
  const searchParams = useSearchParams();

  const categoryFromUrl = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(
    categoryFromUrl || "emergency",
  );
  useEffect(() => {
    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);
  const [formData, setFormData] = useState({
    productName: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // OPEN MODAL
  const openModal = (product) => {
    setFormData({
      productName: product.name,
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setSubmitMessage("");

    setIsModalOpen(true);
  };

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        `${API_BASE_URL}/api/product-enquiry`,
        formData,
      );

      if (response.data.success) {
        setSubmitMessage("Enquiry submitted successfully!");

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

  const categories = [
    { id: "emergency", name: "Emergency Lights" },
    { id: "exit", name: "Exit Signs" },
    { id: "industrial", name: "Industrial LED" },
    { id: "rechargeable", name: "Rechargeable" },
    { id: "hazardous", name: "Hazardous Area" },
  ];

  const products = {
    emergency: [
      {
        id: 1,
        name: "Twin Beam Emergency Light",
        model: "RPS-EL-401",
        specs: "6-7 Hours Backup • BIS Certified",
        image: "product/1.png",
      },
      {
        id: 2,
        name: "Round Emergency Light",
        model: "RPS-EL-402",
        specs: "5 Hours Backup • IP54 Rated",
        image: "product/2.png",
      },
      {
        id: 3,
        name: "Central Battery System",
        model: "RPS-CBS-500",
        specs: "10 Hours Backup • Industrial Grade",
        image: "product/5.png",
      },
      {
        id: 4,
        name: "Compact Emergency Unit",
        model: "RPS-CU-220",
        specs: "Compact Design • High Efficiency",
        image: "product/7.png",
      },
    ],

    exit: [
      {
        id: 5,
        name: "LED Exit Sign Board",
        model: "RPS-EX-201",
        specs: "2 Hours Backup • BIS Certified",
        image: "product/8.png",
      },
      {
        id: 6,
        name: "Photoluminescent Exit Sign",
        model: "RPS-EX-202",
        specs: "Glow in Dark • Eco Friendly",
        image: "product/9.png",
      },
      {
        id: 7,
        name: "LED Arrow Exit Sign",
        model: "RPS-EX-203",
        specs: "Directional • Double Sided",
        image: "product/11.png",
      },
      {
        id: 8,
        name: "Slim Exit Panel",
        model: "RPS-EX-250",
        specs: "Ultra Slim • Long Life",
        image: "product/12.png",
      },
    ],

    industrial: [
      {
        id: 9,
        name: "High Bay LED Light",
        model: "RPS-HB-150",
        specs: "150W • IP65 Rated",
        image:
          "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 10,
        name: "Flood Light LED",
        model: "RPS-FL-100",
        specs: "100W • Wide Angle",
        image:
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 11,
        name: "Street Light LED",
        model: "RPS-SL-60",
        specs: "60W • IP66 Protection",
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 12,
        name: "Industrial Ceiling Light",
        model: "RPS-IC-88",
        specs: "Heavy Duty • Energy Efficient",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
      },
    ],

    rechargeable: [
      {
        id: 13,
        name: "Rechargeable Search Light",
        model: "RPS-SL-10W",
        specs: "Portable • High Backup",
        image:
          "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 14,
        name: "LED Work Light",
        model: "RPS-WL-20",
        specs: "20W • Magnetic Base",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 15,
        name: "Portable Emergency Lantern",
        model: "RPS-PL-5",
        specs: "USB Charging • Lightweight",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 16,
        name: "Rechargeable LED Torch",
        model: "RPS-RT-18",
        specs: "Fast Charging • Compact",
        image:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
      },
    ],

    hazardous: [
      {
        id: 17,
        name: "Flame Proof LED Light",
        model: "RPS-FP-50",
        specs: "Zone 1 & 2 • Ex d Certified",
        image:
          "https://images.unsplash.com/photo-1516321310764-8d4d3c0f1d5d?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 18,
        name: "Hazardous Area Exit Light",
        model: "RPS-HEX-20",
        specs: "Zone 2 • IECEx",
        image:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 19,
        name: "Hazardous Area Batten",
        model: "RPS-HB-30",
        specs: "Corrosion Resistant • 30W",
        image:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 20,
        name: "Explosion Proof Unit",
        model: "RPS-EP-90",
        specs: "Heavy Duty • Industrial Safety",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  };

  const useCases = {
    emergency: [
      {
        id: 1,
        name: "Commercial Buildings",
        description:
          "Emergency lighting systems for offices, malls, and commercial complexes.",
        image: "/industries/banner.png",
      },
      {
        id: 2,
        name: "Hospitals",
        description:
          "Critical backup lighting solutions ensuring uninterrupted visibility.",
        image: "/usecases/hospital.jpg",
      },
      {
        id: 3,
        name: "Factories",
        description:
          "Industrial emergency lighting for worker safety during power failures.",
        image: "/usecases/factory.jpg",
      },
    ],

    exit: [
      {
        id: 1,
        name: "Airports",
        description:
          "High-visibility exit guidance systems for emergency evacuation.",
        image: "/usecases/airport.jpg",
      },
      {
        id: 2,
        name: "Hotels",
        description:
          "Stylish and compliant exit signage for hospitality environments.",
        image: "/usecases/hotel.jpg",
      },
    ],

    industrial: [
      {
        id: 1,
        name: "Warehouses",
        description:
          "Energy-efficient industrial LED lighting for large storage spaces.",
        image: "/usecases/warehouse.jpg",
      },
      {
        id: 2,
        name: "Manufacturing Plants",
        description:
          "Heavy-duty LED systems designed for industrial operations.",
        image: "/usecases/manufacturing.jpg",
      },
    ],

    rechargeable: [
      {
        id: 1,
        name: "Outdoor Operations",
        description:
          "Portable rechargeable lighting for remote industrial tasks.",
        image: "/usecases/outdoor.jpg",
      },
      {
        id: 2,
        name: "Maintenance Teams",
        description:
          "Compact and durable lights for inspection and repair teams.",
        image: "/usecases/maintenance.jpg",
      },
    ],

    hazardous: [
      {
        id: 1,
        name: "Oil & Gas Plants",
        description:
          "Explosion-proof lighting solutions for hazardous environments.",
        image: "/usecases/oilgas.jpg",
      },
      {
        id: 2,
        name: "Chemical Industries",
        description:
          "Corrosion-resistant lighting engineered for chemical zones.",
        image: "/usecases/chemical.jpg",
      },
    ],
  };
  return (
    <>
      <Navbar />
      <section className="w-full sm:mt-30">
        <div className=" w-full">
          {/* <video
              src="/indusyt"
              alt="Eric AI CRA"

        autoPlay
        muted
        loop
        playsInline
              className="w-full h-40 sm:h-90 object-cover"
            /> */}
          <img
            src="/industries/banner.png"
            className="w-full h-40 sm:h-90 object-cover"
          />
        </div>
      </section>
      <section className="relative py-12 bg-gray-100 overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 relative z-10">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-6"
          >
            <h2 className="text-4xl md:text-4xl lg:text-4xl font-semibold text-gray-900 mt-5 leading-tight">
              Industrial Lighting
              <span className="text-[#e21d23]"> Solutions</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mt-4 max-w-3xl mx-auto text-center">
              Premium BIS-certified lighting systems engineered for industrial
              safety and reliability.
            </p>
          </motion.div>

          {/* CATEGORY */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-500 border
                ${
                  activeCategory === category.id
                    ? "bg-[#e21d23] text-white border-[#e21d23]"
                    : "bg-white text-gray-700 border-gray-200 hover:border-[#e21d23] hover:text-[#e21d23]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* PRODUCTS */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {products[activeCategory].map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                    }}
                    className="group relative bg-white rounded-[14px] overflow-hidden border border-gray-100 hover:-translate-y-2 transition-all duration-700"
                  >
                    {/* IMAGE */}
                    <div className="relative h-[260px] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-7">
                      <div className="mb-5">
                        <div className="w-12 h-[2px] bg-[#e21d23] mb-5" />

                        <h3 className="text-[22px] font-semibold text-gray-900 leading-snug line-clamp-1">
                          {product.name}
                        </h3>
                      </div>

                      <p className="text-sm text-gray-500 leading-relaxed mb-7 min-h-[30px]">
                        {product.specs}
                      </p>

                      {/* ENQUIRE BUTTON */}
                      <button
                        onClick={() => openModal(product)}
                        className="w-full py-3.5 rounded-md bg-[#e21d23] text-white font-medium hover:bg-red-700 transition"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* USE CASES SECTION */}
            <div className="py-12">
              {/* HEADING */}
              <div className="text-center mb-10">
                <span className="text-xs tracking-[0.4em] uppercase font-semibold text-[#e21d23]">
                  Applications & Industries
                </span>

                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-4">
                  Where These Products Are
                  <span className="text-[#e21d23]"> Used</span>
                </h3>

                <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
                  Our lighting and safety systems are trusted across multiple
                  industrial and commercial environments worldwide.
                </p>
              </div>

              {/* GRID */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {useCases[activeCategory]?.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                    }}
                    className="group relative overflow-hidden rounded-[18px] bg-white border border-gray-100 hover:-translate-y-2 transition-all duration-700"
                  >
                    {/* IMAGE */}
                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* CONTENT */}
                      <div className="absolute bottom-0 left-0 p-8">
                        <div className="w-14 h-[2px] bg-[#e21d23] mb-5 group-hover:w-24 transition-all duration-500" />

                        <h4 className="text-2xl font-semibold text-white mb-3">
                          {item.name}
                        </h4>

                        <p className="text-gray-200 text-sm leading-relaxed max-w-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-lg rounded-2xl p-6 relative"
            >
              {/* CLOSE */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
              >
                ×
              </button>

              <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                Product Enquiry
              </h2>

              {/* MESSAGE */}
              {submitMessage && (
                <div className="mb-4 text-sm font-medium text-center text-green-600">
                  {submitMessage}
                </div>
              )}

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* PRODUCT */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Product Name
                  </label>

                  <input
                    type="text"
                    value={formData.productName}
                    readOnly
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 outline-none"
                  />
                </div>

                {/* NAME */}
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                    required
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                    required
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none"
                    required
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>

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
                  className="w-full bg-[#e21d23] text-white py-3 rounded-xl font-medium hover:bg-red-700 transition disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
