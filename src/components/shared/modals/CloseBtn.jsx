import { Flex } from "@chakra-ui/core";
import React from "react";

function CloseBtn(props) {
  // eslint-disable-next-line react/prop-types
  const { closemodal, children, ...rest } = props;

  return (
    <Flex
      cursor="pointer"
      {...rest}
      onClick={closemodal}
      className="closemodal"
    >
      {children}
    </Flex>
  );
}

export default CloseBtn;
