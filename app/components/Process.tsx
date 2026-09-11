const phases = [
  {
    title: "Fill the form",
    text: "Share a little about what is on your mind. No pressure to have the words perfect \u2014 rough is fine.",
  },
  {
    title: "We schedule a session",
    text: "One-on-one, on Google Meet, at a time that works for you. I usually reply within a day.",
  },
  {
    title: "The conversation",
    text: "45\u201360 minutes of genuine inquiry. You leave with more clarity than you arrived with \u2014 almost always.",
  },
];

export default function Process() {
  return (
    <section className="process" id="how">
      <div className="wrap">
        <div className="kicker">
          <span className="kicker-num">iii.</span>
          <span className="kicker-label">The process</span>
        </div>
        <h2>
          Simple to <em>begin.</em>
        </h2>
        <p className="lede">
          You don&rsquo;t need to have it figured out before reaching out.
          Figuring it out is what the hour is for.
        </p>
        <div className="process-grid">
          {phases.map((p, i) => (
            <div className="phase" key={p.title}>
              <div className="phase-num">{i + 1}</div>
              <div className="phase-title">{p.title}</div>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
