"use client";

import { ShieldCheck, Lock, FileText, Globe } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
    <Navbar/>
 <section className="relative overflow-hidden bg-white py-27 mt-8">
      {/* Background Effects */}

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          {/* <div className="inline-flex items-center gap-2 bg-[#e21d23]/10 text-[#e21d23] px-5 py-2 rounded-full text-sm font-semibold mb-5">
            <ShieldCheck className="w-4 h-4" />
            Privacy & Security
          </div> */}

          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
            Privacy Policy
          </h1>

          
        </div>

        {/* Main Card */}
        <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-12 space-y-12">
          {/* Intro */}
          <div>
            <p className="text-gray-700 leading-relaxed text-[17px] text-justify">
              At <strong>Ramadhiraj Power Systems Pvt. Ltd.</strong>, we are
              committed to protecting the privacy and security of our customers,
              website visitors, and business partners. This Privacy Policy
              explains how we collect, use, and safeguard your information when
              you interact with our website, products, and services.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* <div className="w-12 h-12 rounded-2xl bg-[#e21d23]/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#e21d23]" />
              </div> */}

              <h2 className="text-2xl font-bold text-gray-900">
                Information We Collect
              </h2>
            </div>

            <ul className="space-y-3 text-gray-700 text-[16px] leading-relaxed">
              <li>• Name and contact details</li>
              <li>• Email address and phone number</li>
              <li>• Company or business information</li>
              <li>• Enquiry and communication details</li>
              <li>• Information submitted through contact forms</li>
              <li>• Website usage and browsing data</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* <div className="w-12 h-12 rounded-2xl bg-[#e21d23]/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-[#e21d23]" />
              </div> */}

              <h2 className="text-2xl font-bold text-gray-900">
                How We Use Your Information
              </h2>
            </div>

            <ul className="space-y-3 text-gray-700 text-[16px] leading-relaxed">
              <li>• Responding to enquiries and support requests</li>
              <li>• Providing product information and quotations</li>
              <li>
                • Improving our products, services, and website experience
              </li>
              <li>• Business communication and customer support</li>
              <li>• Internal analysis and operational purposes</li>
              <li>• Sending updates related to products and services</li>
            </ul>
          </div>

          {/* Information Protection */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Information Protection
            </h2>

            <p className="text-gray-700 leading-relaxed text-[16px] text-justify">
              We implement appropriate security measures to protect your
              personal information from unauthorized access, misuse,
              disclosure, or alteration. Your information is handled with
              confidentiality and used only for legitimate business purposes.
            </p>
          </div>

          {/* Third Party Sharing */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Third-Party Sharing
            </h2>

            <p className="text-gray-700 leading-relaxed text-[16px] text-justify">
              Ramadhiraj Power Systems Pvt. Ltd. does not sell, rent, or trade
              personal information to third parties. Information may only be
              shared when required by law or for necessary business operations
              with trusted service providers.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* <div className="w-12 h-12 rounded-2xl bg-[#e21d23]/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-[#e21d23]" />
              </div> */}

              <h2 className="text-2xl font-bold text-gray-900">
                Cookies & Website Data
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed text-[16px] text-justify">
              Our website may use cookies and analytics tools to improve user
              experience, monitor website performance, and understand visitor
              preferences. Users may choose to disable cookies through browser
              settings.
            </p>
          </div>

          {/* External Links */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              External Links
            </h2>

            <p className="text-gray-700 leading-relaxed text-[16px] text-justify">
              Our website may contain links to external websites. We are not
              responsible for the privacy practices or content of third-party
              websites.
            </p>
          </div>

          {/* User Rights */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              User Rights
            </h2>

            <p className="text-gray-700 leading-relaxed text-[16px] text-justify">
              Users may request access, correction, or removal of their
              personal information by contacting us directly through our
              official communication channels.
            </p>
          </div>

          {/* Policy Updates */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Policy Updates
            </h2>

            <p className="text-gray-700 leading-relaxed text-[16px] text-justify">
              Ramadhiraj Power Systems Pvt. Ltd. reserves the right to update or
              modify this Privacy Policy at any time. Changes will be reflected
              on this page.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-[#f8f8f8] rounded-3xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Contact Information
            </h2>

            <p className="text-gray-700 leading-relaxed text-[16px]">
              For any questions regarding this Privacy Policy or your data,
              please contact:
            </p>

            <div className="mt-5 space-y-2 text-gray-800">
              <p className="font-semibold">
                Ramadhiraj Power Systems
              </p>

              <p>
                Email:{" "}
                <a
                  href="mailto:ramadhirajpowersystems@gmail.com"
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
    <Footer/>
    </>
   
  );
}