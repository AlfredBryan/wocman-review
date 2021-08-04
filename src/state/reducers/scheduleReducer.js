import {
    SCHEDULE_FAIL,
    SCHEDULE_PENDING,
    SCHEDULE_SUCCESS,
    CLEAR_SCHEDULE_TOAST,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const scheduleReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SCHEDULE_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case SCHEDULE_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case SCHEDULE_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message
      };

      case CLEAR_SCHEDULE_TOAST: 
      return {
        ...initialState
      }

    default:
      return state;
  }
};
