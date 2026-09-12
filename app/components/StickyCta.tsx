"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyCta({
  targetId = "book",
}: {
  targetId?: string;
}) {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) =>
        setShow(
          entry.boundingClientRect.top < window.innerHeight &&
            !entry.isIntersecting,
        ),
      { threshold: 0 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId]);

  if (!show || dismissed) return null;

  return (
    <div className="sticky-cta">
      <div className="sticky-text">
        <strong>
          Still here? That&rsquo;s the signal.
        </strong>
        An hour costs as little as a takeaway lunch &mdash; and you pay only
        after we&rsquo;ve spoken.
      </div>
      <Link href="#book" className="btn btn-solid" style={{ padding: "0.7rem 1.3rem", whiteSpace: "nowrap" }}>
        Reserve an hour
      </Link>
      <button
        className="sticky-close"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
      >
        &times;
      </button>
    </div>
  );
}
