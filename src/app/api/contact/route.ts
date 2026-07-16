import emailjs from "@emailjs/nodejs";
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

function getEmailJsConfig() {
  const serviceId = process.env.EMAIL_SERVICE;
  const templateId = process.env.EMAIL_TEMPLATE;
  const publicKey = process.env.EMAIL_PUBLIC_KEY;
  const privateKey = process.env.EMAIL_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return null;
  }

  return { serviceId, templateId, publicKey, privateKey };
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

  const emailJs = getEmailJsConfig();

  if (emailJs) {
    try {
      await emailjs.send(
        emailJs.serviceId,
        emailJs.templateId,
        {
          name,
          email,
          phone: phone || "—",
          business: business || "—",
          message,
          time: new Date().toLocaleString("en-ZA", {
            timeZone: "Africa/Johannesburg",
            dateStyle: "medium",
            timeStyle: "short",
          }),
          reply_to: email,
        },
        {
          publicKey: emailJs.publicKey,
          ...(emailJs.privateKey ? { privateKey: emailJs.privateKey } : {}),
        },
      );

      return NextResponse.json({ ok: true, delivered: "emailjs" });
    } catch (err) {
      console.error("EmailJS error:", err);
      return NextResponse.json(
        {
          error: "Could not send your enquiry. Try WhatsApp instead.",
        },
        { status: 502 },
      );
    }
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

  const mailto = `mailto:${encodeURIComponent(siteConfig.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

  return NextResponse.json({
    ok: true,
    delivered: "mailto",
    mailto,
  });
}
