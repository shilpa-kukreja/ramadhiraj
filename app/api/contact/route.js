import { sendFormEmail, escapeHtml } from "@/lib/mail";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 },
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return Response.json(
        { success: false, message: "Please enter a valid email" },
        { status: 400 },
      );
    }

    await sendFormEmail({
      subject: `New Contact Us Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Us Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully! We will get back to you soon.",
    });
  } catch (error) {
    console.error("Contact email error:", error);

    return Response.json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
