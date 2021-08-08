import {
  STOP_PROJECT_PENDING,
  STOP_PROJECT_SUCCESS,
  STOP_PROJECT_FAIL,
  CLEAR_STOP_PROJECT_TOAST,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const stopProjectReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case STOP_PROJECT_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case STOP_PROJECT_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case STOP_PROJECT_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message,
      };

    case CLEAR_STOP_PROJECT_TOAST:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
