import { axios } from "../../utils/axios";

import {
	CUSTOMER_CHAT_FAIL,
	CUSTOMER_CHAT_PENDING,
	CUSTOMER_CHAT_SUCCESS,
	CLEAR_CUSTOMER_CHAT_TOAST
} from "../constants";

export const customerChatPending = () => {
	return {
		type: CUSTOMER_CHAT_PENDING,
	};
};

export const customerChatSuccess = (payload) => {
	return {
		type: CUSTOMER_CHAT_SUCCESS,
		payload,
	};
};

export const customerChatFail = (payload) => {
	return {
		type: CUSTOMER_CHAT_FAIL,
		payload,
	};
};

export const clearCustomerChatToast = () => {
	return {
		type: CLEAR_CUSTOMER_CHAT_TOAST,
	};
};

export const customerChat = ({customerid, chatLimit, perPage, page, projectid}) => async (dispatch) => {
	dispatch(customerChatPending());
  try {
    const {
      data: { data, status },
    } = await axios.post('/wocman/chat/log', new URLSearchParams({customerid, chatLimit, perPage, page, projectid}));

    if (status === true) {
      dispatch(customerChatSuccess(data));
    } else {
      dispatch(customerChatFail(data));
    }
  } catch (err) {
    dispatch(customerChatFail(err.response && err.response.data));
  }
};
