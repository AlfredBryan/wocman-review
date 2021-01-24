import { Flex, PseudoBox, Select } from "@chakra-ui/core";

export const CustomInput = ({ placeholder, isSelect }) => (
  <Flex w={{ base: "100%", md: "70%", xl: "46%" }} mb={{ base: 8, md: 12 }}>
    <span className="special-input"></span>
    {!isSelect ? (
      <PseudoBox
        as="input"
        backgroundColor="wocman.specialInput"
        placeholder={placeholder}
        px={{ base: 8, md: 24 }}
        borderRadius="0 8px 8px 0"
        _placeholder={{ fontWeight: 100 }}
        fontFamily="Poppins"
        h={{ base: "5rem", md: "7rem" }}
        color="white"
        flex={1}
        _focus={{ outline: "none" }}
      />
    ) : (
      <Select
        as="select"
        backgroundColor="wocman.specialInput"
        placeholder={placeholder}
        px={{ base: 8, md: 24 }}
        border="none"
        borderRadius="0 8px 8px 0"
        backgroundPosition="-2rem 0"
        _placeholder={{ fontWeight: 100 }}
        fontFamily="Poppins"
        h={{ base: "5rem", md: "7rem" }}
        color="white"
        flex={1}
        _focus={{ outline: "none" }}
      >
        {/* <option value="" disabled>
          {placeholder}
        </option> */}
        <option value="option1">Access Bank</option>
        <option value="option2">UBA</option>
        <option value="option3">First Bank</option>
      </Select>
    )}
  </Flex>
);
