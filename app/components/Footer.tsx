export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="wordmark">
              <span className="wordmark-cup">&#9749;</span>
              <span className="wordmark-name">
                The Philosophical <em>Cafe</em>
              </span>
            </div>
            <p className="footer-role">
              Chetna &middot; Certified Philosophical Counselor &middot; M.A.
              Philosophy, JNU
            </p>
          </div>
          <div className="footer-links">
            <a href="mailto:chetnag480@gmail.com">chetnag480@gmail.com</a>
            <a href="tel:+918745810017">+91 87458 10017</a>
            <a href="https://instagram.com/philosophical_cafe" target="_blank">
              @philosophical_cafe
            </a>
            <a href="https://forms.gle/M2TZL4t15XXuCtjF8" target="_blank">
              Book a session
            </a>
          </div>
        </div>
        <div className="footer-copy">
          <span>Online sessions &middot; available across India</span>
          <span>&copy; 2026 The Philosophical Cafe</span>
        </div>
      </div>
    </footer>
  );
}
