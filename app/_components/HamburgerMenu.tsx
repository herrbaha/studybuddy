"use client";
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

export interface HamburgerMenuProps {
  links: { href: string; text: string }[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center gap-4 relative z-10">
      <button
        onClick={handleNav}
        className="block rounded  bg-gray-200 p-2.5 text-customBlueSoft  md:hidden"
      >
        <span className="sr-only">Toggle menu</span>
        <GiHamburgerMenu />
      </button>
      <div
        className={`fixed right-0 top-0 w-full sm:w-[100%] rounded-sm sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-20 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div>
          <button
            onClick={handleNav}
            className="cursor-pointer text-3xl  text-customBlueSoft"
          >
            <span className="sr-only">Close menu</span>
            <IoCloseOutline />
          </button>
        </div>
        <div className="flex-col py-4">
          <ul className="text-xl ">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-4 text-customBlueSoft transition  hover:text-customBlue cursor-pointer "
              >
                {link.text}
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <ul className="flex justify-center gap-6 md:gap-8 mt-7">
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-100 transition hover:text-customBlue"
              >
                <span className="sr-only">Facebook</span>
              </a>
              <FaFacebook className=" text-customBlueSoft text-3xl transition hover:text-customBlue" />
            </li>
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className=" text-customBlueSoft  transition hover:text-customBlue"
              >
                <span className="sr-only">Instagram</span>
              </a>
              <FaInstagram className=" text-customBlueSoft text-3xl   transition hover:text-customBlue" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
