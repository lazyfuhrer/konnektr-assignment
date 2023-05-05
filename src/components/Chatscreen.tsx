
export default function Chatscreen() {
  return (
    <>
    <div className="w-1/2 bg-gray-200">
        <div className="flex flex-col h-full">
            <div className="flex-grow p-4 overflow-y-scroll">
            {/* Dummy Chat Messages */}
            <div className="flex mb-4">
                <img src="https://source.unsplash.com/random/32x32" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                <div className="bg-white rounded-lg p-2">
                <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor elit sed lectus pulvinar convallis.</p>
                </div>
            </div>
            {/* ... more chat messages */}
            </div>
            <div className="h-16 bg-white border-t border-gray-300 flex items-center justify-center">
            {/* Chat Input */}
            </div>
        </div>
    </div>
    </>
  );
};