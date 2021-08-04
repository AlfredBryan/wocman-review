import {
    PROJECT_TYPE_FAIL,
    PROJECT_TYPE_PENDING,
    PROJECT_TYPE_SUCCESS,
    CLEAR_PROJECT_TYPE_TOAST,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const projectTypeReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case PROJECT_TYPE_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case PROJECT_TYPE_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case PROJECT_TYPE_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message
      };

      case CLEAR_PROJECT_TYPE_TOAST: 
      return {
        ...initialState
      }

    default:
      return state;
  }
};
