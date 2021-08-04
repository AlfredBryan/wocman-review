import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { loginReducer } from "./loginReducer";
import { newsLetterReducer } from "./newsletterReducer";
import { registerReducer } from "./registerReducer";
import { searchReducer } from "./searchReducer";
import { workdoneReducer } from "./workdoneReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  newsLetter: newsLetterReducer,
  contact: contactReducer,
  register: registerReducer,
  login: loginReducer,
  workdone: workdoneReducer,
});

export default rootReducer;
