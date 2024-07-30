import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DashboardLayout from "../app/_components/DashboardLayout";

/* testler it paragraflari 'xit'veya 'xdescribe' seklinde yazilarak atlanabilir, tek bir teste veya describe bloka odaklanilirsa 'it.only' veya 'describe.only' yapilarak geri 
kalanlari test edilebilir. Push yapmadan once bunlar MUTLAKA kaldiralarak
tum testlerin atlanmadan gecilmesi gerekir. */

/* jest.fn() mock functiondir. Kullanilmadan once ne icin kullandiginiza dair 
anlasilabilir bir isimlendirmeyle const'a atamayi unutmayalim */ 

/* Yazilan testlerin istediginiz dogrultuda fail olabilmesini denemeyi unutmayalim. False positive testleri bulundurmayalim*/

describe.only("Dashboard", () => {
  it("should render without crushing ", () => {
    render(<DashboardLayout />);
  });
  it("should render expected cards elements inside ", () => {
    render(<DashboardLayout />);

    const SideBarContaier = screen.getByText("SideBarContainer")
    expect(SideBarContaier).toBeInTheDocument();
    expect(screen.getByText("CardContainer-1")).toBeInTheDocument();
    expect(screen.getByText("CardContainer-2")).toBeInTheDocument();
    expect(screen.getByText("CardContainer-4")).toBeInTheDocument();
    expect(screen.getByText("CardContainer-3")).toBeInTheDocument();
  });
  it("should render expected MainSectionContainer", () => {
    render(<DashboardLayout />);
    expect(screen.getByText("MainSectionContainer"))
  });
  it("should render expected Reminders, Activities and Notes", () => {
    render(<DashboardLayout />);
    expect(screen.getByText("RemindersContainer"));
    expect(screen.getByText("ActivitiesContainer"));
    expect(screen.getByText("NotesContainer"))


  });
});