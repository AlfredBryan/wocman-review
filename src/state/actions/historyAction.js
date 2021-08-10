import { axios } from "../../utils/axios";
import {
  HISTORY_FAIL,
  HISTORY_PENDING,
  HISTORY_SUCCESS,
  CLEAR_HISTORY_TOAST,
} from "../constants";

export const historyPending = () => {
  return {
    type: HISTORY_PENDING,
  };
};

export const historySuccess = (payload) => {
  return {
    type: HISTORY_SUCCESS,
    payload,
  };
};

export const historyFail = (payload) => {
  return {
    type: HISTORY_FAIL,
    payload,
  };
};

export const clearHistoryToast = () => {
  return {
    type: CLEAR_HISTORY_TOAST,
  };
};

export const history = () => async (dispatch) => {
  dispatch(historyPending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/wocman-history`);

    if (status === true) {
      dispatch(historySuccess(data));
    } else {
      dispatch(historyFail(data));
    }
  } catch (err) {
    dispatch(historyFail(err.response && err.response.data));
  }
};
