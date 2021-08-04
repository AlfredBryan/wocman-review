import { axios } from "../../utils/axios";
import {
  PROJECT_CUSTOMER_FAIL,
  PROJECT_CUSTOMER_PENDING,
  PROJECT_CUSTOMER_SUCCESS,
  CLEAR_PROJECT_CUSTOMER_TOAST,
} from "../constants";

export const projectCustomerPending = () => {
  return {
    type: PROJECT_CUSTOMER_PENDING,
  };
};

export const projectCustomerSuccess = (payload) => {
  return {
    type: PROJECT_CUSTOMER_SUCCESS,
    payload,
  };
};

export const projectCustomerFail = (payload) => {
  return {
    type: PROJECT_CUSTOMER_FAIL,
    payload,
  };
};

export const clearProjectCustomerToast = () => {
  return {
    type: CLEAR_PROJECT_CUSTOMER_TOAST,
  };
};

export const projectCustomer = () => async (dispatch) => {
  dispatch(projectCustomerPending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/dashboard-project-customer`);

    if (status === true) {
      dispatch(projectCustomerSuccess(data));
    } else {
      dispatch(projectCustomerFail(data));
    }
  } catch (err) {
    dispatch(projectCustomerFail(err.response && err.response.data));
  }
};
