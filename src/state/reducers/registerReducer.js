import {
  CLEAR_REGISTER_TOAST,
  REGISTER_FAIL,
  REGISTER_PENDING,
  REGISTER_SUCCESS,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const registerReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case REGISTER_PENDING:
      return {
        ...initialState,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: payload && payload.message,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message,
      };

    case CLEAR_REGISTER_TOAST:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
