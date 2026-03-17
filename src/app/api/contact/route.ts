import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message, company } = await request.json();

    // 检查环境变量 - 支持 SendGrid 或 SMTP
    const useSendGrid = process.env.SENDGRID_API_KEY;
    
    if (!useSendGrid && (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS)) {
      console.error('Missing email configuration');
      return Response.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      );
    }

    let transporter;
    
    if (useSendGrid) {
      // 使用 SendGrid
      transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        secure: false,
        auth: {
          user: 'apikey',
          pass: process.env.SENDGRID_API_KEY
        }
      });
    } else {
      // 使用 SMTP（Zoho）
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        },
        tls: {
          rejectUnauthorized: false
        },
        connectionTimeout: 3000,
        socketTimeout: 3000
      });
    }

    // 发送邮件
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER || process.env.SENDGRID_FROM_EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    try {
      console.log('Attempting to send email via', useSendGrid ? 'SendGrid' : 'SMTP');
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
      return Response.json(
        { success: true, message: 'Your message has been sent successfully', messageId: info.messageId },
        { status: 200 }
      );
    } catch (emailError: any) {
      console.warn('Email sending failed:', emailError.message);
      // Return error to user this time
      return Response.json(
        { success: false, error: 'Failed to send email: ' + emailError.message },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('API error:', error.message);
    return Response.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}
