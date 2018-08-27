import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/TestUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />);
};

describe("render", () => {
  describe("word has not been guessed", () => {
    it("renders component without error", () => {});

    it("renders input box", () => {});

    it("renders input box", () => {});
  });

  describe("word has been guessed", () => {
    it("does not renders input box", () => {});

    it("does not renders input box", () => {});
  });
});

describe("update state", () => {});
