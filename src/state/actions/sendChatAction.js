import { axios } from "../../utils/axios";
import {
  CLEAR_SEND_CHAT_TOAST,
  SEND_CHAT_PENDING,
  SEND_CHAT_SUCCESS,
  SEND_CHAT_FAIL,
} from "../constants";
import {customerChat} from './customerChatsAction'
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

export const sendChat = ({customerid, message, projectid, messageType}, chatData) => async (dispatch) => {
  dispatch(sendChatPending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/wocman/chat/send`, new URLSearchParams({customerid, message, projectid, messageType},{
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    }));

    if (status === true) {
      dispatch(sendChatSuccess(data));
      dispatch(customerChat(chatData));


    } else {
      dispatch(sendChatFail(data));
    }
  } catch (err) {
    dispatch(sendChatFail(err.response && err.response.data));
  }
};
