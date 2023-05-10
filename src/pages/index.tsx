import Chatlist from '@/components/Chatlist';
import Chatscreen from '@/components/Chatscreen';
import Sidebar from '@/components/Sidebar';
import React from 'react';

export default function Home(): React.ReactElement {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen">
      <div className="w-full md:w-1/4 bg-gray-100 md:block hidden">
        <Sidebar/>
      </div>
      <div className="w-full md:w-1/2 bg-gray-200">
        <Chatscreen/>
      </div>
      <div className="w-full md:w-1/4 bg-gray-100 md:block hidden">
        <Chatlist/>
      </div>
    </div>
  );
}