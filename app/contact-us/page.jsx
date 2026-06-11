"use client";

import {
  User,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  Factory,
} from "lucide-react";
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus.message) setSubmitStatus({ type: "", message: "" });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return "Please enter a valid email";
    if (!formData.phone.trim()) return "Phone number is required";
    if (!/^[\d\s\+\-\(\)]{10,}$/.test(formData.phone))
      return "Please enter a valid phone number";
    if (!formData.message.trim()) return "Message is required";
    if (formData.message.length < 10)
      return "Message must be at least 10 characters";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setSubmitStatus({ type: "error", message: validationError });
      return;
    }

    setLoading(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await axios.post("/api/contact", formData);

      if (response.data.success) {
        setSubmitStatus({
          type: "success",
          message: response.data.message,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        // Auto hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: "", message: "" });
        }, 5000);
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="text-gray-800">
   <section className="w-full overflow-hidden">
  <div className="w-full">
    <img
      src="/contact/banner.jpg"
      alt="Contact Banner"
      className="w-full  sm:h-[320px] md:h-[450px] lg:h-[350px] object-cover object-center"
    />
  </div>
</section>

        {/* ===== MAIN SECTION ===== */}
        <div className="max-w-7xl mx-auto px-6 sm:py-20 py-12 grid gap-20 lg:grid-cols-2 items-start">
          {/* ===== LEFT INFO ===== */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium text-text mb-5">
              Get In <span className="text-red-600">Touch</span>
            </h2>

            <p className="text-gray-700 mb-4 text-justify max-w-xl leading-relaxed">
              Have questions about our industrial emergency lighting solutions?
              Our team is ready to help you find reliable systems designed for
              safety, visibility, and dependable performance.
            </p>

            <div className="space-y-10 ">
              {/* <InfoBox
                icon={<User size={20} />}
                title="Contact Person"
                value="Mr. Sanjeev Arora "
              /> */}
              <InfoBox
                icon={<Phone size={20} />}
                title="Phone Number"
                value="+91 7428855574, +91 7428855573"
              />
              <InfoBox
                icon={<Mail size={20} />}
                title="Email ID"
                value="ramadhirajpowersystems@gmail.com"
              />

              <InfoBox
                icon={<MapPin size={20} className="w-20 " />}
                title="Registered Office Address"
                value="A35/A Sector 67 Noida Uttar Pradesh - 201309"
              />
              <InfoBox
                icon={<Factory size={20} className="w-20 " />}
                title="Manufacturing Unit Address"
                value="A35/A Sector 67 Noida Uttar Pradesh - 201309"
              />
            </div>
          </div>

          {/* ===== RIGHT FORM ===== */}
          <div className="bg-white border border-gray-200 rounded-md p-8 shadow-lg">
            <h3 className="text-4xl font-medium text-gray-900 mb-4">
              Reach Out To Us
            </h3>

            {/* Status Message */}
            {submitStatus.message && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                )}
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
              <Input
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative overflow-hidden w-full bg-red-600 text-white py-3 rounded-xl text-sm font-medium hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {/* Shine Effect */}
                {!loading && (
                  <span className="absolute top-0 left-[-120%] h-full w-[40%] animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                )}

                <span className="relative z-10 flex items-center justify-center">
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>

                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Submit Enquiry"
                  )}
                </span>
              </button>
            </form>

            {/* Required fields note */}
            <p className="text-xs text-gray-400 mt-4 text-center">
              * Required fields
            </p>
          </div>
        </div>

        {/* ===== MAP SECTION ===== */}
        {/* <div className="max-w-7xl mx-auto px-6 pb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Location
          </h2>

          <div className="w-full h-[420px] rounded-md overflow-hidden border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d449540.9092327916!2d77.360544!3d28.327441!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20no.%20101%2C%20Sector%2068%2C%20Faridabad%2C%20Haryana%20121004!5e0!3m2!1sen!2sus!4v1775305508737!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div> */}
      </section>
      <Footer />
    </>
  );
}

/* ===== INFO BOX ===== */
function InfoBox({ icon, title, value }) {
  return (
    <div className="flex gap-4 items-start border border-gray-200 rounded-xl p-6 hover:shadow-md transition bg-white">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600 mt-1 leading-relaxed">{value}</p>
      </div>
    </div>
  );
}

/* ===== INPUT FIELD ===== */
function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none"
      />
    </div>
  );
}
