export const nextLocation = (data) => {
  let email = data?.data?.email;
  switch (true) {
    case data?.data?.role === "wocman" && data?.data?.isProfileUpdated === true:
      return window.location.replace("/wocman");
    case data?.data?.role === "wocman" &&
      data?.data?.isProfileUpdated === false:
      return window.location.replace(`/account-setup?user=${email}`);
    case data?.data?.role === "customer":
      return window.location.replace("/customer");
    default:
      return window.location.replace("/login");
  }
};
