"use client";
import { MouseEvent } from "react";
import Link from "next/link";

export interface SidebarProps {
  activeLink?: string;
  onLinkClick?: (link: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeLink = "Home",
  onLinkClick,
}) => {
  const handleLinkClick = (
    link: string,
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    if (onLinkClick) {
      onLinkClick(link);
    }
  };
  return (
    <div className="flex h-screen">
      <nav className="bg-customBlueSoft text-customLightBlue px-4 py-5 space-y-4">
        <ul>
          <li
            data-testid="home-link"
            className={activeLink === "Home" ? "active" : ""}
          >
            <Link
              href="/"
              onClick={(event) => handleLinkClick("Home", event)}
              className="block hover:text-customBlue px-3 py-2 rounded-md"
            >
              Home
            </Link>
          </li>
          <li
            data-testid="about-link"
            className={activeLink === "About" ? "active" : ""}
          >
            <Link
              href="/about"
              onClick={(event) => handleLinkClick("About", event)}
              className="block hover:text-customBlue px-3 py-2 rounded-md"
            >
              About
            </Link>
          </li>
          <li
            data-testid="contact-link"
            className={activeLink === "Contact" ? "active" : ""}
          >
            <Link
              href="/contact"
              onClick={(event) => handleLinkClick("Contact", event)}
              className="block hover:text-customBlue px-3 py-2 rounded-md"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
