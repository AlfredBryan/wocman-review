import { Flex } from "@chakra-ui/core";
import { Card } from "../components/card";
import { Notifications } from "../components/notifications";
import { Wallet } from "../components/wallet";

export const Dashboard = () => {
  return (
    <Flex justify="center" w="100%" minH="100vh" flex={1}>
      <Flex flex={1.8} flexDirection="column" p={{ base: 4, md: 8 }}>
        <Wallet />
        <Flex justify="space-between" w="100%" my={10}>
          <Card text="Work Done" number="18" sub="Jobs done" />
          <Card text="Rating" number="5" sub="stars" />
          <Card text="Completion %" number="70%" sub="completion" noMargin />
        </Flex>
        <Notifications />
      </Flex>
      <Flex flex={1.2}></Flex>
    </Flex>
  );
};
