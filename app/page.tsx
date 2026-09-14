import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";

const areas = [
  { t: "Career transitions & midlife", d: "Feeling stuck or unfulfilled, even when everything looks fine on paper." },
  { t: "Existential anxiety", d: "When the worry runs deeper than circumstances and distraction doesn't reach it." },
  { t: "Moral & ethical dilemmas", d: "Caught between what you want, what you should, and what you believe is right." },
  { t: "Identity & self-doubt", d: "Recurring patterns in how you think, relate, and choose - and where they begin." },
  { t: "Grief, loss & relationships", d: "Breakups, endings and the difficult questions that linger after them." },
  { t: "Meaning & meaninglessness", d: "When achievement stops feeling like enough, and you can't say why." },
  { t: "Fear of death", d: "Quiet questions about mortality, met with philosophical frameworks instead of platitudes." },
  { t: "Self-exploration", d: "Who you are, what you value, and how you actually want to live." },
  { t: "Personal growth & decisions", d: "Structured thinking around the choices that shape your life and sense of self." },
];

const steps = [
  { n: "01", t: "Fill the form", d: "Share a little about what's on your mind. Imperfect words are perfectly welcome." },
  { n: "02", t: "We pick a time", d: "Chetna replies within 24 hours and the session is set on Google Meet." },
  { n: "03", t: "The conversation begins", d: "45–60 minutes of honest, unhurried thinking together." },
];

