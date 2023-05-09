import Image from "next/image";

export default function Chatlist() {
  return (
    <>
      <div className="flex space-x-4 text-[#436475] items-center justify-between w-5/6 h-20 p-5 bg-black">
        <div className="flex items-center space-x-2">
          <Image className='rounded-full' src={"/images/profile.svg"} width={50} height={50} alt="profile"/>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Shivrajjj</span>
            <span className="text-xs font-light">Hey there....</span>
          </div>
        </div>
        <span className="font-semibold text-xs">2 minutes</span>
      </div>
      {/* seperated */}
      <div className="flex space-x-4 text-[#436475] items-center justify-between w-5/6 h-20 p-5 bg-red-600">
        <div className="flex items-center space-x-2">
          <Image className='rounded-full' src={"/images/profile.svg"} width={50} height={50} alt="profile"/>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Shivrajjj</span>
            <span className="text-xs font-light">Hey there....</span>
          </div>
        </div>
        <span className="font-semibold text-xs">Yesterday</span>
      </div>
    </>
  );
};
