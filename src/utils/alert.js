export const ShowMessage = (title = "", description, status, fn) => {
  return fn({
    title,
    position: "bottom-right",
    description,
    status,
    duration: 2000,
    isClosable: true,
  });
};
