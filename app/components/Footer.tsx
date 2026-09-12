import Link from "next/link";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_PRETTY,
  INSTAGRAM_URL,
  BOOKING_URL,
} from "../lib/constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap-wide">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href="/" className="wordmark">
              <span className="wordmark-cup">&#9749;</span>
              <span className="wordmark-name">
                The Philosophical <em>Cafe</em>
              </span>
            </Link>
            <p className="footer-role">
              Chetna &middot; Certified Philosophical Counselor &middot; M.A.
              Philosophy, JNU
            </p>
          </div>
          <div className="footer-dirs">
            <div className="footer-col">
              <p>Visit</p>
              <ul>
                <li>
                  <Link href="/chetna">About Chetna</Link>
                </li>
                <li>
                  <Link href="/process">How it works</Link>
                </li>
                <li>
                  <Link href="/voices">Client voices</Link>
                </li>
                <li>
                  <Link href="/groups">Sessions for groups</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <p>Contact</p>
              <ul>
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </li>
                <li>
                  <a href={`tel:${CONTACT_PHONE_PRETTY.replace(/\s/g, "")}`}>
                    {CONTACT_PHONE_PRETTY}
                  </a>
                </li>
                <li>
                  <a href={INSTAGRAM_URL} target="_blank">
                    @philosophical_cafe
                  </a>
                </li>
                <li>
                  <a href={BOOKING_URL} target="_blank">
                    Google booking form
                  </a>
                </li>
              </ul>
            </div>
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
