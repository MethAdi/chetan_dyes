import { NextRequest, NextResponse } from 'next/server';

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(req: NextRequest) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFromEmail = process.env.RESEND_FROM_EMAIL || 'Chetan Dyes <onboarding@resend.dev>';
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'chetan68india@yahoo.com';

    if (!resendApiKey) {
      console.error('Missing RESEND_API_KEY environment variable.');
      return NextResponse.json(
        { error: 'Email is not configured yet. Please contact us directly.' },
        { status: 500 }
      );
    }

    const { name, company, email, phone, product, message } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Product label mapping
    const productLabels: Record<string, string> = {
      'disperse': 'Disperse Dyes (VIBRASPERSE)',
      'reactive-chromazol': 'Reactive Dyes - CHROMAZOL Series',
      'reactive-chromafix': 'Reactive Dyes - CHROMAFIX Series',
      'reactive-chromactive': 'Reactive Dyes - CHROMACTIVE Series',
      'reactive-chromacion': 'Reactive Dyes - CHROMACION Series',
      'chemicals': 'Chemicals',
      'other': 'Other / General Inquiry',
    };

    const productLabel = product ? (productLabels[product] || product) : 'Not specified';
    const safeName = escapeHtml(String(name));
    const safeCompany = escapeHtml(String(company || 'Not provided'));
    const safeEmail = escapeHtml(String(email));
    const safePhone = escapeHtml(String(phone));
    const safeProductLabel = escapeHtml(String(productLabel));
    const safeMessage = escapeHtml(String(message));

    // Email to the business owner
    const emailPayload = {
      from: resendFromEmail,
      to: recipientEmail,
      reply_to: email,
      subject: `New Inquiry from ${name} - Chetan Dyes Website`,
      text: [
        'New Contact Form Submission',
        '',
        `Name: ${name}`,
        `Company: ${company || 'Not provided'}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Product Interest: ${productLabel}`,
        '',
        'Message:',
        message,
        '',
        'This message was sent from the Chetan Dyes & Chemical Company website contact form.',
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1C1917; border-bottom: 2px solid #B45309; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #57534E; width: 140px; vertical-align: top;">Name:</td>
              <td style="padding: 10px; color: #1C1917;">${safeName}</td>
            </tr>
            <tr style="background-color: #FAFAF9;">
              <td style="padding: 10px; font-weight: bold; color: #57534E; vertical-align: top;">Company:</td>
              <td style="padding: 10px; color: #1C1917;">${safeCompany}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #57534E; vertical-align: top;">Email:</td>
              <td style="padding: 10px; color: #1C1917;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
            </tr>
            <tr style="background-color: #FAFAF9;">
              <td style="padding: 10px; font-weight: bold; color: #57534E; vertical-align: top;">Phone:</td>
              <td style="padding: 10px; color: #1C1917;"><a href="tel:${safePhone}">${safePhone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #57534E; vertical-align: top;">Product Interest:</td>
              <td style="padding: 10px; color: #1C1917;">${safeProductLabel}</td>
            </tr>
            <tr style="background-color: #FAFAF9;">
              <td style="padding: 10px; font-weight: bold; color: #57534E; vertical-align: top;">Message:</td>
              <td style="padding: 10px; color: #1C1917; white-space: pre-wrap;">${safeMessage}</td>
            </tr>
          </table>
          
          <p style="margin-top: 20px; font-size: 12px; color: #A8A29E;">
            This message was sent from the Chetan Dyes & Chemical Company website contact form.
          </p>
        </div>
      `,
    };

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      console.error('Resend email error:', resendError);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
