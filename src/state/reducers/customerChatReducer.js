import {
    CUSTOMER_CHAT_FAIL,
	CUSTOMER_CHAT_PENDING,
	CUSTOMER_CHAT_SUCCESS,
	CLEAR_CUSTOMER_CHAT_TOAST
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const customerChatReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case CUSTOMER_CHAT_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case CUSTOMER_CHAT_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case CUSTOMER_CHAT_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message
      };

      case CLEAR_CUSTOMER_CHAT_TOAST: 
      return {
        ...initialState
      }

    default:
      return state;
  }
};
