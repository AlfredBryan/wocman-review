import { Box, Text } from "@chakra-ui/core";
import React from "react";
import Select from "react-select";

export const BaseDropdown = ({
  label,
  options,
  onChange,
  w,
  bg,
  h,
  ...rest
}) => {
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: bg || "#E8E2E7",
      width: w || "27rem",
      height: h || "3rem",
      border: "none",
    }),
  };

  return (
    <Box {...rest} mt="1rem" className="dropDown">
      <Text fontFamily="Gilroy-Bold" fontSize="1.3rem" mb="1.2rem">
        {label}
      </Text>
      <Select
        onChange={onChange}
        options={options}
        styles={colourStyles}
        name={rest.name}
      />
    </Box>
  );
};
