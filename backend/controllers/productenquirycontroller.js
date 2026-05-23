import ProductEnquiry from "../models/productenquiry.js";

export const createProductEnquiry = async (req, res) => {
  try {
    const {
      productName,
      name,
      email,
      phone,
      message,
    } = req.body;

    // VALIDATION
    if (!productName || !name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // CREATE ENQUIRY
    const enquiry = await ProductEnquiry.create({
      productName,
      name,
      email,
      phone,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Product enquiry submitted successfully",
      data: enquiry,
    });
  } catch (error) {
    console.log("Product Enquiry Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};