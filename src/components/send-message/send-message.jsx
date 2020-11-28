import {
  Flex,
  Input,
  PseudoBox,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearContactToast, contact } from "../../state/actions";
import { ShowMessage } from "../../utils/alert";

export const SendMessage = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
    inquiry: "",
    message: "",
  });

  const { result, error, isLoading, message } = useSelector(
    ({ contact: { result, error, isLoading, message } = {} }) => ({
      result,
      error,
      isLoading,
      message,
    })
  );

  useEffect(() => {
    if (error) {
      ShowMessage("Error", message, "error", toast);
      dispatch(clearContactToast());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    if (result) {
      setForm({
        email: "",
        name: "",
        phone: "",
        inquiry: "",
        message: "",
      });
      ShowMessage(
        "Success",
        "Awesome, we've received your inquiry",
        "success",
        toast,
        5000
      );
      dispatch(clearContactToast());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  const onChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submit = () => {

    const validateFields = Object.values(form).filter((value) => !value);
    console.log(form);
    if (validateFields.length) {
      return ShowMessage(
        "Warning",
        "All fields are required",
        "warning",
        toast
      );
    }
    dispatch(contact(form));
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
          name="name"
          value={form.name}
          onChange={onChange}
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
            name="email"
            value={form.email}
            onChange={onChange}
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
            name="phone"
            value={form.phone}
            onChange={onChange}
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
          name="inquiry"
          value={form.inquiry}
          onChange={onChange}
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
          name="message"
          value={form.message}
          onChange={onChange}
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
          disabled={isLoading}
          opacity={isLoading ? 0.5 : ""}
          minHeight={["3.5rem", "3.5rem", "3.5rem", "4.5rem", "5rem"]}
          backgroundColor="wocman.typography1"
          _hover={{ opacity: "0.7" }}
          _active={{ transform: "scale(0.98)" }}
          _focus={{ outline: "none" }}
          onClick={submit}
        >
          {isLoading ? "SENDING..." : "SEND MESSAGE"}
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
        <iframe
          width="600"
          height="100%"
          className="contact-map"
          frameborder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?q=17%20Akinsanya%20street%20Ojodu%20Berger%2C%20Lagos%20state&key=AIzaSyBef_mdYffQ4JM-NgowTbVLHKjhSdLnBK4"
          allowfullscreen
          title="Location"
        ></iframe>
      </Flex>
    </Flex>
  );
};
