import React from "react";

interface SuccessDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  buttonText?: string;
  onNavigate?: () => void;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({ open, onClose, title = "Success !!", message, buttonText = "Ok", onNavigate }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[450px] flex flex-col items-center">
      <div className="bg-white dark:bg-gray-900  flex flex-col items-center justify-center p-8">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="50" stroke="#13322B" strokeWidth="6"/>
                <path d="M40 65L55 80L80 50" stroke="#13322B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
             
            </div>
        <div className="text-2xl font-bold text-[#09342D] mb-2 text-center">{title}</div>
        <div className="text-center text-gray-700 mb-6 whitespace-pre-line">{message}</div>
        <button
          className="bg-[#09342D] text-white text-xl font-semibold px-10 py-2 rounded-full focus:outline-none hover:bg-[#0b463a]"
          onClick={() => {
            onClose();
            if (onNavigate) {
              onNavigate();
            }
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SuccessDialog; 