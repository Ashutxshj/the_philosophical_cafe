import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-sand/70 bg-cream/60">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="block h-11 w-11 overflow-hidden rounded-full border border-sand bg-white">
                <Image src="/tpc_logo.jpeg" alt="" width={44} height={44} className="h-full w-full object-cover" />
              </span>
              <p className="font-display text-lg text-ink">The Philosophical Cafe</p>
            </div>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-mute">
              A thinking relationship. Honest, unhurried conversations for the
              questions that do not fit into a quick answer.
            </p>
            <p className="mt-6 font-display text-[15px] italic text-clay">
              Pay what feels right.
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-faint">Say hello</p>
            <ul className="mt-5 space-y-3 text-[15px] text-mute">
              <li>
                <a href="mailto:chetnag480@gmail.com" className="transition-colors hover:text-clay">
                  chetnag480@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918745810017" className="transition-colors hover:text-clay">
                  +91 87458 10017
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/philosophical_cafe"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-clay"
                >
                  @philosophical_cafe
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-faint">Wander</p>
            <ul className="mt-5 space-y-3 text-[15px] text-mute">
              <li><Link href="/book" className="transition-colors hover:text-clay">Book a session</Link></li>
              <li><Link href="/groups" className="transition-colors hover:text-clay">Book for a group</Link></li>
              <li><Link href="/how-it-works" className="transition-colors hover:text-clay">How it works</Link></li>
              <li><Link href="/stories" className="transition-colors hover:text-clay">Client stories</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-clay">About Chetna</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-sand/70 pt-6 text-[13px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Philosophical Cafe · Online, across India</p>
          <p>Sessions on Google Meet · 45-60 minutes</p>
        </div>
      </div>
    </footer>
  );
}
