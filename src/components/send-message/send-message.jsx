import {  Flex, Input, PseudoBox, Text, Textarea } from "@chakra-ui/core";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { useState } from "react";

const Message = (props) => {
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  const mapStyles = {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "13.5px",
    filter: "drop-shadow(0px 4px 26px rgba(0, 0, 0, 0.06))",
    border: "3px solid #E8E2E7",
  };

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  const onClose = (props) => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };

  return (
    <Flex
      bg="wocman.featuredService"
      justify="space-between"
      px={[6, 12, 16, 32, 32]}
      py={20}
      flexWrap="wrap"
    >
      <Flex flexDir="column" w={["100%", "100%", "100%", "48%", "48%"]}>
        <Text
          fontFamily="Poppins"
          fontWeight="500"
          color="rgba(0, 0, 0, 0.6)"
          fontSize="1.7rem"
          lineHeight="89px"
        >
          Send us a message
        </Text>
        <Text
          as="small"
          mb={6}
          fontFamily="Gilroy-Medium"
          color="rgba(0, 0, 0, 0.4)"
          lineHeight="36px"
        >
          Comments, questions? Drop us a note, and we’ll get back with you
          shortly!
        </Text>
        <Input
          placeholder="Name*"
          minHeight={["3.5rem", "3.5rem", "3.5rem", "4.5rem", "5rem"]}
          px={8}
          fontFamily="Gilroy-Medium"
          fontSize="0.8rem"
          color="wocman.typography1"
          _focus={{ bg: "white" }}
          borderRadius="10px"
          borderColor="wocman.contact"
          borderStyle="solid"
        />
        <Flex justify="space-between" my={6}>
          <Input
            placeholder="Email*"
            minHeight={["3.5rem", "3.5rem", "3.5rem", "4.5rem", "5rem"]}
            px={8}
            width="48%"
            fontFamily="Gilroy-Medium"
            fontSize="0.8rem"
            color="wocman.typography1"
            _focus={{ bg: "white" }}
            borderRadius="10px"
            borderColor="wocman.contact"
            borderStyle="solid"
          />
          <Input
            placeholder="Phone*"
            minHeight={["3.5rem", "3.5rem", "3.5rem", "4.5rem", "5rem"]}
            px={8}
            width="48%"
            fontFamily="Gilroy-Medium"
            fontSize="0.8rem"
            color="wocman.typography1"
            _focus={{ bg: "white" }}
            borderRadius="10px"
            borderColor="wocman.contact"
            borderStyle="solid"
          />
        </Flex>
        <Input
          placeholder="Inquiry Type*"
          minHeight={["3.5rem", "3.5rem", "3.5rem", "4.5rem", "5rem"]}
          px={8}
          fontFamily="Gilroy-Medium"
          fontSize="0.8rem"
          color="wocman.typography1"
          _focus={{ bg: "white" }}
          borderRadius="10px"
          borderColor="wocman.contact"
          borderStyle="solid"
        />
        <Textarea
          placeholder="Message"
          minHeight={["7rem", "7rem", "7rem", "9rem", "11rem"]}
          px={8}
          py={4}
          my={6}
          fontFamily="Gilroy-Medium"
          fontSize="0.8rem"
          color="wocman.typography1"
          _focus={{ bg: "white" }}
          borderRadius="10px"
          size="md"
          borderColor="wocman.contact"
          borderStyle="solid"
        />
        <PseudoBox
          as="button"
          fontSize={["1rem", "1rem", "1rem", "1.4rem", "1.4rem"]}
          fontFamily="Gilroy-Medium"
          lineHeight="20px"
          color="white"
          borderRadius="10px"
          minHeight={["3.5rem", "3.5rem", "3.5rem", "4.5rem", "5rem"]}
          backgroundColor="wocman.typography1"
          _hover={{ opacity: "0.7" }}
          _active={{ transform: "scale(0.98)" }}
          _focus={{ outline: "none" }}
        >
          SEND MESSAGE
        </PseudoBox>
      </Flex>
      <Flex
        position="relative"
        px={8}
        justify="center"
        minHeight={["50vh"]}
        mt={[8, 8, 8, 0, 0]}
        w={["100%", "100%", "100%", "48%", "48%"]}
      >
        <Map
          google={props.google}
          zoom={14}
          className="contact-map"
          disableDefaultUI={true}
          style={mapStyles}
          initialCenter={{
            lat: 6.6415809,
            lng: 3.3637405,
          }}
        >
          <Marker
            onClick={onMarkerClick}
            name={"17 Akinsanya street Ojodu Berger, Lagos state"}
          />
          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
            onClose={onClose}
          >
            <div>
              <h4>{selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </Flex>
    </Flex>
  );
};

export const SendMessage = GoogleApiWrapper({
  apiKey: "AIzaSyBef_mdYffQ4JM-NgowTbVLHKjhSdLnBK4",
})(Message);
