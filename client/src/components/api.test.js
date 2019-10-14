import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Api from "../App";

afterEach(rtl.cleanup);

test("Render Google", () => {
  const wrapper = rtl.render(<Api />);
  wrapper.getByText(/tennis/i);
});

it("Render  Name", () => {
  const wrapper = rtl.render(<h1>Name:</h1>);
});

it("Render country", () => {
  const wrapper = rtl.render(<h2>Country:</h2>);
});

// test("Render h1", () => {
//   const wrapper = rtl.render(<Api />);
//   wrapper.getByTestId('h1');
// });
