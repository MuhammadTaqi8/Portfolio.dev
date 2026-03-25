import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, type, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['taqi0413@gmail.com'],
        subject: `[Portfolio] ${type} enquiry from ${name}`,
        reply_to: email,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <h2 style="color: #1A1A2E; margin-bottom: 20px;">New message from your portfolio</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #8A96A8; font-size: 13px; width: 100px;">Name</td>
                <td style="padding: 8px 0; color: #1A1A2E;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #8A96A8; font-size: 13px;">Email</td>
                <td style="padding: 8px 0; color: #1A1A2E;">
                  <a href="mailto:${email}" style="color: #2563EB;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #8A96A8; font-size: 13px;">Type</td>
                <td style="padding: 8px 0; color: #1A1A2E;">${type}</td>
              </tr>
            </table>
            <div style="background: #F2F4F7; border-radius: 12px; padding: 16px;">
              <p style="margin: 0; color: #4A5568; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const errText = await res.text()
      console.error('Resend API error:', errText)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
