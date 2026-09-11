import Image from "next/image";
import photo from "../../public/chetna.jpg";

const credentials = [
  {
    year: "JNU",
    title: "M.A. Philosophy",
    sub: "Jawaharlal Nehru University, New Delhi",
  },
  {
    year: "PPAI",
    title: "Certified Philosophical Counselor",
    sub: "Philosophical Practitioner Association of India",
  },
  {
    year: "Kerala",
    title: "Diploma in Philosophical Counselling",
    sub: "University of Kerala",
  },
  {
    year: "NET",
    title: "UGC NET Qualified \u00B7 four times",
    sub: "Philosophy \u2014 2021, 2022, 2023 and 2024",
  },
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

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="kicker">
          <span className="kicker-num">i.</span>
          <span className="kicker-label">Who you are talking to</span>
        </div>
        <h2>
          Philosophy, practiced as
          <br />
          <em>a way of listening.</em>
        </h2>
        <div className="about-grid">
          <div className="about-sticky">
            <div className="about-photo">
              <Image
                src={photo}
                alt="Chetna, philosophical counselor"
                placeholder="blur"
              />
            </div>
            <p className="about-caption">
              <span>Chetna, at the cafe</span>
              <em>between sessions</em>
            </p>
          </div>
          <div className="about-copy">
            <p className="lede">
              My journey into philosophy began with a search for answers. I
              found, instead, the art of asking questions.
            </p>
            <p>
              <strong>I am Chetna</strong>, a certified philosophical counselor.
              The work I do is helping people hold up beliefs they have never
              explicitly chosen &mdash; about work, success, love, duty &mdash;
              and look at them honestly until the ones that were never really
              theirs fall away on their own.
            </p>
            <p>
              This isn&rsquo;t therapy and it isn&rsquo;t coaching. I don&rsquo;t
              diagnose, don&rsquo;t prescribe methods, and I don&rsquo;t promise
              constant happiness. I sit with you in the honest, slightly
              uncomfortable work of understanding your own mind &mdash; which,
              slowly, is where real clarity comes from.
            </p>
            <p>
              Sessions are one-on-one, on Google Meet, open to anyone in India.
              No philosophy background needed. Only a willingness to think
              honestly.
            </p>
            <ul className="cred-list">
              {credentials.map((c) => (
                <li key={c.title}>
                  <span className="cred-year">{c.year}</span>
                  <span>
                    <span className="cred-title">{c.title}</span>
                    <div className="cred-sub">{c.sub}</div>
                  </span>
                </li>
              ))}
            </ul>
            <div className="approach-note">
              <p>Approaches I draw from</p>
              {approaches.map((a) => (
                <span className="pill" key={a}>
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
