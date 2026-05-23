// app/blog/[slug]/page.jsx
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  CalendarDays,
  User2,
  Clock3,
  Copy,
  Check,
  ArrowLeft,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// BLOGS DATA
const allBlogsData = {
  "benefits-of-bis-certified-emergency-lights": {
    id: 1,
    title:
      "Top 5 Benefits of BIS-Certified Emergency Lights for Industries",

    date: "Tue Mar 17 2026",
    readTime: "5 min read",
    category: "Industrial Safety",

    content: `
      <p>
        In today’s industrial environments, emergency lighting is more than just a backup solution — it’s a critical safety requirement.
      </p>

      <br/>

      <p>
        BIS-certified emergency lights ensure reliability, durability, and compliance with Indian safety standards. These lighting systems automatically activate during power failures and help workers safely evacuate industrial premises.
      </p>

      <br/>

      <h2>Major Benefits of BIS-Certified Emergency Lights</h2>

      <ul>
        <li>Enhanced workplace safety</li>
        <li>Better operational continuity</li>
        <li>Compliance with industrial regulations</li>
        <li>Reduced accident risks</li>
        <li>Energy-efficient performance</li>
      </ul>

      <br/>

      <h2>Industries That Require Emergency Lighting</h2>

      <p>
        Industries such as manufacturing plants, warehouses, hospitals, and commercial facilities heavily rely on emergency lighting systems to maintain uninterrupted safety standards.
      </p>

      <br/>

      <h2>Conclusion</h2>

      <p>
        Investing in BIS-certified emergency lights helps industries improve safety, ensure compliance, and maintain operational efficiency during emergencies.
      </p>
    `,

    image: "/blog/image4.png",

    author: {
      name: "Rajesh Kumar",
      role: "Industrial Safety Expert",
      bio: "Rajesh specializes in industrial lighting and workplace safety solutions with extensive experience in BIS-certified safety systems.",
    },

    tags: [
      "Emergency Lights",
      "BIS Certification",
      "Industrial Safety",
      "LED Lights",
    ],
  },

  "ehs-compliance-checklist-manufacturing": {
    id: 2,
    title:
      "Essential EHS Compliance Checklist for Manufacturing Plants",

    date: "Tue Mar 17 2026",
    readTime: "6 min read",
    category: "EHS Compliance",

    content: `
      <p>
        Environmental, Health, and Safety compliance is essential for every manufacturing facility.
      </p>

      <br/>

      <p>
        A strong EHS strategy helps organizations maintain safe working environments while ensuring regulatory compliance and sustainability.
      </p>

      <br/>

      <h2>Key EHS Checklist Points</h2>

      <ul>
        <li>Safety audits</li>
        <li>Employee training</li>
        <li>Hazard identification</li>
        <li>Fire safety compliance</li>
        <li>Waste management systems</li>
        <li>PPE monitoring</li>
      </ul>

      <br/>

      <h2>Why EHS Compliance Matters</h2>

      <p>
        A well-maintained compliance structure improves operational efficiency and protects both employees and business assets.
      </p>

      <br/>

      <h2>Conclusion</h2>

      <p>
        Manufacturing facilities that prioritize EHS compliance reduce risks, improve productivity, and maintain safer workplaces.
      </p>
    `,

    image: "/blog/image3.png",

    author: {
      name: "Priya Sharma",
      role: "EHS Consultant",
      bio: "Priya works with manufacturing industries to implement effective EHS compliance systems and workplace safety standards.",
    },

    tags: ["EHS", "Manufacturing", "Safety", "Compliance"],
  },

  "choose-right-industrial-led-light": {
    id: 3,
    title:
      "How to Choose the Right Industrial LED Light for Your Facility",

    date: "Tue Mar 17 2026",
    readTime: "4 min read",
    category: "Industrial Lighting",

    content: `
      <p>
        Choosing the right industrial LED lighting solution can significantly improve energy savings and workplace productivity.
      </p>

      <br/>

      <h2>Things to Consider Before Choosing Industrial Lights</h2>

      <ul>
        <li>Brightness requirements</li>
        <li>Power consumption</li>
        <li>IP ratings</li>
        <li>Heat resistance</li>
        <li>Maintenance costs</li>
        <li>Lifespan and durability</li>
      </ul>

      <br/>

      <h2>Benefits of Modern LED Systems</h2>

      <p>
        Modern LED systems provide long-term cost savings and improved lighting performance for industrial spaces.
      </p>

      <br/>

      <h2>Conclusion</h2>

      <p>
        Selecting the right industrial lighting setup helps businesses improve visibility, reduce energy costs, and create safer work environments.
      </p>
    `,

    image: "/blog/image2.png",

    author: {
      name: "Amit Verma",
      role: "Lighting Solutions Specialist",
      bio: "Amit specializes in industrial LED lighting systems and energy-efficient lighting solutions for large-scale facilities.",
    },

    tags: [
      "Industrial LED",
      "Lighting",
      "Energy Saving",
      "Industrial Solutions",
    ],
  },

  "understanding-iso-45001-standards": {
    id: 4,
    title:
      "Understanding ISO 45001: Occupational Health & Safety Standards",

    date: "Tue Mar 17 2026",
    readTime: "5 min read",
    category: "ISO Standards",

    content: `
      <p>
        ISO 45001 is an internationally recognized standard focused on workplace health and safety.
      </p>

      <br/>

      <p>
        The framework helps organizations reduce workplace risks, improve employee safety, and build a proactive safety culture.
      </p>

      <br/>

      <h2>Major Advantages of ISO 45001</h2>

      <ul>
        <li>Reduced workplace incidents</li>
        <li>Improved legal compliance</li>
        <li>Better employee trust</li>
        <li>Stronger risk management</li>
        <li>Continuous safety improvement</li>
      </ul>

      <br/>

      <h2>Why Businesses Implement ISO 45001</h2>

      <p>
        Implementing ISO 45001 demonstrates a company’s commitment to maintaining safe and healthy work environments.
      </p>

      <br/>

      <h2>Conclusion</h2>

      <p>
        Organizations adopting ISO 45001 standards strengthen workplace safety culture and improve operational reliability.
      </p>
    `,

    image: "/blog/image1.png",

    author: {
      name: "Dr. Anil Mehta",
      role: "Occupational Safety Advisor",
      bio: "Dr. Anil Mehta is an occupational health and safety expert with years of experience implementing ISO safety systems across industries.",
    },

    tags: [
      "ISO 45001",
      "Occupational Safety",
      "Health & Safety",
      "Compliance",
    ],
  },
};

