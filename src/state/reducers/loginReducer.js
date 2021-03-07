import {
  CLEAR_LOGIN_TOAST,
  LOGIN_FAIL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const loginReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOGIN_PENDING:
      return {
        ...initialState,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: payload && payload.message,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message,
      };

    case CLEAR_LOGIN_TOAST:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
