import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import { inquiries } from "@/lib/expertise";

const steps = [
  { n: "01", t: "Fill the form", d: "Share a little about what's on your mind. Imperfect words are perfectly welcome." },
  { n: "02", t: "We pick a time", d: "Chetna replies within 24 hours and the session is set on Google Meet." },
  { n: "03", t: "The conversation begins", d: "45-60 minutes of honest, unhurried thinking together." },
];

const pricing = [
  { amt: "₹300", d: "Meet Chetna, ask anything, see if the fit feels right.", n: "Intro call · 15 min" },
  { amt: "₹1,000", d: "One honest, unhurried conversation, one-on-one.", n: "Session · 45 min" },
  { amt: "₹2,500", d: "For the questions that need the longer road.", n: "Three-session pack" },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 pt-40 pb-24 sm:px-12 md:px-16 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          <p className="text-[14px] italic text-mute">
            One-on-one philosophical counselling - online, across India
          </p>
          <h1 className="mt-6 font-display text-[46px] leading-[1.08] tracking-tight text-ink sm:text-6xl">
            A safe space to
            <span className="block italic text-clay">unlearn the noise.</span>
          </h1>
          <p className="mt-7 max-w-lg text-[16.5px] leading-[1.85] text-mute">
            Bring the questions about work, meaning, identity, relationships -
            or simply the feeling that something is off. We think through them
            together, honestly and unhurried. No quick answers, no labels.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-7">
            <Link
              href="/book"
              className="bg-ink px-7 py-3.5 text-[15px] tracking-wide text-[#f7f2e9] transition-colors duration-300 hover:bg-clay"
            >
              Book a session
            </Link>
            <Link
              href="/how-it-works"
              className="text-[15px] text-clay underline decoration-sand underline-offset-[6px] transition-colors hover:decoration-clay"
            >
              How it works
            </Link>
          </div>
          <p className="mt-8 text-[13px] text-faint">
            Google Meet · Anywhere in India · No prior knowledge of philosophy needed
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="border border-sand bg-white p-3">
            <Image
              src="/chetna-2.jpg"
              alt="Chetna, philosophical counsellor"
              width={640}
              height={800}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-6 max-w-[260px] -rotate-2 border border-sand bg-[#fffdf8] px-5 py-4 sm:-left-10">
            <p className="font-display text-[14.5px] italic leading-relaxed text-ink/90">
              “You don&rsquo;t need to have it figured out before reaching out. That is exactly what the session is for.”
            </p>
          </div>
        </div>
      </section>

      <div className="mt-6">
        <Marquee />
      </div>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="border-t-2 border-ink pt-10">
          <h2 className="font-display text-4xl tracking-tight text-ink sm:text-[44px]">
            A thinking relationship
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              { t: "Not therapy", d: "No diagnosis, no clinical labels, no treatment plans." },
              { t: "Not coaching", d: "No goals imposed, no action-plan hustle, no performance metrics." },
              { t: "A conversation", d: "Honest and unhurried. Beliefs examined gently. Clarity through understanding." },
            ].map((c) => (
              <div key={c.t}>
                <h3 className="font-display text-[22px] italic text-clay">{c.t}</h3>
                <p className="mt-3 max-w-xs text-[14.5px] leading-relaxed text-mute">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="border-t-2 border-ink pt-10">
          <h2 className="max-w-xl font-display text-4xl tracking-tight text-ink sm:text-[44px]">
            There is no wrong question to arrive with.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-mute">
            Nine areas of inquiry. Many people arrive knowing only that something does not feel right - that is enough.
          </p>
          <ol className="mt-12 border-t border-sand">
            {inquiries.map((a, i) => (
              <li key={a.slug} className="border-b border-sand">
                <Link href={`/inquiries/${a.slug}`} className="group flex items-baseline gap-6 py-5 sm:gap-10">
                  <span className="w-7 shrink-0 text-[13px] text-faint">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-[21px] leading-snug text-ink transition-colors duration-300 group-hover:text-clay">
                    {a.title}
                  </span>
                  <span className="ml-auto hidden max-w-xs shrink-0 text-right text-[13.5px] leading-snug text-mute lg:block">
                    {a.short}
                  </span>
                  <span aria-hidden className="hidden shrink-0 text-clay opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <Link
            href="/inquiries"
            className="mt-8 inline-block text-[15px] text-clay underline decoration-sand underline-offset-[6px] transition-colors hover:decoration-clay"
          >
            All nine areas, one page
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="border-t-2 border-ink pt-10">
          <h2 className="font-display text-4xl tracking-tight text-ink sm:text-[44px]">How it works</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n}>
                <span className="font-display text-[20px] italic text-clay">{s.n}</span>
                <h3 className="mt-3 font-display text-[21px] text-ink">{s.t}</h3>
                <p className="mt-2.5 max-w-xs text-[14.5px] leading-relaxed text-mute">{s.d}</p>
              </div>
            ))}
          </div>
          <Link
            href="/how-it-works"
            className="mt-10 inline-block text-[15px] text-clay underline decoration-sand underline-offset-[6px] transition-colors hover:decoration-clay"
          >
            The whole process, in detail
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="grid items-center gap-12 border-t-2 border-ink pt-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="mx-auto w-56">
            <Image
              src="/chetna-3.jpg"
              alt="Chetna"
              width={448}
              height={560}
              className="aspect-[4/5] w-full border border-sand object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl tracking-tight text-ink">Hello, I&rsquo;m Chetna.</h2>
            <p className="mt-5 max-w-xl text-[15.5px] leading-[1.85] text-mute">
              My journey into philosophy began with a search for answers, but I discovered
              something far more powerful - the art of asking the right questions. I&rsquo;m a
              certified philosophical counsellor, and I hold this space so you can challenge
              conditioned beliefs and declutter your mind, at your own pace.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-block text-[15px] text-clay underline decoration-sand underline-offset-[6px] transition-colors hover:decoration-clay"
            >
              More about me
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div id="pricing-trigger" className="border-t-2 border-ink pt-10">
          <h2 className="font-display text-4xl tracking-tight text-ink sm:text-[44px]">
            Simple, honest pricing
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-mute">
            Everything happens online, on Google Meet - bring your questions
            from anywhere in India. Pick the size that fits.
          </p>
          <div className="mt-12 border-t border-sand">
            {pricing.map((p) => (
              <div key={p.amt} className="flex flex-wrap items-baseline gap-x-10 gap-y-1 border-b border-sand py-6">
                <p className="w-40 shrink-0 font-display text-[26px] text-ink">{p.amt}</p>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-clay">{p.n}</p>
                <p className="text-[14px] leading-relaxed text-mute sm:ml-auto sm:max-w-xs sm:text-right">{p.d}</p>
              </div>
            ))}
          </div>
          <Link
            href="/book"
            className="mt-10 inline-block bg-ink px-8 py-4 text-[15px] tracking-wide text-[#f7f2e9] transition-colors duration-300 hover:bg-clay"
          >
            Book a session
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-8 pb-28 sm:px-8">
        <div className="border-t-2 border-ink pt-10">
          <h2 className="max-w-2xl font-display text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl">
            Pull up a chair. The rest can wait.
          </h2>
          <div className="mt-9 flex flex-wrap items-center gap-7">
            <Link
              href="/book"
              className="bg-ink px-8 py-4 text-[15px] tracking-wide text-[#f7f2e9] transition-colors duration-300 hover:bg-clay"
            >
              Book a session
            </Link>
            <span className="text-[14px] text-faint">Group sessions - coming soon</span>
          </div>
          <p className="mt-8 text-[13px] text-faint">
            Prefer to write first?{" "}
            <a href="mailto:philosophicalcafe.india@gmail.com" className="text-clay underline underline-offset-4">
              philosophicalcafe.india@gmail.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
