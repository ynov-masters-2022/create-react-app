import { useState } from "react";
import USERS from "../data/users";
import User from "./User";

const Users = () => {
  const [usersList, setUsersList] = useState(USERS);
  const [newUserName, setNewUserName] = useState("");
  const [newUserFirstname, setNewUserFirstname] = useState("");

  const onChangeUserName = (e) => setNewUserName(e.target.value);
  const onChangeUserFirstName = (e) => setNewUserFirstname(e.target.value);

  const onAddUser = () => {
    const id = Math.max(...usersList.map((u) => u.id)) + 1;

    const newUsers = [
      ...usersList,
      {
        id,
        name: newUserName,
        firstname: newUserFirstname,
      },
    ];
    setUsersList(newUsers);
  };

  return (
    <>
      <input type="text" value={newUserName} onChange={onChangeUserName} />
      <input
        type="text"
        value={newUserFirstname}
        onChange={onChangeUserFirstName}
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
