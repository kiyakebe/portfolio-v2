// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: NextRequest) {
//   if (req.method === "POST") {
//     const data = await req.json();

//     if (!data) {
//       return NextResponse.json(
//         { message: "No data provided" },
//         { status: 400 }
//       );
//     }

//     const { fullName, email, service, message } = data.body;

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     try {
//       await transporter.sendMail({
//         from: email,
//         to: process.env.EMAIL_TO,
//         subject: `Contact form submission from ${fullName}`,
//         text: message,
//         html: `<p>You have a new contact form submission</p><p><strong>Name: </strong> ${fullName}</p><p><strong>Email: </strong> ${email}</p><p><strong>Message: </strong> ${message}</p> <p><strong>Service: </strong> ${service}</p>`,
//       });

//       return NextResponse.json({ message: "Email sent" }, { status: 200 });
//     } catch (error) {
//       return NextResponse.json(
//         { message: "Error sending email" },
//         { status: 500 }
//       );
//     }
//   } else {
//     return NextResponse.json(
//       { message: "Method not allowed" },
//       { status: 405 }
//     );
//   }
// }

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

    const { fullName, email, service, message } = data.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px; text-align: center;">
        <div style="max-width: 600px; margin: 20px auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #0056b3;">New Contact Form Submission</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="text-align: left;">You have received a new message from your website's contact form. Here are the details:</p>
          <ul style="list-style-type: none; padding: 0; text-align: left;">
            <li style="margin-bottom: 10px;">
              <strong>Name:</strong> <span style="color: #555;">${fullName}</span>
            </li>
            <li style="margin-bottom: 10px;">
              <strong>Email:</strong> <span style="color: #555;">${email}</span>
            </li>
            <li style="margin-bottom: 10px;">
              <strong>Service:</strong> <span style="color: #555;">${service}</span>
            </li>
          </ul>
          <div style="text-align: left; background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0056b3; margin-top: 20px;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0 0 0; color: #555; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="text-align: center; margin-top: 30px; font-size: 12px; color: #999;">
            This email was automatically generated from your contact form.
          </p>
        </div>
      </div>
    `;

    try {
      await transporter.sendMail({
        from: `Contact Form <${email}>`,
        to: process.env.EMAIL_TO,
        subject: `Contact form submission from ${fullName}`,
        html: emailTemplate,
      });

      return NextResponse.json({ message: "Email sent" }, { status: 200 });
    } catch (error) {
      console.error("Error sending email:", error);
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