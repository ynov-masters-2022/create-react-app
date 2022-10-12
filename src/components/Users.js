import USERS from "../data/users";
import User from "./User";

const Users = () =>
  USERS.map((user) => (
    <User name={user.name} firstname={user.firstname} key={user.id} />
  ));

export default Users;
