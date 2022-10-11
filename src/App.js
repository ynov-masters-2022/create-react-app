import "./App.css";
import User from "./User";

const users = [
  {
    id: 1,
    name: "Delobelle",
    firstname: "Lucas",
  },
  {
    id: 2,
    name: "Bobby",
    firstname: "John",
  },
  {
    id: 3,
    name: "Hello",
    firstname: "Test",
  },
];

function App() {
  return (
    <div>
      {users.map((user) => (
        <User name={user.name} firstname={user.firstname} key={user.id} />
      ))}
    </div>
  );
}

export default App;
