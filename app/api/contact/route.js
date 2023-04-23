import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });
        const mailOptions = {
            from: process.env.SMTP_MAIL,
            to: process.env.SMTP_MAIL,
            subject: 'Contact Form',
            text: `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nMessage: ${data.message}`
        };
        await transporter.sendMail(mailOptions);
        return NextResponse.json("Success", { status: 200 })
    } catch (e) {
        console.log(e);
        return NextResponse.json("Error", { status: 500 })
    }
}