import { render, screen } from "@testing-library/react";
import { Header } from ".";

jest.mock("next/link", () => ({ children, ...rest }) => (
  <a {...rest}>{children}</a>
));

test("renders the company logo", () => {
  render(<Header />);

  expect(screen.getByAltText("Octopus Energy Logo")).toBeVisible();
  expect(screen.getByRole("link")).toHaveAttribute("href", "/");
});

test("renders the basket icon", () => {
  render(<Header />);

  expect(screen.getByRole("button", { name: "Basket Icon" })).toBeVisible();
});
