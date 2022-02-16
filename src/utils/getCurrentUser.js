export const getCurrentUser = () => {
    const user = localStorage.getItem('user')
  const curUser = JSON.parse(user);
    return curUser;
  };