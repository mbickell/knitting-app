import React from "react";
import { render } from "@testing-library/react";
import NewPassword from "./NewPassword";

describe("NewPassword tests", () => {
  it("should render", () => {
    expect(render(<NewPassword />)).toBeTruthy();
  });
});
