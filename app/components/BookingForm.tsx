"use client";

import { useState } from "react";
import PlanPanel from "./PlanPanel";
import { OWNER_EMAIL } from "../lib/constants";

type Values = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  thoughts: string;
  slot: string;
  plan: number | null;
};

const topics = [
  "Career question",
  "A decision to weigh",
  "Meaning / emptiness",
  "Anxiety",
  "Identity & self",
  "Grief or loss",
  "Just my head is loud",
];

const slots = [
  "Morning",
  "Afternoon",
  "Evening",
  "Weekend",
  "Flexible",
];

export default function BookingForm() {
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    phone: "",
    topic: "",
    thoughts: "",
    slot: "",
    plan: null,
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);

  const set = (patch: Partial<Values>) =>
    setValues((v) => ({ ...v, ...patch }));

  async function submit() {
    setSending(true);
    setFailed(false);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "individual",
          name: values.name,
          email: values.email,
          phone: values.phone,
          topic: values.topic,
          thoughts: values.thoughts,
          slot: values.slot,
          plan: values.plan,
        }),
      });
      if (!res.ok) throw new Error("not ok");
      setSent(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="form-shell">
        <div className="sent">
          <div className="sent-mark">&#10047;</div>
          <h3>A seat is waiting for you.</h3>
          <p>
            Chetna will reply within 24 hours with a time. A soft confirmation
            has already been sent to your inbox &mdash; and remember, you only
            pay after we have spoken.
          </p>
        </div>
        <div />
      </div>
    );
  }

  return (
    <div className="form-shell" id="book">
      <div className="form-stack">
        <div className="kicker">
          <span className="kicker-label">Book a one-on-one session</span>
        </div>
        <div className="field">
          <label htmlFor="bf-name">Your name</label>
          <input
            id="bf-name"
            type="text"
            value={values.name}
            autoFocus
            onChange={(e) => set({ name: e.target.value })}
            placeholder="What should Chetna call you?"
          />
        </div>
        {values.name && (
          <div className="field">
            <label htmlFor="bf-email">Email</label>
            <input
              id="bf-email"
              type="email"
              value={values.email}
              onChange={(e) => set({ email: e.target.value })}
              placeholder="So the confirmation finds its way to you"
            />
          </div>
        )}
        {values.email.includes("@") && (
          <div className="field">
            <label htmlFor="bf-phone">Phone / WhatsApp</label>
            <input
              id="bf-phone"
              type="tel"
              value={values.phone}
              onChange={(e) => set({ phone: e.target.value })}
              placeholder="Only if it's easier to fix a time"
            />
            <span className="field-hint">
              Optional &mdash; email works fine too.
            </span>
          </div>
        )}
        {values.phone.trim().length >= 6 && (
          <div className="field">
            <label>What brings you here?</label>
            <div className="choice-row">
              {topics.map((t) => (
                <label className="choice" key={t}>
                  <input
                    type="radio"
                    name="bf-topic"
                    checked={values.topic === t}
                    onChange={() => set({ topic: t })}
                  />
                  <span>{t}</span>
                </label>
              ))}
            </div>
            <span className="field-hint">
              Close enough is fine &mdash; or skip and say it below.
            </span>
          </div>
        )}
        {values.topic && (
          <div className="field">
            <label htmlFor="bf-thoughts">
              Whatever is sitting on your heart recently
            </label>
            <textarea
              id="bf-thoughts"
              value={values.thoughts}
              onChange={(e) => set({ thoughts: e.target.value })}
              placeholder="In two or many lines. 'I don't know' is also a good sentence."
            />
          </div>
        )}
        {values.thoughts.trim().length >= 20 && (
          <div className="field">
            <label>When could a session usually happen?</label>
            <div className="choice-row">
              {slots.map((s) => (
                <label className="choice" key={s}>
                  <input
                    type="radio"
                    name="bf-slot"
                    checked={values.slot === s}
                    onChange={() => set({ slot: s })}
                  />
                  <span>{s}</span>
                </label>
              ))}
            </div>
          </div>
        )}
        {values.slot && (
          <button
            className="btn btn-solid form-submit"
            onClick={submit}
            disabled={sending}
          >
            {sending ? "Sending…" : "Request my session"}
          </button>
        )}
        {failed && (
          <p className="field-hint">
            Something didn&rsquo;t go through. Try again, or just email{" "}
            {OWNER_EMAIL}.
          </p>
        )}
      </div>
      <PlanPanel
        selected={values.plan}
        onSelect={(plan) => set({ plan })}
        note="A philosophy session has no fixed fee. We propose three plans or you can choose anything."
      />
    </div>
  );
}
