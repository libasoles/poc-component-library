/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import PatientsPage from "./page";

it("App Router: Works with Server Components", () => {
  render(<PatientsPage />);
  expect(screen.getByRole("heading")).toHaveTextContent("App Router");
});
