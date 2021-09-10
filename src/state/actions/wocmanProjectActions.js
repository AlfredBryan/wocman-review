import { axios } from "../../utils/axios";
import {
    WOCMAN_PROJECT_FAIL,
    WOCMAN_PROJECT_PENDING,
    WOCMAN_PROJECT_SUCCESS,
    CLEAR_WOCMAN_PROJECT_TOAST,
} from "../constants";

export const wocmanProjectPending = () => {
  return {
    type: WOCMAN_PROJECT_PENDING,
  };
};

export const wocmanProjectSuccess = (payload) => {
  return {
    type: WOCMAN_PROJECT_SUCCESS,
    payload,
  };
};

export const wocmanProjectFail = (payload) => {
  return {
    type: WOCMAN_PROJECT_FAIL,
    payload,
  };
};

export const clearWocmanProjectToast = () => {
  return {
    type: CLEAR_WOCMAN_PROJECT_TOAST,
  };
};

export const wocmanProject = (projectid) => async (dispatch) => {
    dispatch(wocmanProjectPending());
    try {
        const {
            data
        } = await axios.post('/wocman-project', {projectid});
    if (data) {
        dispatch(wocmanProjectSuccess(data));
    } else {
        dispatch(wocmanProjectFail(data));
    }
  } catch (err) {
    dispatch(wocmanProjectFail(err.response && err.response.data));
  }
};
