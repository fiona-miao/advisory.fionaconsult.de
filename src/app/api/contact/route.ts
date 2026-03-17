import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// 日志记录函数
function logToFile(message: string) {
  const logsDir = path.join(process.cwd(), 'public', 'logs');
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }
  const logFile = path.join(logsDir, 'email-debug.log');
  const timestamp = new Date().toISOString();
  fs.appendFileSync(logFile, `[${timestamp}] ${message}\n`);
  console.log(message);
}

export async function POST(request: Request) {
  try {
    const { name, email, message, company } = await request.json();

    // 保存到本地文件（临时方案）
    const contactData = {
      timestamp: new Date().toISOString(),
      name,
      email,
      company: company || 'N/A',
      message
    };

    // 创建 logs 目录（如果不存在）
    const logsDir = path.join(process.cwd(), 'public', 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    // 写入文件
    const logFile = path.join(logsDir, 'contacts.json');
    let existingData: any[] = [];
    
    if (fs.existsSync(logFile)) {
      const fileContent = fs.readFileSync(logFile, 'utf-8');
      try {
        existingData = JSON.parse(fileContent);
      } catch (e) {
        existingData = [];
      }
    }

    existingData.push(contactData);
    fs.writeFileSync(logFile, JSON.stringify(existingData, null, 2));

    logToFile('Contact saved: ' + JSON.stringify(contactData));

    // 尝试发送邮件（如果配置了）
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        logToFile(`Setting up SMTP for ${process.env.SMTP_HOST}:${process.env.SMTP_PORT} user:${process.env.SMTP_USER}`);
        
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          },
          tls: {
            rejectUnauthorized: false
          },
          connectionTimeout: 10000,
          socketTimeout: 10000
        });

        const mailOptions = {
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
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

        logToFile(`Attempting to send email FROM:${mailOptions.from} TO:${mailOptions.to}`);
        const info = await transporter.sendMail(mailOptions);
        logToFile(`✅ SUCCESS! Email sent. MessageId: ${info.messageId}`);
      } catch (emailError: any) {
        logToFile(`❌ ERROR sending email: ${emailError.message}`);
        if (emailError.code) logToFile(`Code: ${emailError.code}`);
        if (emailError.responseCode) logToFile(`Response: ${emailError.responseCode} - ${emailError.response}`);
      }
    } else {
      logToFile('⚠️  SMTP config missing');
    }

    return Response.json(
      { success: true, message: 'Your message has been received' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('API error:', error.message);
    return Response.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}
