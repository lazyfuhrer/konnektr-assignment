import moment from "moment";
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
      {/* Date section */}
      <div className="flex items-center justify-center mt-4">
        <hr className="border-t border-gray-400 flex-grow mx-3" />
        <p className="text-sm font-medium text-[#436475]">{moment().format("MMM D, YYYY")}</p>
        <hr className="border-t border-gray-400 flex-grow mx-3" />
      </div>
      {/* Chat area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex items-start my-2 ${ idx % 2 === 0 ? "ml-5 justify-start" : "justify-end mr-5"}`}>
            <div className={`max-w-xs px-4 py-2 rounded-lg ${ idx % 2 === 0 ? "bg-gradient-to-br from-pink-500 to-purple-600 text-white" : "bg-white text-black " }`}>
              <p className="text-base">{msg}</p>
              <p className="text-xs text-gray-400 text-right mt-1">{moment().format("h:mm A")}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Message section */}
      <div className="flex items-center p-5" style={{ zIndex: 1 }}>
        <Image src={"/images/attachment.svg"} width={30} height={30} alt="attachments"/>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="flex-1 px-4 py-2 bg-gray-200 font-light focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#436475]" placeholder="Message"/>
        <Image onClick={handleSendMessage} src={"/images/send.svg"} width={30} height={30} alt="send"/>
      </div>
      {/* Hide scrollbar in webkit browsers */}
      <style jsx>{` .overflow-y-auto::-webkit-scrollbar { display: none;} `}</style>
    </div>
  );
};