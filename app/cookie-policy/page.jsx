"use client";

import {
  Cookie,
  ShieldCheck,
  Globe,
  Settings,
  BarChart3,
  Lock,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-white py-27 mt-8">
        {/* Background Effects */}

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            {/* <div className="inline-flex items-center gap-2 bg-[#e21d23]/10 text-[#e21d23] px-5 py-2 rounded-full text-sm font-semibold mb-5">
              <Cookie className="w-4 h-4" />
              Website Policies
            </div> */}

            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
              Cookie Policy
            </h1>

            {/* <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ramadhiraj Power Systems Pvt. Ltd.
            </p> */}
          </div>

          {/* Main Card */}
          <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-12 space-y-12">
            {/* Intro */}
            <div>
              <p className="text-gray-700 leading-relaxed text-[17px] text-justify">
                This Cookie Policy explains how{" "}
                <strong>Ramadhiraj Power Systems Pvt. Ltd.</strong> uses cookies
                and similar technologies on our website to improve user
                experience, website functionality, and performance.
              </p>

              <p className="text-gray-700 leading-relaxed text-[17px] mt-4">
                By continuing to browse our website, you agree to the use of
                cookies in accordance with this policy.
              </p>
            </div>

            {/* What Are Cookies */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                {/* <div className="w-12 h-12 rounded-2xl bg-[#e21d23]/10 flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-[#e21d23]" />
                </div> */}

                <h2 className="text-2xl font-bold text-gray-900">
                  What Are Cookies?
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-[16px] text-justify">
                Cookies are small text files stored on your device when you
                visit a website. They help websites remember user preferences,
                improve browsing experience, and analyze website performance.
              </p>
            </div>

            {/* How We Use Cookies */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                {/* <div className="w-12 h-12 rounded-2xl bg-[#e21d23]/10 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-[#e21d23]" />
                </div> */}

                <h2 className="text-2xl font-bold text-gray-900">
                  How We Use Cookies
                </h2>
              </div>

              <ul className="space-y-3 text-gray-700 text-[16px] leading-relaxed">
                <li>• Improve website functionality and user experience</li>
                <li>• Understand website traffic and visitor behavior</li>
                <li>• Remember user preferences and settings</li>
                <li>• Enhance website performance and security</li>
                <li>• Analyze content effectiveness and visitor engagement</li>
              </ul>
            </div>

            {/* Types of Cookies */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                {/* <div className="w-12 h-12 rounded-2xl bg-[#e21d23]/10 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-[#e21d23]" />
                </div> */}

                <h2 className="text-2xl font-bold text-gray-900">
                  Types of Cookies We Use
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Essential Cookies
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-[16px]">
                    These cookies are necessary for the proper functioning of
                    the website and cannot be disabled in our systems.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Performance Cookies
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-[16px]">
                    These cookies help us understand how visitors interact with
                    the website by collecting anonymous usage information.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Functional Cookies
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-[16px]">
                    These cookies allow the website to remember user preferences
                    and provide an improved browsing experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Analytics Cookies
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-[16px]  text-justify">
                    These cookies help us analyze website traffic, page
                    performance, and visitor engagement to improve our website
                    and services.
                  </p>
                </div>
              </div>
            </div>

            {/* Third Party Cookies */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                {/* <div className="w-12 h-12 rounded-2xl bg-[#e21d23]/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#e21d23]" />
                </div> */}

                <h2 className="text-2xl font-bold text-gray-900">
                  Third-Party Cookies
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-[16px] text-justify">
                Our website may use trusted third-party services such as
                analytics or embedded content providers that may place cookies
                on your device. These third-party cookies are governed by their
                respective privacy policies.
              </p>
            </div>

            {/* Managing Cookies */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                {/* <div className="w-12 h-12 rounded-2xl bg-[#e21d23]/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-[#e21d23]" />
                </div> */}

                <h2 className="text-2xl font-bold text-gray-900">
                  Managing Cookies
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-[16px]">
                Users can manage or disable cookies through their browser
                settings. Please note that disabling certain cookies may affect
                website functionality and user experience.
              </p>

              <div className="mt-5">
                <p className="font-semibold text-gray-900 mb-3">
                  Most browsers allow users to:
                </p>

                <ul className="space-y-3 text-gray-700 text-[16px] leading-relaxed">
                  <li>• View stored cookies</li>
                  <li>• Delete cookies</li>
                  <li>• Block cookies from specific websites</li>
                  <li>• Disable all cookies completely</li>
                </ul>
              </div>
            </div>

            {/* Cookie Consent */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                {/* <div className="w-12 h-12 rounded-2xl bg-[#e21d23]/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#e21d23]" />
                </div> */}

                <h2 className="text-2xl font-bold text-gray-900">
                  Cookie Consent
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-[16px]">
                By using our website, you consent to the use of cookies as
                described in this Cookie Policy.
              </p>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Updates to This Policy
              </h2>

              <p className="text-gray-700 leading-relaxed text-[16px]">
                Ramadhiraj Power Systems Pvt. Ltd. reserves the right to update
                or modify this Cookie Policy at any time. Any changes will be
                reflected on this page.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-[#f8f8f8] rounded-3xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Contact Information
              </h2>

              <p className="text-gray-700 leading-relaxed text-[16px]">
                For questions related to this Cookie Policy, please contact:
              </p>

              <div className="mt-5 space-y-2 text-gray-800">
                <p className="font-semibold">
                  Ramadhiraj Power Systems 
                </p>

                <p>
                  Email:{" "}
                  <a
                    href="mailto: ramadhirajpowersystems@gmail.com"
                    className="text-[#e21d23] hover:underline"
                  >
                     ramadhirajpowersystems@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
