import { axios } from "../../utils/axios";
import {
  JOB_CONTACTS_FAIL,
  JOB_CONTACTS_PENDING,
  JOB_CONTACTS_SUCCESS,
  CLEAR_JOB_CONTACTS_TOAST,
} from "../constants";

export const jobContactsPending = () => {
  return {
    type: JOB_CONTACTS_PENDING,
  };
};

export const jobContactsSuccess = (payload) => {
  return {
    type: JOB_CONTACTS_SUCCESS,
    payload,
  };
};

export const jobContactsFail = (payload) => {
  return {
    type: JOB_CONTACTS_FAIL,
    payload,
  };
};

export const clearJobContactsToast = () => {
  return {
    type: CLEAR_JOB_CONTACTS_TOAST,
  };
};

export const jobContacts = () => async (dispatch) => {
  dispatch(jobContactsPending());
  try {
    const {
      data: { data, status },
    } = await axios.get("/customer/chat/contacts");

    if (status === true) {
      dispatch(jobContactsSuccess(data));
    } else {
      dispatch(jobContactsFail(data));
    }
  } catch (err) {
    dispatch(jobContactsFail(err.response && err.response.data));
  }
};
