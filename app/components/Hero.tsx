export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="hero-question">
              You don&rsquo;t come here for answers. You come to ask better
              questions.
            </p>
            <h1>
              An unhurried hour
              <br />
              to <em>sort out</em> the noise.
            </h1>
            <p className="hero-sub">
              The Philosophical Cafe is a one-on-one counselling space. Bring
              the questions you have been carrying alone &mdash; about work,
              meaning, a decision, or just the vague sense that something is
              off. We think through them together.
            </p>
            <div className="hero-actions">
              <a href="https://forms.gle/M2TZL4t15XXuCtjF8" target="_blank" className="btn btn-solid">
                Book a Session
              </a>
              <a href="#about" className="btn btn-line">
                Who you&rsquo;re talking to
              </a>
            </div>
          </div>
          <div className="hero-aside">
            <p>Philosophical counselling &middot; online &middot; across India</p>
          </div>
        </div>
        <div className="hero-proof">
          <div>
            <div className="proof-value">30+</div>
            <div className="proof-note">client voices, unedited</div>
          </div>
          <div>
            <div className="proof-value">
              <span className="proof-currency">&#8377;</span>300
            </div>
            <div className="proof-note">starting fee &mdash; pay what feels right</div>
          </div>
          <div>
            <div className="proof-value">JNU</div>
            <div className="proof-note">M.A. Philosophy, New Delhi</div>
          </div>
        </div>
      </div>
    </section>
  );
}
