import { axios } from "../../utils/axios";
import {
  WALLET_FAIL,
  WALLET_PENDING,
  WALLET_SUCCESS,
  CLEAR_WALLET_TOAST,
} from "../constants";

export const walletPending = () => {
  return {
    type: WALLET_PENDING,
  };
};

export const walletSuccess = (payload) => {
  return {
    type: WALLET_SUCCESS,
    payload,
  };
};

export const walletFail = (payload) => {
  return {
    type: WALLET_FAIL,
    payload,
  };
};

export const clearWalletToast = () => {
  return {
    type: CLEAR_WALLET_TOAST,
  };
};

export const wallet = () => async (dispatch) => {
  dispatch(walletPending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/dashboard-wallet-details`);

    if (status === true) {
      dispatch(walletSuccess(data));
    } else {
      dispatch(walletFail(data));
    }
  } catch (err) {
    dispatch(walletFail(err.response && err.response.data));
  }
};
