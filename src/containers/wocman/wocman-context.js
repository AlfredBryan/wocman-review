import * as React from "react";

export const WocmanContext = React.createContext({
	// confirm: () => {}, example
	settings: {
		smsNotice: false,
		emailNotice: false,
		serviceNotice: false,
		technicalNotice: false,
		twofactor: false,
		deviceSettings: false,
		paymentschedule: false,
		unboard: false,
	},
});
