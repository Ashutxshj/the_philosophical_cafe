import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Book for a group - The Philosophical Cafe",
};

export default function GroupsPage() {
  return (
    <section className=" relative overflow-hidden pt-36 pb-28 sm:pt-40">
      <div className="pointer-events-none absolute -top-24 left-0 h-[360px] w-[360px] rounded-full bg-cream blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.24em] text-clay">Group session</p>
            <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              A table for many
            </h1>
            <p className="mt-5 text-[15.5px] leading-[1.85] text-mute">
              For classrooms, teams, friend circles and reading groups - a guided
              philosophical conversation, held together. Same unhurried style,
              sized for your group.
            </p>
          </div>
        </Reveal>
        <div className="mt-14">
          <BookingForm variant="group" />
        </div>
      </div>
    </section>
  );
}
