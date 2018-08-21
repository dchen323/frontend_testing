import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/*Factory function to create a ShallowWrapper for the App component
  *@function setup
  *@param {object} props - Component props specific to this setup.
  *@params {object} state - Initial state for setup.
  *@returns {ShallowWrapper}
*/
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};
/*
  * Return ShallowWrapper containing node(s) with the given data-test value.
  * @param {ShallowWrapper} wrapper -Enzyme shallow wrapper to search within.
  * @param {string} val - Value of data-test attribute for search.
  * @returns {ShallowWrapper}
*/
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

it("renders without crashing", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

it("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

it("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

it("starts counter at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

it("clicking button increments counter displays", () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  //find button and click
  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate("click");
  wrapper.update();

  //find display and test value
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter + 1);
});

it("renders counter decrement button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  expect(button.length).toBe(1);
});

it("clicking button decreases counter displays", () => {
  const counter = 3;
  const wrapper = setup(null, { counter });

  //find button and click
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");
  wrapper.update();

  //find display and test value
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter - 1);
});

it("does not decrease button below zero", () => {
  const counter = 0;
  const wrapper = setup(null, { counter });

  //find button and click;
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");
  wrapper.update();

  //find display and display counter;
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter);
});

it("intialize error text to be empty", () => {
  const wrapper = setup();
  const errorDisplay = findByTestAttr(wrapper, "error-display");
  expect(errorDisplay.text()).toBe("");
});

it("renders error when decrease button clicked on zero", () => {
  const counter = 0;
  const wrapper = setup(null, { counter });

  //find button and click
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");
  wrapper.update();

  //display error text
  const error = "Cannot decrease counter below 0";
  const errorDisplay = findByTestAttr(wrapper, "error-display");
  expect(errorDisplay.text()).toBe(error);
});

it("removes error text when increment button is clicked", () => {
  const testError = "test error";
  const wrapper = setup(null, { error: testError });

  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate("click");
  wrapper.update();

  //display error text to be empty
  const error = "";
  const errorDisplay = findByTestAttr(wrapper, "error-display");
  expect(errorDisplay.text()).toBe(error);
});
