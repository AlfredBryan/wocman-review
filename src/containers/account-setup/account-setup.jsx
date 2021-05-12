import React, { useState } from "react";
import "./account-setup.css";
import PersonalInformation from "./pages/personal-info";
import ProfilePicture from "./pages/profile-picture";
import SkillLevel from "./pages/skills";
import WorkCategory from "./pages/category";

const AccountSetUp = () => {
	const [values, setValues] = useState({
		firstname: "",
		lastname: "",
		phone: "",
		address: "",
		profilePic: "",
		category: "",
		skill: "",
		certificate: "",
	});

	const {
		firstname,
		lastname,
		phone,
		address,
		profilePic,
		category,
		skill,
		certificate,
	} = values;

	const [step, setStep] = useState(0);
	const nextStep = () => {
		setStep(step + 1);
		console.log(step);
	};
	const prevStep = () => {
		if (step >= 0) setStep(step - 1);
	};

	switch (step) {
		case 0:
			return <PersonalInformation step={step} nextStep={nextStep} />;
		case 1:
			return (
				<ProfilePicture
					step={step}
					nextStep={nextStep}
					prevStep={prevStep}
				/>
			);
		case 2:
			return (
				<WorkCategory
					step={step}
					nextStep={nextStep}
					prevStep={prevStep}
				/>
			);

		case 3:
			return <SkillLevel step={step} prevStep={prevStep} />;
		default:
			return <PersonalInformation nextStep={nextStep} step={step} />;
	}
};

export default AccountSetUp;
