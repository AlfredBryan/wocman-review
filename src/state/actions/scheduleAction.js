import { axios } from "../../utils/axios";
import {
  SCHEDULE_FAIL,
  SCHEDULE_PENDING,
  SCHEDULE_SUCCESS,
  CLEAR_SCHEDULE_TOAST,
} from "../constants";

export const schedulePending = () => {
  return {
    type: SCHEDULE_PENDING,
  };
};

export const scheduleSuccess = (payload) => {
  return {
    type: SCHEDULE_SUCCESS,
    payload,
  };
};

export const scheduleFail = (payload) => {
  return {
    type: SCHEDULE_FAIL,
    payload,
  };
};

export const clearScheduleToast = () => {
  return {
    type: CLEAR_SCHEDULE_TOAST,
  };
};

export const schedule = () => async (dispatch) => {
  dispatch(schedulePending());
  try {
    const {
      data: { data, status },
    } = await axios.post(`/dashboard-schedule`);

    if (status === true) {
      dispatch(scheduleSuccess(data));
    } else {
      dispatch(scheduleFail(data));
    }
  } catch (err) {
    dispatch(scheduleFail(err.response && err.response.data));
  }
};
