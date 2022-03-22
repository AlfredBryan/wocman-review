export const statusCheck = (status) => {
  switch (true) {
    case status === "pending":
      return "#ED8B30";
    case status === "approved":
      return "#293DF1";
    case status === "completed":
      return "#34B439";
    default:
      return "#F96662";
  }
};
