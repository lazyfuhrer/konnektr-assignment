import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Draggable from "react-draggable";
import { FaPhoneSlash, FaPhone, FaVideo } from "react-icons/fa";

export default function ChatScreen (){
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCalling, setIsCalling] = useState<boolean>(false);
  const [isRinging, setIsRinging] = useState<boolean>(false);
  const [callDuration, setCallDuration] = useState<number>(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const recipient = { name: "Shivrajjj", profileImage: "/images/profileBig.svg" };
  const handleSendMessage = () => {
    if (message.trim().length === 0) return;
    setMessages([...messages, message.trim()]);
    setMessage("");
  };
  function closeModal(): void {
    if (timer !== null) {
      clearInterval(timer);
    }
    setIsOpen(false);
    setIsCalling(false);
    setIsRinging(false);
    setCallDuration(0);
    setTimer(null);
  }
  function openModal(): void {
    setIsOpen(true);
  }
  function handleCallButtonClick(): void {
    setIsRinging(true);
    setTimeout(() => {
      setIsRinging(false);
      setIsCalling(true);
      setTimer(
        setInterval(() => {
          setCallDuration((prevDuration) => prevDuration + 1);
        }, 1000)
      );
    }, 5000);
  }
  function handleCutCallClick(): void {
    if (timer !== null) {
      clearInterval(timer);
    }
    setIsCalling(false);
    setIsRinging(false);
    setCallDuration(0);
    setTimer(null);
  }
  const minutes = Math.floor(callDuration / 60).toString().padStart(2, "0");
  const seconds = (callDuration % 60).toFixed(0).toString().padStart(2, "0");
  return (
    <div className=" z flex flex-col h-screen bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url(images/chatbg.svg)" }}>
      {/* Header section */}
      <div className="flex items-center p-4 bg-white shadow-lg">
        <img src={recipient.profileImage} alt={recipient.name} className="w-12 h-12 rounded-full mr-4"/>
        <div className="flex-1">
          <p className="text-lg font-semibold text-[#436475]">{recipient.name}</p>
        </div>
        <div className="flex flex-row cursor-pointer" style={{ zIndex: 1 }}>
          <Image  onClick={openModal} className="mr-7" src={"/images/call.svg"} width={20} height={20} alt="call"/>
          <Image onClick={openModal} src={"/images/video.svg"} width={20} height={20} alt="video"/>
        </div>
      </div>
      {/* Date section */}
      <div className="flex items-center justify-center mt-4">
        <hr className="border-t border-gray-400 flex-grow mx-3" />
        <p className="text-sm font-medium text-[#436475]">{moment().format("MMM D, YYYY")}</p>
        <hr className="border-t border-gray-400 flex-grow mx-3" />
      </div>
      {/* Chat area */}
      <div className="flex-1 flex flex-col overflow-y-auto" style={{ zIndex: 1 }}>
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
      {/* Call Modal */}
      <>
      <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 z-10 overflow-y-auto">
        <div className="min-h-screen bg-black bg-opacity-25 flex items-center justify-center p-4">
          <Draggable handle=".drag-handle">
            <div>
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="drag-handle bg-white rounded-lg p-4">
                  <div className="flex flex-col items-center mb-4 text-[#436475] font-semibold">
                    <img src="/images/mary.svg" alt="Caller Image" className="h-20 w-20 rounded-full"/>
                    <span className="text-xl">Mary Jane</span>
                    <span className="text-xs">{isCalling ? `${minutes}:${seconds}` : isRinging ? "Ringing..." : "Ready to call?"}</span>
                  </div>
                  <div className="flex justify-center">
                    <button className={` text-white font-bold py-2 px-3 rounded-full ${ isCalling || isRinging ? 'bg-[#436475]' : 'bg-[#14D696]'}`} onClick={handleCallButtonClick} disabled={isCalling || isRinging}>
                      <FaVideo className="w-5 h-5" />
                    </button>
                    <div className="mx-2"></div>
                    <button className={` text-white font-bold py-2 px-3 rounded-full ${ isCalling || isRinging ? 'bg-[#F20505]' : 'bg-[#436475]'}`} onClick={handleCutCallClick}>
                      <FaPhoneSlash className="w-5 h-5" />
                    </button>
                    <div className="mx-2"></div>
                    <button className={` text-white font-bold py-2 px-3 rounded-full ${ isCalling || isRinging ? 'bg-[#436475]' : 'bg-[#14D696]'}`} onClick={handleCallButtonClick} disabled={isCalling || isRinging}>
                      <FaPhone className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </Draggable>
        </div>
      </Dialog>
    </>
      {/* Hide scrollbar in webkit browsers */}
      <style jsx>{` .overflow-y-auto::-webkit-scrollbar { display: none;} `}</style>
    </div>
  );
};