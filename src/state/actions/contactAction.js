import { axios } from "../../utils/axios";
import {
  CLEAR_CONTACT_TOAST,
  CONTACT_FAIL,
  CONTACT_PENDING,
  CONTACT_SUCCESS,
} from "../constants";

export const contactPending = () => {
  return {
    type: CONTACT_PENDING,
  };
};

export const contactSuccess = (payload) => {
  return {
    type: CONTACT_SUCCESS,
    payload,
  };
};

export const contactFail = (payload) => {
  return {
    type: CONTACT_FAIL,
    payload,
  };
};

export const clearContactToast = () => {
  return {
    type: CLEAR_CONTACT_TOAST,
  };
};

export const contact = (body) => async (dispatch) => {
  dispatch(contactPending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/contact-us`, body);

    if (status === true) {
      dispatch(contactSuccess(data));
    } else {
      dispatch(contactFail(data));
    }
  } catch (err) {
    dispatch(contactFail(err.response && err.response.data));
  }
};
