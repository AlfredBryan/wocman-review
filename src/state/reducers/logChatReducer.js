import {
  LOG_CHAT_PENDING,
  LOG_CHAT_SUCCESS,
  LOG_CHAT_FAIL,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const logChatReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOG_CHAT_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case LOG_CHAT_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case LOG_CHAT_FAIL:
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
