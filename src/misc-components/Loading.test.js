import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

test("renders loading message", () => {
  render(<Loading />);
  expect(screen.getByText(/Loading.../)).toBeInTheDocument();
});

test("renders page will load soon", () => {
  render(<Loading />);
  expect(screen.getByText(/Your page will load soon./)).toBeInTheDocument();
});
