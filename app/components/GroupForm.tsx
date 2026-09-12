"use client";

import { useState } from "react";
import PlanPanel from "./PlanPanel";
import { OWNER_EMAIL } from "../lib/constants";

type Values = {
  name: string;
  email: string;
  phone: string;
  org: string;
  size: string;
  purpose: string;
  thoughts: string;
  slot: string;
  plan: number | null;
};

const sizes = [
  "5\u201310",
  "10\u201325",
  "25\u201350",
  "50+",
];

const purposes = [
  "A talk or lecture",
  "Team check-in",
  "Student circle / hostel group",
  "Community workshop",
  "Not sure yet",
];

export default function GroupForm() {
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    phone: "",
    org: "",
    size: "",
    purpose: "",
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
          type: "group",
          ...values,
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
          <h3>Your group is pencilled in.</h3>
          <p>
            Chetna will write back within 24 hours to discuss what the group
            needs. A soft confirmation is already resting in your inbox.
          </p>
        </div>
        <div />
      </div>
    );
  }

  return (
    <div className="form-shell">
      <div className="form-stack">
        <div className="kicker">
          <span className="kicker-label">Book a session for a group</span>
        </div>
        <div className="field">
          <label htmlFor="gf-name">Your name</label>
          <input
            id="gf-name"
            type="text"
            value={values.name}
            autoFocus
            onChange={(e) => set({ name: e.target.value })}
            placeholder="You'd be the one coordinating, we're guessing"
          />
        </div>
        {values.name && (
          <div className="field">
            <label htmlFor="gf-org">
              Where you&rsquo;re coming from
              <span className="field-hint"> optional</span>
            </label>
            <input
              id="gf-org"
              type="text"
              value={values.org}
              onChange={(e) => set({ org: e.target.value })}
              placeholder="Company, college, hostel, society\u2026"
            />
          </div>
        )}
        <div className="field">
          <label htmlFor="gf-email">Email</label>
          <input
            id="gf-email"
            type="email"
            value={values.email}
            onChange={(e) => set({ email: e.target.value })}
            placeholder="For confirmation and follow-up"
          />
        </div>
        {values.email.includes("@") && (
          <div className="field">
            <label htmlFor="gf-phone">Phone / WhatsApp</label>
            <input
              id="gf-phone"
              type="tel"
              value={values.phone}
              onChange={(e) => set({ phone: e.target.value })}
              placeholder="Optional"
            />
          </div>
        )}
        {values.phone.trim().length >= 6 && (
          <div className="field">
            <label>Roughly how many people?</label>
            <div className="choice-row">
              {sizes.map((s) => (
                <label className="choice" key={s}>
                  <input
                    type="radio"
                    name="gf-size"
                    checked={values.size === s}
                    onChange={() => set({ size: s })}
                  />
                  <span>{s}</span>
                </label>
              ))}
            </div>
          </div>
        )}
        {values.size && (
          <div className="field">
            <label>The group is looking for</label>
            <div className="choice-row">
              {purposes.map((p) => (
                <label className="choice" key={p}>
                  <input
                    type="radio"
                    name="gf-purpose"
                    checked={values.purpose === p}
                    onChange={() => set({ purpose: p })}
                  />
                  <span>{p}</span>
                </label>
              ))}
            </div>
          </div>
        )}
        {values.purpose && (
          <div className="field">
            <label htmlFor="gf-thoughts">
              Tell us a bit about the group
            </label>
            <textarea
              id="gf-thoughts"
              value={values.thoughts}
              onChange={(e) => set({ thoughts: e.target.value })}
              placeholder="What are they going through, what do you wish they had a space for?"
            />
          </div>
        )}
        {values.thoughts.trim().length >= 20 && (
          <div className="field">
            <label htmlFor="gf-slot">When are you thinking?</label>
            <input
              id="gf-slot"
              type="text"
              value={values.slot}
              onChange={(e) => set({ slot: e.target.value })}
              placeholder="A week, a month, a best-case date\u2026"
            />
          </div>
        )}
        {values.slot.trim().length >= 4 && (
          <button
            className="btn btn-solid form-submit"
            onClick={submit}
            disabled={sending}
          >
            {sending ? "Sending\u2026" : "Request for my group"}
          </button>
        )}
        {failed && (
          <p className="field-hint">
            That didn&rsquo;t send. Try once more, or email directly at{" "}
            {OWNER_EMAIL}.
          </p>
        )}
      </div>
      <PlanPanel
        selected={values.plan}
        onSelect={(plan) => set({ plan })}
        note="Group sessions scale with the room. Pick a per-person band now \u2014 Chetna confirms exact terms after understanding the context."
      />
    </div>
  );
}
