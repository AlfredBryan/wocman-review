import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Switch,
  Text,
  useToast,
} from "@chakra-ui/core";
import * as React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import secureAccount from "../../../assets/images/secure-account.svg";
import { SettingsContext } from "../pages/settings";
import { axios } from "../../../utils/axios";
import { ShowMessage } from "../../../utils/alert";
import FormError from "../../../components/form-error/form-error";

const OLD_PASSWORD = "oldpassword";
const PASSWORD = "password";
const CONFIRM_PASSWORD = "confirmpassword";

export const SettingsLogin = () => {
  const toast = useToast();
  const [submitLoading, setSubmitLoading] = React.useState(false);

  const { settings, setSettings } = React.useContext(SettingsContext);
  const { twofactor, deviceSettings } = settings;

  const activateTwoFactor = async () => {
    setSettings({ ...settings, twofactor: !settings.twofactor });
    try {
      await axios.patch("/customer/settings/activate/2fa");
    } catch (error) {}
  };

  const cancelTwoFactor = async () => {
    setSettings({ ...settings, twofactor: !settings.twofactor });
    try {
      await axios.patch("/customer/settings/cancel/2fa");
    } catch (error) {}
  };

  const activateDeviceSettings = async () => {
    setSettings({ ...settings, deviceSettings: !settings.deviceSettings });
    try {
      await axios.patch("/customer/settings/activate/ipa");
    } catch (error) {}
  };

  const cancelDeviceSettings = async () => {
    setSettings({ ...settings, deviceSettings: !settings.deviceSettings });
    try {
      await axios.patch("/customer/settings/cancel/ipa");
    } catch (error) {}
  };

  const changePassword = async (body, resetForm) => {
    setSubmitLoading(true);
    try {
      const { data } = await axios.patch(
        "/customer/settings/edit/password",
        body
      );
      if (data?.status) {
        resetForm();
        ShowMessage(
          "Success",
          "Password changed successfully",
          "success",
          toast
        );
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      if (errorMessage) {
        ShowMessage("Error", errorMessage, "error", toast);
      }
    } finally {
      setSubmitLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      [OLD_PASSWORD]: "",
      [PASSWORD]: "",
      [CONFIRM_PASSWORD]: "",
    },
    validationSchema: Yup.object({
      [OLD_PASSWORD]: Yup.string().required("Old password is required"),
      [PASSWORD]: Yup.string().required("Password is required"),
      [CONFIRM_PASSWORD]: Yup.string()
        .required("Confirm password is required")
        .test("passwords-match", "Passwords must match", function (value) {
          return this.parent.password === value;
        }),
    }),
    onSubmit: (values, { resetForm }) => {
      const body = {
        oldpassword: values.oldpassword,
        password: values.password,
        confirmpassword: values.confirmpassword,
      };
      changePassword(body, resetForm);
    },
  });

  return (
    <Box pt={{ base: 4, md: 8 }} w="100%">
      <Text fontFamily="Poppins" fontWeight="bold" letterSpacing="0.5px">
        Securing Account
      </Text>
      <Flex
        backgroundColor="white"
        borderRadius="10px"
        py={{ base: 4, md: 8 }}
        px={{ base: 4, md: 8 }}
        my={{ base: 6, md: 12 }}
        flex={3}
      >
        <Box>
          <SwitchTextPair
            isChecked={twofactor}
            cancel={cancelTwoFactor}
            activate={activateTwoFactor}
            label="Two-Factor Authentication (2FA)"
            message="When you log in, you will be required to enter a code, which will be sent to your registered phone Number."
          />
          <SwitchTextPair
            isChecked={deviceSettings}
            cancel={cancelDeviceSettings}
            activate={activateDeviceSettings}
            isLast
            label="Check IP Address"
            message="When Someone tries to Log in to your Account from a new IP Address, you will receive an email to confirm if it was you."
          />
        </Box>
        <Flex flex={1} justify="flex-end">
          <Image src={secureAccount} alt="purse" />
        </Flex>
      </Flex>
      <Text
        fontFamily="Poppins"
        fontWeight="bold"
        letterSpacing="0.5px"
        d="inline-block"
      >
        Password
      </Text>
      {/* <Text
				as="small"
				fontFamily="Poppins"
				letterSpacing="0.5px"
				fontSize={{ base: "0.5rem", md: "0.7rem" }}
				ml={{ base: 2, md: 4 }}
			>
				(Last Updated 2 Weeks ago)
			</Text> */}
      <Flex
        backgroundColor="white"
        borderRadius="10px"
        py={{ base: 4, md: 8 }}
        px={{ base: 4, md: 8 }}
        my={{ base: 6, md: 12 }}
        flex={3}
        flexDir="column"
      >
        <CustomInput
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[OLD_PASSWORD]}
          id={OLD_PASSWORD}
          name={OLD_PASSWORD}
          type="password"
          placeholder="Old Password"
        />
        <Flex w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
          <FormError formik={formik} inputName={OLD_PASSWORD} />
        </Flex>
        <CustomInput
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[PASSWORD]}
          id={PASSWORD}
          name={PASSWORD}
          type="password"
          placeholder="New Password"
        />
        <Flex w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
          <FormError formik={formik} inputName={PASSWORD} />
        </Flex>
        <CustomInput
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[CONFIRM_PASSWORD]}
          id={CONFIRM_PASSWORD}
          name={CONFIRM_PASSWORD}
          type="password"
          placeholder="Confirm Password"
        />
        <Flex w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
          <FormError formik={formik} inputName={CONFIRM_PASSWORD} />
        </Flex>
        <Button
          onClick={formik.handleSubmit}
          isLoading={submitLoading}
          _focus={{ outline: "none" }}
          h="70px"
          w={{ base: "90%", md: "45%", xl: "25%" }}
          borderRadius="5px"
          border="0.789223px solid #552D1E"
          backgroundColor="white"
          color="wocman.typography1"
        >
          <Text
            fontFamily="Poppins"
            textTransform="capitalize"
            lineHeight="138.6%"
          >
            Update Password
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};

const SwitchTextPair = ({
  isLast,
  label,
  message,
  isChecked,
  cancel,
  activate,
}) => {
  return (
    <Flex w="100%" mb={isLast ? 0 : 8}>
      <Box mr={{ base: 2, md: 12 }}>
        <Switch
          isChecked={isChecked}
          value={isChecked}
          onChange={(e) => (isChecked ? cancel() : activate())}
          size="lg"
          color="wocman.checkedGreen"
        />
      </Box>
      <Box flex="1">
        <Text
          mb={{ base: 2, md: 4 }}
          d="block"
          fontFamily="Poppins"
          fontSize={{ base: "0.8rem", md: "1rem" }}
        >
          {label}
        </Text>
        <Text as="small" fontFamily="Poppins" color="wocman.typography2">
          {message}
        </Text>
      </Box>
    </Flex>
  );
};

const CustomInput = (props) => {
  const { placeholder, value, isLast, name, type, onChange, onBlur } = props;
  return (
    <Input
      placeholder={placeholder}
      minHeight="4rem"
      px={4}
      mb={isLast ? 0 : 8}
      w={{ base: "100%", md: "60%" }}
      value={value}
      name={name}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      fontFamily="Gilroy-Medium"
      fontSize="1rem"
      color="black"
      _focus={{ bg: "white" }}
      borderWidth="0.789223px"
      borderRadius="5px"
      borderColor="black"
      borderStyle="solid"
    />
  );
};
