import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  business?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const business = (body.business || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const subject = `Website enquiry from ${name}${business ? ` (${business})` : ""}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Business: ${business || "—"}`,
    "",
    message,
  ].join("\n");

  const resendKey = process.env.RESEND_API_KEY;
  // Private delivery only — never used in mailto / UI
  const toEmail =
    process.env.CONTACT_TO_EMAIL || "jaco.roux9@gmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (resendKey) {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!resendResponse.ok) {
      const detail = await resendResponse.text();
      console.error("Resend error:", detail);
      return NextResponse.json(
        {
          error: "Could not send via email service. Try WhatsApp instead.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: "resend" });
  }

  const mailto = `mailto:${encodeURIComponent(siteConfig.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

  return NextResponse.json({
    ok: true,
    delivered: "mailto",
    mailto,
  });
}
