"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FileCheck,
  Shield,
  Globe,
  Lock,
  Scale,
  ClipboardList,
} from "lucide-react";

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-white py-27 mt-8">
        {/* Background Effects */}

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            {/* <div className="inline-flex items-center gap-2 bg-[#e21d23]/10 text-[#e21d23] px-5 py-2 rounded-full text-sm font-semibold mb-5">
            <FileCheck className="w-4 h-4" />
            Legal Information
          </div> */}

            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
              Terms & Conditions
            </h1>
          </div>

          {/* Main Card */}
          <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-12 space-y-12">
            {/* Intro */}
            <div>
              <p className="text-gray-700 leading-relaxed text-[17px] text-justify">
                Welcome to <strong>Ramadhiraj Power Systems Pvt. Ltd.</strong>{" "}
                By accessing our website, products, or services, you agree to
                comply with and be bound by the following Terms and Conditions.
                Please read them carefully before using our website or engaging
                with our business.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                {/* <div className="w-12 h-12 rounded-2xl bg-[#e21d23]/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#e21d23]" />
              </div> */}

                <h2 className="text-2xl font-bold text-gray-900">
                  Acceptance of Terms
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-[16px] text-justify">
                By accessing this website or using our services, you agree to
                these Terms and Conditions, along with our Privacy Policy. If
                you do not agree with any part of these terms, please refrain
                from using our website or services.
              </p>
            </div>

            {/* Company Information */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                {/* <div className="w-12 h-12 rounded-2xl bg-[#e21d23]/10 flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-[#e21d23]" />
              </div> */}

                <h2 className="text-2xl font-bold text-gray-900">
                  Company Information
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-[16px] text-justify">
                Ramadhiraj Power Systems Pvt. Ltd. specializes in industrial
                emergency lighting systems and related industrial lighting
                solutions designed for commercial, infrastructure, and
                industrial applications.
              </p>
            </div>

            {/* Website Usage */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                {/* <div className="w-12 h-12 rounded-2xl bg-[#e21d23]/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-[#e21d23]" />
              </div> */}

                <h2 className="text-2xl font-bold text-gray-900">
                  Website Usage
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-[16px] mb-5 text-justify">
                Users agree to use this website only for lawful purposes and in
                a manner that does not harm, restrict, or interfere with the
                website’s functionality, security, or user experience.
              </p>

              <div>
                <p className="font-semibold text-gray-900 mb-3">
                  Users must not:
                </p>

                <ul className="space-y-3 text-gray-700 text-[16px] leading-relaxed">
                  <li>• Attempt unauthorized access to website systems</li>
                  <li>• Upload harmful or malicious content</li>
                  <li>• Misuse website information or materials</li>
                  <li>
                    • Copy or reproduce website content without permission
                  </li>
                </ul>
              </div>
            </div>

            {/* Product Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Product Information
              </h2>

              <p className="text-gray-700 leading-relaxed text-[16px] text-justify">
                We strive to provide accurate and updated product information.
                However, product specifications, features, pricing, and
                availability may change without prior notice.
              </p>

              <p className="text-gray-700 leading-relaxed text-[16px] mt-4 text-justify">
                Images displayed on the website are for representation purposes
                only and actual products may vary slightly depending on
                manufacturing updates and requirements.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                {/* <div className="w-12 h-12 rounded-2xl bg-[#e21d23]/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-[#e21d23]" />
              </div> */}

                <h2 className="text-2xl font-bold text-gray-900">
                  Intellectual Property
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-[16px] text-justify">
                All content on this website including logos, graphics, product
                images, text, designs, and branding materials are the property
                of Ramadhiraj Power Systems Pvt. Ltd. Unauthorized use,
                reproduction, or distribution is strictly prohibited.
              </p>
            </div>

            {/* Quotations & Orders */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Quotations & Orders
              </h2>

              <p className="text-gray-700 leading-relaxed text-[16px] text-justify">
                All quotations provided by Ramadhiraj Power Systems Pvt. Ltd.
                are subject to revision based on product specifications,
                quantities, availability, and project requirements.
              </p>

              <p className="text-gray-700 leading-relaxed text-[16px] mt-4">
                Order confirmation will be processed only after mutual agreement
                on pricing, specifications, and applicable terms.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                {/* <div className="w-12 h-12 rounded-2xl bg-[#e21d23]/10 flex items-center justify-center">
                <Scale className="w-6 h-6 text-[#e21d23]" />
              </div> */}

                <h2 className="text-2xl font-bold text-gray-900">
                  Limitation of Liability
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-[16px] text-justify">
                Ramadhiraj Power Systems Pvt. Ltd. shall not be held liable for
                any direct, indirect, incidental, or consequential damages
                arising from the use of our website, products, or services.
              </p>

              <p className="text-gray-700 leading-relaxed text-[16px] mt-4 text-justify">
                Users are responsible for ensuring that products are installed
                and used according to applicable industrial and safety
                requirements.
              </p>
            </div>

            {/* Third Party Links */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Third-Party Links
              </h2>

              <p className="text-gray-700 leading-relaxed text-[16px]  text-justify">
                Our website may contain links to third-party websites for
                informational purposes. We do not control or endorse the
                content, policies, or practices of external websites.
              </p>
            </div>

            {/* Privacy & Data Protection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Privacy & Data Protection
              </h2>

              <p className="text-gray-700 leading-relaxed text-[16px]  text-justify">
                Any information submitted through our website forms or
                communication channels will be handled in accordance with our
                Privacy Policy.
              </p>
            </div>

            {/* Modifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Modifications to Terms
              </h2>

              <p className="text-gray-700 leading-relaxed text-[16px]  text-justify">
                Ramadhiraj Power Systems Pvt. Ltd. reserves the right to update
                or modify these Terms and Conditions at any time without prior
                notice. Continued use of the website indicates acceptance of
                updated terms.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Governing Law
              </h2>

              <p className="text-gray-700 leading-relaxed text-[16px] text-justify">
                These Terms and Conditions shall be governed by and interpreted
                in accordance with the laws of India. Any disputes arising shall
                fall under the jurisdiction of the appropriate courts.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-[#f8f8f8] rounded-3xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Contact Information
              </h2>

              <p className="text-gray-700 leading-relaxed text-[16px]">
                For any questions related to these Terms and Conditions, please
                contact:
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
      <Footer />
    </>
  );
}
