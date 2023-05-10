import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Chatlist() {
  const timeStamp = [
    { isOnline: true,
      time: "2 minutes",
    },
    {
      isOnline: false,
      time: "1 Hour",
    },
    {
      isOnline: true,
      time: "Yesterday",
    },
    {
      isOnline: false,
      time: "Just Now",
    },
    {
      isOnline: true,
      time: "Just Now",
    },
    {
      isOnline: false,
      time: "Yesterday",
    },
  ];
  return (
    <div className="w-5/6 mx-auto text-[#436475]">
      <div className="flex items-center justify-between w-full h-20 px-5 rounded-3xl mt-5 mb-5 border border-gray-400">
        <div className="w-310 h-46 bg-gray-100 rounded-md flex items-center px-4 bg-red">
          <FaSearch className="text-gray-400 mr-3" />
          <input
            type="text"
            className="w-full h-full font-bold bg-transparent focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>
      <h1 className="text-left font-bold text-xl mb-5">Chats</h1>
      {timeStamp.map(({isOnline, time}, index) => (
        <div key={index} className="flex space-x-4 text-[#436475] items-center justify-between h-20 p-5 rounded-md border border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="relative flex-shrink-0 mr-1">
              <Image className='rounded-full' src={"/images/profile.svg"} width={50} height={50} alt="profile"/>
              {isOnline && (
                <div className="absolute w-4 h-4 bg-green-500 rounded-full -bottom-1 -right-1"></div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Shivrajjj</span>
              <span className="text-xs font-light">Hey there....</span>
            </div>
          </div>
          <span className="font-semibold text-xs">{time}</span>
        </div>
      ))}
    </div>
  );  
};