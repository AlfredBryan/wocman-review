import { axios } from "../../utils/axios";

import {
  LOG_CHAT_PENDING,
  LOG_CHAT_SUCCESS,
  LOG_CHAT_FAIL,
} from "../constants";

export const logChatPending = () => {
  return {
    type: LOG_CHAT_PENDING,
  };
};

export const logChatSuccess = (payload) => {
  return {
    type: LOG_CHAT_SUCCESS,
    payload,
  };
};

export const logChatFail = (payload) => {
  return {
    type: LOG_CHAT_FAIL,
    payload,
  };
};

export const logChat = () => async (dispatch) => {
  dispatch(logChatPending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/wocman-project-customer-chat-log`);

    if (status === true) {
      dispatch(logChatSuccess(data));
    } else {
      dispatch(logChatFail(data));
    }
  } catch (err) {
    dispatch(logChatFail(err.response && err.response.data));
  }
};
