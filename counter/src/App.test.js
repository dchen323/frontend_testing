import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/*Factory function to create a ShallowWrapper for the App component
  *@function setup
  *@param {object} props - Component props specific to this setup.
  *@params {any} state - Initial state for setup.
  *@returns {ShallowWrapper}
*/
const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />);
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
  const appComponent = findByTestAttr(wrapper, "increment-button");
  expect(appComponent.length).toBe(1);
});

it("renders counter display", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "counter-display");
  expect(appComponent.length).toBe(1);
});

it("starts counter at 0", () => {});

it("clicking button increments counter displays", () => {});
