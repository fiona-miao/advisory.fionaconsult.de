import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

export async function POST(req: Request) {
  try {
    const { subject, message } = await req.json();

    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!, // .env.local 里放你的 Brevo API Key
      },
      body: JSON.stringify({
        sender: { name: 'Fiona Miao', email: 'service@fionaconsult.de' },
        to: [{ email: 'service@fionaconsult.de', name: 'Fiona Miao' }],
        subject,
        htmlContent: `<p>${message}</p>`,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return NextResponse.json({ success: false, error: errText });
    }

    return NextResponse.json({ success: true, message: 'Email sent!' });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message });
  }
}
