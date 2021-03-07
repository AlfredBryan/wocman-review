import { Text } from "@chakra-ui/core";
import React from "react";

const FormError = ({ formik, inputName }) => (
  <>
    {formik.touched[inputName] && formik.errors[inputName] ? (
      <Text as="small" color="red.500" fontSize="0.6rem" fontFamily="Poppins">
        {formik.errors[inputName]}
      </Text>
    ) : null}
  </>
);

export default FormError;
