"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/StudyBuDY.png";
import { useMediaQuery } from "react-responsive";

import HamburgerMenu from "./HamburgerMenu";

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About Us" },
  { href: "/tutors", text: "Tutors" },
  { href: "/subjects", text: "Subjects" },
  { href: "/blog", text: "Blog" },
  { href: "/contact", text: "Contact" },
];

export interface HeaderProps {
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ handleClick }) => {
  const handleLinkClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (handleClick) {
      handleClick(event);
    }
  };
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <header className="bg-customBlueSoft w-full">
      <div className="flex justify-between items-center mx-auto gap-8 px-4 sm:px-6 md:px-2 lg:px-8 h-20 md:h-40 lg:h-28">
        <Image src={logo} alt="studybuddyLogo" width={80} height={80} />

        <div className="">
          {isDesktop ? (
            <nav className="md:flex md:items-center  ">
              <ul className="flex items-center gap-6 text-md md:text-xl ">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="text-customLightBlue transition hover:text-customBlue"
                      href={link.href}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                className="bg-gray-200 hover:bg-customBlue text-customBlueSoft hover:text-gray-100 font-bold py-2 px-4 rounded-full me-3 ms-14"
                onClick={(event) => handleLinkClick(event)}
              >
                Login
              </button>
            </nav>
          ) : (
            <div>
              <HamburgerMenu links={links} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
