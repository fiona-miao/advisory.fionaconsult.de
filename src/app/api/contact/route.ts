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

    // 保存到本地文件
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

    logToFile('📁 Contact saved locally: ' + JSON.stringify(contactData));

    // 尝试通过 Brevo API 发送邮件
    if (process.env.BREVO_API_KEY) {
      try {
        logToFile(`📧 Attempting to send email via Brevo API...`);
        
        const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'api-key': process.env.BREVO_API_KEY
          },
          body: JSON.stringify({
            sender: {
              name: 'FionaConsult Advisory',
              email: 'service@fionaconsult.de'
            },
            to: [
              {
                email: process.env.RECIPIENT_EMAIL || 'service@fionaconsult.de',
                name: 'Service'
              }
            ],
            subject: `New Contact from ${name}`,
            htmlContent: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
            `,
            replyTo: {
              email: email,
              name: name
            }
          })
        });

        const responseData = await brevoResponse.json();
        
        if (brevoResponse.ok) {
          logToFile(`✅ SUCCESS! Email sent via Brevo. MessageId: ${responseData.messageId}`);
        } else {
          logToFile(`❌ Brevo API error: ${brevoResponse.status} - ${JSON.stringify(responseData)}`);
        }
      } catch (emailError: any) {
        logToFile(`❌ Error sending via Brevo: ${emailError.message}`);
      }
    } else {
      logToFile('⚠️  BREVO_API_KEY not configured');
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
