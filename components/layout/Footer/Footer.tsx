import { ComponentProps } from "@/types/types";

interface FooterProps extends ComponentProps {}

const Footer = ({ className = "" }: FooterProps) => {
  return <footer className={className}>Footer</footer>;
};

export default Footer;
