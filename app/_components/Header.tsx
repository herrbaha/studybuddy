import Image from "next/image";
import Link from "next/link";
import logo from "../../public/StudyBuDY.png";
import "../../styles/global.css";

const links = [
  { href: "/", text: "Home" },
  { href: "/", text: "About Us" },
  { href: "/tutors", text: "Tutors" },
  { href: "/subjects", text: "Subjects" },
  { href: "/blog", text: "Blog" },
  { href: "/contact", text: "Contact" },
];

const Header: React.FC = () => {
  return (
    <header className="bg-customBlueSoft ">
      <div className="flex justify-between items-center mx-auto gap-8 px-4 sm:px-6 lg:px-8 h-20">
        <Image src={logo} alt="studybuddyLogo" width={80} height={80} />

        <div className="">
          <nav className="flex items-center">
            <ul className="flex items-center gap-6 text-md">
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
            <button className="bg-gray-200 hover:bg-customBlue text-customBlueSoft hover:text-gray-100 font-bold py-2 px-4 rounded-full me-3 ms-14">
              Login
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
