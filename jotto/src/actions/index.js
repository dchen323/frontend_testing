import axios from "axios";
import { getLetterMatchCount } from "../helpers";

export const CORRECT_GUESS = "CORRECT_GUESS";
export const GUESS_WORD = "GUESS_WORD";
export const SET_SECRET_WORD = "SET_SECRET_WORD";

// export const correctGuess = () => ({ type: CORRECT_GUESS });

export const guessWord = guessedWord => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    dispatch({
      type: GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    });

    if (guessedWord === secretWord) {
      dispatch({
        type: CORRECT_GUESS
      });
    }
  };
};

export const getSecretWord = () => dispatch => {
  return axios.get("http://localhost:3000").then(res => {
    dispatch({
      type: SET_SECRET_WORD,
      payload: res.data
    });
  });
};
