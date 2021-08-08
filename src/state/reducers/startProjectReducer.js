import {
  START_PROJECT_PENDING,
  START_PROJECT_SUCCESS,
  START_PROJECT_FAIL,
  CLEAR_START_PROJECT_TOAST,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const startProjectReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case START_PROJECT_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case START_PROJECT_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case START_PROJECT_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message,
      };

    case CLEAR_START_PROJECT_TOAST:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
