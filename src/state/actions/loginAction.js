import { axios } from "../../utils/axios";
import {
	CLEAR_LOGIN_TOAST,
	LOGIN_FAIL,
	LOGIN_PENDING,
	LOGIN_SUCCESS,
	LOGOUT,
} from "../constants";
import { setAuthToken } from "../../utils/axios";

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

export const login = (body, googleAuth = false) => async (dispatch) => {
	dispatch(loginPending());
	try {
		let url = googleAuth ? "/google-auth/wocman-signin" : "/auth/wocman-signin";
		const { data } = await axios.post(url, body);

		console.log(data, "login data");
		if (data?.status === true) {
			if (!data?.isotp && !data?.isdevice && !data?.isOtp) {
				localStorage.setItem("wocman_token", data?.data?.accessToken);
				localStorage.setItem("wocman_user", JSON.stringify(data?.data));
			}
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

export const logout = () => async (dispatch) => {
	if (localStorage["wocman_token"]) {
		setAuthToken(localStorage["wocman_token"]);
	}
	try {
		const res = await axios.post("/wocman-logout");
		console.log(res);
	} catch (err) {
		console.log(err);
	} finally {
		localStorage.clear();
		dispatch({
			type: LOGOUT,
		});
	}
};