export default function Home() {
  return (
    <>
      <section className=" relative overflow-hidden pt-40 pb-24 sm:pt-44">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-cream blur-3xl" />
        <div className="pointer-events-none absolute top-64 -left-40 h-[380px] w-[380px] rounded-full bg-[#f0e6d6] blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.12fr_0.88fr]">
          <div>
            <p className="rise text-[11.5px] font-bold uppercase tracking-[0.24em] text-clay">
              One-on-one philosophical counselling · Online, across India
            </p>
            <h1
              className="rise mt-6 font-display text-[44px] leading-[1.08] tracking-tight text-ink sm:text-6xl"
              style={{ animationDelay: "120ms" }}
            >
              A safe space to
              <span className="block italic text-clay">unlearn the noise.</span>
            </h1>
            <p
              className="rise mt-7 max-w-lg text-[16.5px] leading-[1.85] text-mute"
              style={{ animationDelay: "240ms" }}
            >
              Bring the questions about work, meaning, identity, relationships -
              or simply the feeling that something is off. We think through them
              together, honestly and unhurried. No quick answers, no labels.
            </p>
            <div className="rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "360ms" }}>
              <Link
                href="/book"
                className="rounded-full bg-ink px-7 py-3.5 text-[15px] tracking-wide text-[#f7f2e9] transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay "
              >
                Book a session
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-full border border-sand bg-white/60 px-7 py-3.5 text-[15px] text-mute transition-all duration-300 hover:border-clay/40 hover:text-clay"
              >
                How it works
              </Link>
            </div>
            <p className="rise mt-7 text-[13px] text-faint" style={{ animationDelay: "460ms" }}>
              No prior knowledge of philosophy needed · Reply within 24 hours
            </p>
          </div>

          <div className="rise relative mx-auto w-full max-w-sm" style={{ animationDelay: "300ms" }}>
            <div className="floaty rounded-[2rem] border border-sand bg-white p-3 ">
              <Image
                src="/chetna-2.jpg"
                alt="Chetna, philosophical counsellor"
                width={640}
                height={800}
                className="aspect-[4/5] w-full rounded-[1.55rem] object-cover"
              />
              <div className="absolute -bottom-8 -left-6 max-w-[260px] -rotate-2 rounded-2xl border border-sand bg-[#fffdf8] px-5 py-4  sm:-left-10">
                <p className="font-display text-[14.5px] italic leading-relaxed text-ink/90">
                  “You don&rsquo;t need to have it figured out before reaching out. That is exactly what the session is for.”
                </p>
              </div>
            </div>
            <div className="absolute -top-4 right-6 rotate-3 rounded-full border border-sand bg-[#fffdf8] px-4 py-2 text-[12px] font-semibold tracking-wide text-mute ">
              45–60 min · Google Meet
            </div>
          </div>
        </div>
      </section>

      <div className="mt-6">
        <Marquee />
      </div>

      <section className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
        <Reveal>
          <p className="text-center text-[11.5px] font-bold uppercase tracking-[0.24em] text-clay">Think of it as</p>
          <h2 className="mt-4 text-center font-display text-4xl tracking-tight text-ink sm:text-[44px]">
            A thinking relationship
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { t: "Not therapy", items: ["No diagnosis", "No clinical labels", "No treatment plans"] },
            { t: "Not coaching", items: ["No goals imposed", "No action-plan hustle", "No performance metrics"] },
            { t: "A conversation", items: ["Honest and unhurried", "Beliefs examined gently", "Clarity through understanding"] },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 120}>
              <div
                className={`h-full rounded-[1.75rem] border p-8 transition-transform duration-500 hover:-translate-y-1.5 ${
                  i === 2 ? "border-clay/30 bg-cream" : "border-sand bg-white"
                }`}
              >
                <h3 className={`font-display text-[22px] pb-4 mb-4 border-b ${i === 2 ? "text-clay border-clay/20" : "text-ink border-sand/70"}`}>{c.t}</h3>
                <ul className="space-y-3.5">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[14.5px] text-mute">
                      <span className={`mt-[6.5px] h-1.5 w-1.5 shrink-0 rounded-full ${i === 2 ? "bg-clay" : "bg-clay/70"}`} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-sand/70 bg-cream/50 py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="text-[11.5px] font-bold uppercase tracking-[0.24em] text-clay">Areas of inquiry</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl tracking-tight text-ink sm:text-[44px]">
              There is no wrong question to arrive with.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <Reveal key={a.t} delay={(i % 3) * 90}>
                <div className="group h-full rounded-[1.4rem] border border-sand bg-paper p-7 transition-all duration-500 hover:-translate-y-1 hover:border-clay/30 hover:bg-white ">
                  <h3 className="font-display text-[19px] leading-snug text-ink">{a.t}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-mute">{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
        <Reveal>
          <p className="text-[11.5px] font-bold uppercase tracking-[0.24em] text-clay">How it works</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-[44px]">Simple by design</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 130}>
              <div className="relative border-t border-sand pt-8">
                <span className="font-display text-[52px] leading-none text-sand transition-colors duration-500 group-hover:text-clay">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-[21px] text-ink">{s.t}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-mute">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <Link href="/how-it-works" className="mt-12 inline-flex items-center gap-2 text-[15px] text-clay transition-colors hover:text-maroon">
            The whole process, in detail
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <Reveal>
          <div className="grid items-center gap-12 rounded-[2.5rem] border border-sand bg-cream/60 p-8 sm:p-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative mx-auto w-56">
              <Image
                src="/chetna-3.jpg"
                alt="Chetna"
                width={448}
                height={560}
                className="aspect-[4/5] w-full rounded-[1.8rem] border border-sand object-cover "
              />
            </div>
            <div>
              <p className="text-[11.5px] font-bold uppercase tracking-[0.24em] text-clay">Your counsellor</p>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-ink">Hello, I&rsquo;m Chetna.</h2>
              <p className="mt-5 max-w-xl text-[15.5px] leading-[1.85] text-mute">
                My journey into philosophy began with a search for answers, but I discovered
                something far more powerful - the art of asking the right questions. I&rsquo;m a
                certified philosophical counsellor, and I hold this space so you can challenge
                conditioned beliefs and declutter your mind, at your own pace.
              </p>
              <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-[15px] text-clay transition-colors hover:text-maroon">
                More about me
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-sand/70 bg-cream/50 py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div id="pricing-trigger"></div>
            <p className="text-center text-[11.5px] font-bold uppercase tracking-[0.24em] text-clay">Pricing</p>
            <h2 className="mt-4 text-center font-display text-4xl tracking-tight text-ink sm:text-[44px]">
              Pay what feels right
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-center text-[15px] leading-relaxed text-mute">
              No fixed fee, no judgement. The conversation is what matters - these
              amounts are only a gentle suggestion.
            </p>
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-3">
            {[
              { amt: "₹300", d: "A beginning - a single honest conversation." },
              { amt: "₹1,000", d: "The usual cup - the amount most people settle on." },
              { amt: "₹2,000", d: "Keep the cafe warm - helps someone else afford theirs." },
            ].map((p, i) => (
              <Reveal key={p.amt} delay={i * 120}>
                <div className="h-full rounded-[1.6rem] border border-sand bg-paper p-7 text-center transition-all duration-500 hover:-translate-y-1 hover:border-clay/30 ">
                  <p className="font-display text-[32px] text-ink">{p.amt}</p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-mute">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={250}>
            <div className="mt-12 text-center">
              <Link
                href="/book"
                className="inline-block rounded-full bg-ink px-8 py-4 text-[15px] tracking-wide text-[#f7f2e9] transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay "
              >
                Book a session
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.24em] text-clay">Ready when you are</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl">
              Pull up a chair. The rest can wait.
            </h2>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book"
                className="rounded-full bg-ink px-8 py-4 text-[15px] tracking-wide text-[#f7f2e9] transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay "
              >
                Book a session
              </Link>
              <Link
                href="/groups"
                className="rounded-full border border-sand bg-white/60 px-8 py-4 text-[15px] text-mute transition-all duration-300 hover:border-clay/40 hover:text-clay"
              >
                Book for a group
              </Link>
            </div>
            <p className="mt-8 text-[13px] text-faint">
              Prefer to write first?{" "}
              <a href="mailto:chetnag480@gmail.com" className="text-clay underline underline-offset-4">chetnag480@gmail.com</a>
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
