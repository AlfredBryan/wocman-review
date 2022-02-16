import {
  WOCMAN_CHAT_FAIL,
  WOCMAN_CHAT_PENDING,
  WOCMAN_CHAT_SUCCESS,
  CLEAR_WOCMAN_CHAT_TOAST,
} from "../constants";

const initialState = {
  isLoading: false,
  result: {
    chat: [],
    accessToken: null,
    customer: [],
  },
  error: false,
  message: null,
};

export const wocmanChatReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case WOCMAN_CHAT_PENDING:
      return {
        ...state,
        isLoading: true,
        error: false,
        message: null,
      };
    case WOCMAN_CHAT_SUCCESS:
      console.log(payload, "<><><><><<<<<<<<<<<");
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case WOCMAN_CHAT_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message,
      };

    case CLEAR_WOCMAN_CHAT_TOAST:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
