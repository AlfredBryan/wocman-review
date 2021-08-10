import {
    HISTORY_FAIL,
    HISTORY_PENDING,
    HISTORY_SUCCESS,
    CLEAR_HISTORY_TOAST,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const historyReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case HISTORY_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case HISTORY_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case HISTORY_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message
      };

      case CLEAR_HISTORY_TOAST: 
      return {
        ...initialState
      }

    default:
      return state;
  }
};
