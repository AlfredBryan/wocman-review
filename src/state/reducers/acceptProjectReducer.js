import {
  ACCEPT_PROJECT_PENDING,
  ACCEPT_PROJECT_SUCCESS,
  ACCEPT_PROJECT_FAIL,
  CLEAR_ACCEPT_PROJECT_TOAST,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const acceptProjectReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ACCEPT_PROJECT_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case ACCEPT_PROJECT_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case ACCEPT_PROJECT_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message,
      };

    case CLEAR_ACCEPT_PROJECT_TOAST:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
