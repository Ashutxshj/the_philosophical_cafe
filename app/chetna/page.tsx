import Link from "next/link";
import Image from "next/image";
import photo from "../../public/chetna.jpg";

const credentials = [
  { mark: "i", title: "M.A. Philosophy", sub: "Jawaharlal Nehru University, New Delhi" },
  { mark: "ii", title: "Certified Philosophical Counselor", sub: "Philosophical Practitioner Association of India (PPAI)" },
  { mark: "iii", title: "Diploma in Philosophical Counselling", sub: "University of Kerala" },
  { mark: "iv", title: "UGC NET Qualified \u00B7 four times", sub: "Philosophy \u2014 2021, 2022, 2023 and 2024" },
];

const approaches = [
  "Existential Therapy",
  "Logotherapy",
  "REBT",
  "Narrative Therapy",
  "Socratic Dialogue",
  "Mindfulness",
  "Logic-Based Therapy",
];

export const metadata = {
  title: "Who is Chetna | The Philosophical Cafe",
  description:
    "M.A. Philosophy (JNU), certified philosophical counselor, and the person behind the cafe.",
};

export default function ChetnaPage() {
  return (
    <>
      <main>
        <section className="page-head">
          <div className="wrap">
            <div className="kicker">
              <span className="kicker-label">Who you&rsquo;d be meeting</span>
            </div>
            <h2>
              Chetna, <em>at the cafe.</em>
            </h2>
          </div>
        </section>

        <section className="section" style={{ paddingTop: "2rem" }}>
          <div className="wrap">
            <div className="split">
              <div className="portrait">
                <Image
                  src={photo}
                  alt="Chetna, philosophical counselor"
                  placeholder="blur"
                />
              </div>
              <div>
                <p className="lede" style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic", fontWeight: 300, fontSize: "1.45rem", lineHeight: 1.6, color: "var(--ink)", paddingLeft: "1.6rem", borderLeft: "2px solid var(--gold)", marginBottom: "1.8rem" }}>
                  My journey into philosophy began with a search for answers. I
                  found, instead, the art of asking questions.
                </p>
                <p className="lede" style={{ marginBottom: "1.3rem" }}>
                  <strong style={{ color: "var(--ink)", fontWeight: 600 }}>I am Chetna</strong>, a certified
                  philosophical counselor. The work I do is helping people hold
                  up beliefs they have never explicitly chosen &mdash; about
                  work, success, love, duty &mdash; and look at them until the
                  ones that were never really theirs fall away on their own.
                </p>
                <p className="lede" style={{ marginBottom: "1.3rem" }}>
                  This isn&rsquo;t therapy and it isn&rsquo;t coaching. I don&rsquo;t
                  diagnose, don&rsquo;t prescribe methods, and I don&rsquo;t
                  promise constant happiness. I sit with you in the honest,
                  slightly uncomfortable work of understanding your own mind
                  &mdash; which, slowly, is where real clarity comes from.
                </p>
                <p className="lede">
                  What people find unusual about the sessions: I keep asking.
                  Where other practitioners hand you a technique, I keep the
                  conversation circling the question itself &mdash; most clients
                  tell me that changed how they think about their own thoughts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="kicker">
              <span className="kicker-label">Studied &amp; trained in</span>
            </div>
            <div className="topic-list" style={{ maxWidth: 640 }}>
              {credentials.map((c, i) => (
                <div className="topic-row" key={c.title}>
                  <span className="topic-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <div className="topic-title" style={{ fontFamily: "var(--font-body), sans-serif", fontWeight: 600, fontSize: "0.92rem" }}>
                      {c.title}
                    </div>
                    <p className="topic-desc">{c.sub}</p>
                  </span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "3rem" }}>
              <p
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ink2)",
                  margin: "0 0 0.9rem",
                  fontWeight: 600,
                }}
              >
                Approaches the work draws from
              </p>
              {approaches.map((a) => (
                <span className="pill" key={a}>
                  {a}
                </span>
              ))}
            </div>
            <p style={{ marginTop: "3.5rem" }}>
              <Link href="/#book" className="btn btn-solid">
                Talk to Chetna
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
