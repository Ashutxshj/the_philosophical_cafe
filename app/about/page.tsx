import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Chetna - The Philosophical Cafe",
  description:
    "Chetna is a certified philosophical counsellor (M.A. Philosophy, JNU) helping people challenge conditioned beliefs and declutter their minds.",
};

const credentials = [
  { t: "M.A. Philosophy", d: "Jawaharlal Nehru University, New Delhi" },
  { t: "Certified Philosophical Counsellor", d: "Philosophical Practitioner Association of India" },
  { t: "Diploma in Philosophical Counselling", d: "University of Kerala" },
  { t: "UGC NET - Philosophy", d: "Qualified, 2021 through 2024" },
  { t: "GATE - Philosophy", d: "All India Rank 72, 2022" },
];

const approaches = [
  "Existential Therapy", "Logotherapy", "REBT", "Narrative Therapy",
  "Solution Focused", "Socratic Dialogue", "Mindfulness", "Logic-Based Therapy",
];

const expertise = [
  "Existential anxiety", "Moral dilemmas", "Identity crisis", "Grief and loss",
  "Self-doubt", "Friendship issues", "Break-up trauma", "Ethical decision making",
  "Self-exploration", "Career transition", "Midlife crisis", "Meaninglessness",
  "Fear of death",
];

export default function AboutPage() {
  return (
    <section className="pt-36 pb-28 sm:pt-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative mx-auto w-full max-w-xs">
              <Image
                src="/chetna-3.jpg"
                alt="Chetna, philosophical counsellor"
                width={480}
                height={600}
                className="aspect-[4/5] w-full rounded-[2rem] border border-sand object-cover "
              />
              <div className="absolute -bottom-6 -right-4 rotate-2 rounded-2xl border border-sand bg-[#fffdf8] px-5 py-3 ">
                <p className="font-display text-[14px] italic text-clay">Chetna - she runs the cafe</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div>
              <p className="text-[11.5px] font-bold uppercase tracking-[0.24em] text-clay">About</p>
              <h1 className="mt-4 font-display text-4xl leading-[1.12] tracking-tight text-ink sm:text-[52px]">
                The person pouring the coffee
              </h1>
              <div className="mt-7 space-y-5 text-[15.5px] leading-[1.9] text-mute">
                <p>
                  My journey into philosophy began with a search for answers, but I discovered
                  something far more powerful - the art of asking the right questions. I&rsquo;m Chetna,
                  a philosophical counsellor dedicated to helping you challenge conditioned
                  beliefs and declutter your mind.
                </p>
                <p>
                  I believe our lives are shaped by our thoughts, decisions, and attitudes.
                  Through guided reflection we can understand these, and that understanding
                  becomes the ground from which authentic peace - and eventually happiness - grows.
                  My approach is not about quick fixes or promising constant happiness.
                </p>
                <p>
                  As a post-graduate in Philosophy and a certified practitioner with the
                  Philosophical Practitioner Association of India, I offer a structured space
                  for you to take charge of your narrative.
                </p>
              </div>
              <p className="mt-7 font-display text-[17px] italic text-clay">
                Let&rsquo;s embark on this journey of introspection together.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-24">
            <h2 className="font-display text-3xl text-ink">Credentials</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {credentials.map((c) => (
                <div key={c.t} className="rounded-[1.4rem] border border-sand bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-clay/25">
                  <p className="font-display text-[18px] leading-snug text-ink">{c.t}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-mute">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 rounded-[2rem] border border-sand bg-cream/60 p-8 sm:p-12">
            <h2 className="font-display text-3xl text-ink">Ways of working</h2>
            <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-mute">
              A quiet toolkit, drawn from different traditions and chosen for the
              person in front of me - never the other way around.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {approaches.map((a) => (
                <span key={a} className="rounded-full border border-sand bg-paper px-4 py-2 text-[13.5px] text-mute">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="font-display text-3xl text-ink">Areas of expertise</h2>
              <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {expertise.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-[14.5px] text-mute">
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-clay" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-sand bg-white p-8">
              <h2 className="font-display text-3xl text-ink">Elsewhere</h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-mute">
                I also write and speak about philosophy as it meets everyday life.
              </p>
              <ul className="mt-6 flex flex-col gap-4 text-[15px]">
                <li>
                  <a href="https://www.linkedin.com/in/chetna-gupta-6a84831b0" target="_blank" rel="noreferrer" className="group flex w-fit items-center gap-3 text-mute transition-colors hover:text-clay">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[22px] w-[22px] text-clay transition-colors group-hover:text-maroon">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="underline underline-offset-4">Chetna Gupta</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/philosophical_cafe_chetna" target="_blank" rel="noreferrer" className="group flex w-fit items-center gap-3 text-mute transition-colors hover:text-clay">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[22px] w-[22px] text-clay transition-colors group-hover:text-maroon">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                    <span className="underline underline-offset-4">@philosophical_cafe_chetna</span>
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com/@philosophicalcafe-chetna" target="_blank" rel="noreferrer" className="group flex w-fit items-center gap-3 text-mute transition-colors hover:text-clay">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[22px] w-[22px] text-clay transition-colors group-hover:text-maroon">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="underline underline-offset-4">The Philosophical Cafe</span>
                  </a>
                </li>
              </ul>
              <p className="mt-8 border-t border-sand pt-6 text-[13.5px] leading-relaxed text-faint">
                Research: "Fear of Failure - exploring competition-induced anxiety with an
                existential lens, navigating through philosophical counselling."
                <br />
                Sessions available in Hindi and English.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-24 text-center">
            <Link
              href="/book"
              className="inline-block rounded-full bg-ink px-8 py-4 text-[15px] tracking-wide text-[#f7f2e9] transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay "
            >
              Sit with me for a session
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
