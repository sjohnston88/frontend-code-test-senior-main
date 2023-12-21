import { render, screen } from "@testing-library/react";
import localeStrings from "./strings.en-GB.json";
import { ProductDescription } from ".";

test("renders the product description", () => {
  render(<ProductDescription description="Hello World" />);

  expect(screen.getByText(localeStrings.heading)).toBeVisible();
  expect(screen.getByText("Hello World")).toBeVisible();
});
