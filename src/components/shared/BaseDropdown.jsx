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
      height: h || "4rem",
      border: "none",
    }),
  };

  return (
    <Box {...rest} className="dropDown">
      <Text fontSize="1.5rem" mb="1.2rem">
        {label}
      </Text>
      <Select
        onChange={onChange}
        menuPosition="fixed"
        options={options}
        styles={colourStyles}
        name={rest.name}
      />
    </Box>
  );
};
