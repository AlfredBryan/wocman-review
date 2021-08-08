import {
  REJECT_PROJECT_PENDING,
  REJECT_PROJECT_SUCCESS,
  REJECT_PROJECT_FAIL,
  CLEAR_REJECT_PROJECT_TOAST,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const rejectProjectReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case REJECT_PROJECT_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case REJECT_PROJECT_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case REJECT_PROJECT_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message,
      };

    case CLEAR_REJECT_PROJECT_TOAST:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
