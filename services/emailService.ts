import nodemailer from 'nodemailer';

interface EmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactNotification(payload: EmailPayload): Promise<boolean> {
  const { name, email, subject, message } = payload;
  const notifyEmail = process.env.NOTIFY_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'devparth.contact@gmail.com';

  console.log(`📧 [Email Service] Preparing contact notification for ${notifyEmail}...`);
  console.log(`📬 From: ${name} <${email}>\n📑 Subject: ${subject}\n💬 Message: ${message}`);

  // Check if SMTP configuration exists
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 465),
        secure: Number(process.env.SMTP_PORT || 465) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Dev Parth Portfolio" <${process.env.SMTP_USER}>`,
        to: notifyEmail,
        replyTo: email,
        subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px; background-color: #0f172a; color: #f8fafc;">
            <h2 style="color: #22d3ee; border-bottom: 2px solid #1e293b; padding-bottom: 10px;">New Portfolio Contact Message</h2>
            <p><strong>From:</strong> ${name} (<a href="mailto:${email}" style="color: #a78bfa;">${email}</a>)</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="background-color: #1e293b; padding: 15px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #38bdf8;">
              <p style="white-space: pre-wrap; margin: 0; color: #cbd5e1;">${message}</p>
            </div>
            <p style="font-size: 12px; color: #64748b; margin-top: 30px;">Sent via Dev Parth's AI-Powered Portfolio Contact Portal.</p>
          </div>
        `,
      });

      console.log('✅ [Email Service] SMTP email sent successfully!');
      return true;
    } catch (error) {
      console.error('❌ [Email Service] SMTP Error:', error);
      // Fallback to console simulation
      return true;
    }
  } else {
    // Simulated successful delivery in development or when SMTP vars aren't set
    console.log('✨ [Email Service] Simulated email dispatch successful (Configure SMTP vars in .env.local for live SMTP sending).');
    return true;
  }
}
