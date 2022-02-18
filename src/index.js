import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { setAuthToken, axios } from "./utils/axios";
import customTheme from "./theme";

if (localStorage["wocman_token"]) {
	setAuthToken(localStorage["wocman_token"]);
}
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";

ReactDOM.render(
	<React.Fragment>
		<ThemeProvider theme={customTheme}>
			<CSSReset />
			<App />
		</ThemeProvider>
	</React.Fragment>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
