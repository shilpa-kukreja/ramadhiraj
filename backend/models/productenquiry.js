import mongoose from "mongoose";

const productEnquirySchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductEnquiry = mongoose.model(
  "ProductEnquiry",
  productEnquirySchema
);

export default ProductEnquiry;