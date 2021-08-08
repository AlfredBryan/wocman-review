import {
  COMPLETE_PROJECT_PENDING,
  COMPLETE_PROJECT_SUCCESS,
  COMPLETE_PROJECT_FAIL,
  CLEAR_COMPLETE_PROJECT_TOAST,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const completeProjectReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case COMPLETE_PROJECT_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case COMPLETE_PROJECT_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case COMPLETE_PROJECT_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message,
      };

    case CLEAR_COMPLETE_PROJECT_TOAST:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
