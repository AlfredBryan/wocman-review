export const getCurrentUser = () => {
    const user = localStorage.getItem('wocman_user')
  const curUser = JSON.parse(user);
    return curUser;
  };