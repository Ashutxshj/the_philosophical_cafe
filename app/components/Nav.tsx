export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="wordmark">
        <span className="wordmark-cup">&#9749;</span>
        <span className="wordmark-name">
          The Philosophical <em>Cafe</em>
        </span>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#topics">Topics</a>
        </li>
        <li>
          <a href="#voices">Voices</a>
        </li>
        <li>
          <a href="#fee">Fee</a>
        </li>
        <li>
          <a href="https://forms.gle/M2TZL4t15XXuCtjF8" target="_blank" className="nav-book">
            Book a Session
          </a>
        </li>
      </ul>
    </nav>
  );
}
