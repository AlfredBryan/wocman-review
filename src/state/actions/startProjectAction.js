import { axios } from "../../utils/axios";
import {
START_PROJECT_PENDING,
START_PROJECT_SUCCESS,
START_PROJECT_FAIL,
CLEAR_START_PROJECT_TOAST
} from "../constants";

export const startProjectPending = () => {
  return {
    type: START_PROJECT_PENDING,
  };
};

export const startProjectSuccess = (payload) => {
  return {
    type: START_PROJECT_SUCCESS,
    payload,
  };
};

export const startProjectFail = (payload) => {
  return {
    type: START_PROJECT_FAIL,
    payload,
  };
};

export const clearStartProjectToast = () => {
  return {
    type: CLEAR_START_PROJECT_TOAST,
  };
};

export const startProject = () => async (dispatch) => {
  dispatch(startProjectPending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/wocman-start-project`);

    if (status === true) {
      dispatch(startProjectSuccess(data));
    } else {
      dispatch(startProjectFail(data));
    }
  } catch (err) {
    dispatch(startProjectFail(err.response && err.response.data));
  }
};
