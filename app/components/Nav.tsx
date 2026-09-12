import Link from "next/link";

const links = [
  { href: "/chetna", label: "Chetna" },
  { href: "/process", label: "How it works" },
  { href: "/voices", label: "Voices" },
  { href: "/groups", label: "For groups" },
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="wordmark">
          <span className="wordmark-cup">&#9749;</span>
          <span className="wordmark-name">
            The Philosophical <em>Cafe</em>
          </span>
        </Link>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/#book" className="nav-cta">
          Book a session &middot; &#8377;300
        </Link>
      </div>
    </nav>
  );
}
