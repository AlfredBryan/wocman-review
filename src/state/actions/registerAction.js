import { axios } from "../../utils/axios";
import {
  CLEAR_REGISTER_TOAST,
  REGISTER_FAIL,
  REGISTER_PENDING,
  REGISTER_SUCCESS,
} from "../constants";

export const registerPending = () => {
  return {
    type: REGISTER_PENDING,
  };
};

export const registerSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
};

export const registerFail = (payload) => {
  return {
    type: REGISTER_FAIL,
    payload,
  };
};

export const clearRegisterToast = () => {
  return {
    type: CLEAR_REGISTER_TOAST,
  };
};

export const register = (body, isWocman) => async (dispatch) => {
  dispatch(registerPending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`${isWocman ? "/auth/wocman-signup" : ""}`, body);

    if (status === true) {
      dispatch(registerSuccess(data));
    } else {
      dispatch(registerFail(data));
    }
  } catch (err) {
    dispatch(registerFail(err.response && err.response.data));
  }
};
