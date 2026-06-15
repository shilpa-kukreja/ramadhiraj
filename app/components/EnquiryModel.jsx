"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { X, Loader2, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function EnquirySideModal() {
  const productOptions = [
    "RPS-EL (NIKAS)",
    "RPS-EL (EXIT)",
    "RPS-EL 40W (EMERGENCY LIGHT)",
    "RPS-EL EMERGENCY EXIT (KANNADA)",
    "RPS-EL EMERGENCY EXIT (TAMIL)",
    "RPS-EL EMERGENCY EXIT (ENGLISH AND HINDI)",
    "RPS-EL 40W (EXIT)",
    "RPS-EL 40W ",
    "RPS-FLP 40W (GREEN)",
    "RPS-FLP 40W (RED)",
    "RPS-FLP 40W (NO DISPLAY)",
    "FLOOD LIGHT 30W",
    "FLOOD LIGHT 50W",
    "FLOOD LIGHT 100W",
    "FLOOD LIGHT 200W",
    "STREET LIGHT 30W",
    "STREET LIGHT 50W",
    "STREET LIGHT 100W",
    "STREET LIGHT 200W",
    "SIGNBOARD ",
    "SIGNBOARD (EMERGENCY EXIT)",
    "SIGNAGE",
    "LEFT SIGNAGE",
    "RIGHT SIGNAGE",
  ];

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const [focusedField, setFocusedField] = useState("");

  const [formData, setFormData] = useState({
    productName: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto remove message
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post("/api/product-enquiry", {
        ...formData,
        formSource: "enquiry-now",
      });

      if (response.data.success) {
        setMessage({
          text: "Enquiry submitted successfully!",
          type: "success",
        });

        setFormData({
          productName: "",
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => {
          setOpen(false);

          setMessage({
            text: "",
            type: "",
          });
        }, 1500);
      }
    } catch (error) {
      console.log(error);

      setMessage({
        text:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);

    setMessage({
      text: "",
      type: "",
    });
  };

  const ui = (
    <>
      {/* Floating Button — 50vh keeps center on viewport, not a short fixed header */}
      <button
        onClick={() => setOpen(true)}
        className="fixed right-0 top-[50vh] -translate-y-1/2 z-40 group"
        aria-label="Open enquiry form"
      >
        <div
          className="bg-red-600 text-white px-2 py-3 rounded-l-md
          font-semibold tracking-wider text-sm shadow-lg
          hover:bg-red-700 transition-all duration-300
          rotate-180 [writing-mode:vertical-rl]"
        >
          Enquiry Now
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={handleClose}
            />

            {/* Right Side Modal — half viewport, vertically centered */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute right-0 top-1/2 -translate-y-1/2
               w-full sm:w-[420px]
              bg-white shadow-2xl rounded-l-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-red-600 px-6 py-5 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Get Consultation
                  </h2>

                  {/* <p className="text-white/80 text-sm mt-1">
                    Fill the form and our team will contact you.
                  </p> */}
                </div>

                <button
                  onClick={handleClose}
                  className="w-10 h-10 rounded-full bg-white/20
                  flex items-center justify-center
                  hover:bg-white/30 transition"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Form */}
              <div className="p-6 flex-1 min-h-0 overflow-y-auto">
                {/* Message */}
                {message.text && (
                  <div
                    className={`mb-5 p-4 rounded-xl flex items-start gap-3 text-sm
                    ${
                      message.type === "success"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {message.type === "success" ? (
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    )}

                    <span>{message.text}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Product Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Product
                    </label>

                    <select
                      name="productName"
                      value={formData.productName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("productName")}
                      onBlur={() => setFocusedField("")}
                      required
                      className={`w-full px-4 py-3 rounded-xl border
                      outline-none transition-all duration-200
                      ${
                        focusedField === "productName"
                          ? "border-red-600 ring-2 ring-red-100"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Choose Product</option>

                      {productOptions.map((product, index) => (
                        <option key={index} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    {/* <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label> */}

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Enter your name"
                      required
                      className={`w-full px-4 py-3 rounded-xl border
                      outline-none transition-all duration-200
                      ${
                        focusedField === "name"
                          ? "border-red-600 ring-2 ring-red-100"
                          : "border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    {/* <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label> */}

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Enter your email"
                      required
                      className={`w-full px-4 py-3 rounded-xl border
                      outline-none transition-all duration-200
                      ${
                        focusedField === "email"
                          ? "border-red-600 ring-2 ring-red-100"
                          : "border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    {/* <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label> */}

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Enter your phone number"
                      required
                      className={`w-full px-4 py-3 rounded-xl border
                      outline-none transition-all duration-200
                      ${
                        focusedField === "phone"
                          ? "border-red-600 ring-2 ring-red-100"
                          : "border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    {/* <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label> */}

                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Write your message..."
                      className={`w-full px-4 py-3 rounded-xl border
                      outline-none resize-none transition-all duration-200
                      ${
                        focusedField === "message"
                          ? "border-red-600 ring-2 ring-red-100"
                          : "border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700
                    text-white py-3 rounded-xl font-semibold
                    transition-all duration-300
                    disabled:opacity-50 disabled:cursor-not-allowed
                    flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Enquiry
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  if (!mounted) return null;

  return createPortal(ui, document.body);
}
