import { axios } from "../../utils/axios";
import {
  NOTICE_FAIL,
  NOTICE_PENDING,
  NOTICE_SUCCESS,
  CLEAR_NOTICE_TOAST,
} from "../constants";

export const noticePending = () => {
  return {
    type: NOTICE_PENDING,
  };
};

export const noticeSuccess = (payload) => {
  return {
    type: NOTICE_SUCCESS,
    payload,
  };
};

export const noticeFail = (payload) => {
  return {
    type: NOTICE_FAIL,
    payload,
  };
};

export const clearNoticeToast = () => {
  return {
    type: CLEAR_NOTICE_TOAST,
  };
};

export const notice = () => async (dispatch) => {
  dispatch(noticePending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/dashboard-notice`);

    if (status === true) {
      dispatch(noticeSuccess(data));
    } else {
      dispatch(noticeFail(data));
    }
  } catch (err) {
    dispatch(noticeFail(err.response && err.response.data));
  }
};
