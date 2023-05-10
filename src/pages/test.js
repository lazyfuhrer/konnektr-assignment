import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import Draggable from 'react-draggable';
import { FaPhoneSlash, FaPhone, FaVideo } from 'react-icons/fa';

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button type="button" onClick={openModal} className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Open dialog</button>
      </div>
      <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 z-10 overflow-y-auto">
        <div className="min-h-screen bg-black bg-opacity-25 flex items-center justify-center p-4">
          <Draggable handle=".drag-handle">
            <div>
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="drag-handle bg-white rounded-lg p-4">
                  <div className="flex flex-col items-center mb-4 text-[#436475] font-semibold">
                    <img src="/images/mary.svg" alt="Caller Image" className="h-20 w-20 rounded-full"/>
                    <span className="text-xl">Mary Jane</span>
                    <span className="text-xs">Ready to call?</span>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-[#14D696] text-white font-bold py-2 px-3 rounded-full">
                      <FaVideo className="w-5 h-5" />
                    </button>
                    <div className="mx-2"></div>
                    <button className="bg-[#436475] text-white font-bold py-2 px-3 rounded-full">
                      <FaPhoneSlash className="w-5 h-5" />
                    </button>
                    <div className="mx-2"></div>
                    <button className="bg-[#14D696] text-white font-bold py-2 px-3 rounded-full">
                      <FaPhone className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </Draggable>
        </div>
      </Dialog>
    </>
  );
};