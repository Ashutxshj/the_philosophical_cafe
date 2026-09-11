const topics = [
  {
    title: "Career transitions and midlife",
    desc: "Feeling stuck or unfulfilled, even when everything looks fine from the outside.",
  },
  {
    title: "Existential anxiety",
    desc: "Stress rooted in beliefs or unresolved questions that distraction never quite touches.",
  },
  {
    title: "Moral and ethical dilemmas",
    desc: "Caught between what you want, what you should do, and what you believe is right.",
  },
  {
    title: "Identity and self-doubt",
    desc: "Making sense of patterns in your thinking, relationships, and choices.",
  },
  {
    title: "Grief, loss and relationships",
    desc: "Breakups, bereavement, and the harder questions that arrive with loss.",
  },
  {
    title: "Meaning and meaninglessness",
    desc: "When external success doesn't feel like enough, and you are not sure what would.",
  },
  {
    title: "Fear of death",
    desc: "Working through mortality with frameworks that have steadied humans for centuries.",
  },
  {
    title: "Self-exploration",
    desc: "A deliberate inquiry into who you are, what you value, and how you want to live.",
  },
];

export default function Topics() {
  return (
    <section className="section" id="topics">
      <div className="wrap">
        <div className="kicker">
          <span className="kicker-num">ii.</span>
          <span className="kicker-label">What people bring in</span>
        </div>
        <h2>
          There is no <em>wrong question</em>
          <br />
          to arrive with.
        </h2>
        <p className="lede">
          Most people book a session not knowing exactly what they need &mdash;
          just that something hasn&rsquo;t been sitting right. These are
          conversations I navigate regularly:
        </p>
        <div className="topics-list">
          {topics.map((t, i) => (
            <div className="topic-row" key={t.title}>
              <span className="topic-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <div className="topic-title">{t.title}</div>
                <p className="topic-desc">{t.desc}</p>
              </span>
            </div>
          ))}
        </div>
        <p className="topics-outro">
          If it nags at you &mdash; at 2pm in a meeting or 2am in bed &mdash;
          it&rsquo;s worth a conversation.
        </p>
      </div>
    </section>
  );
}
