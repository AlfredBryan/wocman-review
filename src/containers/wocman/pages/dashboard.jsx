/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, Image, Text } from "@chakra-ui/core";
import { Card } from "../components/card";
import { Notifications } from "../components/notifications";
import { CalendarSection } from "../components/schedule";
import { Wallet } from "../components/wallet";
import { useDispatch, useSelector } from "react-redux";
import { workdone, ratings, completed, schedule, wallet } from "../../../state/actions";
import { useEffect } from "react";
import noShedule from "../../../assets/images/noSchedule.svg";
import moment from "moment";

const Dashboard = () => {
	const dispatch = useDispatch();

  const { result } = useSelector(
		({ workdone: { result, error, isLoading, message } = {} }) => ({
			result,
			error,
			isLoading,
			message,
		})
	);
  const { result: ratingsResults} = useSelector(
		({ ratings: { result, error, isLoading, message } = {} }) => ({
			result,
			error,
			isLoading,
			message,
		})
	);
  const { result: completedResults } = useSelector(
		({ completed: { result, error, isLoading, message } = {} }) => ({
			result,
			error,
			isLoading,
			message,
		})
	);

  const { result: scheduleResults } = useSelector(
		({ schedule: { result, error, isLoading, message } = {} }) => ({
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
    dispatch(schedule());
    dispatch(wallet());
	},[]);

  const activities = scheduleResults?.schedule?.map((item)=>{
    return{
      from: moment(item.wocmanstartdatetime).format('hh:mm a'),
      to: moment(item.wocmanstopdatetime).format('hh:mm a'),
      title: item.description,
      description: item.description,
    }
  })

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
            {result?.workDone <= 0 ? (
              <Card text="Work Done" />
              ):(
              <Card text="Work Done" number={result?.workDone } sub="Jobs done" />
            )}
            {ratingsResults?.rate <= 0 ? (
              <Card text="Rating" />
              ):(
            <Card text="Rating" number={ratingsResults?.rate } sub="stars" />
            )}
            {completedResults?.Completion <= 0 || completedResults?.Completion === undefined ? (
              <Card text="Completion %" />
              ):(
            <Card text="Completion %" number={completedResults?.Completion } sub="completion" noMargin />
            )}
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
                {moment(new Date()).format('LL')}
              </Text>
            </Flex>
            {scheduleResults?.schedule?.length > 0 ? (
              <Flex w="100%" mt={8} flexDir="column">
              {activities.map((item, index) => (
                <CalendarSection key={index} item={item} index={index} />
              ))}
            </Flex>
            ):(
              <Flex w="100%" mt={8} flexDir="column">
               <Image  src={noShedule} alt="noShedule" />
               <Text fontSize="16px"pt="10">
               You do not have an appointment today,<br/>
               Check back later, or <span style={{color: '#CFA39B'}}>Turn on Notification.</span>
               </Text>
            </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;

