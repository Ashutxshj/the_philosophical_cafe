import GroupForm from "../components/GroupForm";
import { CONTACT_EMAIL } from "../lib/constants";

export const metadata = {
  title: "The cafe beyond the table \u2014 for groups | The Philosophical Cafe",
  description:
    "Talks, circles and workshops in philosophy for teams, classrooms, hostels and communities.",
};

const formats = [
  {
    kicker: "light",
    title: "The talk",
    text: "A 45\u201360 minute session in philosophy for the room \u2014 on meaning, decisions, or anything your group is already quietly carrying.",
  },
  {
    kicker: "half-day",
    title: "The circle",
    text: "A guided group conversation. Smaller room, more voices. Good for teams starting something new or classes about to enter their final year.",
  },
  {
    kicker: "deep",
    title: "The workshop",
    text: "A longer, structured engagement \u2014 mapping the beliefs a group holds and gently loosening the ones that are worth letting go of.",
  },
];

export default function GroupsPage() {
  return (
    <>
      <main>
        <section className="page-head">
          <div className="wrap">
            <div className="kicker">
              <span className="kicker-label">For groups</span>
            </div>
            <h2>
              The cafe also does <em>rooms.</em>
            </h2>
            <p className="lede">
              One-on-one counselling was the cafe&rsquo;s first shape. But
              sometimes fifteen quiet questions need a room instead of a
              corner \u2014 talks, circles and workshops for teams, classrooms,
              hostels, societies. Calm spaces for anyone near the same fog.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: "2rem" }}>
          <div className="wrap">
            <div className="idea-grid">
              {formats.map((f) => (
                <div className="idea" key={f.title}>
                  <div className="idea-kicker">{f.kicker}</div>
                  <div className="idea-title">{f.title}</div>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="group-book">
          <div className="wrap-wide">
            <div className="kicker" style={{ textAlign: "center" }}>
              <span className="kicker-label">Bring the cafe to your room</span>
            </div>
            <h2 style={{ textAlign: "center" }}>
              Describe the room;
              <br />
              <em>the format follows.</em>
            </h2>
            <p className="lede" style={{ textAlign: "center", margin: "0 auto 0.5rem" }}>
              Fill a few lines &mdash; more appear as you go. Chetna replies
              within 24 hours; the final shape, format and fee are decided
              with you, not sent to you.
            </p>
            <GroupForm />
            <p className="lede" style={{ textAlign: "center", margin: "2.5rem auto 0" }}>
              Prefer to simply write directly? {CONTACT_EMAIL} works too.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
