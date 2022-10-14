import "./User.scss";

const User = ({ name, firstname }) => (
  <div className="user-item">
    <p>Nom : {name}</p>
    <p>Prénom : {firstname}</p>
  </div>
);

export default User;
