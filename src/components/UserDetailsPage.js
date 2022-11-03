import { Link, useNavigate, useParams } from "react-router-dom";
import USERS from "../data/users";

const UserDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const back = () => navigate(-1);

  return (
    <div>
      <h1>User Page #{id}</h1>
      {USERS.filter((u) => u.id === parseInt(id)).map((u) => (
        <div key={u.id}>
          <p>Nom : {u.name}</p>
          <p>Prénom : {u.firstname}</p>
        </div>
      ))}
      <p>
        <button onClick={back}>Retour en arrière</button>
        <Link to="/">Retour aux utilisateurs</Link>
      </p>
    </div>
  );
};

export default UserDetailsPage;
