import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const data = await req.json();

    if (!data) {
      return NextResponse.json(
        { message: "No data provided" },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, phone, service, message } = data.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_TO,
        subject: `Contact form submission from ${firstName} ${lastName}`,
        text: message,
        html: `<p>You have a new contact form submission</p><p><strong>Name: </strong> ${firstName} ${lastName}</p><p><strong>Email: </strong> ${email}</p><p><strong>Message: </strong> ${message}</p> <p><strong>Phone: </strong> ${phone}</p> <p><strong>Service: </strong> ${service}</p>`,
      });

      return NextResponse.json({ message: "Email sent" }, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { message: "Error sending email" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
}
