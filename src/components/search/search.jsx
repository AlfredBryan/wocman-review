import { Flex, Icon, Image, Text, useToast } from "@chakra-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Zoom from "react-reveal/Zoom";
import "./search.css";
import search from "../../assets/images/search.svg";
import chevronRight from "../../assets/icons/chevron-right.svg";
import { useHistory, useLocation } from "react-router";
import {
  searchWocmen,
  clearSearchToast,
} from "../../state/actions/searchAction";
import { ShowMessage } from "../../utils/alert";
import { animateValue } from "../../utils/animations";

export const Search = (props) => {
  const dispatch = useDispatch();
  const query = useQuery();
  const toast = useToast();
  const history = useHistory();

  const [totalWocmen, setTotalWocmen] = useState(0);
  const [availableWocmen, setAvailableWocmen] = useState(0);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  const { result, error, isLoading } = useSelector(
    ({ search: { result, error, isLoading } }) => ({
      result,
      error,
      isLoading,
    })
  );

  useEffect(() => {
    if (error) {
      ShowMessage(
        "Error",
        "An error occured while making this request",
        "error",
        toast
      );
      dispatch(clearSearchToast());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    if (result) {
      animateValue(setTotalWocmen, 0, result.wocman, 3000);
      animateValue(setAvailableWocmen, 0, result.active, 3000);
      setTimeout(() => {
        setShow(true);
      }, 2500);
    }
  }, [result]);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  useEffect(() => {
    const searchQuery = query.get("query");

    if (!searchQuery) {
      props.history.goBack();
    }
    setSearch(searchQuery);
    dispatch(searchWocmen(decodeURI(searchQuery)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex
      minH="100%"
      w="100%"
      justify="space-between"
      align="center"
      flex="1"
      flexDir="column"
    >
      {!isLoading && !error && show ? (
        <MapState query={search} />
      ) : (
        <SearchState />
      )}
      {!isLoading && !error && show && (
        <Flex
          minHeight="200px"
          backgroundColor="#C4C4C4"
          w="100%"
          px={[4, 4, 4, 16, 24]}
          flexDir={["column", "column", "row", "row", "row"]}
          justify={[
            "center",
            "center",
            "center",
            "space-around",
            "space-around",
          ]}
          align="center"
        >
          <Flex
            flex="2"
            align="center"
            flexDir={["column", "column", "row", "row", "row"]}
            w="100%"
            my={[8, 8, 0, 0, 0]}
          >
            <Flex align="flex-start" w="100%">
              <Text
                fontSize="4rem"
                fontFamily="Poppins"
                fontWeight="500"
                color="#C1867C"
              >
                {totalWocmen}
              </Text>
              <Icon name="arrow-up" mr="2rem" mt="1.4rem" color="#4AAF05" />
            </Flex>
            <Flex flexDir="column" w="100%">
              <Text fontFamily="Poppins" lineHeight="27px">
                Total Wocmen in Location
              </Text>
              <Text as="small" fontFamily="Poppins" fontWeight="300">
                <Text
                  as="small"
                  fontFamily="Poppins"
                  fontWeight="300"
                  color="#4AAF05"
                >
                  +{result.weekly_percentage_increase}
                </Text>{" "}
                this week
              </Text>
            </Flex>
          </Flex>
          <Flex
            flex="2"
            align="center"
            flexDir={["column", "column", "row", "row", "row"]}
            w="100%"
            mt={[8, 8, 0, 0, 0]}
            mb={[4, 4, 0, 0, 0]}
          >
            <Flex align="flex-start" w="100%">
              <Text
                fontSize="4rem"
                fontFamily="Poppins"
                fontWeight="500"
                color="#C1867C"
              >
                {availableWocmen}
              </Text>
              <Icon name="arrow-up" mr="2rem" mt="1.4rem" color="#4AAF05" />
            </Flex>
            <Flex flexDir="column" w="100%">
              <Text fontFamily="Poppins" lineHeight="27px">
                Available Wocmen
              </Text>
              {/* <Text as="small" fontFamily="Poppins" fontWeight="300">
								<Text
									as="small"
									fontFamily="Poppins"
									fontWeight="300"
									color="#4AAF05"
								>
									30
								</Text>{" "}
								mins ago
							</Text> */}
            </Flex>
          </Flex>
          <Flex
            flex="0.5"
            justify="flex-end"
            w="100%"
            my={[4, 4, 0, 0, 0]}
            cursor="pointer"
            onClick={() => history.goBack()}
          >
            <Image src={chevronRight} alt="chevron-right" />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

const SearchState = () => {
  return (
    <Flex flexDir="column" textAlign="center">
      <Image src={search} alt="search" className="pulse" />

      <Zoom opposite>
        <Text
          className="loading"
          color="white"
          mt={[4, 4, 12, 12, 16]}
          mb={[8, 8, 0, 0, 0]}
          fontFamily="Poppins"
          lineHeight="27px"
        >
          Searching
        </Text>
      </Zoom>
    </Flex>
  );
};

const MapState = (props) => {
  return (
    <Flex
      position="relative"
      px={[2, 2, 2, 8, 8]}
      justify="center"
      minHeight={["50vh"]}
      h="50vh"
      mt={[0, 0, 0, 8, 8]}
      mb={[4, 4, 4, 0, 0]}
      w={["100%", "100%", "100%", "100%", "100%"]}
    >
      <iframe
        width="80%"
        height="100%"
        className="contact-map"
        frameborder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?q=${props.query}&key=AIzaSyBef_mdYffQ4JM-NgowTbVLHKjhSdLnBK4`}
        allowfullscreen
        title="Location"
      ></iframe>
    </Flex>
  );
};
