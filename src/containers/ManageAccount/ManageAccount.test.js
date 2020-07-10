import React from "react";
import { render } from "@testing-library/react";
import ManageAccount from "./ManageAccount";

describe("ManageAccount tests", () => {
  it("should render", () => {
    expect(render(<ManageAccount />)).toBeTruthy();
  });
});
