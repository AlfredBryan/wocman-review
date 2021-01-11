import { Box, Flex, Image, Text } from "@chakra-ui/core";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts/umd/Recharts";
import calendar from "../../../assets/icons/chart-calendar.svg";
import { formatAsMoney } from "../../../utils/format";
import { AiOutlineArrowUp } from "react-icons/ai";
import { normalizeMoney } from "../../../utils/normalizeMoney";

export const WalletChart = () => {
  return (
    <Box
      backgroundColor="white"
      px={{ base: 4, md: 8 }}
      py={{ base: 2, md: 4 }}
      mb={{ base: 8, xl: 0 }}
    >
      <Flex justify="flex-end" align="center">
        <Flex
          justify="space-between"
          px={4}
          py={2}
          align="center"
          border="0.919944px solid #E5E5E5"
          borderRadius="3.67978px"
        >
          <Text fontFamily="Poppins" mr={2}>
            Oct - Nov 2019
          </Text>
          <Image src={calendar} />
        </Flex>
      </Flex>
      <Chart />
      <Flex justify="space-between">
        <Box>
          <Text as="small" fontFamily="Poppins">
            Total Revenue
          </Text>
          <Text
            fontFamily="Poppins"
            fontWeight="bold"
            fontSize={{ base: "1.2rem", md: "1.7rem" }}
          >
            {formatAsMoney(76685.41)}
          </Text>
          <Flex align="baseline" mt={4}>
            <AiOutlineArrowUp color="#4AAF05" />
            <Text
              as="small"
              fontFamily="Poppins"
              fontWeight="300"
              color="#4AAF05"
              ml={2}
            >
              7.00%
            </Text>
          </Flex>
        </Box>
        <Text
          fontFamily="Poppins"
          fontWeight="bold"
          fontSize={{ base: "1.2rem", md: "1.7rem" }}
        >
          Analytics
        </Text>
      </Flex>
    </Box>
  );
};

const Chart = () => {
  const data = [
    { date: "2021-01-05", value: 15468 },
    { date: "2021-01-06", value: 67879 },
    { date: "2021-01-07", value: 86968 },
    { date: "2021-01-08", value: 56478 },
    { date: "2021-01-09", value: 96748 },
    { date: "2021-01-10", value: 47585 },
    { date: "2021-01-11", value: 57689 },
  ];

  // Creating an array of the days in the format I need later;
  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  return (
    <Box my={{ base: 6, md: 12 }}>
      <ResponsiveContainer width={"100%"} height={250}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#C1867C" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#C1867C" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            tickFormatter={(date) => days[new Date(date).getDay()]}
          />
          <YAxis tickFormatter={(label) => normalizeMoney(label)} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#C1867C"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};
