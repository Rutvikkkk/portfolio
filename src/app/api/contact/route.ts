import { NextResponse } from "next/server";
import { Resend } from "resend";
import { directMessageSchema } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "rutvikbhil008@gmail.com";

    const body = await req.json();
    const result = directMessageSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form fields", details: result.error.format() },
        { status: 400 }
      );
    }

    const data = result.data;

    // Graceful check if API key is not configured in production environment
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Email service not configured. Falling back to direct email." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    // Send email using Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Rutvik Portfolio <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: data.email,
      subject: `[Portfolio Inquiry] ${data.subject} — from ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <title>New Portfolio Message</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #08090B; color: #F5F4F0; padding: 32px 16px; margin: 0;">
            <div style="max-width: 580px; margin: 0 auto; background-color: #111317; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 28px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
              
              <div style="border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px; margin-bottom: 24px;">
                <span style="font-family: monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #91B9F5;">New Inquiry from Portfolio</span>
                <h2 style="margin: 8px 0 0 0; font-size: 20px; font-weight: 500; color: #F5F4F0;">${data.subject}</h2>
              </div>

              <div style="margin-bottom: 20px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 6px 0; color: #A3A6AD; font-size: 13px; width: 80px;">From:</td>
                    <td style="padding: 6px 0; color: #F5F4F0; font-size: 14px; font-weight: 500;">${data.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #A3A6AD; font-size: 13px;">Email:</td>
                    <td style="padding: 6px 0; color: #91B9F5; font-size: 14px;">
                      <a href="mailto:${data.email}" style="color: #91B9F5; text-decoration: none;">${data.email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #A3A6AD; font-size: 13px;">Type:</td>
                    <td style="padding: 6px 0; color: #F5F4F0; font-size: 14px;">${data.subject}</td>
                  </tr>
                </table>
              </div>

              <div style="background-color: #08090B; border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 18px; margin: 20px 0;">
                <p style="margin: 0; color: #A3A6AD; font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px;">Message:</p>
                <div style="color: #F5F4F0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
              </div>

              <div style="margin-top: 28px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.08); text-align: center;">
                <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.subject)}" style="display: inline-block; background-color: #F5F4F0; color: #08090B; font-weight: 600; font-size: 13px; text-decoration: none; padding: 10px 22px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.5px;">Reply to ${data.name}</a>
              </div>
            </div>

            <p style="text-align: center; font-size: 11px; color: #666; margin-top: 20px;">
              Sent from Rutvik Bhil Personal Portfolio • Kedarkantha Edition
            </p>
          </body>
        </html>
      `,
    });

    if (emailError) {
      console.error("Resend send error:", emailError);
      return NextResponse.json(
        { error: "Failed to send email via Resend", details: emailError },
        { status: 500 }
      );
    }

    console.log("=== RESEND EMAIL SENT SUCCESSFULLY ===", {
      id: emailData?.id,
      name: data.name,
      email: data.email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent directly to Rutvik's inbox! Expect a reply within 24 hours.",
        data: {
          id: emailData?.id,
          name: data.name,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
