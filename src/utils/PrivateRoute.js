import * as React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const isAuthenticated = !!localStorage["wocman_user"] &!!localStorage["wocman_token"]
	return (
		<Route
			{...rest}
			render={(props) =>
				!isAuthenticated ? (
					<Redirect to="/login" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default PrivateRoute;
