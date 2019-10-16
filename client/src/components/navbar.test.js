import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./navbar";
afterEach(rtl.cleanup);

test("Render Title of navbar", () => {
  const wrapper = rtl.render(<Navbar />);
  const element = wrapper.getByText(/tennisplayer data/i);
  expect(element).toBeVisible();

});

test("Find navbar by Test id", () => {
  const wrapper = rtl.render(<Navbar />);
  expect(wrapper.findByTestId(/navbar/i));

});
test("Check the onclick", () => {
  const wrapper = rtl.render(<Navbar />);
  const onclick = wrapper.getByTestId("onclick");
  expect(onclick).toHaveClass('toggle');
  rtl.fireEvent.click(onclick);
  expect(onclick).toHaveClass('toggled');
});
