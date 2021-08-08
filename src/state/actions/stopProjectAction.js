import { axios } from "../../utils/axios";
import {
  STOP_PROJECT_PENDING,
  STOP_PROJECT_SUCCESS,
  STOP_PROJECT_FAIL,
  CLEAR_STOP_PROJECT_TOAST,
} from "../constants";

export const stopProjectPending = () => {
  return {
    type: STOP_PROJECT_PENDING,
  };
};

export const stopProjectSuccess = (payload) => {
  return {
    type: STOP_PROJECT_SUCCESS,
    payload,
  };
};

export const stopProjectFail = (payload) => {
  return {
    type: STOP_PROJECT_FAIL,
    payload,
  };
};

export const clearStopProjectToast = () => {
  return {
    type: CLEAR_STOP_PROJECT_TOAST,
  };
};

export const stopProject = () => async (dispatch) => {
  dispatch(stopProjectPending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/wocman-stop-project`);

    if (status === true) {
      dispatch(stopProjectSuccess(data));
    } else {
      dispatch(stopProjectFail(data));
    }
  } catch (err) {
    dispatch(stopProjectFail(err.response && err.response.data));
  }
};
