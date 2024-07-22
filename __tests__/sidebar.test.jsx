import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Sidebar from "../app/_components/Sidebar";

describe("Sidebar", () => {
  it("should render without crushing ", () => {
    render(<Sidebar activeLink="home" onLinkClick={jest.fn()}/>);
  });
  it("should render expected elements inside ", () => {
    render(<Sidebar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
  it("should highlight the active link", () => {
    render(<Sidebar activeLink="About" />);
    expect(screen.getByTestId("about-link")).toHaveClass("active");
    expect(screen.getByTestId("home-link")).not.toHaveClass("active");
  });
  it("should call onLinkClick when a link is clicked", () => {
    const mockOnLinkClick = jest.fn();
    render(<Sidebar onLinkClick={mockOnLinkClick} />);
    screen.getByText("Contact").click();
    expect(mockOnLinkClick).toHaveBeenCalledWith("Contact");
  });
});
