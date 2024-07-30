"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/StudyBuDY.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const links = [
  { href: "/", text: "About Us" },
  { href: "/blog", text: "Blog" },
  { href: "/contact", text: "Contact" },
];
export interface FooterProps {
  handleClick?: (
    event: React.MouseEvent<HTMLAnchorElement>,
    link?: string
  ) => void;
}

const Footer: React.FC<FooterProps> = ({ handleClick }) => {
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link?: string
  ) => {
    if (handleClick) {
      handleClick(event, link);
    }
  };
  return (
    <footer className="bg-customBlueSoft   w-full ">
      <div className="mx-auto max-w-xl px-4 py-16  sm:px-6 lg:px-8  ">
        <div className="flex justify-center items-center ">
          <Image src={logo} alt="studybuddyLogo" width={150} height={150} />
        </div>
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 md:text-xl">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className="text-gray-100 transition hover:text-customBlue"
                href={link.href}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center gap-6 md:gap-8 mt-7">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-100  transition hover:text-customBlue"
              onClick={(event) => handleLinkClick(event, "facebook")}
            >
              <span className="sr-only">Facebook</span>
            </a>
            <FaFacebook className="text-gray-100 text-xl md:text-2xl transition hover:text-customBlue" />
          </li>
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-100 transition hover:text-customBlue"
              onClick={(event) => handleLinkClick(event, "instagram")}
            >
              <span className="sr-only">Instagram</span>
            </a>
            <FaInstagram className="text-gray-100 text-xl md:text-2xl transition hover:text-customBlue" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
