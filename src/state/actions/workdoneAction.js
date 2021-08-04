import { axios } from "../../utils/axios";
import {
  WORKDONE_FAIL,
  WORKDONE_PENDING,
  WORKDONE_SUCCESS,
  CLEAR_WORKDONE_TOAST,
} from "../constants";

export const workdonePending = () => {
  return {
    type: WORKDONE_PENDING,
  };
};

export const workdoneSuccess = (payload) => {
  return {
    type: WORKDONE_SUCCESS,
    payload,
  };
};

export const workdoneFail = (payload) => {
  return {
    type: WORKDONE_FAIL,
    payload,
  };
};

export const clearworkdoneToast = () => {
  return {
    type: CLEAR_WORKDONE_TOAST,
  };
};

export const workdone = () => async (dispatch) => {
  dispatch(workdonePending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/dashboard-workdone-details`);

    if (status === true) {
      dispatch(workdoneSuccess(data));
    } else {
      dispatch(workdoneFail(data));
    }
  } catch (err) {
    dispatch(workdoneFail(err.response && err.response.data));
  }
};
