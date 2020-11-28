import {
    CLEAR_CONTACT_TOAST,
  CONTACT_FAIL,
  CONTACT_PENDING,
  CONTACT_SUCCESS,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const contactReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case CONTACT_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case CONTACT_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case CONTACT_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message
      };

      case CLEAR_CONTACT_TOAST: 
      return {
        ...initialState
      }

    default:
      return state;
  }
};
