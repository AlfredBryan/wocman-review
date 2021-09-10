import { axios } from "../../utils/axios";
import {
  FETCH_PROJECT_PENDING,
  FETCH_PROJECT_SUCCESS,
  FETCH_PROJECT_FAIL
} from "../constants";

export const fetchProjectCustomerPending = () => {
  return {
    type: FETCH_PROJECT_PENDING,
  };
};

export const fetchProjectCustomerSuccess = (payload) => {
  return {
    type: FETCH_PROJECT_SUCCESS,
    payload,
  };
};

export const fetchProjectCustomerFail = (payload) => {
  return {
    type: FETCH_PROJECT_FAIL,
    payload,
  };
};

export const fetchProjectCustomer = (id) => async (dispatch) => {
  dispatch(fetchProjectCustomerPending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/wocman-project-customer`, {projectid: id});

    if (status === true) {
      dispatch(fetchProjectCustomerSuccess(data));
    } else {
      dispatch(fetchProjectCustomerFail(data));
    }
  } catch (err) {
    dispatch(fetchProjectCustomerFail(err.response && err.response.data));
  }
};
