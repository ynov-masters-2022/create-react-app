import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import USERS from "../data/users";
import User from "./User";

const Search = () => {
  const [users, setUsers] = useState(USERS);
  const inputSearchRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchUser = (e) => {
    e.preventDefault();

    if (inputSearchRef.current.value !== "") {
      setSearchParams({ s: inputSearchRef.current.value });
    } else {
      setSearchParams("");
    }
  };

  useEffect(() => {
    const search = searchParams.get("s");

    console.log(search);

    if (search !== null && search !== "") {
      const filteredUsers = USERS.filter((u) => u.name.includes(search));
      setUsers(filteredUsers);
    } else {
      setUsers(USERS);
    }
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={searchUser}>
        <input
          type="text"
          name="s"
          ref={inputSearchRef}
          defaultValue={searchParams.get("s")}
        />
        <button type="submit">Rechercher</button>
      </form>

      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Search;
