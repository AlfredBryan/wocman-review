import {
    PROJECT_CUSTOMER_FAIL,
    PROJECT_CUSTOMER_PENDING,
    PROJECT_CUSTOMER_SUCCESS,
    CLEAR_PROJECT_CUSTOMER_TOAST,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const projectCustomerReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case PROJECT_CUSTOMER_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case PROJECT_CUSTOMER_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case PROJECT_CUSTOMER_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message
      };

      case CLEAR_PROJECT_CUSTOMER_TOAST: 
      return {
        ...initialState
      }

    default:
      return state;
  }
};
