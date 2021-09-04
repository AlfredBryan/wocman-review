import {
    CONTACTS_FAIL,
	CONTACTS_PENDING,
	CONTACTS_SUCCESS,
	CLEAR_CONTACTS_TOAST
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const contactsReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case CONTACTS_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case CONTACTS_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case CONTACTS_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message
      };

      case CLEAR_CONTACTS_TOAST: 
      return {
        ...initialState
      }

    default:
      return state;
  }
};
