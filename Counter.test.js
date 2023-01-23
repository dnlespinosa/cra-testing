import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

it("renders without crashing", function() {
  render(<Counter />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Counter />);
  expect(asFragment()).toMatchSnapshot();
});

it("handles button clicks", function() {
  const { getByText, debug } = render(<Counter />);
  debug();
  const h2 = getByText("Current count: 0");

  // click on the button
  fireEvent.click(getByText("Add"));

  // is the count different?
  expect(h2).toHaveTextContent("1");
  expect(h2).not.toHaveTextContent("0");
});


test('playing with queries', () => {
  const {getByText} = render (<Counter />)
  getByText('Lets count', {exact: false})
})
// LOOK AT ME LOOK AT ME. SEE THE OPTIONS I JUST PUT IN THERE!!!!!

test('playing with queries', () => {
  const {getAllByText} = render (<Counter />)
  getByText('count', {exact: false})
})
// this will return an array 