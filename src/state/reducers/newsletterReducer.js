import {
    CLEAR_NEWSLETTER_TOAST,
  NEWSLETTER_FAIL,
  NEWSLETTER_PENDING,
  NEWSLETTER_SUCCESS,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const newsLetterReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case NEWSLETTER_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case NEWSLETTER_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case NEWSLETTER_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message
      };

      case CLEAR_NEWSLETTER_TOAST: 
      return {
        ...initialState
      }

    default:
      return state;
  }
};
