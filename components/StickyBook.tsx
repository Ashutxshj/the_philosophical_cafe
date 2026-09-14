"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function StickyBook() {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState(pathname);

  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setClosed(false);
  }

  useEffect(() => {
    const onScroll = () => {
      const pastStart = window.scrollY > window.innerHeight * 0.75;
      const pricingElem = document.getElementById("pricing-trigger");
      let pastEnd = false;
      if (pricingElem) {
        pastEnd = pricingElem.getBoundingClientRect().top < window.innerHeight;
      }
      setShow(pastStart && !pastEnd);
    };
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (pathname.startsWith("/book") || pathname.startsWith("/groups") || closed) return null;

  return (
    <div
      className={`fixed bottom-5 right-4 z-40 transition-all duration-500 sm:bottom-7 sm:right-7 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="toastin relative flex items-center gap-4 rounded-2xl border border-sand bg-white py-3 pl-4 pr-3  ">
        <div className="max-w-[220px]">
          <p className="text-[13.5px] leading-snug text-ink">
            Liking the quiet here?
            <span className="text-mute"> Pull up a chair - first conversation from</span>
            <span className="font-semibold text-clay"> ₹300</span>
          </p>
        </div>
        <Link
          href="/book"
          className="shrink-0 rounded-full bg-ink px-4 py-2.5 text-[13px] tracking-wide text-[#f7f2e9] transition-all duration-300 hover:bg-clay"
        >
          Book a session
        </Link>
        <button
          aria-label="Dismiss"
          onClick={() => setClosed(true)}
          className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-sand bg-white text-[13px] text-faint transition-colors hover:text-ink"
        >
          ×
        </button>
      </div>
    </div>
  );
}
