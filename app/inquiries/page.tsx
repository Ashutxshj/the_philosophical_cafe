import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { inquiries } from "@/lib/expertise";

export const metadata: Metadata = {
  title: "Areas of inquiry — The Philosophical Cafe",
  description: "There is no wrong question to arrive with. Explore the nine areas people bring to the cafe.",
};

export default function InquiriesPage() {
  return (
    <section className="pt-36 pb-28 sm:pt-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[11.5px] font-bold uppercase tracking-[0.24em] text-clay">Areas of inquiry</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-tight text-ink sm:text-[44px]">
            There is no wrong question to arrive with.
          </h1>
          <p className="mt-5 max-w-xl text-[15.5px] leading-[1.85] text-mute">
            Often people don&rsquo;t know exactly what they need — they simply know something
            doesn&rsquo;t feel right. These are the nine places people most often begin.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {inquiries.map((q, i) => (
            <Reveal key={q.slug} delay={(i % 3) * 90}>
              <Link href={`/inquiries/${q.slug}`} className="block h-full">
                <div className="group h-full rounded-[1.4rem] border border-sand bg-paper p-7 transition-all duration-500 hover:-translate-y-1 hover:border-clay/30 hover:bg-white hover:shadow-[0_24px_44px_-32px_rgba(62,48,32,0.4)]">
                  <h3 className="font-display text-[19px] leading-snug text-ink">{q.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-mute">{q.short}</p>
                  <p className="mt-5 text-[13px] text-clay opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    Read more →
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
