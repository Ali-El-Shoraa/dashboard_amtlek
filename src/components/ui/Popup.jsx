import React from "react";

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#01425a]/70 z-50 ">
      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute right-4 top-4  p-0.5 rounded-md transition cursor-pointer hover:text-white bg-gray-300 hover:bg-red-300 "
        >
          <i className="bx bx-x text-2xl p-1.5 "></i>
        </button>

        <img
          src="/public/images/navEnLogo.png"
          className="w-[100px] mx-auto my-5"
          alt=""
        />

        {children}
      </div>
    </div>
  );
};

export default Popup;
