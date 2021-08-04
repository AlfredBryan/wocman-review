import {
    WALLET_FAIL,
    WALLET_PENDING,
    WALLET_SUCCESS,
    CLEAR_WALLET_TOAST,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const walletReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case WALLET_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case WALLET_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case WALLET_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message
      };

      case CLEAR_WALLET_TOAST: 
      return {
        ...initialState
      }

    default:
      return state;
  }
};
