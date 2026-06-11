import { sendFormEmail, escapeHtml } from "@/lib/mail";

const FORM_LABELS = {
  consultation: "Get Consultation",
  "enquiry-now": "Enquiry Now",
  "product-enquiry": "Product Enquiry",
};

export async function POST(request) {
  try {
    const { productName, name, email, phone, message, formSource } =
      await request.json();

    if (!productName?.trim() || !name?.trim() || !email?.trim() || !phone?.trim()) {
      return Response.json(
        { success: false, message: "Please fill all required fields" },
        { status: 400 },
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return Response.json(
        { success: false, message: "Please enter a valid email" },
        { status: 400 },
      );
    }

    const formLabel = FORM_LABELS[formSource] || "Product Enquiry";

    await sendFormEmail({
      subject: `New ${formLabel} — ${productName}`,
      replyTo: email,
      html: `
        <h2>New ${escapeHtml(formLabel)}</h2>
        <p><strong>Form:</strong> ${escapeHtml(formLabel)}</p>
        <p><strong>Product:</strong> ${escapeHtml(productName)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "—").replace(/\n/g, "<br>")}</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Enquiry submitted successfully!",
    });
  } catch (error) {
    console.error("Product enquiry email error:", error);

    return Response.json(
      { success: false, message: "Failed to submit enquiry. Please try again." },
      { status: 500 },
    );
  }
}
