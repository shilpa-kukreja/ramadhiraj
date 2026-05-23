"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductEnquiryModal from "../../components/ProductEnquiryModal";
import {
  getProductBySlug,
  getProductImageSrc,
  getWhatsAppUrl,
  getRelatedProducts,
  getCategoryName,
} from "@/lib/products";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (slug) {
      setProduct(getProductBySlug(slug));
    }

    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-28">
          <div className="w-12 h-12 border-4 border-[#e21d23] border-t-transparent rounded-full animate-spin" />
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-28">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link
            href="/all-products"
            className="inline-flex items-center gap-2 bg-[#e21d23] text-white px-6 py-3 rounded-xl font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const whatsappUrl = getWhatsAppUrl(product);
  const relatedProducts = getRelatedProducts(product.slug);
  const categoryName = getCategoryName(product.category);

  return (
    <>
      <Navbar />

      <section className="bg-gray-50 min-h-screen pt-28 pb-16 sm:mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <Link
            href="/all-products"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#e21d23] transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left — product image */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="aspect-square sm:aspect-[4/3] lg:aspect-square">
                <img
                  src={getProductImageSrc(product.image)}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right — product details */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
              <p className="text-sm font-medium text-[#e21d23] uppercase tracking-wide">
                Model: {product.model}
              </p>

              <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-3 leading-tight">
                {product.name}
              </h1>

              <p className="text-2xl sm:text-3xl font-bold text-[#e21d23] mt-5">
                {product.price}
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mt-5">
                {product.shortDescription}
              </p>

              <p className="text-gray-600 leading-relaxed mt-6">
                {product.longDescription}
              </p>

              <p className="text-sm text-gray-500 mt-4">{product.specs}</p>

              {/* Action buttons — one row */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="py-3.5 rounded-xl bg-[#e21d23] text-white font-semibold hover:bg-red-700 transition"
                >
                  Enquiry Form
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 rounded-xl border-2 border-[#25D366] text-[#128C7E] font-semibold hover:bg-[#25D366]/10 transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-200">
              <div className="text-center mb-10">
                {/* <span className="text-xs tracking-[0.4em] uppercase font-semibold text-[#e21d23]">
                  Same Category
                </span> */}
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-3">
                  Related {categoryName}
                </h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                  More products from the {categoryName.toLowerCase()} range you
                  may also be interested in.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {relatedProducts.map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.slug}`}
                    className="block group"
                  >
                    <article className="bg-white rounded-[14px] overflow-hidden border border-gray-100 hover:-translate-y-2 transition-all duration-500 shadow-sm h-full">
                      <div className="relative h-[220px] overflow-hidden">
                        <img
                          src={getProductImageSrc(item.image)}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-5">
                        <div className="w-10 h-[2px] bg-[#e21d23] mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                          {item.specs}
                        </p>
                        <p className="text-[#e21d23] font-semibold mt-3">
                          {item.price}
                        </p>
                        <span className="mt-4 block w-full py-3 rounded-md bg-[#e21d23] text-white text-sm font-medium text-center group-hover:bg-red-700 transition">
                          View Product
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  href={`/all-products?category=${product.category}`}
                  className="inline-flex items-center gap-2 text-[#e21d23] font-semibold hover:underline"
                >
                  View all {categoryName}
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <ProductEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={product.name}
      />

      <Footer />
    </>
  );
}
