import Image from 'next/image';
import React, { useState } from 'react';
import icons from '../../constants/icons';
import SuccessDialog from './SuccessDialog';

interface PaymentDialogProps {
  open: boolean;
  onClose: () => void;
}

const PaymentDialog: React.FC<PaymentDialogProps> = ({ open, onClose }) => {
  const [selectedCard, setSelectedCard] = useState<'existing' | 'new'>('existing');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  if (!open && !showSuccess) return null;

  const handlePay = () => {
    // Simulate payment success
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onClose();
  };

  return (
    <>
      {open && !showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-300">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="font-bold text-xl mb-2">Confirm and Pay</h2>
            <p className="mb-4 text-sm">
              You’re about to switch to <span className="font-bold">Enterprise</span> Plan. Please<br />
              Select/Provide Payment Details Below
            </p>
            <hr className="mb-4" />
            <div className="mb-4">
              <p className="font-medium mb-2">Select From Existing card</p>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="existing"
                  name="card"
                  checked={selectedCard === 'existing'}
                  onChange={() => setSelectedCard('existing')}
                  className="mr-2"
                />
                <span className="mr-2">
                  <Image src={icons.mastercard} alt="Mastercard" width={24} height={24} className="inline w-6 h-6 align-middle" />
                </span>
                <span className="text-base">112342*****4563</span>
              </div>
              <div className="flex flex-col mb-2">
                <div className="flex-row">
                  <input
                    type="radio"
                    id="new"
                    name="card"
                    checked={selectedCard === 'new'}
                    onChange={() => setSelectedCard('new')}
                    className="mr-2"
                  />
                  <span className="mr-2">
                    <Image src={icons.card} alt="Card" width={24} height={24} className="inline w-6 h-6 align-middle" />
                  </span>
                  <span className="text-base font-medium">Add New Card</span>
                </div>
                <div className="ml-4">
                  <Image src={icons.visa} alt="Visa" width={24} height={24} className="inline w-6 h-6 align-middle" />
                  <Image src={icons.mastercard} alt="Mastercard" width={24} height={24} className="inline w-6 h-6 align-middle ml-1" />
                  <Image src={icons.card} alt="Amex" width={24} height={24} className="inline w-6 h-6 align-middle ml-1" />
                </div>
              </div>
            </div>
            {selectedCard === 'new' && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border rounded px-3 py-2 mb-2"
                  value={cardNumber}
                  onChange={e => setCardNumber(e.target.value)}
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-1/2 border rounded px-3 py-2 mb-2"
                    value={expiry}
                    onChange={e => setExpiry(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 border rounded px-3 py-2 mb-2"
                    value={cvv}
                    onChange={e => setCvv(e.target.value)}
                  />
                </div>
              </div>
            )}
            <div className="flex justify-between items-center mt-6">
              <button
                className="px-4 py-2 rounded border border-gray-300 bg-white hover:bg-gray-100"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="px-6 py-2 rounded bg-[#09342D] text-white font-semibold hover:bg-[#0b453a]"
                onClick={handlePay}
              >
                Pay & upgrade
              </button>
            </div>
          </div>
        </div>
      )}
      <SuccessDialog open={showSuccess} onClose={handleSuccessClose} />
    </>
  );
};

export default PaymentDialog; 