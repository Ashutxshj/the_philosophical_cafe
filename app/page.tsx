import Link from "next/link";
import Image from "next/image";
import photo from "../public/chetna.jpg";
import Marquee from "./components/Marquee";
import BookingForm from "./components/BookingForm";
import StickyCta from "./components/StickyCta";
import { marqueeQuotes, voices } from "./lib/voices";

const idea = [
  {
    kicker: "not therapy",
    title: "It isn\u2019t clinical",
    text: "No diagnosis, no labels, nothing to \u201Cfix\u201D. Just structured, honest inquiry into what you are actually experiencing.",
  },
  {
    kicker: "not coaching",
    title: "It won\u2019t push you",
    text: "No goal ladders or five-step plans. We look at the beliefs underneath the questions instead of rushing past them.",
  },
  {
    kicker: "a thinking relationship",
    title: "It\u2019s a conversation",
    text: "An unhurried hour where someone listens the way books and podcasts promise but rarely deliver.",
  },
];

const topics = [
  "Career transitions and midlife",
  "Existential anxiety",
  "Moral and ethical dilemmas",
  "Identity and self-doubt",
  "Grief, loss and relationships",
  "Meaning and meaninglessness",
  "Fear of death",
  "Self-exploration",
];

const previewTrio = voices.slice(1, 4);

export default function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-inner">
            <p className="hero-hello">
              Philosophical counselling &middot; online &middot; across India
            </p>
            <h1>
              An unhurried hour
              <br />
              to <em>sort out</em> the noise.
            </h1>
            <p className="hero-sub">
              You bring the questions you&rsquo;ve been carrying alone &mdash;
              about work, meaning, a decision, or just the vague sense that
              something is off. We think through them together.
            </p>
            <div className="hero-actions">
              <a href="#book" className="btn btn-solid">
                Book a session &middot; &#8377;300
              </a>
              <Link href="/process" className="btn btn-line">
                How it works
              </Link>
            </div>
            <div className="hero-cred">
              <span>M.A. Philosophy, JNU</span>
              <span>Certified counsellor, PPAI</span>
              <span>30+ client voices</span>
            </div>
          </div>
        </section>

        <Marquee />

        <section className="section">
          <div className="wrap">
            <div className="kicker">
              <span className="kicker-label">What this is</span>
            </div>
            <h2>
              Less advice. More <em>understanding.</em>
            </h2>
            <div className="idea-grid">
              {idea.map((i) => (
                <div className="idea" key={i.kicker}>
                  <div className="idea-kicker">{i.kicker}</div>
                  <div className="idea-title">{i.title}</div>
                  <p>{i.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap">
            <div className="split">
              <Link href="/chetna" className="portrait">
                <Image
                  src={photo}
                  alt="Chetna, philosophical counselor"
                  placeholder="blur"
                />
              </Link>
              <div>
                <div className="kicker">
                  <span className="kicker-label">Who you&rsquo;re talking to</span>
                </div>
                <h2>
                  Philosophy, practiced as
                  <br />
                  <em>a way of listening.</em>
                </h2>
                <p className="lede" style={{ marginBottom: "1.6rem" }}>
                  Chetna studied philosophy at Jawaharlal Nehru University and
                  now practices it in the most grounded way possible: as
                  one-on-one counselling for people who feel stuck, foggy, or
                  quietly at odds with their own lives.
                </p>
                <p className="lede" style={{ marginBottom: "2rem" }}>
                  Sessions are one-on-one, on Google Meet, open to anyone in
                  India &mdash; no philosophy background required.
                </p>
                <Link href="/chetna" className="btn btn-line">
                  Meet Chetna
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="kicker">
              <span className="kicker-label">What people bring in</span>
            </div>
            <h2>
              There is no <em>wrong question</em>
              <br />
              to arrive with.
            </h2>
            <div className="topic-list">
              {topics.map((t, i) => (
                <div className="topic-row" key={t}>
                  <span className="topic-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="topic-title">{t}</div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "2.5rem" }}>
              <Link href="/process" className="link-qs">
                See how a session actually unfolds &rarr;
              </Link>
            </p>
          </div>
        </section>

        <section className="section" id="voices">
          <div className="wrap">
            <div className="kicker">
              <span className="kicker-label">After a session</span>
            </div>
            <h2>
              What clients say the
              <br />
              morning <em>after.</em>
            </h2>
            <div className="trio">
              {previewTrio.map((v) => (
                <blockquote key={v.text.slice(0, 24)}>
                  <p style={{ margin: 0 }}>{v.text}</p>
                  <cite>{v.note ?? "client"}</cite>
                </blockquote>
              ))}
            </div>
            <p style={{ marginTop: "2.5rem" }}>
              <Link href="/voices" className="link-qs">
                Read all {marqueeQuotes.length + voices.length}+ voices &rarr;
              </Link>
            </p>
          </div>
        </section>

        <section className="section" id="book">
          <div className="wrap-wide">
            <div className="kicker" style={{ textAlign: "center" }}>
              <span className="kicker-label">Begin here</span>
            </div>
            <h2 style={{ textAlign: "center" }}>
              Reserve the hour that&rsquo;s
              <br />
              <em>already yours.</em>
            </h2>
            <p className="lede" style={{ textAlign: "center", margin: "0 auto" }}>
              Answer a few lines below &mdash; more fields unfold as you go.
              Chetna replies within 24 hours, and you pay only after your
              session, whatever feels right.
            </p>
            <BookingForm />
          </div>
        </section>

        <section className="group-banner">
          <div className="wrap">
            <p className="hero-hello">&#9749;</p>
            <h2 style={{ margin: "0 0 0.8rem" }}>
              The cafe also does <em>rooms.</em>
            </h2>
            <p className="lede" style={{ margin: "0 auto 1.8rem" }}>
              Talks, group conversations, and quiet workshops for teams,
              classes and communities &mdash; spaces for fifteen people or a
              full auditorium.
            </p>
            <Link href="/groups" className="btn btn-solid">
              Book for a group
            </Link>
          </div>
        </section>
      </main>
      <StickyCta />
    </>
  );
}
