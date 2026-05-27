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
  
  "why-emergency-exit-sign-boards-matter": {
    id: 1,
    title: "Why Emergency Exit Sign Boards Matter in Industrial Safety",

    date: "Tue Mar 17 2026",
    readTime: "6 min read",
    category: "EHS Compliance",

    content: `
      <p id="role-in-industrial-safety">
        In industrial and commercial environments, emergency exit sign boards play a major role in ensuring safe and organized evacuation during power failures, fire incidents, or emergency situations. Clear and properly illuminated exit signage helps workers, visitors, and staff quickly identify safe exit routes without confusion or delay.
      </p>

      <br/>

       <p id="modern-led-exit-signs">
        Modern LED exit sign boards are designed for high visibility, long operational life, and reliable performance in demanding environments. These systems are commonly installed in factories, warehouses, hospitals, shopping malls, office buildings, and public infrastructure projects where safety and emergency preparedness are essential.
      </p>

      <br/> 
      <p id="industrial-exit-signage">
        Industrial exit signage solutions not only improve workplace safety but also support better emergency response management. Whether it is a directional exit sign, glow-based emergency panel, or LED exit display system, each solution helps create a safer and more secure environment for people inside the facility.
      </p>

      <br/> 
      <p id="reliable-emergency-sign-boards">
        Reliable emergency sign boards are now an essential part of modern industrial infrastructure, helping organizations maintain safety standards while protecting lives during critical situations.
      </p>
    `,

    image: "/blog/1.jpg",

    author: {
      name: "Priya Sharma",
      role: "EHS Consultant",
      bio: "Priya works with manufacturing industries to implement effective EHS compliance systems and workplace safety standards.",
    },

    tags: ["#EmergencyExitSign", "#IndustrialSafety ", "#LEDSignBoard", "#SafetyLighting","#IndustrialInfrastructure"],

    toc: [
      { id: "role-in-industrial-safety", title: "Role in Industrial Safety & Evacuation" },
      { id: "modern-led-exit-signs", title: "Modern LED Exit Sign Boards" },
      { id: "industrial-exit-signage", title: "Industrial Exit Signage Solutions" },
      { id: "reliable-emergency-sign-boards", title: "Reliable Emergency Sign Boards" },
    ],
  },

  "essential-emergency-lighting-requirements": {
    id: 2,
    title:
      "Essential Emergency Lighting Requirements for Industrial Facilities",

    date: "Tue Mar 17 2026",
    readTime: "5 min read",
    category: "Industrial Safety",

    content: `
      <p id="why-emergency-lighting-matters">
        Industrial facilities operate in environments where safety, visibility, and uninterrupted operations are critical. During power failures or emergency situations, emergency lighting systems play a major role in helping employees move safely, reducing operational risks, and supporting emergency response procedures. This is why installing the right emergency lighting system is essential for every industrial facility.
      </p>

      <br/>

      <p id="reliable-backup-performance">
One of the most important requirements for industrial emergency lighting is reliable backup performance. Emergency lights should activate immediately during power interruptions to maintain visibility across exits, pathways, staircases, production zones, and operational areas. Delayed illumination can create confusion and increase safety risks during emergencies.      </p>

      <br/>

      <p id="proper-placement">
      Proper placement of emergency lighting systems is equally important. Industrial facilities should ensure that emergency lights are installed at strategic locations such as emergency exits, corridors, machinery areas, control rooms, storage sections, and evacuation routes. Correct positioning helps maintain visibility across critical movement zones.
      </p>

      <br/>

      <p id="brightness-and-illumination">
Brightness and illumination quality are also essential factors. Industrial emergency lighting systems must provide adequate lighting output to support safe movement and operational awareness during emergencies. LED-based emergency lighting systems are widely preferred because they offer high brightness, energy efficiency, and dependable performance.
      </p>
      <br/>

      <p id="durability-requirements">
Durability is another key requirement for industrial applications. Manufacturing units, warehouses, power plants, and infrastructure environments often involve dust, heat, moisture, and vibration. Industrial emergency lighting systems should be designed with robust construction to ensure long-term performance under demanding conditions.
      </p>

      <br/>

      <p id="battery-backup-duration">
Battery backup duration should also be carefully evaluated. Reliable emergency lighting systems should continue operating for sufficient periods during emergencies to support evacuation and emergency management procedures effectively.
      <p/>
      
      <br/>


      <p id="maintenance-and-testing">
Regular maintenance and testing are equally important to ensure consistent performance. Industrial facilities should periodically inspect emergency lighting systems to verify battery health, illumination efficiency, and operational readiness.
      </p>


      <br/>

      <p id="ramadhiraj-solutions">
At Ramadhiraj Power Systems, we provide industrial emergency lighting solutions engineered for safety, durability, and dependable performance across modern industrial environments.
      </p>
    
    `,

    image: "/blog/2.jpg",

    author: {
      name: "Rajesh Kumar",
      role: "Industrial Safety Expert",
      bio: "Rajesh specializes in industrial lighting and workplace safety solutions with extensive experience in BIS-certified safety systems.",
    },

    tags: [
      "#EmergencyLighting ",
      "#IndustrialSafety",
      "#LEDLightingSystems ",
      "#IndustrialFacilities  ",
      "#WorkplaceSafety",
    ],

    toc: [
      { id: "why-emergency-lighting-matters", title: "Why Emergency Lighting Matters" },
      { id: "reliable-backup-performance", title: "Reliable Backup Performance" },
      { id: "proper-placement", title: "Proper Placement of Systems" },
      { id: "brightness-and-illumination", title: "Brightness & Illumination Quality" },
      { id: "durability-requirements", title: "Durability for Industrial Use" },
      { id: "battery-backup-duration", title: "Battery Backup Duration" },
      { id: "maintenance-and-testing", title: "Maintenance & Testing" },
      { id: "ramadhiraj-solutions", title: "Ramadhiraj Power Systems Solutions" },
    ],
  },


  "how-to-select-the-right-industrial-led": {
    id: 3,
    title: "How to Select the Right Industrial LED Lighting Solution",

    date: "Tue Mar 17 2026",
    readTime: "4 min read",
    category: "Industrial Lighting",

    content: `
      <p id="choosing-industrial-led">
        Choosing the right industrial LED lighting solution is important for maintaining workplace visibility, operational efficiency, and long-term reliability. Industrial environments require lighting systems capable of performing consistently under demanding operational conditions while supporting safety and productivity.

      </p>

      <br/>

       <p id="application-area">
        The first step in selecting the right industrial LED lighting solution is understanding the application area. Different facilities such as manufacturing plants, warehouses, healthcare facilities, commercial infrastructure, and process industries require different lighting specifications. The lighting system should be selected according to the operational environment and visibility requirements.
      </p>

      <br/> <p id="brightness-and-coverage">
        Brightness and coverage are major factors to consider. Industrial LED lighting should provide uniform illumination across operational areas without creating dark spots or visibility issues. High-quality LED systems help improve workplace visibility while reducing energy consumption.
      </p>

      <br/> <p id="energy-efficiency">
        Energy efficiency is another important advantage of LED lighting systems. Modern industrial LED lights consume less power compared to traditional lighting technologies while delivering better illumination performance. This helps organizations reduce operational costs and improve energy management.
      </p>

      <br/> <p id="durability-and-life">
        Durability and operational life are equally important in industrial environments. Industrial facilities often operate continuously, making long-lasting lighting systems essential. LED lighting systems designed for industrial applications provide extended operational life with reduced maintenance requirements.
      </p>

      <br/> <p id="environmental-conditions">
        Environmental conditions should also be considered before selecting lighting systems. Areas exposed to dust, heat, moisture, or vibration require robust industrial-grade lighting solutions capable of maintaining performance in challenging conditions.
      </p>

      <br/> <p id="maintenance-efficiency">
        Maintenance efficiency is another important consideration. Low-maintenance LED lighting systems help minimize downtime and operational disruptions while ensuring long-term reliability.
      </p>

      <br/>
      <p id="ramadhiraj-led-solutions">
        At Ramadhiraj Power Systems, we deliver industrial LED lighting solutions designed for performance, durability, energy efficiency, and reliable operation across demanding industrial applications.
      </p>
    `,

    image: "/blog/3.jpg",

    author: {
      name: "Amit Verma",
      role: "Lighting Solutions Specialist",
      bio: "Amit specializes in industrial LED lighting systems and energy-efficient lighting solutions for large-scale facilities.",
    },

    tags: [
      "#IndustrialLEDLighting ",
      "#LEDLightingSolutions ",
      "#IndustrialLighting  ",
      "#EnergyEfficientLighting ",
      "#WorkplaceVisibility"
    ],

    toc: [
      { id: "choosing-industrial-led", title: "Choosing Industrial LED Lighting" },
      { id: "application-area", title: "Understanding the Application Area" },
      { id: "brightness-and-coverage", title: "Brightness & Coverage" },
      { id: "energy-efficiency", title: "Energy Efficiency Benefits" },
      { id: "durability-and-life", title: "Durability & Operational Life" },
      { id: "environmental-conditions", title: "Environmental Conditions" },
      { id: "maintenance-efficiency", title: "Maintenance Efficiency" },
      { id: "ramadhiraj-led-solutions", title: "Ramadhiraj LED Solutions" },
    ],
  },

  "understanding-industrial-safety-lighting": {
    id: 4,
    title: "Understanding Industrial Safety Lighting Compliance Standards",

    date: "Tue Mar 17 2026",
    readTime: "5 min read",
    category: "ISO Standards",

    content: `
      <p id="role-of-safety-lighting">
        Industrial safety lighting plays a critical role in maintaining workplace safety, visibility, and emergency preparedness across industrial facilities. To ensure dependable performance and operational safety, industries must follow specific lighting standards and compliance requirements designed for emergency and industrial environments.

      </p>

      <br/>
      <p id="compliance-standards">
        Safety lighting compliance standards are established to ensure that industrial facilities maintain adequate visibility during emergencies such as power failures, fire incidents, or evacuation situations. Properly designed emergency lighting systems help employees move safely through exits, pathways, staircases, and operational zones during critical situations.
      
      </p>

      <br/>
      <p id="illumination-performance">
        One of the key aspects of industrial safety lighting compliance is illumination performance. Emergency lighting systems should provide sufficient brightness to maintain visibility throughout evacuation routes and operational areas. Poor illumination during emergencies can increase safety risks and disrupt emergency response procedures.
      
      </p>

      <br/>
      <p id="backup-reliability">
        Backup reliability is another important compliance requirement. Emergency lighting systems should activate immediately during power interruptions and continue functioning for the required duration to support safe evacuation and emergency operations.
      
      </p>

      <br/>
      <p id="installation-positioning">
        Installation positioning also plays an important role in compliance standards. Emergency lights should be installed at clearly visible locations including exits, corridors, staircases, control rooms, production sections, and critical operational areas.
      
      </p>

      <br/>
      <p id="durability-in-environment">
        
      Industrial safety lighting systems must also be durable and suitable for the operating environment. Facilities exposed to heat, dust, vibration, or hazardous conditions require industrial-grade lighting systems designed for long-term reliability and performance.
      </p>

      <br/>
      <p id="testing-and-maintenance">
        Routine testing and maintenance are equally important for compliance. Industrial facilities should regularly inspect and test emergency lighting systems to ensure operational readiness and consistent performance during emergency situations.
      
      </p>

      <br/>

      <p id="ramadhiraj-safety-lighting">
At Ramadhiraj Power Systems, we provide dependable industrial safety lighting solutions engineered to support operational safety, reliable visibility, and modern industrial requirements.
      </p>
    `,

    image: "/blog/4.jpg",

    author: {
      name: "Dr. Anil Mehta",
      role: "Occupational Safety Advisor",
      bio: "Dr. Anil Mehta is an occupational health and safety expert with years of experience implementing ISO safety systems across industries.",
    },

    tags: ["#IndustrialSafetyLighting", "#EmergencyLightingStandards", "#IndustrialCompliance ", "#SafetyLightingSystems","#IndustrialInfrastructure"],

    toc: [
      { id: "role-of-safety-lighting", title: "Role of Industrial Safety Lighting" },
      { id: "compliance-standards", title: "Safety Lighting Compliance Standards" },
      { id: "illumination-performance", title: "Illumination Performance" },
      { id: "backup-reliability", title: "Backup Reliability Requirements" },
      { id: "installation-positioning", title: "Installation Positioning" },
      { id: "durability-in-environment", title: "Durability in Operating Environments" },
      { id: "testing-and-maintenance", title: "Testing & Maintenance" },
      { id: "ramadhiraj-safety-lighting", title: "Ramadhiraj Safety Lighting Solutions" },
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

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

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
        ([key, value]) => key !== slug && value.category === blog.category,
      )
      .slice(0, 3)
      .map(([key, value]) => ({
        slug: key,
        ...value,
      }));
  };

  const getTableOfContents = () => {
    if (!blog) return [];

    if (blog.toc?.length) return blog.toc;

    const headings = [];
    const matches = blog.content.matchAll(/<h2>(.*?)<\/h2>/g);

    for (const match of matches) {
      headings.push({
        id: match[1].toLowerCase().replace(/[^a-z0-9]+/g, "-"),
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
            <h2 className="text-3xl font-bold mb-4">Blog Not Found</h2>

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
                  <h3 className="font-bold text-lg mb-5">Table of Contents</h3>

                  <ul className="space-y-3">
                    {tableOfContents.length > 0 ? (
                      tableOfContents.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="text-sm text-gray-600 hover:text-[#dc2626] transition leading-snug"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))
                    ) : (
                      <li className="text-sm text-gray-400">No sections available</li>
                    )}
                  </ul>
                </div>

                {/* SHARE */}
                {/* <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-5">Share Article</h3>

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
                </div> */}
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
                className="prose prose-lg max-w-none prose-headings:text-[#dc2626] prose-p:text-gray-700 prose-li:text-gray-700 prose-headings:font-bold text-justify [&_p[id]]:scroll-mt-28"
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
               {/* SHARE */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-5">Share Article</h3>

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
