import React from 'react';

interface SuccessDialogProps {
  open: boolean;
  onClose: () => void;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 flex flex-col items-center relative">
        <div className="mb-4">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="54" stroke="#09342D" strokeWidth="8" fill="none" />
            <path d="M40 65L55 80L80 50" stroke="#09342D" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-[#09342D] mb-2 text-center">Success !!</h2>
        <p className="text-center text-gray-700 mb-6">
          Your Subscription Has Been<br />
          Successfully Upgraded To The<br />
          Enterprise Plan. Your Next Renewal<br />
          Date Is DD/MM/YYYY.<br />
          Thank You For Choosing Us — We’re<br />
          Committed To Delivering The Highest<br />
          Level Of Service And Value.
        </p>
        <button
          className="w-2/3 py-3 rounded-full bg-[#09342D] text-white text-2xl font-semibold hover:bg-[#0b453a]"
          onClick={onClose}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default SuccessDialog; 