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
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[350px] flex flex-col items-center">
        <div className="text-[80px] text-[#09342D] mb-2">✔️</div>
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