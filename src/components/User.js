import { Link } from "react-router-dom";
import "./User.scss";

const User = ({ user }) => (
  <div className="user-item">
    <p>Nom : {user.name}</p>
    <p>Prénom : {user.firstname}</p>
    <Link to={`/users/${user.id}`}>Voir plus</Link>
  </div>
);

export default User;
