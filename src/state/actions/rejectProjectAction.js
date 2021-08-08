import { axios } from "../../utils/axios";
import {
  REJECT_PROJECT_PENDING,
  REJECT_PROJECT_SUCCESS,
  REJECT_PROJECT_FAIL,
  CLEAR_REJECT_PROJECT_TOAST,
} from "../constants";

export const rejectProjectPending = () => {
  return {
    type: REJECT_PROJECT_PENDING,
  };
};

export const rejectProjectSuccess = (payload) => {
  return {
    type: REJECT_PROJECT_SUCCESS,
    payload,
  };
};

export const rejectProjectFail = (payload) => {
  return {
    type: REJECT_PROJECT_FAIL,
    payload,
  };
};

export const clearRejectProjectToast = () => {
  return {
    type: CLEAR_REJECT_PROJECT_TOAST,
  };
};

export const rejectProject = () => async (dispatch) => {
  dispatch(rejectProjectPending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/wocman-reject-project`);

    if (status === true) {
      dispatch(rejectProjectSuccess(data));
    } else {
      dispatch(rejectProjectFail(data));
    }
  } catch (err) {
    dispatch(rejectProjectFail(err.response && err.response.data));
  }
};
