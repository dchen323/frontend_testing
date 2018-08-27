import { correctGuess, CORRECT_GUESS } from "./";

describe("correctGuess", () => {
  it('returns an action with type "CORRECT GUESS"', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: CORRECT_GUESS });
  });
});
