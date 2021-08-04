import { axios } from "../../utils/axios";
import {
  RATINGS_FAIL,
  RATINGS_PENDING,
  RATINGS_SUCCESS,
  CLEAR_RATINGS_TOAST,
} from "../constants";

export const ratingsPending = () => {
  return {
    type: RATINGS_PENDING,
  };
};

export const ratingsSuccess = (payload) => {
  return {
    type: RATINGS_SUCCESS,
    payload,
  };
};

export const ratingsFail = (payload) => {
  return {
    type: RATINGS_FAIL,
    payload,
  };
};

export const clearRatingsToast = () => {
  return {
    type: CLEAR_RATINGS_TOAST,
  };
};

export const ratings = () => async (dispatch) => {
  dispatch(ratingsPending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/dashboard-ratings`);

    if (status === true) {
      dispatch(ratingsSuccess(data));
    } else {
      dispatch(ratingsFail(data));
    }
  } catch (err) {
    dispatch(ratingsFail(err.response && err.response.data));
  }
};
