import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Sidebar from "../app/_components/Sidebar";

/* testler it paragraflari 'xit'veya 'xdescribe' seklinde yazilarak atlanabilir, tek bir teste veya describe bloka odaklanilirsa 'it.only' veya 'describe.only' yapilarak geri 
kalanlari test edilebilir. Push yapmadan once bunlar MUTLAKA kaldiralarak
tum testlerin atlanmadan gecilmesi gerekir. */

/* jest.fn() mock functiondir. Kullanilmadan once ne icin kullandiginiza dair 
anlasilabilir bir isimlendirmeyle const'a atamayi unutmayalim */ 

/* Yazilan testlerin istediginiz dogrultuda fail olabilmesini denemeyi unutmayalim. False positive testleri bulundurmayalim*/

describe("Sidebar", () => {
  it("should render without crushing ", () => {
    render(<Sidebar activeLink="home" onLinkClick={jest.fn()} />);
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
