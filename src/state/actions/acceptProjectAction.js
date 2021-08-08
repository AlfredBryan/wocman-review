import { axios } from "../../utils/axios";
import {
  ACCEPT_PROJECT_PENDING,
  ACCEPT_PROJECT_SUCCESS,
  ACCEPT_PROJECT_FAIL,
  CLEAR_ACCEPT_PROJECT_TOAST,
} from "../constants";

export const acceptProjectPending = () => {
  return {
    type: ACCEPT_PROJECT_PENDING,
  };
};

export const acceptProjectSuccess = (payload) => {
  return {
    type: ACCEPT_PROJECT_SUCCESS,
    payload,
  };
};

export const acceptProjectFail = (payload) => {
  return {
    type: ACCEPT_PROJECT_FAIL,
    payload,
  };
};

export const clearAcceptProjectToast = () => {
  return {
    type: CLEAR_ACCEPT_PROJECT_TOAST,
  };
};

export const acceptProject = () => async (dispatch) => {
  dispatch(acceptProjectPending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/wocman-accept-project`);

    if (status === true) {
      dispatch(acceptProjectSuccess(data));
    } else {
      dispatch(acceptProjectFail(data));
    }
  } catch (err) {
    dispatch(acceptProjectFail(err.response && err.response.data));
  }
};
