import Contact from "../models/contact.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save to database
    const newContact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: newContact,
    });
  } catch (error) {
    console.log("Contact Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};