import { axios } from "../../utils/axios";
import {
	CLEAR_LOGIN_TOAST,
	LOGIN_FAIL,
	LOGIN_PENDING,
	LOGIN_SUCCESS,
	LOGOUT,
} from "../constants";

export const loginPending = () => {
	return {
		type: LOGIN_PENDING,
	};
};

export const loginSuccess = (payload) => {
	return {
		type: LOGIN_SUCCESS,
		payload,
	};
};

export const loginFail = (payload) => {
	return {
		type: LOGIN_FAIL,
		payload,
	};
};

export const clearLoginToast = () => {
	return {
		type: CLEAR_LOGIN_TOAST,
	};
};

export const login = (body) => async (dispatch) => {
	dispatch(loginPending());
	try {
		const { data } = await axios.post("/auth/wocman-signin", body);

		if (data?.status === true) {
			localStorage.setItem("wocman_token", data?.data?.accessToken);
			localStorage.setItem("wocman_user", JSON.stringify(data?.data));
			dispatch(loginSuccess(data));
		} else {
			localStorage.clear();
			dispatch(loginFail(data));
		}
	} catch (err) {
		localStorage.clear();
		dispatch(loginFail(err.response && err.response.data));
	}
};

export const logout = () => {
	localStorage.clear();
	return {
		type: LOGOUT,
	};
};
