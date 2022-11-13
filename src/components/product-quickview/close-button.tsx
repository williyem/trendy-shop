import React from "react";
import { XIcon } from "@heroicons/react/outline";

interface buttonProp {
  setOpen(value: boolean): void;
}
const CloseButton = ({ setOpen }: buttonProp) => {
  return (
    <>
      <button
        type="button"
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
        onClick={() => setOpen(false)}
      >
        <span className="sr-only">Close</span>
        <XIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </>
  );
};

export default CloseButton;
