import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request) {
  try {
    if (!resend) {
      return Response.json({ error: "Email service is not configured yet." }, { status: 500 });
    }

    const body = await request.json();
    const {
      company,
      contact,
      email,
      phone,
      inquiryType,
      category,
      brand,
      quantity,
      details,
      country,
      payment,
      message,
    } = body;

    const to = process.env.CONTACT_TO || "chanlp@sprintz.com.sg";
    const bcc = process.env.CONTACT_BCC || "zannchan@gmail.com";

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #0f172a;">
        <h2>Sprintz Website Inquiry</h2>
        <p><strong>Company Name:</strong> ${company || "-"}</p>
        <p><strong>Contact Person:</strong> ${contact || "-"}</p>
        <p><strong>Email Address:</strong> ${email || "-"}</p>
        <p><strong>WhatsApp / Phone:</strong> ${phone || "-"}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType || "-"}</p>
        <p><strong>Product Category / Commodity:</strong> ${category || "-"}</p>
        <p><strong>Brand / Origin:</strong> ${brand || "-"}</p>
        <p><strong>Quantity / Volume:</strong> ${quantity || "-"}</p>
        <p><strong>Part Number / Requirement Details:</strong> ${details || "-"}</p>
        <p><strong>Destination Country:</strong> ${country || "-"}</p>
        <p><strong>Preferred Payment Method:</strong> ${payment || "-"}</p>
        <p><strong>Message:</strong><br/>${(message || "-").replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    await resend.emails.send({
      from: "Sprintz Website <onboarding@resend.dev>",
      to,
      bcc,
      replyTo: email || to,
      subject: `Request for Quote - ${company || "Sprintz Website Inquiry"}`,
      html,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error?.message || "Unable to send inquiry." }, { status: 500 });
  }
}
