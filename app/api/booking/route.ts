import { NextResponse } from "next/server";
import { OWNER_EMAIL } from "../../lib/constants";

type Payload = {
  type: "individual" | "group";
  name?: string;
  email?: string;
  phone?: string;
  org?: string;
  size?: string;
  purpose?: string;
  topic?: string;
  thoughts?: string;
  thoughtsGroup?: string;
  slot?: string;
  plan?: number | null;
};

const MAIL_FROM =
  process.env.MAIL_FROM ?? "The Philosophical Cafe <onboarding@resend.dev>";

function toHer(p: Payload) {
  const rows = Object.entries(p)
    .filter(([, v]) => v !== null && v !== undefined && v !== "")
    .map(([k, v]) => `<tr><td style="padding:6px 14px 6px 0;color:#999;text-transform:capitalize">${k}</td><td style="padding:6px"><strong>${String(v)}</strong></td></tr>`)
    .join("");
  return `<h2>New ${p.type} booking request</h2><table cellpadding="0" cellspacing="0">${rows}</table>`;
}

function toClient(p: Payload) {
  const name = p.name ?? "there";
  return `
  <p>Dear ${name},</p>
  <p>Thank you for reaching out to <strong>The Philosophical Cafe</strong>. This is a small acknowledgment that your request has reached Chetna.</p>
  <p>She reads every request personally, and will write back within 24 hours with a time for your session.</p>
  <p style="font-family:Georgia,serif;font-style:italic;color:#7c3347" >
    "The conversation begins the moment you decide to have it."
  </p>
  <p>Until then,<br />The Philosophical Cafe</p>`;
}

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 });
  }
  if (!payload?.name || !payload?.email || !payload.email.includes("@")) {
    return NextResponse.json(
      { error: "Name and a valid email are required" },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "[booking] RESEND_API_KEY not set — request logged instead of emailed:",
      payload,
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  const send = async (to: string, subject: string, html: string) =>
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from: MAIL_FROM, to, subject, html }),
    });

  try {
    const [her, ack] = await Promise.all([
      send(OWNER_EMAIL, `New ${payload.type} request — ${payload.name}`, toHer(payload)),
      send(payload.email, "Your session request reached the Cafe", toClient(payload)),
    ]);
    return NextResponse.json({
      ok: true,
      delivered: her.ok && ack.ok,
    });
  } catch (err) {
    console.error("[booking] email delivery failed:", err);
    return NextResponse.json({ ok: true, delivered: false });
  }
}
