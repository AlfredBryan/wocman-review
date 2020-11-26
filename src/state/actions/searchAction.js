import { axios } from "../../utils/axios";
import {
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

export const searchWocmen = (query) => async (dispatch) => {
  dispatch(searchWocmenPending());
  try {
    const { data, status } = await axios(`/get-location/${query}`);
    console.log(data);
    if (status === true) {
      dispatch(searchWocmenSuccess(data));
    } else {
      dispatch(searchWocmenFail());
    }
  } catch (_) {
    dispatch(searchWocmenFail());
  }
};
