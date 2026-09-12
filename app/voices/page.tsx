import Link from "next/link";
import Marquee from "../components/Marquee";
import { voices } from "../lib/voices";

export const metadata = {
  title: "Client voices | The Philosophical Cafe",
  description:
    "What people say after a session with Chetna — in their own words, unedited.",
};

export default function VoicesPage() {
  return (
    <>
      <main>
        <section className="page-head">
          <div className="wrap">
            <div className="kicker">
              <span className="kicker-label">Client voices</span>
            </div>
            <h2>
              In their own <em>words.</em>
            </h2>
            <p className="lede">
              Everything below is what clients chose to write after their
              sessions. Nothing is polished or dramatised &mdash; it&rsquo;s
              exactly what came in, being preserved the way it arrived.
            </p>
          </div>
        </section>

        <Marquee />

        <section className="section">
          <div className="wrap">
            {voices.map((v, i) => (
              <div className="voice-piece" key={i}>
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
        </section>

        <section className="group-banner">
          <div className="wrap">
            <p className="lede" style={{ margin: "0 auto 1.8rem" }}>
              The next voice could be yours.
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
