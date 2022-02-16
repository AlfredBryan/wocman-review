import {
  JOB_CONTACTS_FAIL,
  JOB_CONTACTS_PENDING,
  JOB_CONTACTS_SUCCESS,
  CLEAR_JOB_CONTACTS_TOAST,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const jobContactsReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case JOB_CONTACTS_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case JOB_CONTACTS_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case JOB_CONTACTS_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message,
      };

    case CLEAR_JOB_CONTACTS_TOAST:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
