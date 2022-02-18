import { axios } from "../../utils/axios";
import {
  CLEAR_CUSTOMER_SEND_CHAT_TOAST,
  CUSTOMER_SEND_CHAT_PENDING,
  CUSTOMER_SEND_CHAT_SUCCESS,
  CUSTOMER_SEND_CHAT_FAIL,
} from "../constants";
import { wocmanChat } from "./wocmanChatAction";
export const customerSendChatPending = () => {
  return {
    type: CUSTOMER_SEND_CHAT_PENDING,
  };
};

export const customerSendChatSuccess = (payload) => {
  return {
    type: CUSTOMER_SEND_CHAT_SUCCESS,
    payload,
  };
};

export const customerSendChatFail = (payload) => {
  return {
    type: CUSTOMER_SEND_CHAT_FAIL,
    payload,
  };
};

export const clearCustomerSendChatToast = () => {
  return {
    type: CLEAR_CUSTOMER_SEND_CHAT_TOAST,
  };
};

export const customerSendChat =
  ({ wocmanid, message, projectid, messageType }, chatData) =>
  async (dispatch) => {
    dispatch(customerSendChatPending());
    try {
      const {
        data: { data, status },
      } = await axios.post(
        `/customer/chat/send`,
        new URLSearchParams(
          { wocmanid, message, projectid, messageType },
          {
            headers: { "content-type": "application/x-www-form-urlencoded" },
          }
        )
      );

      if (status === true) {
        dispatch(customerSendChatSuccess(data));
        dispatch(wocmanChat(chatData));
      } else {
        dispatch(customerSendChatFail(data));
      }
    } catch (err) {
      dispatch(customerSendChatFail(err.response && err.response.data));
    }
  };
