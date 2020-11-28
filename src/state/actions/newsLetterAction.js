import { axios } from "../../utils/axios";
import {
  CLEAR_NEWSLETTER_TOAST,
  NEWSLETTER_FAIL,
  NEWSLETTER_PENDING,
  NEWSLETTER_SUCCESS,
} from "../constants";

export const newsLetterPending = () => {
  return {
    type: NEWSLETTER_PENDING,
  };
};

export const newsLetterSuccess = (payload) => {
  return {
    type: NEWSLETTER_SUCCESS,
    payload,
  };
};

export const newsLetterFail = (payload) => {
  return {
    type: NEWSLETTER_FAIL,
    payload,
  };
};

export const clearNewsToast = () => {
  return {
    type: CLEAR_NEWSLETTER_TOAST,
  };
};

export const newsLetter = (body) => async (dispatch) => {
  dispatch(newsLetterPending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/subscribe-news-letters`, body);

    if (status === true) {
      dispatch(newsLetterSuccess(data));
    } else {
      dispatch(newsLetterFail(data));
    }
  } catch (err) {
    dispatch(newsLetterFail(err.response && err.response.data));
  }
};
