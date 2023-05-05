
export default function Chatlist() {
  return (
    <>
    <div className="w-1/4 bg-gray-100">
        <ul className="mt-4">
            <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <img src="https://source.unsplash.com/random/32x32" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
            <span className="text-gray-800">John Doe</span>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-200">
            <img src="https://source.unsplash.com/random/32x32" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
            <span className="text-gray-800">Jane Smith</span>
            </li>
            {/* ... more chat contacts */}
        </ul>
    </div>
    </>
  );
};

