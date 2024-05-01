import { ComponentProps } from "@/types/types";

interface NavbarProps extends ComponentProps {}

const Navbar = ({ className = "" }: NavbarProps) => {
  return <nav className={className}>Navbar</nav>;
};

export default Navbar;
