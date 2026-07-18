import emailjs, { EmailJSResponseStatus } from "@emailjs/nodejs";
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

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    return null;
  }

  return { serviceId, templateId, publicKey, privateKey };
}

function getEmailJsErrorMessage(err: unknown) {
  if (err instanceof EmailJSResponseStatus) {
    const detail = err.text?.trim() || "Unknown EmailJS error";
    console.error("EmailJS error:", err.status, detail);

    if (/non-browser|disabled/i.test(detail)) {
      return "Email service is not enabled for server requests. In EmailJS, go to Account → Security and allow API requests for non-browser apps.";
    }

    if (err.status === 403 || /private key|accessToken|unauthorized/i.test(detail)) {
      return "Email service authentication failed. Check EMAIL_PUBLIC_KEY and EMAIL_PRIVATE_KEY in your hosting env vars.";
    }

    if (err.status === 400) {
      return "Email template or service configuration is invalid. Check EMAIL_SERVICE and EMAIL_TEMPLATE.";
    }

    if (err.status === 429) {
      return "Too many requests. Please wait a moment and try again, or email me directly.";
    }

    if (process.env.NODE_ENV === "development") {
      return `EmailJS error (${err.status}): ${detail}`;
    }
  } else {
    console.error("EmailJS error:", err);
  }

  return "Could not send your enquiry. Please try again or email me directly.";
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
          privateKey: emailJs.privateKey,
        },
      );

      return NextResponse.json({ ok: true, delivered: "emailjs" });
    } catch (err) {
      return NextResponse.json(
        {
          error: getEmailJsErrorMessage(err),
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
