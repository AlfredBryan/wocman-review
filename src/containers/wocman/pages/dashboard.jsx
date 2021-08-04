import { Box, Flex, Text } from "@chakra-ui/core";
import { Card } from "../components/card";
import { Notifications } from "../components/notifications";
import { CalendarSection } from "../components/schedule";
import { Wallet } from "../components/wallet";
import { useDispatch, useSelector } from "react-redux";
import { workdone, ratings, completed } from "../../../state/actions";
import { useEffect } from "react";

const Dashboard = () => {
	const dispatch = useDispatch();

  const { result, error, isLoading, message } = useSelector(
		({ workdone: { result, error, isLoading, message } = {} }) => ({
			result,
			error,
			isLoading,
			message,
		})
	);
  const { result: ratingsResults, 
    error: ratingsError, 
    isLoading: ratingsIsLoading, 
    message: ratingsMessage } = useSelector(
		({ ratings: { result, error, isLoading, message } = {} }) => ({
			result,
			error,
			isLoading,
			message,
		})
	);
  const { result: completedResults, 
    error: completedError, 
    isLoading: completedIsLoading, 
    message: completedMessage } = useSelector(
		({ completed: { result, error, isLoading, message } = {} }) => ({
			result,
			error,
			isLoading,
			message,
		})
	);

  useEffect(() => {
    dispatch(workdone());
    dispatch(ratings());
    dispatch(completed());
	},[]);
  
  console.log(ratingsResults, '<><>,.,.,.,.<><><><><');

  const activities = [
    {
      from: "08:00",
      to: "09:30",
      title: "Furniture Repairs for Bedroom",
      description: "Fix 2 front legs of furniture in my kids room.",
    },
    {
      from: "10:00",
      to: "10:30",
      title: "Tree House Repairs",
      description: "Fix 2 front legs of furniture in my kids room.",
    },
    {
      from: "11:00",
      to: "12:30",
      title: "Cupboard Repairs",
      description: "Fix 2 front legs of furniture in my kids room.",
    },
  ];

  return (
    <Box>
      <Flex
        justify="center"
        w="100%"
        flex={1}
        flexDir={{ base: "column", xl: "row" }}
      >
        <Flex
          flex={{ base: 1, xl: 1.8 }}
          flexDirection="column"
          p={{ base: 4, md: 8 }}
        >
          <Wallet />
          <Flex
            justify={{ base: "center", md: "space-between" }}
            align="center"
            w="100%"
            my={10}
            flexDir={{ base: "column", md: "row" }}
          >
            <Card text="Work Done" number={result?.workDone || 0} sub="Jobs done" />
            <Card text="Rating" number={ratingsResults?.rate || 0} sub="stars" />
            <Card text="Completion %" number={completedResults?.Completion || 0} sub="completion" noMargin />
          </Flex>
          <Notifications />
        </Flex>
        <Flex
          w="100%"
          px={{ base: 4, md: 8, xl: 0 }}
          flex={{ base: 1, xl: 1.2 }}
        >
          <Flex
            flex={1}
            backgroundColor="wocman.sideNav"
            flexDir="column"
            px={{ base: 4, md: 8 }}
            py={{ base: 8, md: 16 }}
            overflowY={{ base: "none", xl: "scroll" }}
            position="static"
            h={{ base: "auto", xl: "100vh" }}
          >
            <Flex flexDir="column" h="fit-content" mb={{ base: 4, md: 8 }}>
              <Text
                fontFamily="Poppins"
                fontWeight="500"
                fontSize={{ base: "1.2rem", md: "1.4rem", xl: "1.8rem" }}
                lineHeight="20px"
                mb={{ base: 4, md: 8 }}
              >
                Today's Schedule
              </Text>
              <Text
                fontFamily="Poppins"
                fontWeight="normal"
                fontSize={{ base: "0.8rem", md: "1rem", xl: "1.2rem" }}
                lineHeight="20px"
              >
                <Text
                  as="span"
                  fontFamily="Poppins"
                  fontWeight="600"
                  fontSize={{ base: "0.8rem", md: "1rem", xl: "1.2rem" }}
                  lineHeight="20px"
                >
                  Tuesday
                </Text>{" "}
                25 Dec
              </Text>
            </Flex>
            <Flex w="100%" mt={8} flexDir="column">
              {activities.map((item, index) => (
                <CalendarSection key={index} item={item} index={index} />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;

