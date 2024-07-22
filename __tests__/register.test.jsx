import { render, screen } from "@testing-library/react";

import Register from "../pages/register";

test("it renders 2 input fileds on the screen", () => {
    // render the component
  render(<Register />);

  //Manipulate the HTML document
  const inputFields = screen.getAllByRole('textbox')
  //Assertions
  expect(inputFields).toHaveLength(2)
});

it("should render form with empty fields", () => {
  const { getByLabelText } = render(<Register />);

  const firstNameInput = getByLabelText(/First Name/i);
  const lastNameInput = getByLabelText(/Last Name/i);
  const emailInput = getByLabelText(/Email/i);

  expect(firstNameInput.value).toBe("");
  expect(lastNameInput.value).toBe("");
  expect(emailInput.value).toBe("");
});

it("should update state when user types in inputs", () => {
  const { getByLabelText } = render(<Register />);

  const firstNameInput = getByLabelText(/First Name/i);
  const lastNameInput = getByLabelText(/Last Name/i);
  const emailInput = getByLabelText(/Email/i);

  fireEvent.change(firstNameInput, { target: { value: "John" } });
  fireEvent.change(lastNameInput, { target: { value: "Doe" } });
  fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });

  expect(firstNameInput.value).toBe("John");
  expect(lastNameInput.value).toBe("Doe");
  expect(emailInput.value).toBe("john.doe@example.com");
});


// // This test requires mocking the backend call (replace with your implementation)
// it("should call the backend API on submit (mocked)", () => {
//   const mockFetch = jest.fn().mockResolvedValue({ success: true });
//   global.fetch = mockFetch; // mock the fetch API

//   const { getByText, getByLabelText } = render(<Register />);

//   const firstNameInput = getByLabelText(/First Name/i);
//   const lastNameInput = getByLabelText(/Last Name/i);
//   const emailInput = getByLabelText(/Email/i);
//   const submitButton = getByText(/Register/i);

//   fireEvent.change(firstNameInput, { target: { value: "John" } });
//   fireEvent.change(lastNameInput, { target: { value: "Doe" } });
//   fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });

//   fireEvent.click(submitButton);

//   expect(mockFetch).toHaveBeenCalledWith("/api/register", {
//     method: "POST",
//     body: JSON.stringify({ email: "john.doe@example.com", firstName: "John", lastName: "Doe" }),
//   });
// });