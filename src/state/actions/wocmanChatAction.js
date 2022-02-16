import { axios } from "../../utils/axios";

import {
	WOCMAN_CHAT_FAIL,
	WOCMAN_CHAT_PENDING,
	WOCMAN_CHAT_SUCCESS,
	CLEAR_WOCMAN_CHAT_TOAST
} from "../constants";

export const wocmanChatPending = () => {
	return {
		type: WOCMAN_CHAT_PENDING,
	};
};

export const wocmanChatSuccess = (payload) => {
	return {
		type: WOCMAN_CHAT_SUCCESS,
		payload,
	};
};

export const wocmanChatFail = (payload) => {
	return {
		type: WOCMAN_CHAT_FAIL,
		payload,
	};
};

export const clearWocmanChatToast = () => {
	return {
		type: CLEAR_WOCMAN_CHAT_TOAST,
	};
};

export const wocmanChat = ({wocmanid, chatLimit, perPage, page, projectid}) => async (dispatch) => {
	dispatch(wocmanChatPending());
  try {
    const {
      data: { data, status },
    } = await axios.get('/customer/chat/log', 
		new URLSearchParams({wocmanid, chatLimit, perPage, page, projectid},
			{
				headers: { 'content-type': 'application/x-www-form-urlencoded' },

			}

		));

    if (status === true) {
      dispatch(wocmanChatSuccess(data));
    } else {
      dispatch(wocmanChatFail(data));
    }
  } catch (err) {
    dispatch(wocmanChatFail(err.response && err.response.data));
  }
};
