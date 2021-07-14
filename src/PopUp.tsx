import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useState } from "react";
import { ExclamationIcon } from "@heroicons/react/solid";
import { title } from "process";

interface Props {
  title?: string;
  description?: string;
  okText?: string;
  cancelText?: string;
}

const PopUp: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-primary-200">
        <button
          onClick={() => setIsOpen((opened) => !opened)}
          className="p-3 font-bold text-center text-white md:p-4 md:text-lg focus:outline-none bg-primary-300 rounded-2xl hover:opacity-90"
        >
          Open Dialog
        </button>
      </div>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog open={isOpen} onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 "
            enterTo="opacity-50"
            entered="opacity-50"
            leave="ease-in duration-500"
            leaveFrom="opacity-50"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black " />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transform transition-transform duration-500"
            enterFrom="translate-x-20"
            enterTo="translate-x-0"
            leave="transform transition-transform duration-500"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-20"
          >
            <div className="fixed bg-white border border-white shadow-md inset-1/3 rounded-3xl min-w-max">
              <div className="flex flex-col items-center">
                <ExclamationIcon className="w-24 h-24 sm:h-28 sm:w-28 text-primary-300" />
                <Dialog.Title className="text-xl font-semibold md:text-2xl">
                  {props.title}
                </Dialog.Title>
                <Dialog.Description className="px-8 pt-2 text-sm">
                  {props.description}
                </Dialog.Description>
                <div className="flex justify-center w-3/4 pt-8 text-sm sm:text-base">
                  <button onClick={() => setIsOpen(!isOpen)} 
                  className="flex-1 py-1 mr-6 font-semibold text-white rounded-lg bg-primary-300 hover:opacity-90">
                    {props.okText}
                  </button>
                  <button onClick={() => setIsOpen(!isOpen)}  
                  className="flex-1 py-1 font-semibold text-white rounded-lg bg-primary-300 hover:opacity-90">
                    {props.cancelText}
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

PopUp.defaultProps = {
  title: "Are You Sure",
  okText: "OK",
  cancelText: "Cancel",
};
export default PopUp;
