import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAxiosInstance } from "../hooks/useAxiosInstance";

const AdminUsers = () => {
  const [users, setUsers] = useState(null);
  const navigate = useNavigate();
  const instance = useAxiosInstance();

  useEffect(() => {
    console.log("retrieving users from API...");

    instance
      .get("users")
      .then((res) => {
        setUsers(res.data["hydra:member"]);
      })
      .catch((e) => {
        console.log("caught error, redirecting", e);
        navigate("/login");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>API - Utilisateurs</h1>
      {users && users.map((user) => <div key={user.id}>{user.email}</div>)}
    </div>
  );
};

export default AdminUsers;
