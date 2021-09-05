import {
  CLEAR_SEND_CHAT_TOAST,
  SEND_CHAT_PENDING,
  SEND_CHAT_SUCCESS,
  SEND_CHAT_FAIL
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const sendChatReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SEND_CHAT_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case SEND_CHAT_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case SEND_CHAT_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message,
      };

    case CLEAR_SEND_CHAT_TOAST:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
