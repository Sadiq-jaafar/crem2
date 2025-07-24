"use client"
import Header3 from '@/Components/Header3';
import React, { useState } from 'react';
import PaymentDialog from '@/Components/PaymentDialog';

const plans = [
  {
    name: 'Basic',
    price: 50000,
    originalPrice: 50000,
    features: [
      'Few Applications',
      '3 Active Projects',
      '5 Properties',
      '5 Teams & 5 Members',
    ],
    isCurrent: false,
  },
  {
    name: 'Pro',
    price: 100000,
    originalPrice: 100000,
    features: [
      'Less Applications',
      '10 Active Projects',
      '20 Properties',
      '10 Teams & 15 Members',
      'Priority Support',
    ],
    isCurrent: true,
  },
  {
    name: 'Enterprise',
    price: 150000,
    originalPrice: 150000,
    features: [
      'All Applications',
      'Unlimited Projects',
      'Unlimited Properties',
      'Unlimited Teams/Members',
      'Dedicated Support',
    ],
    isCurrent: false,
  },
];

const SubscriptionPlans = () => {
  const [currentPlans, setCurrentPlans] = useState(plans);
  const [showDialog, setShowDialog] = useState(false);
  // Removed selectedPlan as it is not used

  const handlePlanChange = (planName: string) => {
    setCurrentPlans(currentPlans.map(plan => ({
      ...plan,
      isCurrent: plan.name === planName
    })));
  };

  // Remove planName parameter since it's not used
  const handleChoosePlan = () => {
    setShowDialog(true);
  };

  return (
    <div className="max-h-screen  overflow-auto bg-gray-100 scrollbar-none">
      <Header3 name="Subscription Plan" />
      <div className="min-w-min-[906px] min-h-[363px]  m-6  ">
       <div className="font-bold mb-10 border-none">
  <select defaultValue="Monthly Subscription Plan">
    <option value="Monthly Subscription Plan" className='bg-gray-100 border-none'>Monthly Subscription Plan</option>
    <option value="Anual Subscription Plan"className='bg-gray-100 border-none'>Anual Subscription Plan</option>
    
  </select>
</div>
      <div className="flex min-h-[318px] justify-center gap-8"
       
      >
       {currentPlans.map((plan, idx) => (
            <div
            onClick={() => handlePlanChange(plan.name)}
              key={idx}
              className={`border rounded-xl p-6 w-80 shadow-sm ${
                plan.isCurrent ? 'border-black' : 'border-gray-300'
              }`}
            >
              <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-4">
                For Large Companies With advanced Needs
              </p>
              <ul className="space-y-2 mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="list-disc ml-4">{feature}</li>
                ))}
              </ul>
              <p className="text-black font-bold text-lg">
                <span className="line-through text-gray-500 mr-1">
                  ₦ {plan.originalPrice.toLocaleString()}
                </span>
              </p>
              <button
                disabled={plan.isCurrent}
                onClick={e => { e.stopPropagation(); handleChoosePlan(); }}
                className={`mt-4 w-full py-2 rounded border ${
                  plan.isCurrent
                    ? 'bg-[#09342D] text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {plan.isCurrent ? 'Current Plan' : 'Choose Plan'}
              </button>
            </div>
          ))}
      </div>
      </div>

      <div className="border min-h-[160px]  m-6 shadow-md rounded-lg p-6">
        <p className="font-semibold">Your Current Subscription</p>
        <p className="text-sm">Plan: Pro</p>
        <p className="text-sm">Renewal Date: dd/mm/yyyy</p>
        <button className="mt-4 px-6 py-2 bg-white border rounded hover:bg-[#09342D] hover:text-gray-100" onClick={() => setShowDialog(true)}>
          Upgrade
        </button>
      </div>
      <PaymentDialog open={showDialog} onClose={() => setShowDialog(false)} />
    </div>
  );
};

export default SubscriptionPlans;
