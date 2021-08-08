import { axios } from "../../utils/axios";
import {
  COMPLETE_PROJECT_PENDING,
  COMPLETE_PROJECT_SUCCESS,
  COMPLETE_PROJECT_FAIL,
  CLEAR_COMPLETE_PROJECT_TOAST,
} from "../constants";

export const completeProjectPending = () => {
  return {
    type: COMPLETE_PROJECT_PENDING,
  };
};

export const completeProjectSuccess = (payload) => {
  return {
    type: COMPLETE_PROJECT_SUCCESS,
    payload,
  };
};

export const completeProjectFail = (payload) => {
  return {
    type: COMPLETE_PROJECT_FAIL,
    payload,
  };
};

export const clearCompleteProjectToast = () => {
  return {
    type: CLEAR_COMPLETE_PROJECT_TOAST,
  };
};

export const completeProject = () => async (dispatch) => {
  dispatch(completeProjectPending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/wocman-complete-project`);

    if (status === true) {
      dispatch(completeProjectPending(data));
    } else {
      dispatch(completeProjectFail(data));
    }
  } catch (err) {
    dispatch(completeProjectFail(err.response && err.response.data));
  }
};
