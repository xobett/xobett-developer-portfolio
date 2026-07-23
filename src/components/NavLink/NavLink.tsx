import "./NavLink.css";
import { Link, useLocation } from "react-router-dom";

type Props = { href: string; label: string };

export default function NavLink({ href, label }: Props) {
  const { pathname } = useLocation();

  return (
    <Link
      className="navlink"
      to={href}
      datatype={pathname === href ? "active" : ""}
    >
      {label}
    </Link>
  );
}
