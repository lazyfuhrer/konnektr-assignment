import Image from 'next/image';

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex items-center justify-center h-20 text-[#436475]">
        <span className="text-xl font-bold">Konnektr</span>
      </div>
      <ul className="flex-grow flex flex-col justify-center text-lg ml-20">
        <li className="flex px-4 py-2 text-[#436475] mb-4 font-bold cursor-pointer">
          <div className="flex">
            <Image src={"/images/home.svg"} width={25} height={25} alt="Home" />
            <span className="ml-5">Home</span>
          </div>
        </li>
        <li className="flex items-center px-4 py-2 text-[#436475] mb-4 font-bold cursor-pointer">
          <div className="flex items-center">
            <Image src={"/images/connections.svg"} width={25} height={25} alt="Connections" />
            <span className="ml-5">Connections</span>
          </div>
        </li>
        <li className="flex items-center px-4 py-2 text-[#436475] mb-4 font-bold cursor-pointer">
          <div className="flex items-center">
            <Image src={"/images/communities.svg"} width={25} height={25} alt="Communities" />
            <span className="ml-5">Communities</span>
          </div>
        </li>
        <li className="flex items-center px-4 py-2 text-[#436475] mb-4 font-bold cursor-pointer">
          <div className="flex items-center">
            <Image src={"/images/store.svg"} width={25} height={25} alt="Quests" />
            <span className="ml-5">Quests</span> 
          </div>
        </li>
        <li className="flex items-center px-4 py-2 text-[#436475] mb-4 font-bold cursor-pointer">
          <div className="flex items-center">
            <Image src={"/images/store.svg"} width={25} height={25} alt="Store" />
            <span className="ml-5">Store</span>
          </div>
        </li>
        <li className="flex items-center px-4 py-2 text-[#436475] font-bold cursor-pointer">
          <div className="flex items-center ">
            <Image src={"/images/messages.svg"} width={25} height={25} alt="Messages" />
            <span className="ml-5 ">Messages</span>
          </div>
        </li>
      </ul>
      <div className="flex items-center justify-center px-4 py-2">
        <img src="https://source.unsplash.com/random/32x32" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
        <span className="block font-medium text-gray-800">John Doe</span>
      </div>
    </div>
  );
};