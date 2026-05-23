"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Factory,
  FileCheck,
  Lightbulb,
  ClipboardCheck,
  BadgeCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Site Safety Services",
      description1:"Comprehensive Site Safety Audits to identify hazards and ensure regulatory compliance.",
        description2:"Contractor Safety Management & Supervision from project initiation to completion.",
        description3:"Preparation of Risk Assessments, Method Statements (RAMS), and SOPs.",
        description4:"Development and implementation of EHS Plans & Procedures for project sites.",
        description5:"Statutory & Legal Documentation Support under BOCW & Factory Act.",

      icon: <ShieldCheck className="w-8 h-8" />,
      image: "/services/ehs.jpg",
    },
    {
      title: "Training Services",
      description1:"Job-Specific Safety Training (Working at Height, Hot Work, Electrical Safety, etc.) – Onsite & Online.",
        description2:"EHS Training Programs (Fire Safety, First Aid, Chemical Handling, etc.) – Onsite & Virtual.",
        description3:"Innovative Virtual Reality (VR) Safety Training for immersive learning.",
        description4:"Tailored Behavior-Based Safety (BBS) workshops.",

      icon: <ShieldCheck className="w-8 h-8" />,
      image: "/services/ehs.jpg",
    },
     {
      title: "Inspection & Compliance",
      description1:"3rd Party Inspections for lifting appliances and equipment.",
        description2:"Assistance in obtaining ISO Certifications (ISO 14001, ISO 45001, etc.).",
        description3:"Guidance for IGBC Certification and ESG Compliance.",
        description4:"Support for Statutory Inspections and Audit Readiness.",

      icon: <ShieldCheck className="w-8 h-8" />,
      image: "/services/ehs.jpg",
    },

     {
      title: "Environmental Services",
      description1:"Environmental Compliance Assistance for ETP/STP/ZLD/RO Systems.",
        description2:"Coordination for EIA Clearance from Pollution Control Boards.",
        description3:"Waste Management Solutions (Hazardous & Non-Hazardous).",
        description4:"Energy, water, and resource efficiency consulting.",

      icon: <ShieldCheck className="w-8 h-8" />,
      image: "/services/ehs.jpg",
    },

    {
      title: "Staffing & Supplies",
      description1:"Temporary & Long-Term Safety Staffing Solutions (Safety Officers, EHS Managers).",
        description2:"Supply of Personal Protective Equipment (PPE) and Fire Safety Equipment.",

      icon: <ShieldCheck className="w-8 h-8" />,
      image: "/services/ehs.jpg",
    },
    
   
   
  ];

  const features = [
    "ISO 9001, 14001 & 45001 Expertise",
    "End-to-End EHS Consultancy",
    "Industrial Safety Audits",
    "Environmental Compliance Support",
    "ESG & IGBC Consulting",
    "Safety Training Programs",
    "Documentation & Inspection Services",
    "Qualified Safety Staffing",
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white overflow-hidden sm:mt-10">
        {/* HERO SECTION */}
        <section className="relative py-28 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              {/* <span className="inline-block px-5 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-sm font-semibold tracking-[0.25em] uppercase mb-6">
                Our Services
              </span> */}

              <h2 className="text-5xl md:text-6xl font-black leading-tight">
                Expert Solutions in
                <span className="text-[#e21d23]">
                  {" "}
                  Environment, Health & Safety (EHS)
                </span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mt-8 max-w-7xl">
                At  <span className="text-white">Ramadhiraj Power Systems Private Limited,</span> we provide
                comprehensive and customized EHS services to help organizations
                meet regulatory compliance, ensure workplace safety, and promote
                sustainable environmental practices.
              </p>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mt-8 max-w-7xl">
                We offer end-to-end solutions in the field of <span className="text-white">Environment,
                Health & Safety (EHS),</span> ensuring full compliance, risk reduction,
                and a culture of safety at every level of your
                organization.{" "}
              </p>

              {/* <div className="flex flex-wrap gap-5 mt-10">
                <button className="px-8 py-4 bg-[#e21d23] rounded-xl font-semibold hover:scale-105 transition-all duration-500 shadow-2xl">
                  Explore Services
                </button>

                <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-500">
                  Contact Us
                </button>
              </div> */}
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="relative py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-20">
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#e21d23]">
                What We Offer
              </span>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-5">
                Our Professional Services
              </h2>

              <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-5">
                Innovative engineering and safety services trusted by industries
                across multiple sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: false }}
                  className="group bg-white rounded-[28px] overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-3 hover:shadow-2xl transition-all duration-700"
                >
                  {/* IMAGE */}
                  <div className="relative h-[260px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div className="absolute top-5 left-5 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <div className="w-14 h-[3px] bg-[#e21d23] mb-5 group-hover:w-24 transition-all duration-500"></div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-8">
                      {service.description1}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {service.description2}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {service.description3}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {service.description4}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {service.description5}
                    </p>

                    {/* <button className="flex items-center gap-2 text-[#e21d23] font-semibold group-hover:gap-4 transition-all duration-500">
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </button> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        {/* <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-red-100 rounded-full blur-3xl"></div>

                <img
                  src="/services/whychooseus.jpg"
                  alt="Why Choose Us"
                  className="relative rounded-[35px] shadow-2xl object-cover w-full h-[600px]"
                />
              </motion.div>

              
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#e21d23]">
                  Why Choose Us
                </span>

                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-5 leading-tight">
                  Excellence in Safety & Engineering
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mt-6">
                  We combine engineering expertise, safety innovation, and
                  compliance-driven solutions to deliver unmatched industrial
                  safety systems.
                </p>

                <div className="grid sm:grid-cols-2 gap-5 mt-10">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100"
                    >
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-[#e21d23]" />
                      </div>

                      <p className="text-gray-700 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section> */}

        {/* CTA */}
        <section className="relative py-24 bg-gray-200 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black leading-tight text-black">
              Ready to Enhance{" "}
              <span className="text-red-600">Industrial Safety?</span>
            </h2>

            <p className="text-gray-500 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
              Connect with our experts for tailored emergency lighting and EHS
              consultancy solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              {/* <button className="px-10 py-4 bg-[#e21d23] text-white rounded-xl font-bold hover:scale-105 transition-all duration-500 shadow-2xl">
                Get Consultation
              </button> */}

              <button className="px-10 py-4 bg-[#e21d23] text-white rounded-xl font-bold hover:scale-105 transition-all duration-500 shadow-2xl">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
