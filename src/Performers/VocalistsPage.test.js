import React from "react";
import { render, screen } from "@testing-library/react";
import VocalistsPage from "./VocalistsPage";

test("renders All", () => {
  render(<VocalistsPage />);
  expect(screen.getByText(/ALL/)).toBeInTheDocument();
});

test("renders Jazz Vocalists", () => {
  render(<VocalistsPage />);
  expect(screen.getByText(/JAZZ/)).toBeInTheDocument();
});

test("renders Classical Vocalists", () => {
  render(<VocalistsPage />);
  expect(screen.getByText(/CLASSICAL/)).toBeInTheDocument();
});
