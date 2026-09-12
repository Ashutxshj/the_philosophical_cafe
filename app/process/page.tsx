import Link from "next/link";

const phases = [
  {
    num: "01",
    kicker: "before",
    title: "The request answers itself",
    text: "When you send the form, you don't have to have the words perfect. \u201CI don't know\u201D is a good sentence \u2014 the form reveals itself slowly. Chetna reads it personally, then replies within a day or two with a time that works.",
  },
  {
    num: "02",
    kicker: "beginning",
    title: " settling in",
    text: "The session begins on Google Meet with nothing except a welcome. No intake questions to get through, no fixing of anxiety around \u201Cfirst session\u201D vibes. The conversation is yours from the first minute.",
  },
  {
    num: "03",
    kicker: "the hour",
    title: "A Socratic hour",
    text: "Chetna asks. Gently, repeatedly, from angles you haven't tried. In forty-five to sixty minutes you'll typically understand your own situation two levels deeper than where you started talking.",
  },
  {
    num: "04",
    kicker: "after",
    title: "You leave with more clarity than you brought",
    text: "There's no \u201Cthe homework\u201D, no report, no follow-up. If a question follows you home and works quietly overnight \u2014 that's the homework, and it's usually yours already.",
  },
];

const principles = [
  { kicker: "no diagnosing", text: "Nothing here is \u201Cwrong with you\u201D. There is nothing to fix and there are no labels to wear back out of the room." },
  { kicker: "no advice walls", text: "Plans and judgments rarely change anything permanent. Chetna hands you questions, not instructions." },
  { kicker: "no hurry", text: "One hour, unhurried. If the thought needs eighteen minutes of silence before arriving, the hour makes room for that." },
  { kicker: "no curtain at conclusion", text: "You decide how many sessions you need \u2014 one is often enough. Nobody will suggest a plan you didn\u2019t choose." },
];

export const metadata = {
  title: "How it works | The Philosophical Cafe",
  description:
    "What happens inside an unhurried philosophical counselling session \u2014 before, during, and after.",
};

export default function ProcessPage() {
  return (
    <>
      <main>
        <section className="page-head">
          <div className="wrap">
            <div className="kicker">
              <span className="kicker-label">How it works</span>
            </div>
            <h2>
              Simple to open,
              <br />
              <em>impossible to script.</em>
            </h2>
            <p className="lede">
              You don&rsquo;t need to know anything about philosophy and you
              don&rsquo;t need to prepare anything. The hour is designed to
              make room for exactly the kind of confusion people rarely
              articulate anywhere else.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: "3rem" }}>
          <div className="wrap">
            {phases.map((p) => (
              <div className="voice-piece" key={p.num}>
                <p className="kicker-label" style={{ margin: "0 0 0.4rem" }}>
                  {p.kicker}
                </p>
                <div
                  className="topic-title"
                  style={{ fontFamily: "var(--font-display), serif", fontSize: "1.5rem", marginBottom: "0.6rem" }}
                >
                  {p.title}
                </div>
                <p className="lede" style={{ maxWidth: 640, margin: 0 }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section interlude" style={{ padding: "5rem 0" }}>
          <div className="wrap">
            <div className="kicker">
              <span className="kicker-label">Small promises the cafe keeps</span>
            </div>
            <div className="idea-grid" style={{ marginTop: "2.5rem" }}>
              {principles.map((i) => (
                <div className="idea" key={i.kicker}>
                  <div className="idea-kicker">{i.kicker}</div>
                  <p>{i.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap" style={{ textAlign: "center" }}>
            <p className="lede" style={{ margin: "0 auto 2rem" }}>
              And if any of that still sounds vague &mdash; that&rsquo;s
              exactly the kind of question worth booking the hour for.
            </p>
            <Link href="/#book" className="btn btn-solid">
              Book a session &middot; &#8377;300
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
