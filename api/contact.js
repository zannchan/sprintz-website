export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, company, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.',
      });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const ccEmail = process.env.CONTACT_CC_EMAIL;

    if (!resendApiKey || !fromEmail || !toEmail) {
      return res.status(500).json({
        success: false,
        message: 'Server email configuration is missing.',
      });
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin-bottom: 16px;">New Website Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || '-')}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <div style="padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb;">
          ${escapeHtml(message).replace(/\n/g, '<br/>')}
        </div>
      </div>
    `;

    const payload = {
      from: fromEmail,
      to: [toEmail],
      subject: `[Sprintz Website] ${subject}`,
      html: emailHtml,
      reply_to: email,
    };

    if (ccEmail) {
      payload.cc = [ccEmail];
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      return res.status(500).json({
        success: false,
        message: resendData?.message || 'Failed to send email.',
        error: resendData,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully.',
      id: resendData?.id,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Unexpected server error.',
      error: error?.message || String(error),
    });
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
