import Image from 'next/image';

export default function Sidebar(): JSX.Element {
  return (
    <div className="flex flex-col h-full lg:h-screen bg-gray-100">
      <div className="flex items-center justify-center h-16 lg:h-40 text-[#436475]">
        <span className="text-2xl font-bold">Konnektr</span>
      </div>
      <ul className="flex-grow flex flex-col justify-center text-lg ml-4 lg:ml-20">
        <li className="flex px-2 lg:px-4 py-2 text-[#436475] mb-2 lg:mb-4 font-bold cursor-pointer">
          <div className="flex">
            <Image src={"/images/home.svg"} width={25} height={25} alt="Home" />
            <span className="ml-2 lg:ml-5">Home</span>
          </div>
        </li>
        <li className="flex items-center px-2 lg:px-4 py-2 text-[#436475] mb-2 lg:mb-4 font-bold cursor-pointer">
          <div className="flex items-center">
            <Image src={"/images/connections.svg"} width={25} height={25} alt="Connections" />
            <span className="ml-2 lg:ml-5">Connections</span>
          </div>
        </li>
        <li className="flex items-center px-2 lg:px-4 py-2 text-[#436475] mb-2 lg:mb-4 font-bold cursor-pointer">
          <div className="flex items-center">
            <Image src={"/images/communities.svg"} width={25} height={25} alt="Communities" />
            <span className="ml-2 lg:ml-5">Communities</span>
          </div>
        </li>
        <li className="flex items-center px-2 lg:px-4 py-2 text-[#436475] mb-2 lg:mb-4 font-bold cursor-pointer">
          <div className="flex items-center">
            <Image src={"/images/store.svg"} width={25} height={25} alt="Quests" />
            <span className="ml-2 lg:ml-5">Quests</span> 
          </div>
        </li>
        <li className="flex items-center px-2 lg:px-4 py-2 text-[#436475] mb-2 lg:mb-4 font-bold cursor-pointer">
          <div className="flex items-center">
            <Image src={"/images/store.svg"} width={25} height={25} alt="Store" />
            <span className="ml-2 lg:ml-5">Store</span>
          </div>
        </li>
        <li className="flex items-center px-2 lg:px-4 py-2 text-[#436475] font-bold cursor-pointer">
          <div className="flex items-center ">
            <Image src={"/images/messages.svg"} width={25} height={25} alt="Messages" />
            <span className="ml-2 lg:ml-5 bg-gradient-to-br from-pink-500 to-purple-600 text-transparent bg-clip-text">Messages</span>
          </div>
        </li>
      </ul>
      <div className="flex items-center justify-center py-10 space-x-4 text-[#436475]">
        <Image className='rounded-full' src={"/images/profile.svg"} width={35} height={35} alt="profile"/>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">User</span>
          <span className="text-xs font-normal bg-gradient-to-br from-pink-500 to-purple-600 text-transparent bg-clip-text">@shivrxj.lens</span>
        </div>
        <Image src={"/images/bell.svg"} width={17} height={17} alt="bell"/>
        <Image src={"/images/settings.svg"} width={17} height={17} alt="settings"/>
      </div>
    </div>
  );
};