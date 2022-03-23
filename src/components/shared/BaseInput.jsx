import { Box, Input, Text } from "@chakra-ui/core";
import React from "react";

export const BaseInput = ({
  label,
  placeholder,
  id,
  type,
  readonly,
  rightIcon,
  width,
  right,
  ...rest
}) => {
  return (
    <Box mt="1rem">
      <Text fontFamily="Gilroy-Bold" fontSize="1.3rem" as="label" htmlFor={id}>
        {label}
      </Text>
      <Input
        focusBorderColor="#552D1E"
        fontSize="1.3rem"
        id="password"
        type={type}
        mt="1.2rem"
        bg="#E8E2E7"
        border="none"
        borderRadius="3px"
        h="3rem"
        w={width || "27rem"}
        px="1.6rem"
        placeholder={placeholder}
        readOnly={readonly}
        {...rest}
        className="inputType"
      />
    </Box>
  );
};
