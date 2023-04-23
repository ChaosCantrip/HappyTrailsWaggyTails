import { NextResponse } from 'next/server';

export async function POST(request) {
    console.log("Hit on /api/contact");
    const data = await request.json();
    console.log(data);
    if (data["message"].toLowerCase() === "error") {
        return NextResponse.json("Error", { status: 500 })
    }
    return NextResponse.json('Thanks for contacting us, we will get back to you soon!');
}