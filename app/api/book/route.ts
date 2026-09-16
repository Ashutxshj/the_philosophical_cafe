import { mkdir, writeFile, appendFile } from "fs/promises";
import path from "path";
import { Resend } from "resend";
import { ConfirmationEmail, OwnerEmail } from "@/components/email-template";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const OWNER = "philosophicalcafe.india@gmail.com";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const type = String(form.get("type") || "individual");
    const dir = path.join(process.cwd(), "bookings");
    try { await mkdir(dir, { recursive: true }); } catch (e) {}

    const data: Record<string, unknown> = { type, at: new Date().toISOString() };
    form.forEach((value, key) => {
      if (typeof value === "string") data[key] = value;
    });

    let attachment = undefined;
    const shot = form.get("screenshot");
    if (shot instanceof File && shot.size > 0) {
      const ext = (shot.name.split(".").pop() || "png").toLowerCase().replace(/[^a-z0-9]/g, "");
      const name = `${Date.now()}-${type}.${ext}`;
      const buffer = Buffer.from(await shot.arrayBuffer());
      try { await writeFile(path.join(dir, name), buffer); } catch (e) {}
      data.screenshot = name;
      attachment = {
        filename: shot.name || "receipt.png",
        content: buffer
      };
    }

    try { await appendFile(path.join(dir, "bookings.jsonl"), JSON.stringify(data) + "\n"); } catch (e) {}

    await sendEmails(data, type, attachment);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

async function sendEmails(data: Record<string, unknown>, type: string, attachment: any) {
  const apiKey = process.env.RESEND_API_KEY || "";

  const resend = new Resend(apiKey);
  const str = (k: string) => String(data[k] ?? "");

  try {
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
      from: "onboarding@resend.dev",
      to: [OWNER],
      replyTo: str("email"),
      subject: `New ${type} booking - ${str("name")}`,
      react: Owner,
      attachments: attachment ? [attachment] : undefined,
      headers: { "Idempotency-Key": `booking-owner/${String(data.at)}` },
    });
    if (err2) console.error("Owner email failed:", err2);
  } catch (e) {
    console.error("Email send error:", e);
  }
}
