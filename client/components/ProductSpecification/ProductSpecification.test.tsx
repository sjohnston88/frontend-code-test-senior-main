import { render, screen } from "@testing-library/react";
import localeStrings from "./strings.en-GB.json";
import { ProductSpecification } from ".";

const mockDimensions =
  `12.6 x 6.2 x 6.2` as `${ProductData["height"]} x ${ProductData["width"]} x ${ProductData["length"]}`;

const mockProps = {
  brand: "Philips",
  weight: 77,
  dimensions: mockDimensions,
  model_code: "E27 ES",
  colour: "Cool daylight",
};

test("renders the product specification", () => {
  render(<ProductSpecification {...mockProps} />);

  expect(screen.getByText(localeStrings.heading)).toBeVisible();
  expect(screen.getAllByRole("row")).toHaveLength(5);
});
