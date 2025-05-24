"use client";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MemoPage() {
  return (
    <div className="flex h-screen bg-white">
      {/* Main Memo Content */}
      <div className="flex-1 p-8">
        <div className={`${inter.className} max-w-2xl mx-auto`}>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold uppercase mb-2">real estate & construction</h1>
            <h2 className="text-xl font-semibold uppercase">internal memo</h2>
            <div className="h-px bg-black w-32 mx-auto my-3"></div>
          </div>

          <div className="space-y-6 text-sm">
            <div className="flex justify-between">
              <span>REF:  RHL/ADM$HR/12/20</span>
              <span>Date: 10th December, 2024</span>
            </div>

            <div className="space-y-2">
              <p>TO: Managing Director</p>
              <p>Through: IT Department</p>
              <p>From: Admin & Human Resources department</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Subject: Request for ITM Disbursement</p>
              <p className="font-semibold">Purpose: ---</p>
            </div>

            <div className="space-y-4">
              <p>The above subject refers.</p>
              <p>
                Kindly approve the disbursement of the sum of Forty-Four Thousand,
                Thirty Naira Only (54,030.00) for the services provided by ITM for
                the month of July.
              </p>
            </div>

            <div className="mt-8 space-y-2">
              <p>Thank you.</p>
              <p>Regards,</p>
              <p className="font-semibold">Lidadi Bassey</p>
              <p>Admin & HR. Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* Editing Sidebar */}
      <div className="w-64 bg-gray-50 p-4 border-l border-gray-200 flex flex-col">
        {/* Typography Section */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold mb-3">Typography</h3>
          <div className="flex items-center gap-2 mb-2">
            <select className="text-xs p-1 border rounded w-full">
              <option>Inter</option>
            </select>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs">Thin</span>
            <input type="number" className="w-12 text-xs p-1 border rounded" defaultValue="9" />
          </div>
          <div className="flex gap-1 mb-3">
            <button className="px-2 py-1 border rounded text-xs">B</button>
            <button className="px-2 py-1 border rounded text-xs">U</button>
            <button className="px-2 py-1 border rounded text-xs">X₂</button>
            <button className="px-2 py-1 border rounded text-xs">X²</button>
            <button className="px-2 py-1 border rounded text-xs">Aa~</button>
          </div>
        </div>

        {/* Alignment Section */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold mb-3">Alignment</h3>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="text-xs">Line height</div>
            <input type="number" className="w-12 text-xs p-1 border rounded" defaultValue="0" />
          </div>
        </div>

        {/* Insert Section */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold mb-3">Insert</h3>
          <div className="flex gap-2 mb-2">
            <button className="px-2 py-1 border rounded text-xs">Table</button>
            <button className="px-2 py-1 border rounded text-xs">Picture</button>
            <button className="px-2 py-1 border rounded text-xs">Doc</button>
          </div>
        </div>

        {/* Bottom Tools */}
        <div className="mt-auto space-y-2">
          <button className="w-full bg-blue-600 text-white py-1 rounded text-xs">
            Send
          </button>
          <div className="flex justify-between text-xs">
            <span>100%</span>
            <div className="flex gap-2">
              <button>☑</button>
              <button>☐</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}