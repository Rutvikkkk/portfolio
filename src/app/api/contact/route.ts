import { NextResponse } from "next/server";
import { directMessageSchema } from "@/lib/validation";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = directMessageSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form fields", details: result.error.format() },
        { status: 400 }
      );
    }

    const data = result.data;
    console.log("=== NEW MESSAGE FROM RUTVIK'S PORTFOLIO ===", {
      name: data.name,
      email: data.email,
      subject: data.subject,
      timestamp: new Date().toISOString(),
      messagePreview: data.message.slice(0, 80),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received! Rutvik will get back to you within 24 hours.",
        data: {
          name: data.name,
          email: data.email,
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
