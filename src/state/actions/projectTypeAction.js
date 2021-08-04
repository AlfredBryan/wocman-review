import { axios } from "../../utils/axios";
import {
  PROJECT_TYPE_FAIL,
  PROJECT_TYPE_PENDING,
  PROJECT_TYPE_SUCCESS,
  CLEAR_PROJECT_TYPE_TOAST,
} from "../constants";

export const projectTypePending = () => {
  return {
    type: PROJECT_TYPE_PENDING,
  };
};

export const projectTypeSuccess = (payload) => {
  return {
    type: PROJECT_TYPE_SUCCESS,
    payload,
  };
};

export const projectTypeFail = (payload) => {
  return {
    type: PROJECT_TYPE_FAIL,
    payload,
  };
};

export const clearProjectTypeToast = () => {
  return {
    type: CLEAR_PROJECT_TYPE_TOAST,
  };
};

export const projectType = () => async (dispatch) => {
  dispatch(projectTypePending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/dashboard-project-type`);

    if (status === true) {
      dispatch(projectTypeSuccess(data));
    } else {
      dispatch(projectTypeFail(data));
    }
  } catch (err) {
    dispatch(projectTypeFail(err.response && err.response.data));
  }
};
