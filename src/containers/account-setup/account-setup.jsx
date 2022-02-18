import React, { useState, useEffect } from "react";
import { useQuery } from "../../utils/hooks";
import { useHistory } from "react-router-dom";
import "./account-setup.css";
import PersonalInformation from "./pages/personal-info";
import ProfilePicture from "./pages/profile-picture";
import SkillLevel from "./pages/skills";
import WorkCategory from "./pages/category";

const AccountSetUp = () => {
  const query = useQuery();
  const history = useHistory();

  const user = query.get("user");

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
    username: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const { firstname, lastname, phone, address, username } = values;

  useEffect(() => {
    if (!user) {
      history.goBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [step, setStep] = useState(0);
  const nextStep = () => {
    if (step >= 3) return;
    setStep(step + 1);
    console.log(step);
  };
  const prevStep = () => {
    if (step >= 0) setStep(step - 1);
  };

  switch (step) {
    case 0:
      return (
        <PersonalInformation
          step={step}
          setStep={setStep}
          nextStep={nextStep}
          handleChange={handleChange}
          firstname={firstname}
          lastname={lastname}
          phone={phone}
          address={address}
          username={username}
          user={user}
        />
      );
    case 1:
      return (
        <ProfilePicture
          step={step}
          setStep={setStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 2:
      return (
        <WorkCategory
          step={step}
          setStep={setStep}
          nextStep={nextStep}
          prevStep={prevStep}
          firstname={firstname}
        />
      );

    case 3:
      return <SkillLevel step={step} setStep={setStep} prevStep={prevStep} />;
    default:
      return <PersonalInformation nextStep={nextStep} step={step} />;
  }
};

export default AccountSetUp;
