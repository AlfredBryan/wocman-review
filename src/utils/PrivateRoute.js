import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isLoading, isAuthenticated } = useSelector(
		({ login: { isLoading, isAuthenticated } = {} }) => ({
			isLoading,
			isAuthenticated,
		})
	);
	return (
		<Route
			{...rest}
			render={(props) =>
				!isLoading && !isAuthenticated ? (
					<Redirect to="/login" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default PrivateRoute;
