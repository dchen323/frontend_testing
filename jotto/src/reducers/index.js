import { combineReducers } from "redux";
import SuccessReducer from "./successReducer";
import guessedWords from "./guessedWords";
import secretWord from "./secretWordReducer";

export default combineReducers({
  success: SuccessReducer,
  guessedWords,
  secretWord
});
