import * as React from "react";
import { render, screen } from "@testing-library/react";
import Proof from "../src/components/proof/index";

test("display prood description", () => {
  render(<Proof />);

  const title = screen.getByText("Proof of Payment");
  const description = screen.getByText("Upload or drag and drop your file.");

  expect(title).toContain("Proof of Payment");
  expect(description).toContain("Upload or drag and drop your file.");
});
