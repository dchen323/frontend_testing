import React from "react";
import { shallow } from "enzyme";

import { storeFactory } from "../test/testUtils";
import App, { UnconnectedApp } from "./App";

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive();
  return wrapper;
};

describe("redux properties", () => {
  it("has access to success state", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  it("has access to secretWord state", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });

  it("has access to guessWords state", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });

  it("getsSecretWord action creator is a function ont he props", () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

it("getSecretWord runs on App mount", () => {
  const getSecretWordMock = jest.fn();

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  };

  //set up app component with getSecretWord Mock as the getSecretWord prop;
  const wrapper = shallow(<UnconnectedApp {...props} />);

  //run lifecycle method
  wrapper.instance().componentDidMount();

  //check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
