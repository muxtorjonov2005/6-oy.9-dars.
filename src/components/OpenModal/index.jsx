import React, { useRef, useState } from "react";

function OpenModal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  function handleClose() {
    setIsOpen(false);
  };

  function handleOpen() {
    setIsOpen(true);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 scale-100"
          >
            <h2 className="text-2xl font-bold mb-4">Modal Oynasi</h2>
            <p className="mb-4">Bu modal oynaning mazmuni.</p>
            <button
              onClick={handleClose}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OpenModal;
