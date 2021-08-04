import {
    COMPLETED_FAIL,
    COMPLETED_PENDING,
    COMPLETED_SUCCESS,
    CLEAR_COMPLETED_TOAST,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const completedReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case COMPLETED_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case COMPLETED_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case COMPLETED_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message
      };

      case CLEAR_COMPLETED_TOAST: 
      return {
        ...initialState
      }

    default:
      return state;
  }
};
