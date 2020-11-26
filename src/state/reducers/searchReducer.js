import {
  SEARCH_WOCMEN_FAIL,
  SEARCH_WOCMEN_PENDING,
  SEARCH_WOCMEN_SUCCESS,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
};

export const searchReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SEARCH_WOCMEN_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
      };
    case SEARCH_WOCMEN_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
      };
    case SEARCH_WOCMEN_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
