import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, phone, product, message } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP (or any SMTP service)
    // For production, use environment variables for credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

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

    // Email to the business owner
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.RECIPIENT_EMAIL || 'chetan68india@yahoo.com',
      replyTo: email,
      subject: `New Inquiry from ${name} - Chetan Dyes Website`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1C1917; border-bottom: 2px solid #B45309; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #57534E; width: 140px; vertical-align: top;">Name:</td>
              <td style="padding: 10px; color: #1C1917;">${name}</td>
            </tr>
            <tr style="background-color: #FAFAF9;">
              <td style="padding: 10px; font-weight: bold; color: #57534E; vertical-align: top;">Company:</td>
              <td style="padding: 10px; color: #1C1917;">${company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #57534E; vertical-align: top;">Email:</td>
              <td style="padding: 10px; color: #1C1917;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="background-color: #FAFAF9;">
              <td style="padding: 10px; font-weight: bold; color: #57534E; vertical-align: top;">Phone:</td>
              <td style="padding: 10px; color: #1C1917;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #57534E; vertical-align: top;">Product Interest:</td>
              <td style="padding: 10px; color: #1C1917;">${productLabel}</td>
            </tr>
            <tr style="background-color: #FAFAF9;">
              <td style="padding: 10px; font-weight: bold; color: #57534E; vertical-align: top;">Message:</td>
              <td style="padding: 10px; color: #1C1917; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          
          <p style="margin-top: 20px; font-size: 12px; color: #A8A29E;">
            This message was sent from the Chetan Dyes & Chemical Company website contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
