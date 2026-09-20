import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import VideoTalk from "@/components/VideoTalk";
import { inquiries, inquiryBySlug } from "@/lib/expertise";

export function generateStaticParams() {
  return inquiries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const q = inquiryBySlug(slug);
  return { title: q ? `${q.title} - The Philosophical Cafe` : "Area of inquiry" };
}

export default async function InquiryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const q = inquiryBySlug(slug);
  if (!q) notFound();

  const others = inquiries.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <section className="pt-36 pb-28 sm:pt-40">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[11.5px] font-bold uppercase tracking-[0.24em] text-clay">Areas of inquiry</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-[1.12] tracking-tight text-ink sm:text-5xl">
            {q.title}
          </h1>
          <p className="mt-6 max-w-2xl text-[15.5px] leading-[1.9] text-mute">{q.intro}</p>
        </Reveal>

        <Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="font-display text-xl text-ink">What often brings people here</h2>
              <ul className="mt-5 space-y-3.5">
                {q.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-mute">
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-clay" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-9 rounded-[1.6rem] border border-sand bg-cream/60 p-7">
                <p className="font-display text-[16.5px] italic leading-relaxed text-ink/90">
                  &ldquo;You don&rsquo;t need to have it figured out before reaching out. That is exactly what the session is for.&rdquo;
                </p>
              </div>
            </div>
            <VideoTalk
              title="What this conversation looks like"
              caption="Chetna explains, in her own words, how these sessions work - and what one might hold for you."
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20">
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/book"
                className="rounded-full bg-ink px-7 py-3.5 text-[15px] tracking-wide text-[#f7f2e9] transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay "
              >
                Book a session
              </Link>
              <Link
                href="/inquiries"
                className="rounded-full border border-sand bg-white/60 px-7 py-3.5 text-[15px] text-mute transition-all duration-300 hover:border-clay/40 hover:text-clay"
              >
                All areas of inquiry
              </Link>
            </div>
            <p className="mt-7 text-[13px] leading-relaxed text-faint">
              Entirely online, on Google Meet - bring your questions from anywhere in India.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
