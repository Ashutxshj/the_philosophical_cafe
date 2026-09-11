const voices = [
  {
    text: "After talking to you, I got relief from this very problem. I am feeling light, as if a burden has been lifted from my mind. Some points became clear that were already inside me, but I had never paid attention to them. You helped me notice them. This is truly a very noble work.",
    name: "Jyoti Jha",
  },
  {
    text: "I felt heard and understood rather than judged. I was quite anxious before the session, but felt much calmer afterwards. Thank you for creating a safe space where I could talk openly.",
    name: "A client",
    note: "referred by a friend",
  },
  {
    text: "Your support helped me understand my emotional pain and recognize my unhealthy thought patterns. The pattern-breaking exercises were especially helpful, allowing me to view my thoughts differently.",
    name: "A client",
    note: "five sessions",
  },
];

export default function Voices() {
  return (
    <section className="section" id="voices">
      <div className="wrap">
        <div className="kicker">
          <span className="kicker-num">iv.</span>
          <span className="kicker-label">30+ client voices</span>
        </div>
        <h2>
          What people say the
          <br />
          morning <em>after.</em>
        </h2>
        <div className="voice-quote">
          <blockquote>
            Your sessions have helped me understand the full loop of what I am
            going through. I feel calm and peaceful, because tangled things
            find clear answers here.
          </blockquote>
          <div className="voice-name">
            <span>
              A client <small>in ongoing sessions</small>
            </span>
          </div>
        </div>
        <div className="voice-columns">
          {voices.map((v) => (
            <div className="voice" key={v.name + v.note}>
              <blockquote>{v.text}</blockquote>
              <div className="voice-name">
                <span>
                  {v.name}
                  {v.note && <small>{v.note}</small>}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
