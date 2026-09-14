import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Book a session — The Philosophical Cafe",
};

export default function BookPage() {
  return (
    <section className="grain relative overflow-hidden pt-36 pb-28 sm:pt-40">
      <div className="pointer-events-none absolute -top-24 right-0 h-[360px] w-[360px] rounded-full bg-cream blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.24em] text-clay">Individual session</p>
            <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              Reserve a table for one
            </h1>
            <p className="mt-5 text-[15.5px] leading-[1.85] text-mute">
              Take it one step at a time — new questions appear only as you finish
              the earlier ones. Nothing here needs perfect words.
            </p>
          </div>
        </Reveal>
        <div className="mt-14">
          <BookingForm variant="individual" />
        </div>
      </div>
    </section>
  );
}
