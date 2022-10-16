import { useEffect } from "react";

const ChatRoom = ({ roomId }) => {
  useEffect(() => {
    console.log("Connexion à la room #" + roomId);

    return () => console.log("Déconnexion de la room #" + roomId);
  }, [roomId]);

  return <p>Bienvenue sur la room #{roomId}</p>;
};

export default ChatRoom;
