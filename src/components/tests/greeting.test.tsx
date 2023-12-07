import { render,screen } from "@testing-library/react";
import Greeting from "./Greeting";

it("hh", () => {
  render(<Greeting />);
  const message = screen.queryByText("Greeting")
  expect(message).toBeVisible()
});
