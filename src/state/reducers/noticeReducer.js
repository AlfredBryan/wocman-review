import {
    NOTICE_FAIL,
    NOTICE_PENDING,
    NOTICE_SUCCESS,
    CLEAR_NOTICE_TOAST,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const noticeReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case NOTICE_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case NOTICE_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case NOTICE_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message
      };

      case CLEAR_NOTICE_TOAST: 
      return {
        ...initialState
      }

    default:
      return state;
  }
};
