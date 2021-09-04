import { axios } from "../../utils/axios";
import {
	CONTACTS_FAIL,
	CONTACTS_PENDING,
	CONTACTS_SUCCESS,
	CLEAR_CONTACTS_TOAST
} from "../constants";

export const contactsPending = () => {
	return {
		type: CONTACTS_PENDING,
	};
};

export const contactsSuccess = (payload) => {
	return {
		type: CONTACTS_SUCCESS,
		payload,
	};
};

export const contactsFail = (payload) => {
	return {
		type: CONTACTS_FAIL,
		payload,
	};
};

export const clearContactsToast = () => {
	return {
		type: CLEAR_CONTACTS_TOAST,
	};
};

export const contacts = () => async (dispatch) => {
	dispatch(contactsPending());
  try {
    const {
      data: { data, status },
    } = await axios.post('/wocman/chat/contacts');

    if (status === true) {
      dispatch(contactsSuccess(data));
    } else {
      dispatch(contactsFail(data));
    }
  } catch (err) {
    dispatch(contactsFail(err.response && err.response.data));
  }
};
