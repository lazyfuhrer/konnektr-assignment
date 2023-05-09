import Image from "next/image";
import { useState } from "react";

export default function ChatScreen (){
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const recipient = { name: "Shivrajjj", profileImage: "/images/profileBig.svg" };

  const handleSendMessage = () => {
    if (message.trim().length === 0) return;
    setMessages([...messages, message.trim()]);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url(images/chatbg.svg)" }}>
      {/* Header section */}
      <div className="flex items-center p-4 bg-white shadow-lg">
        <img src={recipient.profileImage} alt={recipient.name} className="w-12 h-12 rounded-full mr-4"/>
        <div className="flex-1">
          <p className="text-lg font-semibold text-[#436475]">{recipient.name}</p>
        </div>
        <div className="flex flex-row cursor-pointer">
          <Image className="mr-7" src={"/images/call.svg"} width={20} height={20} alt="call"/>
          <Image src={"/images/video.svg"} width={20} height={20} alt="video"/>
        </div>
      </div>

      <div className="flex-1 h-0 flex flex-col overflow-y-auto">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex items-center my-2 ${ idx % 2 === 0 ? "justify-start" : "justify-end"}`}>
            <div className={`px-4 m-5 py-2 rounded-lg ${ idx % 2 === 0 ? "bg-[#FE06C7]" : "bg-white text-black" }`}>{msg}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center" style={{ zIndex: 1 }}>
        <Image src={"/images/attachment.svg"} width={30} height={30} alt="attachments"/>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="flex-1 px-4 py-2 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#436475]" placeholder="Message"/>
        <Image onClick={handleSendMessage} src={"/images/send.svg"} width={30} height={30} alt="send"/>
      </div>
      {/* Hide scrollbar in webkit browsers */}
      <style jsx>{`
        .overflow-y-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};