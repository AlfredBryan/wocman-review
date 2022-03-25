import * as React from "react";
import { Box, Flex, Input, Switch, Text } from "@chakra-ui/core";
import { SettingsContext } from "../pages/settings";
import { axios } from "../../../utils/axios";
import { ProfileContext } from "../index";

export const SettingsNotifications = () => {
  const { profile } = React.useContext(ProfileContext);

  const { settings, setSettings } = React.useContext(SettingsContext);

  const { smsNotice, emailNotice, serviceNotice, technicalNotice } = settings;

  const activateSmsNotification = async () => {
    setSettings({ ...settings, smsNotice: !settings.smsNotice });
    try {
      await axios.post("/wocman/settings/activate/sms");
    } catch (error) {}
  };

  const cancelSmsNotification = async () => {
    setSettings({ ...settings, smsNotice: !settings.smsNotice });
    try {
      await axios.post("/wocman/settings/cancel/sms");
    } catch (error) {}
  };

  const activateEmailNotification = async () => {
    setSettings({ ...settings, emailNotice: !settings.emailNotice });
    try {
      await axios.post("/wocman/settings/activate/email");
    } catch (error) {}
  };

  const cancelEmailNotification = async () => {
    setSettings({ ...settings, emailNotice: !settings.emailNotice });
    try {
      await axios.post("/wocman/settings/cancel/email");
    } catch (error) {}
  };

  const activateServiceNotification = async () => {
    setSettings({ ...settings, serviceNotice: !settings.serviceNotice });
    try {
      await axios.post("/wocman/settings/activate/service");
    } catch (error) {}
  };

  const cancelServiceNotification = async () => {
    setSettings({ ...settings, serviceNotice: !settings.serviceNotice });
    try {
      await axios.post("/wocman/settings/cancel/service");
    } catch (error) {}
  };

  const activateTechnicalNotification = async () => {
    setSettings({ ...settings, technicalNotice: !settings.technicalNotice });
    try {
      await axios.post("/wocman/settings/activate/technical");
    } catch (error) {}
  };

  const cancelTechnicalNotification = async () => {
    setSettings({ ...settings, technicalNotice: !settings.technicalNotice });
    try {
      await axios.post("/wocman/settings/cancel/technical");
    } catch (error) {}
  };

  return (
    <Box w="100%">
      <Text fontFamily="Poppins" color="wocman.typography2" my={2}>
        Get notified based on your preference
      </Text>
      <Box
        backgroundColor="white"
        borderRadius="10px"
        w="100%"
        p={{ base: 4, md: 8 }}
      >
        <SwitchInputPair
          isChecked={smsNotice}
          cancel={cancelSmsNotification}
          activate={activateSmsNotification}
          label="SMS Notifications"
          value={profile?.phone || "Wocman phone"}
        />
        <SwitchInputPair
          isChecked={emailNotice}
          cancel={cancelEmailNotification}
          activate={activateEmailNotification}
          label="Email Notifications"
          value={profile?.email || "customer@gmail.com"}
        />
        <SwitchInputPair
          isChecked={serviceNotice}
          cancel={cancelServiceNotification}
          activate={activateServiceNotification}
          label="Service Notification (News and Special offers)"
          value={profile?.email || "customer@gmail.com"}
        />
        <SwitchInputPair
          isChecked={technicalNotice}
          cancel={cancelTechnicalNotification}
          activate={activateTechnicalNotification}
          label="Technical Notification (Updates and Security)"
          value={profile?.email || "customer@gmail.com"}
        />
      </Box>
    </Box>
  );
};

const SwitchInputPair = ({ value, isChecked, label, cancel, activate }) => {
  return (
    <Flex w="100%" mb={8}>
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
          color="wocman.typography2"
        >
          {label}
        </Text>
        <Input
          placeholder="Name*"
          minHeight="4rem"
          px={4}
          w={{ base: "100%", md: "70%" }}
          disabled
          value={value}
          fontFamily="Gilroy-Medium"
          fontSize="1rem"
          color="black"
          _focus={{ bg: "white" }}
          borderWidth="0.789223px"
          borderRadius="5px"
          borderColor="black"
          borderStyle="solid"
        />
      </Box>
    </Flex>
  );
};
