"use client";
// app/about/page.jsx or components/About.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { X } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");
  const [hoveredValue, setHoveredValue] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [counter, setCounter] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    experts: 0,
  });

  useEffect(() => {
    setIsVisible(true);

    // Counter animation
    const counters = {
      years: 14,
      projects: 500,
      clients: 1200,
      experts: 45,
    };

    const duration = 2000; // 2 seconds
    const stepTime = 20;
    const steps = duration / stepTime;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCounter({
          years: Math.min(
            Math.floor((counters.years * currentStep) / steps),
            counters.years,
          ),
          projects: Math.min(
            Math.floor((counters.projects * currentStep) / steps),
            counters.projects,
          ),
          clients: Math.min(
            Math.floor((counters.clients * currentStep) / steps),
            counters.clients,
          ),
          experts: Math.min(
            Math.floor((counters.experts * currentStep) / steps),
            counters.experts,
          ),
        });
      } else {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  // Sample milestones data - replace with your actual data
  const milestones = [
    {
      year: "2020",
      title: "Foundation & Vision",
      description:
        "Company founded with a mission to revolutionize digital experiences. Started with a small but passionate team of 5 engineers.",
    },
    {
      year: "2021",
      title: "First Major Product Launch",
      description:
        "Released our flagship platform to early access customers, achieving 100+ enterprise clients in the first quarter.",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description:
        "Opened offices in London, Singapore, and San Francisco. Grew to 200+ employees and served 50+ countries.",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description:
        "Named 'Best Innovation' by TechCrunch and reached $10M ARR. Launched AI-powered features.",
    },
    {
      year: "2024",
      title: "Strategic Acquisitions",
      description:
        "Acquired three complementary startups, expanding our product ecosystem and market reach.",
    },
    {
      year: "2025",
      title: "Community Impact",
      description:
        "Launched sustainability initiatives and opened source contributions, reaching 1M+ developers globally.",
    },
  ];

  // Sample values data (replace with your actual content)
  const companyValues = [
    {
      title: "Innovation",
      description:
        "Pioneering new safety technologies for tomorrow's challenges.",
      color: "#e21d23",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description: "Uncompromising ethics in every decision we make.",
      color: "#0891b2",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description: "Stronger together with our clients and partners.",
      color: "#7c3aed",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20h-5m5 0v-2a3 3 0 00-5.356-1.857M7 17h5m0-3a3 3 0 11-6 0 3 3 0 016 0zm9-3a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description: "Relentless pursuit of the highest quality standards.",
      color: "#ea580c",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
    },
  ];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      experience: "25+ years in industrial safety",
      image: "/team/rajesh.jpg",
      bio: "Former safety director with multinational corporations",
      social: {
        linkedin: "#",
        email: "rajesh@company.com",
      },
    },
    {
      name: "Priya Sharma",
      role: "Head of EHS Consultancy",
      experience: "18+ years in environmental safety",
      image: "/team/priya.jpg",
      bio: "ISO 45001 lead auditor and safety trainer",
      social: {
        linkedin: "#",
        email: "priya@company.com",
      },
    },
    {
      name: "Dr. Anil Mehta",
      role: "Chief Technical Officer",
      experience: "20+ years in LED technology",
      image: "/team/anil.jpg",
      bio: "PhD in Electrical Engineering, multiple patents",
      social: {
        linkedin: "#",
        email: "anil@company.com",
      },
    },
    {
      name: "Amit Verma",
      role: "Product Innovation Director",
      experience: "15+ years in product development",
      image: "/team/amit.jpg",
      bio: "Expert in industrial lighting solutions",
      social: {
        linkedin: "#",
        email: "amit@company.com",
      },
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2024",
      issuer: "International Organization for Standardization",
      description: "Quality Management Systems Certification",
      image: "/123456.jpeg",
      date: "2024",
      validUntil: "2027",
      status: "Active",
    },
    {
      id: 2,
      name: "BIS Certification",
      issuer: "Bureau of Indian Standards",
      description: "Certified for Emergency Lighting Systems",
      image: "/certifications/iso9001.png",
      date: "2023",
      validUntil: "2026",
      status: "Active",
    },
    {
      id: 3,
      name: "ISO 45001:2023",
      issuer: "International Organization for Standardization",
      description: "Occupational Health & Safety Management",
      image: "/certifications/iso9001.png",
      date: "2023",
      validUntil: "2026",
      status: "Active",
    },
    {
      id: 4,
      name: "CE Certification",
      issuer: "European Union",
      description: "Conformity with European Safety Standards",
      image: "/certifications/iso9001.png",
      date: "2024",
      validUntil: "2028",
      status: "Active",
    },
    {
      id: 5,
      name: "NSIC Registered",
      issuer: "National Small Industries Corporation",
      description: "Government Registered Vendor",
      image: "/certifications/iso9001.png",
      date: "2022",
      validUntil: "2027",
      status: "Active",
    },
    {
      id: 6,
      name: "Make in India",
      issuer: "Government of India",
      description: "Approved Domestic Manufacturer",
      image: "/certifications/iso9001.png",
      date: "2023",
      validUntil: "Lifetime",
      status: "Active",
    },
  ];

  return (
    <>
      <Navbar />
      <main className=" mt-25">
        <div className="py-3 text-sm text-center">
          <div className=" mx-auto ">
            <img
              src="/about/aboutbanner.jpg"
              alt="Info"
              className="inline-block w-full h-[400px] mr-2"
            />
          </div>
        </div>
        {/* Hero Section */}
        {/* <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
          
            <div>
              <h2 className="text-4xl font-bold text-[#1b3163] mb-6 relative">
                <span className="relative z-10">Company Overview</span>
                <span className="absolute bottom-0 left-0 w-20 h-1 bg-yellow-400"></span>
              </h2>

              <p className="text-gray-700 text-justify leading-relaxed mb-6 text-lg">
                <span className="font-bold text-[#1b3163] text-2xl">Ramadhiraj</span>  Group of Companies is a multi-faceted organization driven by excellence in
                engineering, safety, and sustainability. Under the brand Ramadhiraj Power Systems Pvt.
                Ltd., we are proud to be a BIS-certified company specializing in the manufacturing of
                industrial emergency lighting systems. Our lighting solutions are engineered for
                performance, reliability, and compliance with the highest safety standards.
              </p>

              <p className="text-gray-700 text-justify leading-relaxed mb-6">
                In addition to manufacturing, the Ramadhiraj Safety Solutions is a recognized leader in
                Environmental, Health, and Safety (EHS) consultancy services. As a certified EHS
                consultant with ISO 9001 (Quality Management), ISO 14001 (Environmental
                Management), and ISO 45001 (Occupational Health and Safety Management)
                certifications, we provide end-to-end support for organizations aiming to meet legal,
                environmental, and workplace safety standards.

              </p>

              <p className="text-gray-700 text-justify leading-relaxed mb-8">
                Our team of experts works closely with industrial clients across various sectors, offering
                tailored solutions in:
                Environmental impact assessments and compliance audits
                Health and safety risk management
                Regulatory documentation and reporting
                On-site safety training and process implementation
              </p>



              
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-[#1b3163]">1974</div>
                  <div className="text-sm text-gray-600">Established</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-[#1b3163]">51-100</div>
                  <div className="text-sm text-gray-600">Employees</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-[#1b3163]">20%</div>
                  <div className="text-sm text-gray-600">Export</div>
                </div>
              </div>
            </div>

            
            <div className=" rounded-xl shadow-xl overflow-hidden">
              <div className="relative h-[500px] w-full">
                <img
                  src="/Aboutus.jpg"
                  alt="CEO Sanjeev Arora"
                  className="object-cover object-top h-full w-full"

                />
              </div>
            </div>
          </div>
        </div> */}

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1b3163] leading-tight relative">
                  Company <span className="text-red-600">Overview</span>
                </h2>

                <div className="mt-4 flex items-center gap-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className="h-1 bg-red-600 rounded-full"
                  />

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-1 bg-yellow-400 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Content Box */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="text-gray-700 text-justify leading-relaxed mb-6 text-lg"
                >
                  <span className="font-extrabold text-red-600 text-2xl">
                    Ramadhiraj
                  </span>{" "}
                  Group of Companies is a multi-faceted organization driven by
                  excellence in engineering, safety, and sustainability. Under
                  the brand{" "}
                  <span className="font-semibold text-[#1b3163]">
                    Ramadhiraj Power Systems Pvt. Ltd.
                  </span>
                  , we are proud to be a BIS-certified company specializing in
                  the manufacturing of industrial emergency lighting systems.
                  Our lighting solutions are engineered for performance,
                  reliability, and compliance with the highest safety standards.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="text-gray-700 text-justify leading-relaxed mb-6"
                >
                  In addition to manufacturing,{" "}
                  <span className="font-semibold text-red-600">
                    Ramadhiraj Safety Solutions
                  </span>{" "}
                  is a recognized leader in Environmental, Health, and Safety
                  (EHS) consultancy services. As a certified EHS consultant with
                  ISO 9001, ISO 14001, and ISO 45001 certifications, we provide
                  end-to-end support for organizations aiming to meet legal,
                  environmental, and workplace safety standards.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  className="text-gray-700 text-justify leading-relaxed mb-6"
                >
                  Our team of experts works closely with industrial clients
                  across various sectors, offering tailored solutions in:
                  Environmental impact assessments and compliance audits Health
                  and safety risk management Regulatory documentation and
                  reporting
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mt-2 sm:mt-28"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className="absolute top-10 -left-5 w-28 h-28 bg-red-100 rounded-full blur-3xl opacity-70"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className="relative h-[580px] w-full overflow-hidden rounded-[24px]"
              >
                <img
                  src="/about/about.png"
                  alt="CEO Sanjeev Arora"
                  className="object-cover object-top h-full w-full hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Mission & Vision Tabs */}
        {/* <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
                {[
                  { id: "mission", label: "Our Mission" },
                  { id: "vision", label: "Our Vision" },
                  { id: "values", label: "Our Values" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "text-white shadow-md"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    style={
                      activeTab === tab.id ? { backgroundColor: "#e21d23" } : {}
                    }
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-500">
              {activeTab === "mission" && (
                <div className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6"
                    style={{ backgroundColor: "rgba(226, 29, 35, 0.1)" }}
                  >
                    <svg
                      className="w-10 h-10"
                      style={{ color: "#e21d23" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Mission
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    To empower industries with world-class safety solutions
                    through innovative LED lighting and comprehensive EHS
                    consultancy, ensuring every worker returns home safely.
                  </p>
                </div>
              )}
              {activeTab === "vision" && (
                <div className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6"
                    style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                  >
                    <svg
                      className="w-10 h-10 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Vision
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    To be the global benchmark for industrial safety, creating a
                    future where workplace accidents are eliminated through
                    superior technology and unwavering commitment to safety
                    standards.
                  </p>
                </div>
              )}
              {activeTab === "values" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {companyValues.map((value, index) => (
                    <div
                      key={index}
                      className="text-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                      onMouseEnter={() => setHoveredValue(index)}
                      onMouseLeave={() => setHoveredValue(null)}
                    >
                      <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-300"
                        style={{
                          backgroundColor:
                            hoveredValue === index
                              ? value.color
                              : `${value.color}20`,
                          color: hoveredValue === index ? "white" : value.color,
                        }}
                      >
                        {value.icon}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section> */}

        <section className="relative overflow-hidden bg-gray-100 py-12 lg:py-12">
          {/* Background Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 0.4, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2 }}
            className="absolute left-0 top-0 h-72 w-72 rounded-full blur-3xl"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 0.4, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gray-100 blur-3xl"
          ></motion.div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9 }}
              className="mb-8 text-center"
            >
              <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
                Mission, Vision &
                <span className="text-red-600"> Core Values</span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-gray-600 md:text-base"
              >
                Built on innovation, integrity, and commitment towards
                industrial safety excellence.
              </motion.p>

              <div className="mt-5 flex items-center justify-center">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1 }}
                  className="h-[3px] rounded-full bg-red-600"
                ></motion.div>
              </div>
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="mb-10 flex justify-center"
            >
              <div className="inline-flex rounded-2xl border border-gray-200 bg-white p-2 shadow-lg">
                {[
                  { id: "mission", label: "Our Mission" },
                  { id: "vision", label: "Our Vision" },
                  { id: "values", label: "Our Values" },
                ].map((tab) => (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-all duration-300 md:px-6 md:text-sm ${
                      activeTab === tab.id
                        ? "scale-[1.02] bg-red-600 text-white shadow-md"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1 }}
              className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-xl"
            >
              <div className="p-6 md:p-10 lg:p-12">
                {/* Mission */}
                {activeTab === "mission" && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="grid items-center gap-10 lg:grid-cols-2"
                  >
                    {/* Left */}
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <h3 className="mb-4 text-2xl font-extrabold text-gray-900 md:text-3xl">
                        Our <span className="text-red-600">Mission</span>
                      </h3>

                      <p className="text-sm font-medium leading-8 text-gray-600 md:text-base">
                        To empower industries with world-class safety solutions
                        through innovative LED lighting and comprehensive EHS
                        consultancy, ensuring every worker returns home safely.
                      </p>
                    </motion.div>

                    {/* Right Box */}
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      whileHover={{ y: -8 }}
                      className="rounded-[28px] border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg"
                    >
                      <h4 className="mb-4 text-2xl font-bold text-gray-900">
                        Safety First
                      </h4>

                      <p className="text-sm font-medium leading-7 text-gray-600 md:text-base">
                        We continuously innovate and implement advanced
                        industrial safety systems to create secure and
                        sustainable workplaces.
                      </p>
                    </motion.div>
                  </motion.div>
                )}

                {/* Vision */}
                {activeTab === "vision" && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="grid items-center gap-10 lg:grid-cols-2"
                  >
                    {/* Left */}
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <h3 className="mb-4 text-2xl font-extrabold text-gray-900 md:text-3xl">
                        Our <span className="text-red-600">Vision</span>
                      </h3>

                      <p className="text-sm font-medium leading-8 text-gray-600 md:text-base">
                        To be the global benchmark for industrial safety,
                        creating a future where workplace accidents are
                        eliminated through superior technology and unwavering
                        commitment to safety standards.
                      </p>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      whileHover={{ y: -8 }}
                      className="rounded-[28px] border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg"
                    >
                      <h4 className="mb-4 text-2xl font-bold text-gray-900">
                        Future Focused
                      </h4>

                      <p className="text-sm font-medium leading-7 text-gray-600 md:text-base">
                        We envision industries powered by sustainable
                        technology, global compliance, and zero-compromise
                        safety systems.
                      </p>
                    </motion.div>
                  </motion.div>
                )}

                {/* Values */}
                {activeTab === "values" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                      className="mb-10 text-center"
                    >
                      <h3 className="text-3xl font-extrabold text-gray-900">
                        Our Core <span className="text-red-600">Values</span>
                      </h3>
                    </motion.div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      {companyValues.map((value, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false }}
                          transition={{
                            duration: 0.7,
                            delay: index * 0.12,
                          }}
                          whileHover={{
                            y: -10,
                            scale: 1.03,
                          }}
                          className="group relative overflow-hidden rounded-[24px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-500 hover:shadow-xl"
                          onMouseEnter={() => setHoveredValue(index)}
                          onMouseLeave={() => setHoveredValue(null)}
                        >
                          {/* Hover BG */}
                          <div
                            className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                            style={{
                              background: `linear-gradient(135deg, ${value.color}08, transparent)`,
                            }}
                          ></div>

                          {/* Title */}
                          <h4 className="relative mb-3 text-lg font-bold text-gray-900 transition duration-300 group-hover:text-red-600">
                            {value.title}
                          </h4>

                          {/* Description */}
                          <p className="relative text-sm font-medium leading-7 text-gray-600">
                            {value.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Statistics Counter Section */}
        <section className="py-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Impact in <span style={{ color: "#e21d23" }}>Numbers</span>
              </h2>
              <p className="text-gray-300 text-lg">
                The trust of thousands of clients worldwide
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div
                  className="text-5xl font-bold mb-2"
                  style={{ color: "#e21d23" }}
                >
                  {counter.years}+
                </div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div
                  className="text-5xl font-bold mb-2"
                  style={{ color: "#e21d23" }}
                >
                  {counter.projects}+
                </div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div
                  className="text-5xl font-bold mb-2"
                  style={{ color: "#e21d23" }}
                >
                  {counter.clients}+
                </div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div
                  className="text-5xl font-bold mb-2"
                  style={{ color: "#e21d23" }}
                >
                  {counter.experts}+
                </div>
                <div className="text-gray-300">Safety Experts</div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Journey Timeline */}
        <section className="py-12 bg-white overflow-y-hidden">
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header - unchanged */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-center mb-12  border-gray-200 pb-6">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-3xl md:text-5xl font-black text-gray-900 mt-2 leading-tight"
                >
                  Company{" "}
                  <span className="text-[#e21d23] inline-block">
                    Milestones
                  </span>
                </motion.h2>
                <div
                  className="w-20 h-1 mx-auto mt-4"
                  style={{ backgroundColor: "#e21d23" }}
                ></div>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                  Driven by passion and expertise, our team is committed to your
                  safety
                </p>
              </div>
            </div>

            {/* Continuous Marquee Timeline */}
            <div className="relative">
              <Marquee
                pauseOnHover={true}
                speed={50}
                gradient={true}
                gradientColor="#f9fafb" // matches bg-gray-50
                gradientWidth={80}
                className="py-4"
                style={{ overflowY: "hidden" }} // force hide vertical overflow
              >
                {/* Render each milestone card with consistent styling */}
                {milestones.map((milestone, index) => (
                  <div
                    key={`${milestone.year}-${index}`}
                    className="flex-none w-[280px] sm:w-[320px] md:w-[360px] mx-3 group"
                  >
                    {/* Milestone Card - enhanced hover effects */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-[200px] group-hover:-translate-y-2">
                      {/* Giant Watermark Year Background */}
                      {/* <div className="absolute -right-4 -bottom-6 text-7xl font-black text-gray-100/70 select-none group-hover:text-[#e21d23]/5 transition-colors duration-300 font-mono pointer-events-none">
                    {milestone.year}
                  </div> */}

                      {/* Content */}
                      <div className="relative z-10">
                        <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-md bg-[#e21d23]/10 text-[#e21d23] mb-4">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-[#e21d23] transition-colors duration-200">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                          {milestone.description}
                        </p>
                      </div>

                      {/* Subtle accent border bottom on hover */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#e21d23] group-hover:w-full transition-all duration-300" />
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-12 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Meet Our <span style={{ color: "#e21d23" }}>Experts</span>
              </h2>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className="h-1 mx-auto"
                style={{ backgroundColor: "#e21d23" }}
              ></motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-600 mt-4 max-w-2xl mx-auto"
              >
                Driven by passion and expertise, our team is committed to your
                safety
              </motion.p>
            </motion.div>

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -12,
                  }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image Section */}
                  <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                    {/* Animated Background Glow */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 0.2 }}
                      viewport={{ once: false }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0 bg-red-500 blur-3xl"
                    />

                    {/* Placeholder Image */}
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.15,
                      }}
                      className="absolute inset-0 flex items-center justify-center text-6xl"
                    >
                      👤
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + index * 0.1,
                      }}
                      className="text-xl font-bold text-gray-900 mb-1"
                    >
                      {member.name}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.6,
                        delay: 0.3 + index * 0.1,
                      }}
                      className="text-sm font-semibold mb-2"
                      style={{ color: "#e21d23" }}
                    >
                      {member.role}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4 + index * 0.1,
                      }}
                      className="text-xs text-gray-500 mb-3"
                    >
                      {member.experience}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + index * 0.1,
                      }}
                      className="text-gray-600 text-sm mb-4"
                    >
                      {member.bio}
                    </motion.p>

                    {/* Social Icons */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.6,
                        delay: 0.6 + index * 0.1,
                      }}
                      className="flex gap-3"
                    >
                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
                        </svg>
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}

        <section className="relative overflow-hidden py-12 bg-white">
          {/* Background Effects */}
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-40"></div>

          <div className="relative max-w-9xl mx-auto">
            {/* Heading */}
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9 }}
              className="text-center mb-14 px-4"
            >
              {/* Badge */}
              {/* 
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.7 }}
    className="inline-flex items-center rounded-full bg-red-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-red-600"
  >
    Our Credentials
  </motion.span>
  */}

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="text-3xl md:text-5xl font-black text-gray-900 leading-tight"
              >
                Certifications &{" "}
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-red-600 inline-block"
                >
                  Accreditations
                </motion.span>
              </motion.h2>

              {/* Sub Heading */}
              <motion.p
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mx-auto mt-4 max-w-2xl text-sm md:text-base font-medium leading-relaxed text-gray-600"
              >
                Recognized by leading industry bodies for our commitment to
                quality, compliance, and safety excellence.
              </motion.p>

              {/* Animated Line */}
              <div className="mt-6 flex justify-center">
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: 80, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="h-1 rounded-full bg-red-600"
                />
              </div>
            </motion.div>
            {/* MARQUEE */}
            <div className="relative overflow-hidden">
              {/* Left Fade */}
              <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent"></div>

              {/* Right Fade */}
              <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent"></div>

              <div className="marquee-wrapper">
                <div className="marquee-track">
                  {[...certifications, ...certifications].map((cert, index) => (
                    <div
                      key={index}
                      className="group mx-4 flex w-[280px] flex-shrink-0 cursor-pointer flex-col overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                      onClick={() => setSelectedImage(cert)}
                    >
                      {/* Image */}
                      <div className="relative h-[210px] overflow-hidden bg-gray-50">
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="p-5 text-center">
                        <h3 className="text-[15px] font-extrabold uppercase tracking-wide text-gray-900 transition-colors duration-300 group-hover:text-red-600">
                          {cert.name}
                        </h3>

                        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE PREVIEW MODAL */}
          {selectedImage && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:scale-110"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Preview Card */}
              <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.name}
                  className="max-h-[85vh] w-full object-contain bg-white"
                />

                <div className="border-t border-gray-100 p-6 text-center">
                  <h3 className="text-2xl font-black text-gray-900">
                    {selectedImage.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
                    {selectedImage.issuer}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STYLES */}
          <style jsx>{`
            .marquee-wrapper {
              width: 100%;
              overflow: hidden;
              position: relative;
            }

            .marquee-track {
              display: flex;
              width: max-content;
              animation: marqueeScroll 28s linear infinite;
              will-change: transform;
            }

            .marquee-wrapper:hover .marquee-track {
              animation-play-state: paused;
            }

            @keyframes marqueeScroll {
              0% {
                transform: translate3d(0, 0, 0);
              }

              100% {
                transform: translate3d(-50%, 0, 0);
              }
            }
          `}</style>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden py-12 bg-gradient-to-r from-gray-900 to-gray-800">
          {/* Background Glow Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 0.25, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2 }}
            className="absolute top-0 left-0 w-72 h-72 bg-red-500 rounded-full blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 0.2, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl"
          />

          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready to Enhance Your Workplace Safety?
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Join hundreds of satisfied clients who trust us for their safety
              needs
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {/* Contact Button */}
           <motion.div
  whileHover={{
    scale: 1.05,
    y: -3,
  }}
  whileTap={{ scale: 0.96 }}
>
  <Link
    href="/contact-us"
    className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/30"
    style={{ backgroundColor: "#e21d23" }}
  >
    {/* Shine Effect */}
    <span className="absolute top-0 left-[-120%] h-full w-[40%] animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />

    <span className="relative z-10">
      Contact Our Experts
    </span>
  </Link>
</motion.div>

              {/* Products Button */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href="/all-products"
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Explore Products
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
