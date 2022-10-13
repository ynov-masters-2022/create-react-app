import { useRef, useState } from "react";
import USERS from "../data/users";
import User from "./User";

const Users = () => {
  const [usersList, setUsersList] = useState(USERS);
  const nameRef = useRef(null);
  const firstnameRef = useRef(null);
  console.log("rendering");

  const onAddUser = () => {
    const id = Math.max(...usersList.map((u) => u.id)) + 1;

    const newUsers = [
      ...usersList,
      {
        id,
        name: nameRef.current.value,
        firstname: firstnameRef.current.value,
      },
    ];
    setUsersList(newUsers);
  };

  return (
    <>
      <input type="text" ref={nameRef} />
      <input type="text" ref={firstnameRef} />
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
