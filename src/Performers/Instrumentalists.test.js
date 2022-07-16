import React from "react";
import { render, screen } from "@testing-library/react";
import Instrumentalists from "./Instrumentalists";

test("renders All", () => {
  render(<Instrumentalists />);
  expect(screen.getByText(/ALL/)).toBeInTheDocument();
});

test("renders Woodwinds", () => {
  render(<Instrumentalists />);
  expect(screen.getByText(/WOODWINDS/)).toBeInTheDocument();
});

test("renders Brass", () => {
  render(<Instrumentalists />);
  expect(screen.getByText(/BRASS/)).toBeInTheDocument();
});

test("renders Strings", () => {
  render(<Instrumentalists />);
  expect(screen.getByText(/STRINGS/)).toBeInTheDocument();
});

test("renders Piano", () => {
  render(<Instrumentalists />);
  expect(screen.getByText(/PIANO/)).toBeInTheDocument();
});
