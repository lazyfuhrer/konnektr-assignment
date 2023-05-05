import Chatlist from '@/components/Chatlist';
import Chatscreen from '@/components/Chatscreen';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="w-1/4 bg-gray-100">
        <Sidebar/>
      </div>
      <div className="w-1/2 bg-gray-200">
        <Chatscreen/>
      </div>
      <div className="w-1/4 bg-gray-100">
        <Chatlist/>
      </div>
    </div>
  );
};