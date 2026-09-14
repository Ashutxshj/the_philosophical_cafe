"use client";

import { useState } from "react";
import { Quote } from "@/lib/testimonials";

export default function ExpandableQuote({ quote }: { quote: Quote }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = quote.text.length > 200;

  return (
    <figure className="flex h-full flex-col justify-between rounded-[1.6rem] border border-sand bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-clay/25">
      <div>
        <blockquote className={ont-display text-[16px] leading-[1.8] text-ink/85 transition-all duration-300  + (!expanded && isLong ? "line-clamp-6" : "")}>
          <span className="text-clay">“</span>
          {quote.text}
          <span className="text-clay">”</span>
        </blockquote>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 text-[13px] font-medium text-clay hover:text-maroon transition-colors"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>
      <figcaption className="mt-6 border-t border-sand/50 pt-5">
        <p className="text-[13px] font-semibold text-ink">{quote.who}</p>
        {quote.context && <p className="mt-1 text-[12.5px] text-faint">{quote.context}</p>}
      </figcaption>
    </figure>
  );
}
