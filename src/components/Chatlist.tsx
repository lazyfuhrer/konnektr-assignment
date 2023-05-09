import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Chatlist() {
  return (
    <div className="w-5/6 mx-auto text-[#436475]">
      <div className="flex items-center justify-between w-full h-20 px-5 rounded-3xl">
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
      <div className="flex space-x-4 items-center justify-between h-20 p-5 bg-black rounded-md">
        <div className="flex items-center space-x-2">
          <Image className='rounded-full' src={"/images/profile.svg"} width={50} height={50} alt="profile"/>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Shivrajjj</span>
            <span className="text-xs font-light">Hey there....</span>
          </div>
        </div>
        <span className="font-semibold text-xs">2 minutes</span>
      </div>
      {/* separated */}
      <div className="flex space-x-4 text-[#436475] items-center justify-between h-20 p-5 bg-red-600 rounded-md">
        <div className="flex items-center space-x-2">
          <Image className='rounded-full' src={"/images/profile.svg"} width={50} height={50} alt="profile"/>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Shivrajjj</span>
            <span className="text-xs font-light">Hey there....</span>
          </div>
        </div>
        <span className="font-semibold text-xs">Yesterday</span>
      </div>
    </div>
  );
};
