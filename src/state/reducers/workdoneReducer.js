import {
    WORKDONE_FAIL,
  WORKDONE_PENDING,
  WORKDONE_SUCCESS,
  CLEAR_WORKDONE_TOAST,
} from "../constants";

const initialState = {
  isLoading: false,
  result: null,
  error: false,
  message: null,
};

export const workdoneReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case WORKDONE_PENDING:
      return {
        ...state,
        isLoading: true,
        result: null,
        error: false,
        message: null,
      };
    case WORKDONE_SUCCESS:
      return {
        ...state,
        result: payload,
        isLoading: false,
        error: false,
        message: null,
      };
    case WORKDONE_FAIL:
      return {
        ...state,
        result: null,
        isLoading: false,
        error: true,
        message: payload && payload.message
      };

      case CLEAR_WORKDONE_TOAST: 
      return {
        ...initialState
      }

    default:
      return state;
  }
};
