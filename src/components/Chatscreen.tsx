import Image from "next/image";
import { useState } from "react";

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [recipient, setRecipient] = useState({
    name: "Shivrajjj",
    profileImage: "/images/profileBig.svg"
  });

  const handleSendMessage = () => {
    if (message.trim().length === 0) return;

    setMessages([...messages, message.trim()]);
    setMessage("");
  };

  return (
    <div
      className="flex flex-col h-screen bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage:
          "url(images/chat-bg.jpg)",
      }}
    >
      {/* Header section */}
      <div className="flex items-center p-4 bg-white shadow-lg">
        <img
          src={recipient.profileImage}
          alt={recipient.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex-1">
          <p className="text-lg font-semibold">{recipient.name}</p>
        </div>
        <Image src={"/images/call.svg"} width={20} height={20} alt="call"/>
        <Image src={"/images/video.svg"} width={20} height={20} alt="video"/>
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-center my-2 ${
              idx % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg ${
                idx % 2 === 0
                  ? "bg-gray-200"
                  : "bg-blue-500 text-white"
              }`}
            >
              {msg}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 px-4 py-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Message"
        />
        <Image onClick={handleSendMessage} src={"/images/send.svg"} width={18} height={18} alt="send"/>
      </div>
    </div>
  );
};

export default ChatScreen;
