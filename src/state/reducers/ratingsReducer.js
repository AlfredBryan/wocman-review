import {
    RATINGS_FAIL,
    RATINGS_PENDING,
    RATINGS_SUCCESS,
    CLEAR_RATINGS_TOAST,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const ratingsReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case RATINGS_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case RATINGS_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case RATINGS_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message
      };

      case CLEAR_RATINGS_TOAST: 
      return {
        ...initialState
      }

    default:
      return state;
  }
};
