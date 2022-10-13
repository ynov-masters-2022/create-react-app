import { useState } from "react";
import USERS from "../data/users";
import User from "./User";

const Users = () => {
  const [usersList, setUsersList] = useState(USERS);
  const [newUser, setNewUser] = useState({
    name: "",
    firstname: "",
  });

  const onChange = (e) => {
    const newUserNext = {
      ...newUser,
      [e.target.name]: e.target.value,
    };
    setNewUser(newUserNext);
  };

  const onAddUser = () => {
    const id = Math.max(...usersList.map((u) => u.id)) + 1;

    const newUsers = [
      ...usersList,
      {
        id,
        name: newUser.name,
        firstname: newUser.firstname,
      },
    ];
    setUsersList(newUsers);
  };

  return (
    <>
      <input type="text" name="name" value={newUser.name} onChange={onChange} />
      <input
        type="text"
        name="firstname"
        value={newUser.firstname}
        onChange={onChange}
      />
      <button onClick={onAddUser}>Add User</button>
      <div>
        {usersList.map((user) => (
          <User name={user.name} firstname={user.firstname} key={user.id} />
        ))}
      </div>
    </>
  );
};
export default Users;
