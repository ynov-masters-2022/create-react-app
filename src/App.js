import { useState } from "react";
import "./App.scss";
import ChatRoom from "./components/ChatRoom";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Users from "./components/Users";

function App() {
  const [room, setRoom] = useState(1);

  const nextRoom = () => setRoom(room + 1);

  return (
    <div>
      <Timer />
      <ChatRoom roomId={room} />
      <p>
        <button onClick={nextRoom}>Passer à la room suivante</button>
      </p>
      <Users />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
