import { render, screen } from "@testing-library/react";
import localeStrings from "./strings.en-GB.json";
import { Footer } from ".";

test("renders the footer copy", () => {
  render(<Footer />);
  expect(screen.getByText(localeStrings.footer)).toBeVisible();
});
