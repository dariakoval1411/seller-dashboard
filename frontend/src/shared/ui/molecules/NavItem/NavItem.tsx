import { Link, useLocation } from "react-router-dom";
import { Text } from "@/shared/ui/atoms";

type NavItemProps = {
  to: string;
  label: string;
};

export const NavItem = ({ to, label }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link className={`nav-item ${isActive ? "is-active" : ""}`} to={to}>
      <Text>{label}</Text>
    </Link>
  );
};