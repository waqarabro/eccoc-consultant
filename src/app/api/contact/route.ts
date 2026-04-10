import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { fullName, firstName, lastName, email, message, company, phone } = body;

        // Determine Name
        const name = fullName || `${firstName || ''} ${lastName || ''}`.trim() || 'Anonymous';

        // Validation checking - requires at least an image and email
        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Web3Forms API Key
        // In production, this should be an environment variable: process.env.WEB3FORMS_ACCESS_KEY
        // The user can get a free key at https://web3forms.com/
        const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                name: name,
                email: email,
                subject: `New Lead: ${name} from ${company || 'Website'}`,
                message: `
New Contact Form Submission

Name: ${name}
Company: ${company || 'N/A'}
Email: ${email}
Phone: ${phone || 'N/A'}

Message:
${message || 'No message provided (Strategy Session Booking)'}
                `,
                from_name: "ecco Consultants Website",
                company: company,
                phone: phone,
            }),
        });

        const result = await response.json();

        if (result.success) {
            return NextResponse.json({ success: true, message: 'Inquiry sent successfully' }, { status: 200 });
        } else {
            console.error('Web3Forms Error:', result);
            return NextResponse.json({ error: result.message || 'Failed to send inquiry' }, { status: 500 });
        }
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
