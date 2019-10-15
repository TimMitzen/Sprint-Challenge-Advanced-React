import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Api from "../App";

afterEach(rtl.cleanup);

test("Gets the element text Tennis", () => {
  const wrapper = rtl.render(<Api />);
  expect(wrapper.getByText(/tennis/i));
   
  
  
});

it('Find first element of name', () => {
  const wrapper = rtl.render(<Api/>);
expect(wrapper.findByText(/name/i));
  

  });

it("Find the first element of country", () => {
  const wrapper = rtl.render(<Api />);
  expect(wrapper.findByText(/country/i));
});

// test("Render h1", () => {
//   const wrapper = rtl.render(<Api />);
//   wrapper.getByTestId('h1');
// });
