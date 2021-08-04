import { axios } from "../../utils/axios";
import {
  COMPLETED_FAIL,
  COMPLETED_PENDING,
  COMPLETED_SUCCESS,
  CLEAR_COMPLETED_TOAST,
} from "../constants";

export const completedPending = () => {
  return {
    type: COMPLETED_PENDING,
  };
};

export const completedSuccess = (payload) => {
  return {
    type: COMPLETED_SUCCESS,
    payload,
  };
};

export const completedFail = (payload) => {
  return {
    type: COMPLETED_FAIL,
    payload,
  };
};

export const clearCompletedToast = () => {
  return {
    type: CLEAR_COMPLETED_TOAST,
  };
};

export const completed = () => async (dispatch) => {
  dispatch(completedPending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/dashboard-completed`);

    if (status === true) {
      dispatch(completedSuccess(data));
    } else {
      dispatch(completedFail(data));
    }
  } catch (err) {
    dispatch(completedFail(err.response && err.response.data));
  }
};
