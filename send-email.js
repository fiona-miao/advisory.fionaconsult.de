import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.BREVO_API_KEY,
  },
});

async function sendTestEmail() {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "测试邮件",
      text: "这是通过 Brevo SMTP 发送的测试邮件",
    });
    console.log("✅ 邮件发送成功:", info.messageId);
  } catch (err) {
    console.error("❌ 邮件发送失败:", err);
  }
}

sendTestEmail();