const BlogDetailPage = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (slug && allBlogsData[slug]) {
      setBlog(allBlogsData[slug]);
    }

    setLoading(false);
  }, [slug]);

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const getRelatedPosts = () => {
    if (!blog) return [];

    return Object.entries(allBlogsData)
      .filter(
        ([key, value]) =>
          key !== slug && value.category === blog.category
      )
      .slice(0, 3)
      .map(([key, value]) => ({
        slug: key,
        ...value,
      }));
  };

  const getTableOfContents = () => {
    if (!blog) return [];

    const headings = [];
    const matches = blog.content.matchAll(/<h2>(.*?)<\/h2>/g);

    for (const match of matches) {
      headings.push({
        id: match[1]
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-"),
        title: match[1],
      });
    }

    return headings;
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#dc2626] border-t-transparent rounded-full animate-spin"></div>
        </div>

        <Footer />
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Blog Not Found
            </h2>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-6 py-3 rounded-xl"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  const relatedPosts = getRelatedPosts();
  const tableOfContents = getTableOfContents();

  return (
    <>
      <Navbar />

      <div className="bg-[#f8f8f8] min-h-screen pt-28">
        {/* HERO */}
        <section className="bg-gray-600 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-5">
              <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                {blog.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                {blog.date}
              </div>

              <div className="flex items-center gap-2">
                <Clock3 className="w-4 h-4" />
                {blog.readTime}
              </div>

              <div className="flex items-center gap-2">
                <User2 className="w-4 h-4" />
                {blog.author.name}
              </div>
            </div>
          </div>
        </section>

        {/* MAIN */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* LEFT SIDEBAR */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                {/* TOC */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-5">
                    Table of Contents
                  </h3>

                  <ul className="space-y-3">
                    {tableOfContents.map((item, index) => (
                      <li key={index}>
                        <a
                          href={`#${item.id}`}
                          className="text-gray-600 hover:text-[#dc2626] transition"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SHARE */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-5">
                    Share Article
                  </h3>

                  <button
                    onClick={handleCopyLink}
                    className="w-full flex items-center justify-center gap-2 bg-[#dc2626] text-white py-3 rounded-xl hover:bg-[#b91c1c] transition"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Link
                      </>
                    )}
                  </button>
                </div>
              </div>
            </aside>

            {/* BLOG CONTENT */}
            <article className="lg:col-span-6">
              {/* IMAGE */}
              <div className="overflow-hidden rounded-3xl mb-8 shadow-sm">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[250px] sm:h-[450px] object-cover"
                />
              </div>

              {/* CONTENT */}
              <div
                className="prose prose-lg max-w-none prose-headings:text-[#dc2626] prose-p:text-gray-700 prose-li:text-gray-700 prose-headings:font-bold"
                dangerouslySetInnerHTML={{
                  __html: blog.content,
                }}
              />

              {/* TAGS */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-3">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#dc2626]/10 text-[#dc2626] px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* AUTHOR */}
            <aside className="lg:col-span-3">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <div className="w-20 h-20 rounded-full bg-[#dc2626] text-white flex items-center justify-center text-3xl font-bold mx-auto mb-5">
                    {blog.author.name.charAt(0)}
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold">
                      {blog.author.name}
                    </h3>

                    <p className="text-[#dc2626] font-medium mt-1">
                      {blog.author.role}
                    </p>

                    <p className="text-gray-600 text-sm leading-7 mt-4">
                      {blog.author.bio}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* RELATED POSTS */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#dc2626]">
                  Related Articles
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group"
                  >
                    <div className="bg-[#f8f8f8] rounded-3xl overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
                      <div className="overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="text-xl font-bold text-[#dc2626] line-clamp-2">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        {/* <section className="py-16 bg-[#dc2626]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Need Expert Guidance?
            </h2>

            <p className="text-white/80 text-lg mb-8">
              Connect with our experts for industrial safety,
              compliance, and lighting solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#dc2626] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition"
              >
                Contact Us
              </Link>

              <Link
                href="/services"
                className="border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section> */}
      </div>

      <Footer />
    </>
  );
};

export default BlogDetailPage;