import { send_email, format_email } from '@/lib/email';
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request) {
    try {
        const data = await request.json();
        await send_email({
            to: process.env.SMTP_MAIL,
            subject: 'Contact Form',
            text: `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nMessage: ${data.message}`,
            html: await format_email("ContactForm", data)
        }, "Contact Form");
        await send_email({
            to: data.email,
            subject: "Happy Trails Waggy Tails",
            text: "Thank you for contacting Happy Trails Waggy Tails. I'll be in touch soon!",
            html: await format_email("ThankYou", data)
        });
        return NextResponse.json("Success", { status: 200 })
    } catch (e) {
        console.log(e);
        return NextResponse.json("Error", { status: 500 })
    }
}