"use client";
// components/Blog.jsx

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock3, Sparkles } from "lucide-react";

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogs = [
    {
      id: 1,
      title: "Top Benefits of Industrial Emergency Lighting Systems",
      excerpt:
        "Discover how industrial emergency lighting improves workplace visibility, supports operational safety, reduces downtime risks, and enhances emergency preparedness across critical environments.",
      category: "Emergency Lighting",
      readTime: "5 min read",
      date: "May 15, 2024",
      image: "/blog/image4.png",
      author: "Rajesh Kumar",
      authorRole: "Senior Technical Specialist",
      slug: "why-emergency-exit-sign-boards-matter",
      featured: true,
    },
    {
      id: 2,
      title: "Essential Emergency Lighting Requirements for Industrial Facilities",
      excerpt:
        "A complete guide to maintaining environmental, health, and safety compliance standards across manufacturing operations.",
      category: "Industrial Safety",
      readTime: "7 min read",
      date: "May 10, 2024",
      image: "/blog/image3.png",
      author: "Priya Sharma",
      authorRole: "EHS Consultant",
      slug: "essential-emergency-lighting-requirements",
      featured: false,
    },
    {
      id: 3,
      title: "How to Select the Right Industrial LED Lighting Solution",
      excerpt:
        "Learn the key performance, durability, and energy-efficiency factors to consider before selecting industrial LED solutions.",
      category: "LED Lighting",
      readTime: "4 min read",
      date: "May 5, 2024",
      image: "/blog/image2.png",
      author: "Amit Verma",
      authorRole: "Product Manager",
      slug: "how-to-select-the-right-industrial-led",
      featured: false,
    },
    {
      id: 4,
      title: "Understanding Industrial Safety Lighting Compliance Standards",
      excerpt:
        "Understand how ISO 45001 helps organizations strengthen workplace safety systems and reduce operational risks.",
      category: "Safety Standards",
      readTime: "6 min read",
      date: "April 28, 2024",
      image: "/blog/image1.png",
      author: "Dr. Anil Mehta",
      authorRole: "Safety Expert",
      slug: "understanding-industrial-safety-lighting",
      featured: false,
    },
  ];

  const featuredBlog = blogs.find((blog) => blog.featured);
  const recentBlogs = blogs.filter((blog) => !blog.featured);

  const getCategoryColor = (category) => {
    const colors = {
      "LED Lighting": "#e21d23",
      "EHS Consultancy": "#0f766e",
      Maintenance: "#ca8a04",
      Innovation: "#7c3aed",
    };

    return colors[category] || "#e21d23";
  };

  return (
    <section className="relative py-8 lg:py-12 bg-white overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-red-50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-red-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#e21d23] bg-red-50 px-4 py-2 rounded-full mb-3">
            Our Blog
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Latest <span className="text-[#e21d23]">Insights</span> & Articles
          </h2>

          <p className="mt-3 text-gray-600 text-base leading-relaxed">
            Explore expert resources on industrial emergency lighting, safety systems, compliance standards, and modern infrastructure lighting solutions.
          </p>
        </div>

        {/* Featured + Side Blogs */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured Blog */}
          <div className="lg:col-span-2 group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500">
            <div className="grid md:grid-cols-2 h-full">
              {/* Image */}
              <div className="relative h-[260px] md:h-full overflow-hidden">
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute top-4 left-4">
                  <span className="bg-[#e21d23] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                  <span className="text-[#e21d23] font-semibold">
                    {featuredBlog.category}
                  </span>

                  <span>•</span>

                  <span>{featuredBlog.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-4 hover:text-[#e21d23] transition-colors duration-300">
                  {featuredBlog.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {featuredBlog.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      {featuredBlog.author}
                    </p>
                    <p className="text-xs text-gray-400">
                      {featuredBlog.authorRole}
                    </p>
                  </div>

                  <Link
                    href={`/blog/${featuredBlog.slug}`}
                    className="group relative overflow-hidden flex items-center gap-2 bg-[#e21d23] hover:bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                  >
                    {/* Shine Effect */}
                    <span className="absolute top-0 left-[-120%] h-full w-[40%] animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />

                    <span className="relative z-10 flex items-center gap-2">
                      Read More
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Small Blogs */}
          <div className="space-y-6">
            {recentBlogs.slice(0, 3).map((blog) => (
              <div
                key={blog.id}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="flex gap-4 p-4">
                  {/* Thumbnail */}
                  <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-[#e21d23] uppercase tracking-wide">
                      {blog.category}
                    </span>

                    <h4 className="text-base font-bold text-gray-900 mt-2 mb-2 leading-snug line-clamp-2 group-hover:text-[#e21d23] transition-colors duration-300">
                      {blog.title}
                    </h4>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-gray-400">
                        {blog.readTime}
                      </span>

                      <Link
                        href={`/blog/${blog.slug}`}
                        className="text-sm font-semibold text-[#e21d23] hover:translate-x-1 transition-all duration-300 inline-block"
                      >
                        Read →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Line Clamp */}
      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
