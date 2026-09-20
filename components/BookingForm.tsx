"use client";

import Image from "next/image";
import { useState } from "react";

type Variant = "individual" | "group";

const ages = ["Under 18", "18-24", "25-34", "35-44", "45-54", "55 and above"];
const roles = ["Student", "Working Professional", "Home maker", "Business Owner", "In between Job Transition", "Other"];
const groupTypes = ["Friends", "Family", "Classroom", "Team / Colleagues", "Reading circle", "Something else"];
const sizes = ["2-5 people", "6-12 people", "13-25 people", "25+ people"];
const slots = ["Morning · 8-11 am", "Midday · 11 am-2 pm", "Afternoon · 2-5 pm", "Evening · 5-8 pm", "Flexible - you pick"];
const plans = [
  { amt: "300", note: "15-minute intro call" },
  { amt: "1000", note: "45-minute one-on-one session" },
  { amt: "2500", note: "three-session pack" },
];

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const phoneOk = (v: string) => v.replace(/\D/g, "").length >= 10;

function Label({ children }: { children: React.ReactNode }) {
  return <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-faint">{children}</span>;
}

function Pills({
  options,
  value,
  onPick,
}: {
  options: string[];
  value: string;
  onPick: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onPick(o)}
          className={`pill-choice ${value === o ? "on" : ""}`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function Appear({ shown, children }: { shown: boolean; children: React.ReactNode }) {
  if (!shown) return null;
  return <div className="slidein">{children}</div>;
}

function StepCard({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="slidein rounded-[1.75rem] border border-sand bg-white/75 p-6 shadow-[0_20px_50px_-38px_rgba(62,48,32,0.4)] sm:p-9">
      <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-clay">{step}</p>
      <h3 className="font-display text-[22px] text-ink">{title}</h3>
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}

export default function BookingForm({ variant }: { variant: Variant }) {
  const individual = variant === "individual";
  const [f, setF] = useState<Record<string, string>>({
    name: "", email: "", phone: "", location: "", age: "", role: "", roleOther: "",
    gtype: "", gsize: "", problem: "", date1: "", date2: "", date3: "",
    time: "", plan: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [tomorrow] = useState(() => {
    if (typeof window === "undefined") return "";
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  });

  const set = (k: string, v: string) => setF((p) => ({ ...p, [k]: v }));

  const nameOk = f.name.trim().length > 1;
  const emailOkV = emailOk(f.email);
  const phoneOkV = phoneOk(f.phone);
  const locationOk = f.location.trim().length > 1;
  const ageOk = Boolean(f.age);
  const roleOk = Boolean(individual ? f.role && (f.role !== "Other" || f.roleOther.trim()) : f.gtype);
  const gsizeOk = Boolean(individual ? true : f.gsize);
  const problemOk = f.problem.trim().length > 3;
  const date1Ok = Boolean(f.date1);
  const date2Ok = Boolean(f.date2);
  const timeOk = Boolean(f.time);
  const planOk = Boolean(f.plan);

  const onFile = (fl: File | null) => {
    setFile(fl);
    setPreview(fl && fl.type.startsWith("image/") ? URL.createObjectURL(fl) : "");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state !== "idle") return;
    setState("sending");
    const fd = new FormData();
    fd.set("type", variant);
    Object.entries(f).forEach(([k, v]) => fd.set(k, v));
    if (file) fd.set("screenshot", file);
    try {
      const r = await fetch("/api/book", { method: "POST", body: fd });
      if (!r.ok) throw new Error("failed");
      setState("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setState("idle");
      window.alert("Something went wrong. Please try again, or write to philosophicalcafe.india@gmail.com.");
    }
  };

  if (state === "done") {
    return (
      <div className="slidein mx-auto max-w-xl rounded-[2rem] border border-sand bg-white/80 p-10 text-center sm:p-14">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream text-2xl text-sage">
          ✓
        </div>
        <h2 className="mt-6 font-display text-3xl text-ink">Your table is being set.</h2>
        <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-mute">
          Chetna has your request and will reach out within 24 hours to confirm
          the time. Until then, breathe easy.
        </p>
        <p className="mt-6 text-[13px] text-faint">
          Anything urgent? Write to{" "}
          <a href="mailto:philosophicalcafe.india@gmail.com" className="text-clay underline underline-offset-4">
            philosophicalcafe.india@gmail.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mx-auto max-w-2xl space-y-6">
      <StepCard step="Step 01" title="A little about you">
        <Appear shown>
          <div>
            <Label>Your name</Label>
            <input className="field" placeholder="What should we call you?" value={f.name} onChange={(e) => set("name", e.target.value)} />
          </div>
        </Appear>
        <Appear shown={nameOk}>
          <div>
            <Label>Email</Label>
            <input className="field" type="email" placeholder="you@somewhere.com" value={f.email} onChange={(e) => set("email", e.target.value)} />
          </div>
        </Appear>
        <Appear shown={emailOkV}>
          <div>
            <Label>Phone number</Label>
            <input className="field" placeholder="+91" inputMode="tel" value={f.phone} onChange={(e) => set("phone", e.target.value)} />
          </div>
        </Appear>
        <Appear shown={phoneOkV}>
          <div>
            <Label>Where are you based?</Label>
            <input className="field" placeholder="City, state" value={f.location} onChange={(e) => set("location", e.target.value)} />
          </div>
        </Appear>
      </StepCard>

      {locationOk && (
        <StepCard step="Step 02" title={individual ? "Who is arriving at the cafe today?" : "And who is coming along?"}>
          <Appear shown>
            {individual ? (
              <div>
                <Label>Your age</Label>
                <Pills options={ages} value={f.age} onPick={(v) => set("age", v)} />
              </div>
            ) : (
              <div>
                <Label>What kind of group is this?</Label>
                <Pills options={groupTypes} value={f.gtype} onPick={(v) => set("gtype", v)} />
              </div>
            )}
          </Appear>
          <Appear shown={ageOk}>
            {individual ? (
              <div>
                <Label>How would you describe yourself best? *</Label>
                <Pills options={roles} value={f.role} onPick={(v) => set("role", v)} />
                {f.role === "Other" && (
                  <div className="mt-3">
                    <input
                      className="field"
                      placeholder="Tell us a little about what you do"
                      value={f.roleOther}
                      onChange={(e) => set("roleOther", e.target.value)}
                    />
                  </div>
                )}
              </div>
            ) : (
              <div>
                <Label>Group size</Label>
                <Pills options={sizes} value={f.gsize} onPick={(v) => set("gsize", v)} />
              </div>
            )}
          </Appear>
        </StepCard>
      )}

      {roleOk && gsizeOk && (
        <StepCard step="Step 03" title={individual ? "What is sitting on your mind?" : "What should the conversation hold space for?"}>
          <Appear shown>
            <div>
              <Label>{individual ? "Core problem - in your own words, there is no wrong way to say it" : "A few lines about the group and what brings you here"}</Label>
              <textarea
                className="field min-h-32 resize-y leading-relaxed"
                placeholder={individual ? "You don't need perfect words. Start anywhere." : "Themes, occasion, what you'd like the group to walk away with…"}
                value={f.problem}
                onChange={(e) => set("problem", e.target.value)}
              />
            </div>
          </Appear>
        </StepCard>
      )}

      {problemOk && (
        <StepCard step="Step 04" title="When could we talk?">
          <Appear shown>
            <div>
              <Label>Preferred date 1</Label>
              <input className="field" type="date" min={tomorrow} value={f.date1} onChange={(e) => set("date1", e.target.value)} />
            </div>
          </Appear>
          <Appear shown={date1Ok}>
            <div>
              <Label>Preferred date 2 <span className="normal-case tracking-normal">(optional)</span></Label>
              <input className="field" type="date" min={f.date1 && f.date1 > tomorrow ? f.date1 : tomorrow} value={f.date2} onChange={(e) => set("date2", e.target.value)} />
            </div>
          </Appear>
          <Appear shown={date2Ok}>
            <div>
              <Label>Preferred date 3 <span className="normal-case tracking-normal">(optional)</span></Label>
              <input className="field" type="date" min={f.date2 && f.date2 > tomorrow ? f.date2 : tomorrow} value={f.date3} onChange={(e) => set("date3", e.target.value)} />
            </div>
          </Appear>
          <Appear shown={date1Ok}>
            <div>
              <Label>Preferred time (IST)</Label>
              <Pills options={slots} value={f.time} onPick={(v) => set("time", v)} />
            </div>
          </Appear>
          <Appear shown={date1Ok}>
            <p className="text-[13px] leading-relaxed text-faint">
              Two alternate dates help, but one is fine. The ₹300 intro call runs 15 minutes, full sessions run 45 minutes - all online, on Google Meet.
            </p>
          </Appear>
        </StepCard>
      )}

      {timeOk && (
        <StepCard step="Step 05" title="Choose your session">
          <Appear shown>
            <div className="grid gap-4 sm:grid-cols-3">
              {plans.map((p) => (
                <button
                  key={p.amt}
                  type="button"
                  onClick={() => set("plan", p.amt)}
                  className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                    f.plan === p.amt
                      ? "border-clay bg-cream/80 shadow-[0_14px_30px_-20px_rgba(162,78,51,0.5)]"
                      : "border-sand bg-white hover:border-clay/40"
                  }`}
                >
                  <span className="font-display text-2xl text-ink">₹{p.amt}</span>
                  <span className="mt-1.5 block text-[13px] leading-snug text-mute">{p.note}</span>
                </button>
              ))}
            </div>
            <p className="text-[13px] leading-relaxed text-faint">
              ₹300 is a 15-minute intro call, ₹1,000 is a full 45-minute session,
              and ₹2,500 books the three-session pack. If things change later,
              you can shift the date by writing to us.
            </p>
          </Appear>
        </StepCard>
      )}

      {planOk && (
        <StepCard step="Step 06" title="Reserve your seat">
          <Appear shown>
            <div className="flex flex-col items-center gap-6 rounded-2xl border border-sand bg-cream/50 p-6 sm:flex-row sm:p-8">
              <div className="shrink-0 rounded-2xl border border-sand bg-white p-3">
                <Image src="/upi-qr.png" alt="UPI QR code" width={160} height={160} className="h-40 w-40" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-faint">Scan &amp; pay</p>
                <p className="mt-2 font-display text-3xl text-ink">₹{f.plan}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-mute">
                  Any UPI app ·{" "}
                  <span className="font-semibold text-ink">chetnag480@okhdfcbank</span>
                  <br />
                  Verify the name shows <span className="italic">Chetna</span> before paying.
                </p>
              </div>
            </div>
          </Appear>

          <Appear shown>
            <div>
              <Label>Upload your payment screenshot</Label>
              <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-sand bg-white/60 px-6 py-8 text-center transition-colors hover:border-clay/50 hover:bg-cream/40">
                {preview ? (
                  <>
                    <Image src={preview} alt="Payment receipt" width={480} height={360} unoptimized className="max-h-44 w-auto rounded-xl border border-sand object-contain" />
                    <span className="text-[12.5px] text-faint">Tap to change this receipt</span>
                  </>
                ) : (
                  <>
                    <span className="text-[15px] text-ink">Tap to add your receipt</span>
                    <span className="text-[12.5px] text-faint">PNG or JPG - this confirms your booking</span>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => onFile(e.target.files?.[0] ?? null)}
                />
              </label>
            </div>
          </Appear>

          <Appear shown>
            <button
              type="submit"
              disabled={state === "sending"}
              className="w-full rounded-full bg-ink py-4 text-[15px] tracking-wide text-[#f7f2e9] transition-all duration-300 hover:bg-clay disabled:opacity-60"
            >
              {state === "sending" ? "Sending…" : "Confirm my session"}
            </button>
            <p className="mt-3 text-center text-[12.5px] text-faint">
              Chetna replies within 24 hours to lock the final slot.
            </p>
          </Appear>
        </StepCard>
      )}
    </form>
  );
}
