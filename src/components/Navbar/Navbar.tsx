import NavLink from "../NavLink/NavLink";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav id="navbar">
      <ul>
        <NavLink href="/home" label="Home"></NavLink>
        <NavLink href="/about-me" label="About Me"></NavLink>
        <NavLink href="/projects" label="Projects"></NavLink>
        <NavLink href="/experience" label="Experience"></NavLink>
        <NavLink href="/education" label="Education"></NavLink>
        <NavLink href="/contact" label="Contact"></NavLink>
      </ul>
    </nav>
  );
}
