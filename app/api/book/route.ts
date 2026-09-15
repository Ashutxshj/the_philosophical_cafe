import { mkdir, writeFile, appendFile } from "fs/promises";
import path from "path";
import { Resend } from "resend";
import { ConfirmationEmail, OwnerEmail } from "@/components/email-template";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const OWNER = "theabku@gmail.com";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const type = String(form.get("type") || "individual");
    const dir = path.join(process.cwd(), "bookings");
    await mkdir(dir, { recursive: true });

    const data: Record<string, unknown> = { type, at: new Date().toISOString() };
    form.forEach((value, key) => {
      if (typeof value === "string") data[key] = value;
    });

    const shot = form.get("screenshot");
    if (shot instanceof File && shot.size > 0) {
      const ext = (shot.name.split(".").pop() || "png").toLowerCase().replace(/[^a-z0-9]/g, "");
      const name = `${Date.now()}-${type}.${ext}`;
      await writeFile(path.join(dir, name), Buffer.from(await shot.arrayBuffer()));
      data.screenshot = name;
    }

    await appendFile(path.join(dir, "bookings.jsonl"), JSON.stringify(data) + "\n");

    await sendEmails(data, type);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

async function sendEmails(data: Record<string, unknown>, type: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("RESEND_API_KEY not set — skipping confirmation email. Booking saved:", data);
    return;
  }

  const resend = new Resend(apiKey);
  const str = (k: string) => String(data[k] ?? "");

  try {
    const { error: err1 } = await resend.emails.send({
      from: "The Philosophical Cafe <bookings@alerts.abku.dev>",
      to: [str("email")],
      replyTo: OWNER,
      subject: "Your session request is in — The Philosophical Cafe",
      react: ConfirmationEmail({
        name: str("name"),
        type,
        plan: str("plan"),
        date1: str("date1"),
        time: str("time"),
      }),
      headers: { "Idempotency-Key": `booking-confirm/${String(data.at)}` },
    });
    if (err1) console.error("Confirmation email failed:", err1);

    const Owner = OwnerEmail({
      name: str("name"),
      type,
      plan: str("plan"),
      date1: str("date1"),
      date2: str("date2"),
      date3: str("date3"),
      time: str("time"),
      email: str("email"),
      phone: str("phone"),
      location: str("location"),
      age: str("age"),
      role: str("role"),
      roleOther: str("roleOther"),
      gtype: str("gtype"),
      gsize: str("gsize"),
      problem: str("problem"),
    });
    const { error: err2 } = await resend.emails.send({
      from: "The Philosophical Cafe <bookings@alerts.abku.dev>",
      to: [OWNER],
      replyTo: str("email"),
      subject: `New ${type} booking — ${str("name")}`,
      react: Owner,
      headers: { "Idempotency-Key": `booking-owner/${String(data.at)}` },
    });
    if (err2) console.error("Owner email failed:", err2);
  } catch (e) {
    console.error("Email send error:", e);
  }
}
