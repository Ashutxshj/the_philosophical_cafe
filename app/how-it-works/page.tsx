import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How it works - The Philosophical Cafe",
};

const steps = [
  {
    n: "01",
    t: "You fill the form",
    d: "A few gentle questions - who you are, what's sitting on your mind, when you could talk. You don't need the perfect words or a perfectly defined problem. Half-formed feelings are exactly what this space is for.",
  },
  {
    n: "02",
    t: "Chetna replies within 24 hours",
    d: "You'll hear back by email or WhatsApp to confirm your slot and anything else that would help the first conversation go deeper.",
  },
  {
    n: "03",
    t: "The session, on Google Meet",
    d: "One-on-one, online, anywhere in India. A quiet 45–60 minutes where we take your question seriously - examining the beliefs, assumptions and patterns underneath it, rather than rushing to fix it.",
  },
  {
    n: "04",
    t: "You leave with clarity, not homework",
    d: "Sometimes a session ends with a reframe, sometimes with better questions to sit with. The intention is simple: you leave lighter and clearer than you arrived.",
  },
  {
    n: "05",
    t: "Choose your session, pay, and it is set",
    d: "A ₹300 15-minute intro call, a ₹1,000 45-minute one-on-one session, or the ₹2,500 three-session pack. You reserve your seat through UPI, upload a screenshot, and that is it.",
  },
];

const faqs = [
  {
    q: "Do I need to know philosophy?",
    a: "Not at all. No prior knowledge of philosophy is needed - only a willingness to think honestly. The ideas are translated into plain language as we go.",
  },
  {
    q: "Is this therapy?",
    a: "No. There is no diagnosis, no clinical labels, no treatment. If your situation needs clinical care, Chetna will tell you honestly and help you look for it.",
  },
  {
    q: "Is this coaching?",
    a: "Also no. There are no goals handed to you or productivity systems to adopt. The work is to understand what you actually believe and want - the direction follows from that.",
  },
  {
    q: "What if I don't know what's wrong?",
    a: "That's a perfectly good place to start. Many people arrive with only the sense that something feels off. Finding the question is part of the session.",
  },
  {
    q: "What does a session cost?",
    a: "A 15-minute intro call is ₹300. A full 45-minute session is ₹1,000. Three sessions together are ₹2,500. You pick the size that fits when you book.",
  },
  {
    q: "How do I pay?",
    a: "After choosing a session on the booking form, you'll see a UPI QR. Scan, pay, and upload a screenshot - that confirms your booking.",
  },
  {
    q: "Do I have to be somewhere specific?",
    a: "No. Everything happens online on Google Meet, so you can join from anywhere in India - your room, your office, wherever you can think honestly.",
  },
];

export default function HowItWorksPage() {
  return (
    <section className="pt-36 pb-28 sm:pt-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.24em] text-clay">The process</p>
            <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              How a session unfolds
            </h1>
            <p className="mt-5 text-[15.5px] leading-[1.85] text-mute">
              From the first form to the last question - here is the whole journey,
              with nothing hidden.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 max-w-3xl">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <div className="group relative flex gap-6 border-t border-sand py-9 last:border-b sm:gap-10">
                <span className="font-display text-[40px] leading-none text-sand transition-colors duration-500 group-hover:text-clay sm:text-[48px]">
                  {s.n}
                </span>
                <div className="pt-1">
                  <h2 className="font-display text-[22px] text-ink">{s.t}</h2>
                  <p className="mt-3 text-[14.5px] leading-[1.85] text-mute">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mx-auto mt-20 max-w-3xl">
            <h2 className="text-center font-display text-3xl text-ink">Questions people ask quietly</h2>
            <div className="mt-10 space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="faq group rounded-2xl border border-sand bg-white px-6 py-5 transition-colors open:bg-cream/50">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15.5px] font-semibold text-ink marker:hidden">
                    {f.q}
                    <span className="faq-chev shrink-0 text-[20px] font-light leading-none text-clay transition-transform duration-300">+</span>
                  </summary>
                  <p className="mt-4 text-[14.5px] leading-[1.85] text-mute">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 text-center">
            <a
              href="/book"
              className="inline-block rounded-full bg-ink px-8 py-4 text-[15px] tracking-wide text-[#f7f2e9] transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay "
            >
              Begin with the form
            </a>
            <p className="mt-5 text-[13px] text-faint">
              Bringing a group instead? Group sessions are coming soon — join the waitlist by writing to{" "}
              <a href="mailto:philosophicalcafe.india@gmail.com" className="text-clay underline underline-offset-4">philosophicalcafe.india@gmail.com</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
