"use client";
// components/Testimonials.jsx
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      id: 1, 
      name: "Amit Verma",
      position: "Plant Manager",
      company: "Noida",
      industry: "Airport",
      rating: 5,
      content:
        "The emergency lighting systems delivered by Ramadhiraj have performed exceptionally well across our manufacturing facility. Reliable products and professional support throughout the project.",
      image: "R",
      date: "March 2024",
    },
    {
      id: 2,
      name: "Rohit Malhotra",
      position: "Operations Head",
      company: "Gurugram",
      industry: "Metro",
      rating: 5,
      content:
        "We were looking for dependable industrial lighting solutions for our warehouse operations, and Ramadhiraj delivered exactly what we needed with excellent quality and timely execution.",
      image: "P",
      date: "January 2024",
    },
    {
      id: 3,
      name: "Sanjay Kulkarni",
      position: "Maintenance Manager",
      company: "Pune",
      industry: "Healthcare",
      rating: 5,
      content:
        "Their emergency lighting products are durable, efficient, and perfectly suited for industrial environments. The overall experience was smooth and highly professional.",
      image: "A",
      date: "December 2023",
    },
    {
      id: 4,
      name: "Neha Arora",
      position: "Project Coordinator",
      company: "Delhi",
      industry: "Automobile",
      rating: 4,
      content:
        "Ramadhiraj provided reliable lighting solutions for our commercial infrastructure project. The product quality and response time were highly impressive.",
      image: "S",
      date: "November 2023",
    },
    {
      id: 5,
      name: "Vikas Sharma",
      position: "Facility Manager",
      company: "Ahmedabad",
      industry: "FMCG",
      rating: 5,
      content:
        "The team understood our operational requirements clearly and delivered lighting systems that matched our industrial safety expectations perfectly.",
      image: "N",
      date: "October 2023",
    },
    {
      id: 6,
      name: "Anil Kapoor",
      position: "Production Supervisor",
      company: "Reliance Industries",
      industry: "Faridabad",
      rating: 5,
      content:
        "Excellent product quality backed by strong technical support. Their emergency lighting systems have improved operational visibility and safety across our unit.",
      image: "V",
      date: "September 2023",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Get visible testimonials (3 at a time for desktop)
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <span
            className="text-sm font-semibold tracking-wider uppercase"
            style={{ color: "#e21d23" }}
          >
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mt-2 mb-4">
            What Our <span style={{ color: "#e21d23" }}>Clients Say</span>
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-6"
            style={{ backgroundColor: "#e21d23" }}
          ></div>
          <p className="text-gray-600 text-lg">
            Trusted by industry leaders across India
          </p>
        </div>

        {/* Desktop View - 3 Cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {getVisibleTestimonials().map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <svg
                  className="w-10 h-10"
                  style={{ color: "#e21d23", opacity: 0.3 }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-6 min-h-[100px]">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              {renderStars(testimonial.rating)}

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 my-4"></div>

              {/* Client Info */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: "#e21d23" }}
                >
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                  <p className="text-xs" style={{ color: "#e21d23" }}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Single Card Carousel */}
        <div className="lg:hidden relative">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            {/* Quote Icon */}
            <div className="mb-4">
              <svg
                className="w-10 h-10"
                style={{ color: "#e21d23", opacity: 0.3 }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              "{testimonials[currentIndex].content}"
            </p>

            {renderStars(testimonials[currentIndex].rating)}

            <div className="w-full h-px bg-gray-100 my-4"></div>

            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: "#e21d23" }}
              >
                {testimonials[currentIndex].image}
              </div>
              <div>
                <h4 className="font-bold text-gray-800">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-xs" style={{ color: "#e21d23" }}>
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Dots */}
        <div className="hidden lg:flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-6" : ""
              }`}
              style={{
                backgroundColor: index === currentIndex ? "#e21d23" : "#e5e7eb",
                width: index === currentIndex ? "24px" : "8px",
              }}
            ></button>
          ))}
        </div>

        {/* Desktop Navigation Arrows */}
        <div className="hidden lg:flex justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
