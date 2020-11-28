import { axios } from "../../utils/axios";
import {
  CLEAR_SEARCH_TOAST,
  SEARCH_WOCMEN_FAIL,
  SEARCH_WOCMEN_PENDING,
  SEARCH_WOCMEN_SUCCESS,
} from "../constants";

export const searchWocmenPending = () => {
  return {
    type: SEARCH_WOCMEN_PENDING,
  };
};

export const searchWocmenSuccess = (payload) => {
  return {
    type: SEARCH_WOCMEN_SUCCESS,
    payload,
  };
};

export const searchWocmenFail = () => {
  return {
    type: SEARCH_WOCMEN_FAIL,
  };
};

export const clearSearchToast = () => {
  return {
    type: CLEAR_SEARCH_TOAST,
  };
};

export const searchWocmen = (query) => async (dispatch) => {
  dispatch(searchWocmenPending());
  try {
    const { data : { data, status }} = await axios.get(`/get-location/${query}`);
    if (status === true) {
      dispatch(searchWocmenSuccess(data));
    } else {
      dispatch(searchWocmenFail());
    }
  } catch (_) {
    dispatch(searchWocmenFail());
  }
};
