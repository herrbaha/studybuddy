import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DashboardLayout from "../app/_components/DashboardLayout";

xdescribe("Dashboard", () => {
  it("should render without crushing ", () => {
    render(<DashboardLayout />);
  });
  it("should render expected cards elements inside ", () => {
    render(<DashboardLayout />);

    const SideBarContaier = screen.getByText("SideBarContainer")
    expect(SideBarContaier).toBeInTheDocument();
    expect(screen.getByText("Card Body 1")).toBeInTheDocument();
    expect(screen.getByText("Card Body 2")).toBeInTheDocument();
    expect(screen.getByText("Card Body 4")).toBeInTheDocument();
    expect(screen.getByText("Card Body 3")).toBeInTheDocument();
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
})