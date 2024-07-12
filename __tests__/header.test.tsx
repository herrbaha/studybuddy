import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../app/_components/Header";

describe("Logo", () => {
  it("render the logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("studybuddyLogo");
    expect(logo).toBeInTheDocument();
  });
});
describe("Button", () => {
  it("should have the correct role", () => {
    render(<Header />);
    const buttonElement = screen.getByRole("button", { name: /login/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      "bg-gray-200",
      "hover:bg-customBlue",
      "text-customBlueSoft",
      "hover:text-gray-100",
      "font-bold",
      "py-2",
      "px-4",
      "rounded-full",
      "me-3",
      "ms-14"
    );
  });
});

describe("Nav", () => {
  it("should render all navigation links  correctly", () => {
    render(<Header />);
    const links = [
      { href: "/", text: "Home" },
      { href: "/about", text: "About Us" },
      { href: "/tutors", text: "Tutors" },
      { href: "/subjects", text: "Subjects" },
      { href: "/blog", text: "Blog" },
      { href: "/contact", text: "Contact" },
    ];
    const elements = screen.getAllByRole("listitem");
    expect(elements.length).toBe(links.length);

    links.forEach((link) => {
      const linkElement = screen.getByText(link.text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest("a")).toHaveAttribute("href", link.href);
    });
  });
});
