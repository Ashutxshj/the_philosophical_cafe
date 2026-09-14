import type { Metadata } from "next";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import ExpandableQuote from "@/components/ExpandableQuote";
import { quotes } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "In their words - The Philosophical Cafe",
  description: "What people carry out of the cafe. 100+ conversations, in their own words.",
};

const shots = Array.from({ length: 33 }, (_, i) =>
  `/reviews/review-${String(i).padStart(2, "0")}.jpg`
);

export default function StoriesPage() {
  return (
    <section className="pt-36 pb-28 sm:pt-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.24em] text-clay">Client stories</p>
            <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              In their words
            </h1>
            <p className="mt-5 text-[15.5px] leading-[1.85] text-mute">
              Over a hundred conversations so far. Some names are withheld - the people
              asked, and the cafe keeps its quiet.
            </p>
          </div>
        </Reveal>

        <div className="masonry mt-16">
          {quotes.map((q, i) => (
            <Reveal key={q.who + i} delay={(i % 3) * 100}>
              <ExpandableQuote quote={q} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.24em] text-clay">Straight from the source</p>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
              Every note, exactly as it arrived
            </h2>
            <p className="mt-4 text-[14.5px] leading-[1.85] text-mute">
              Screenshots of the original feedback - unedited, unpolished, and
              kept with permission.
            </p>
          </div>
        </Reveal>
        <div className="masonry mt-14">
          {shots.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 80}>
              <div className="overflow-hidden rounded-[1.4rem] border border-sand bg-white transition-all duration-500 hover:-translate-y-1 hover:border-clay/25 ">
                <Image
                  src={src}
                  alt={`Client feedback ${i + 1}`}
                  width={720}
                  height={900}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <Marquee />
      </div>
    </section>
  );
}
