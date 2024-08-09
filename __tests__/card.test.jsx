import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "../app/_components/Card";

describe.only("Card Component", () => {
  it("should render without crushing ", () => {
    render(<Card />);
  });
  it("should render elemets of cards", () => {
    render(<Card />);

    expect(screen.getByText("Card Header 1")).toBeInTheDocument();
    expect(screen.getByText("Card Body 1")).toBeInTheDocument();
    expect(screen.getByText("Card Header 2")).toBeInTheDocument();
    expect(screen.getByText("Card Body 2")).toBeInTheDocument();
    expect(screen.getByText("Card Header 3")).toBeInTheDocument();
    expect(screen.getByText("Card Body 3")).toBeInTheDocument();
    expect(screen.getByText("Card Header 4")).toBeInTheDocument();
    expect(screen.getByText("Card Body 4")).toBeInTheDocument();
    // expect(screen.getByText("CardContainer-2")).toBeInTheDocument();
    // expect(screen.getByText("CardContainer-4")).toBeInTheDocument();
    // expect(screen.getByText("CardContainer-3")).toBeInTheDocument();
  });
//  it("should render expected MainSectionContainer", () => {
//     render(<DashboardLayout />);
//     expect(screen.getByText("MainSectionContainer"))
//   });
//   it("should render expected Reminders, Activities and Notes", () => {
//     render(<DashboardLayout />);
//     expect(screen.getByText("RemindersContainer"));
//     expect(screen.getByText("ActivitiesContainer"));
//     expect(screen.getByText("NotesContainer"))


//   });
})