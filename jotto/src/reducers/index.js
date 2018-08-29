import { combineReducers } from "redux";
import SuccessReducer from "./successReducer";
import guessedWords from "./guessedWords";

export default combineReducers({
  success: SuccessReducer,
  guessedWords
});
