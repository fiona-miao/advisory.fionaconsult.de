import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message, company } = await request.json();

    // 检查环境变量
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing SMTP configuration:', {
        host: process.env.SMTP_HOST ? '✓' : '✗',
        user: process.env.SMTP_USER ? '✓' : '✗',
        pass: process.env.SMTP_PASS ? '✓' : '✗'
      });
      return Response.json(
        { success: false, error: 'Email server not configured' },
        { status: 500 }
      );
    }

    // 配置邮件发送器
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false
      },
      pool: true,
      maxConnections: 1,
      maxMessages: 100,
      rateDelta: 1000,
      rateLimit: 5
    });

    // 验证连接
    console.log('Attempting to send email...');

    // 发送邮件到你的邮箱
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL, // 你的邮箱
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

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    
    return Response.json(
      { success: true, messageId: info.messageId, message: 'Your message has been sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Email sending error:', error.message, error);
    return Response.json(
      { success: false, error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
