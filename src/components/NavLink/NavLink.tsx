import "./NavLink.css";

type Props = { href: string; label: string };

export default function NavLink({ label }: Props) {
  return (
    <li className="navlink">
      <span>{label}</span>
    </li>
  );
}
