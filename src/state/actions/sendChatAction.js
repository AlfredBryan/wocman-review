import { axios } from "../../utils/axios";
import {
  CLEAR_SEND_CHAT_TOAST,
  SEND_CHAT_PENDING,
  SEND_CHAT_SUCCESS,
  SEND_CHAT_FAIL,
} from "../constants";

export const sendChatPending = () => {
  return {
    type: SEND_CHAT_PENDING,
  };
};

export const sendChatSuccess = (payload) => {
  return {
    type: SEND_CHAT_SUCCESS,
    payload,
  };
};

export const sendChatFail = (payload) => {
  return {
    type: SEND_CHAT_FAIL,
    payload,
  };
};

export const clearSendChatToast = () => {
  return {
    type: CLEAR_SEND_CHAT_TOAST,
  };
};

export const sendChat = (body) => async (dispatch) => {
  dispatch(sendChatPending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/wocman-project-customer-chat-save`, body);

    if (status === true) {
      dispatch(sendChatSuccess(data));
    } else {
      dispatch(sendChatFail(data));
    }
  } catch (err) {
    dispatch(sendChatFail(err.response && err.response.data));
  }
};
