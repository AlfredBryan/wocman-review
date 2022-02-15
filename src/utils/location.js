export const nextLocation = (role) => {
  switch (true) {
    case role === "wocman":
      return window.location.replace("/wocman");
    case role === "customer":
      return window.location.replace("/customer");
    default:
      return window.location.replace("/login");
  }
};
