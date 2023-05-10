import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Draggable from "react-draggable";
import { FaPhoneSlash, FaPhone, FaVideo } from "react-icons/fa";

export default function MyModal(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCalling, setIsCalling] = useState<boolean>(false);
  const [isRinging, setIsRinging] = useState<boolean>(false);
  const [callDuration, setCallDuration] = useState<number>(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  function closeModal(): void {
    if (timer !== null) {
      clearInterval(timer);
    }
    setIsOpen(false);
    setIsCalling(false);
    setIsRinging(false);
    setCallDuration(0);
    setTimer(null);
  }
  function openModal(): void {
    setIsOpen(true);
  }
  function handleCallButtonClick(): void {
    setIsRinging(true);
    setTimeout(() => {
      setIsRinging(false);
      setIsCalling(true);
      setTimer(
        setInterval(() => {
          setCallDuration((prevDuration) => prevDuration + 1);
        }, 1000)
      );
    }, 5000);
  }
  function handleCutCallClick(): void {
    if (timer !== null) {
      clearInterval(timer);
    }
    setIsCalling(false);
    setIsRinging(false);
    setCallDuration(0);
    setTimer(null);
  }
  const minutes = Math.floor(callDuration / 60).toString().padStart(2, "0");
  const seconds = (callDuration % 60).toFixed(0).toString().padStart(2, "0");
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
                    <span className="text-xs">{isCalling ? `${minutes}:${seconds}` : isRinging ? "Ringing..." : "Ready to call?"}</span>
                  </div>
                  <div className="flex justify-center">
                    <button className={` text-white font-bold py-2 px-3 rounded-full ${ isCalling || isRinging ? 'bg-[#436475]' : 'bg-[#14D696]'}`} onClick={handleCutCallClick} disabled={isCalling || isRinging}>
                      <FaVideo className="w-5 h-5" />
                    </button>
                    <div className="mx-2"></div>
                    <button className={` text-white font-bold py-2 px-3 rounded-full ${ isCalling || isRinging ? 'bg-[#F20505]' : 'bg-[#436475]'}`} onClick={handleCutCallClick}>
                      <FaPhoneSlash className="w-5 h-5" />
                    </button>
                    <div className="mx-2"></div>
                    <button className={` text-white font-bold py-2 px-3 rounded-full ${ isCalling || isRinging ? 'bg-[#436475]' : 'bg-[#14D696]'}`} onClick={handleCallButtonClick} disabled={isCalling || isRinging}>
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