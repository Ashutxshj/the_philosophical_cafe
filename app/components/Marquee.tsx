import { marqueeQuotes } from "../lib/voices";

export default function Marquee() {
  const items = [...marqueeQuotes, ...marqueeQuotes];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((q, i) => (
          <p className="marquee-item" key={i} aria-hidden={i >= marqueeQuotes.length}>
            {q}
          </p>
        ))}
      </div>
    </div>
  );
}
