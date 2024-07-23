import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../app/_components/Header";
import HamburgerMenu from "../app/_components/HamburgerMenu";
import { useMediaQuery } from "react-responsive";

// Mock react-responsive's useMediaQuery hook
jest.mock("react-responsive", () => ({
  useMediaQuery: jest.fn(),
}));

const setMediaQuery = (isDesktop) => {
  useMediaQuery.mockImplementation(({ query }) => {
    if (query === "(min-width: 768px)") {
      return isDesktop;
    }
    return !isDesktop;
  });
};

describe("Header Component", () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  describe("Desktop view", () => {
    beforeEach(() => {
      setMediaQuery(true);
    });

    it("should render the Logo without crashing", () => {
      render(<Header handleClick={handleClick} />);
      const logo = screen.getByAltText("studybuddyLogo");
      expect(logo).toBeInTheDocument();
    });

    it("should have the correct role for the button", () => {
      render(<Header handleClick={handleClick} />);
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

    it("should render all navigation links correctly", () => {
      const links = [
        { href: "/", text: "Home" },
        { href: "/about", text: "About Us" },
        { href: "/tutors", text: "Tutors" },
        { href: "/subjects", text: "Subjects" },
        { href: "/blog", text: "Blog" },
        { href: "/contact", text: "Contact" },
      ];
      render(<Header handleClick={handleClick} />);

      const nav = screen.getByRole("navigation");
      const linkElements = within(nav).getAllByRole("link");
      expect(linkElements.length).toBe(links.length);

      links.forEach((link, index) => {
        expect(linkElements[index]).toHaveTextContent(link.text);
        expect(linkElements[index]).toHaveAttribute("href", link.href);
      });
    });

    it("should call handleClick when the button is clicked", async () => {
      render(<Header handleClick={handleClick} />);
      const buttonElement = screen.getByRole("button", { name: /login/i });
      await userEvent.click(buttonElement);
      expect(handleClick).toHaveBeenCalled();
      expect(handleClick).toHaveBeenCalledWith(
        expect.objectContaining({ type: "click" })
      );
    });
  });

  describe("Mobile view", () => {
    beforeEach(() => {
      setMediaQuery(false);
    });

    it("should render the HamburgerMenu component on small screens", () => {
      render(<Header handleClick={() => {}} />);

      const nav = screen.queryByRole("navigation");
      expect(nav).not.toBeInTheDocument();

      const buttonElement = screen.queryByRole("button", { name: /login/i });
      expect(buttonElement).not.toBeInTheDocument();
    });
  });
});

describe("HamburgerMenu Component", () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "/tutors", text: "Tutors" },
    { href: "/subjects", text: "Subjects" },
    { href: "/blog", text: "Blog" },
    { href: "/contact", text: "Contact" },
  ];

  it("should render all navigation links correctly", () => {
    render(<HamburgerMenu links={links} />);
    for (const link of links) {
      const linkElement = screen.getByText(link.text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest("a")).toHaveAttribute("href", link.href);
    }
  });

  it("should render menu buttons and toggle menu state", async () => {
    render(<HamburgerMenu links={links} />);
    const buttonToggle = screen.getByRole("button", { name: /toggle menu/i });
    expect(buttonToggle).toBeInTheDocument();
    await userEvent.click(buttonToggle);

    const buttonClose = screen.getByRole("button", { name: /close menu/i });
    expect(buttonClose).toBeInTheDocument();
    await userEvent.click(buttonClose);
  });

  it("should render social links correctly ", async () => {
    render(<HamburgerMenu links={links} />);

    const facebookLink = screen.getByText("Facebook");
    expect(facebookLink).toBeInTheDocument();
    const instagramLink = screen.getByText("Instagram");
    expect(instagramLink).toBeInTheDocument();
  });
});
