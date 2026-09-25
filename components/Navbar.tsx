"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About Chetna" },
  { href: "/stories", label: "Stories" },
  { href: "/groups", label: "For groups" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState(pathname);

  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const raf = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-sand/70 bg-paper "
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[100px] max-w-[1536px] items-center justify-between px-6 sm:px-12 md:px-16">
        <Link href="/" className="group flex items-center">
          <span className="block h-[88px] w-[88px] overflow-hidden border border-sand bg-white shadow-sm transition-transform duration-500 group-hover:rotate-[14deg]">
            <Image src="/tpc_logo.jpeg" alt="The Philosophical Cafe" width={88} height={88} className="object-cover" />
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[14.5px] tracking-wide transition-colors duration-300 hover:text-clay ${
                pathname.startsWith(l.href) ? "text-clay" : "text-mute"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="rounded-full bg-ink px-5 py-2.5 text-[14px] tracking-wide text-[#f7f2e9] transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay "
          >
            Book a session
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-sand bg-white md:hidden"
        >
          <span className={`h-[1.5px] w-4 bg-ink transition-transform duration-300 ${open ? "translate-y-[3.2px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] w-4 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3.2px] -rotate-45" : ""}`} />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-sand/60 bg-paper  transition-all duration-500 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-5">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-xl px-3 py-3 text-[15px] text-mute transition-colors hover:bg-cream hover:text-clay">
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-[14.5px] text-[#f7f2e9]"
          >
            Book a session
          </Link>
        </div>
      </div>
    </header>
  );
}
