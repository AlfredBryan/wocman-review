import { axios } from "../../utils/axios";
import {
  CLEAR_LOGIN_TOAST,
  LOGIN_FAIL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
} from "../constants";

export const loginPending = () => {
  return {
    type: LOGIN_PENDING,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginFail = (payload) => {
  return {
    type: LOGIN_FAIL,
    payload,
  };
};

export const clearLoginToast = () => {
  return {
    type: CLEAR_LOGIN_TOAST,
  };
};

export const login = (body) => async (dispatch) => {
  dispatch(loginPending());
  try {
    const {
      data: { data, status },
    } = await axios.post("/auth/wocman-signin", body);

    if (status === true) {
      dispatch(loginSuccess(data));
    } else {
      dispatch(loginFail(data));
    }
  } catch (err) {
    dispatch(loginFail(err.response && err.response.data));
  }
};
