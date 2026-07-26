import NavLink from "../NavLink/NavLink";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav id="navbar">
      <div>
        <ul>
          <NavLink href="/home" label="Home"></NavLink>
          <NavLink href="/projects" label="Projects"></NavLink>
          <NavLink href="/experience" label="Experience"></NavLink>
          <NavLink href="/contact" label="Contact"></NavLink>
        </ul>
      </div>
    </nav>
  );
}
