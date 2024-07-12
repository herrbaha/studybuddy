import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../app/_components/Footer";

describe("Logo", () => {
  it("render the logo", () => {
    render(<Footer />);
    const logo = screen.getByAltText("studybuddyLogo");
    expect(logo).toBeInTheDocument();
  });
});

describe("Links", () => {
  it("should render all navigation links  correctly", () => {
    render(<Footer />);
    const links = [
      { href: "/", text: "About Us" },
      { href: "/blog", text: "Blog" },
      { href: "/contact", text: "Contact" },
    ];

    links.forEach((link) => {
      const linkElement = screen.getByText(link.text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest("a")).toHaveAttribute("href", link.href);
    });
  });
});

describe("Social Media Links", () => {
  it("renders Facebook link correctly", () => {
    render(<Footer />);
    const facebookLink = screen.getByText("Facebook");
    expect(facebookLink).toBeInTheDocument();
  });
  it("renders Instagram link correctly", () => {
    render(<Footer />);
    const instagramLink = screen.getByText("Instagram");
    expect(instagramLink).toBeInTheDocument();
  });
});
