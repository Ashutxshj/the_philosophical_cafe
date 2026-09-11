export default function Fee() {
  return (
    <section className="section fee" id="fee">
      <div className="wrap">
        <div className="kicker">
          <span className="kicker-num">v.</span>
          <span className="kicker-label">Pricing</span>
        </div>
        <p className="fee-manifesto">
          There is no fixed fee and no price list. You decide what the session
          was worth <strong>after we speak</strong> &mdash; and whatever you
          decide is right, is right.
        </p>
        <div className="fee-amount">
          &#8377;300<span className="fee-to">to</span>&#8377;2,000
        </div>
        <p className="fee-note">what most people settle on for an hour</p>
        <div className="fee-details">
          <span className="fee-detail">One person, one hour</span>
          <span className="fee-detail">45&ndash;60 minutes</span>
          <span className="fee-detail">Google Meet</span>
          <span className="fee-detail">Anywhere in India</span>
        </div>
        <a href="https://forms.gle/M2TZL4t15XXuCtjF8" target="_blank" className="btn btn-solid">
          Book a Session
        </a>
      </div>
    </section>
  );
}
