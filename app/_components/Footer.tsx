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

const Footer: React.FC = () => {
  return (
    <footer className="bg-customBlueSoft  py-1 ">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center ">
          <Image src={logo} alt="studybuddyLogo" width={150} height={150} />
        </div>
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
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
        <ul className="flex justify-center gap-6 md:gap-8 my-12">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-100 transition hover:text-customBlue"
            >
              <span className="sr-only">Facebook</span>
            </a>
            <FaFacebook className="text-gray-100 transition hover:text-customBlue" />
          </li>
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-100 transition hover:text-customBlue"
            >
              <span className="sr-only">Instagram</span>
            </a>
            <FaInstagram className="text-gray-100 transition hover:text-customBluecustomBlue" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
