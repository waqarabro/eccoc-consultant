import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, message } = body;

        // Validation checking
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        // Create a Nodemailer transporter using SMTP
        // In production, these should be environment variables
        // e.g. process.env.SMTP_HOST
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER || '"Website Contact Form" <noreply@eccoc.com.au>', // sender address
            to: 'info@eccoc.com.au', // list of receivers as requested by user
            subject: 'Contact Form', // Specific subject specified by user
            text: `
Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}
            `,
            html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${firstName} ${lastName}</p>
<p><strong>Email:</strong> ${email}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br/>')}</p>
            `,
        };

        // If credentials exist, send it
        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            const info = await transporter.sendMail(mailOptions);
            console.log('Message sent: %s', info.messageId);
        } else {
            console.warn('SMTP credentials missing. Email was not actually sent. Content:', mailOptions);
        }

        return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
