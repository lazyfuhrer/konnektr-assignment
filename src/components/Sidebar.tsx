import Image from 'next/image';

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex items-center justify-center h-40 text-[#436475]">
        <span className="text-2xl font-bold -ml-20">Konnektr</span>
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
            <span className="ml-5">Konnektions</span>
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
            <span className="ml-5 text-[#FE06C7]">Messages</span>
          </div>
        </li>
      </ul>
      <div className="flex items-center justify-center py-10 space-x-4 text-[#436475]">
        <Image className='rounded-full' src={"/images/profile.svg"} width={35} height={35} alt="profile"/>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">User</span>
          <span className="text-xs font-normal text-[#FE06C7]">@shivrxj.lens</span>
        </div>
        <Image src={"/images/bell.svg"} width={17} height={17} alt="bell"/>
        <Image src={"/images/settings.svg"} width={17} height={17} alt="settings"/>
      </div>
    </div>
  );
};