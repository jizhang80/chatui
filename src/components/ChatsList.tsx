import { useState, useEffect } from "react";
import ChatItem from "./ChatItem";

export default function ChatsList() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    //get chats from DB
    setChats({ name: "test chat", url: "" });
  }, [chats]);

  return (
    <div>
      <p>Chats</p>
      <div>
        {chats.map((chat, index) => (
          <ChatItem key={index} name={chat.name} url={name.url} />
        ))}
      </div>
    </div>
  );
}
