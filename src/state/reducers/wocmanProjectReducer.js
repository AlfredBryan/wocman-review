import {
    WOCMAN_PROJECT_FAIL,
    WOCMAN_PROJECT_PENDING,
    WOCMAN_PROJECT_SUCCESS,
    CLEAR_WOCMAN_PROJECT_TOAST,
  } from "../constants";
  
  const initialState = {
    isLoading: false,
    result: null,
    error: false,
    message: null,
  };
  
  export const wocmanProjectReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
      case WOCMAN_PROJECT_PENDING:
        return {
          ...state,
          isLoading: true,
          result: null,
          error: false,
          message: null,
        };
      case WOCMAN_PROJECT_SUCCESS:
        return {
          ...state,
          result: payload,
          isLoading: false,
          error: false,
          message: null,
        };
      case WOCMAN_PROJECT_FAIL:
        return {
          ...state,
          result: null,
          isLoading: false,
          error: true,
          message: payload && payload.message
        };
  
        case CLEAR_WOCMAN_PROJECT_TOAST: 
        return {
          ...initialState
        }
  
      default:
        return state;
    }
  };
  