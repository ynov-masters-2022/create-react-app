import USERS from "../data/users";

export const getUsers = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(USERS), 3000));
};
