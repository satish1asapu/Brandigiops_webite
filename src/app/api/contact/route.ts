import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  website?: string;
  whatsapp?: string;
  pageUrl?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  source?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const website = body.website?.trim() ?? "";
  const whatsapp = body.whatsapp?.trim() ?? "";

  if (!name || !website || !whatsapp) {
    return NextResponse.json(
      { error: "Name, website, and WhatsApp number are required." },
      { status: 400 },
    );
  }

  const payload = {
    name,
    website,
    whatsapp,
    pageUrl: body.pageUrl ?? "",
    referrer: body.referrer ?? "",
    utm_source: body.utm_source ?? "",
    utm_medium: body.utm_medium ?? "",
    utm_campaign: body.utm_campaign ?? "",
    source: body.source ?? "contact",
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: "Could not deliver the form. Please try WhatsApp or email." },
        { status: 502 },
      );
    }
  } else if (process.env.NODE_ENV !== "production") {
    console.info("[contact form]", payload);
  }

  return NextResponse.json({ ok: true });
}
