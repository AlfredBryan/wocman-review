import {
  FETCH_PROJECT_PENDING,
  FETCH_PROJECT_SUCCESS,
  FETCH_PROJECT_FAIL,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const fetchProjectCustomerReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_PROJECT_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case FETCH_PROJECT_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case FETCH_PROJECT_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message,
      };

    default:
      return state;
  }
};
