import { mkdir, writeFile, appendFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

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
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
