import { quotes } from "@/lib/testimonials";

export default function Marquee() {
  const row = [...quotes, ...quotes];
  return (
    <section className="marquee-wrap overflow-hidden border-y border-sand/70 bg-cream/60 py-12">
      <div className="marquee-mask">
        <div className="animate-marquee flex w-max items-start gap-16 pr-16">
          {row.map((q, i) => (
            <figure key={i} className="w-[320px] shrink-0 sm:w-[440px]">
              <blockquote className="font-display text-[16.5px] leading-[1.75] text-ink/85">
                <span className="text-clay">“</span>
                {q.text}
                <span className="text-clay">”</span>
              </blockquote>
              <figcaption className="mt-4 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-faint">
                - {q.who}
                {q.context ? <span className="normal-case tracking-normal text-faint/80"> · {q.context}</span> : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <p className="mt-10 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-faint">
        100+ conversations, in their words
      </p>
    </section>
  );
}
