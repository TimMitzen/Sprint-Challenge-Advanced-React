import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Api from "../App";

afterEach(rtl.cleanup);

test("Render Google", () => {
  const wrapper = rtl.render(<Api />);
  expect(wrapper.getByText(/tennis/i));
  
});

it('Find text countery', () => {
  const wrapper = rtl.render(<Api />);
   expect(wrapper.findByText(/country/i));
  
});

it("Find text name", () => {
  const wrapper = rtl.render(<Api />);
  expect(wrapper.findByText(/name/i));
});

// test("Render h1", () => {
//   const wrapper = rtl.render(<Api />);
//   wrapper.getByTestId('h1');
// });
