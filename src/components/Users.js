import { useEffect, useRef, useState } from "react";
import styles from "./Users.module.scss";
import User from "./User";
import { getUsers } from "../services/userService";

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [usersList, setUsersList] = useState(null);

  useEffect(() => {
    console.log("rendered donc je suis lancé");
    async function fetchUsers() {
      setLoading(true);
      const users = await getUsers();
      console.log("je sette les users");
      setUsersList(users);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  const nameRef = useRef(null);
  const firstnameRef = useRef(null);

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

  return !loading ? (
    <>
      <input type="text" ref={nameRef} />
      <input type="text" ref={firstnameRef} />
      <button onClick={onAddUser}>Add User</button>
      <div className={styles.list}>
        {usersList.map((user) => (
          <User name={user.name} firstname={user.firstname} key={user.id} />
        ))}
      </div>
    </>
  ) : (
    <p>Chargement...</p>
  );
};
export default Users;
