import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "../app/_components/Footer";

describe("Footer Component", () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  it("should Logo render without crushing", () => {
    render(<Footer handleClick={handleClick} />);
    const logo = screen.getByAltText("studybuddyLogo");
    expect(logo).toBeInTheDocument();
  });
  it("should render all navigation links  correctly", () => {
    render(<Footer handleClick={handleClick} />);
    const links = [
      { href: "/", text: "About Us" },
      { href: "/blog", text: "Blog" },
      { href: "/contact", text: "Contact" },
    ];

    for (const link of links) {
      const linkElement = screen.getByText(link.text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest("a")).toHaveAttribute("href", link.href);
    }
  });
  it("should render Facebook link correctly and trigger handleClick", async () => {
    render(<Footer handleClick={handleClick} />);
    const facebookLink = screen.getByText("Facebook");
    expect(facebookLink).toBeInTheDocument();
    await userEvent.click(facebookLink);
    expect(handleClick).toHaveBeenCalledWith(
      expect.objectContaining({ type: "click" }),
      "facebook"
    );
  });
  it("should render Instagram link correctly  and trigger handleClick", async () => {
    render(<Footer handleClick={handleClick} />);
    const instagramLink = screen.getByText("Instagram");
    expect(instagramLink).toBeInTheDocument();
    await userEvent.click(instagramLink);
    expect(handleClick).toHaveBeenCalledWith(
      expect.objectContaining({ type: "click" }),
      "instagram"
    );
  });
});
