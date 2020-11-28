import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { newsLetterReducer } from "./newsletterReducer";
import { searchReducer } from "./searchReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  newsLetter: newsLetterReducer,
  contact: contactReducer
});

export default rootReducer;
