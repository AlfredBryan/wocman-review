import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { loginReducer } from "./loginReducer";
import { newsLetterReducer } from "./newsletterReducer";
import { registerReducer } from "./registerReducer";
import { searchReducer } from "./searchReducer";
import { workdoneReducer } from "./workdoneReducer";
import { ratingsReducer } from "./ratingsReducer";
import { completedReducer } from "./completedReducer";
import { walletReducer } from "./walletReducer";
import { noticeReducer } from "./noticeReducer";
import { scheduleReducer } from "./scheduleReducer";
import { projectTypeReducer } from "./projectTypeReducer";
import { projectCustomerReducer } from "./projectCustomerReducer";
import { logChatReducer } from "./logChatReducer";
import { sendChatReducer } from "./sendChatReducer";
import { fetchProjectCustomerReducer } from "./fetchProjectCustomerReducer";
import { acceptProjectReducer } from "./acceptProjectReducer";
import { rejectProjectReducer } from "./rejectProjectReducer";
import { startProjectReducer } from "./startProjectReducer";
import { stopProjectReducer } from "./stopProjectReducer";
import { completeProjectReducer } from "./completeProjectReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  newsLetter: newsLetterReducer,
  contact: contactReducer,
  register: registerReducer,
  login: loginReducer,
  workdone: workdoneReducer,
  ratings: ratingsReducer,
  completed: completedReducer,
  wallet: walletReducer,
  notice: noticeReducer,
  schedule: scheduleReducer,
  projectType: projectTypeReducer,
  projectCustomer: projectCustomerReducer,
  logChat: logChatReducer,
  sendChat: sendChatReducer,
  fetchProjectCustomer: fetchProjectCustomerReducer,
  acceptProject: acceptProjectReducer,
  rejectProject: rejectProjectReducer,
  startProject: startProjectReducer,
  stopProject: stopProjectReducer,
  completeProject: completeProjectReducer,
});

export default rootReducer;
