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
                  className="group flex w-fit items-center gap-2 transition-colors hover:text-clay"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px] text-mute transition-colors group-hover:text-clay">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <span>@philosophical_cafe</span>
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
