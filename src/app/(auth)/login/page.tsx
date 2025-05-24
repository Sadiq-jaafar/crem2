

"use client";

import Image from "next/image";
import images from "../../../../constants/images";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Container for aligned logo and card */}
      <div className="w-full max-w-[620px] px-4"> {/* Match card width + padding */}
        {/* Logo and Title */}
        <div className="flex items-center w-full mb-2">
          <Image 
            src={images.logo} 
            alt="CREMS Logo" 
            width={40} 
            height={40} 
            className="" 
          />
          <span className="text-lg font-semibold text-gray-700">CREMS</span>
        </div>

        {/* Card Container */}
        <div
          className=" shadow flex-col relative overflow-hidden"
          style={{
            width: 620,
            height: 407,
            borderRadius: 20,
            background: "#E3E6E5"
          }}
        >
          <div
            className="flex mx-auto"
            style={{
              width: 553,
              height: 327,
              marginTop: 24,
              marginBottom: 24,
              borderRadius: 16,
              background: "#E3E6E5"
            }}
          >
            {/* Left Panel */}
            <div className="flex items-center justify-center w-1/2 p-4">
              <Image
                src={images.signin}
                alt="signin image"
                width={200}
                height={260}
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>

            {/* Right Panel */}
            <div
              className="flex flex-col justify-center relative"
              style={{
                width: 264,
                height: 320,
                padding: '12px',
                margin: 'auto',
              }}
            >
              <h2 className="text-base font-bold mb-2">Join Crems Community</h2>
              <span className="text-xs text-gray-700 mb-1">Continue with</span>
              
              <div className="flex gap-2 mb-2">
                <button className="flex flex-col justify-center items-center border border-gray-300 rounded bg-white py-1 px-2 text-[10px] w-[57px] h-[51px]">
                  <Image
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google"
                    width={15}
                    height={15}
                    className="mb-1"
                  />
                  <span className="text-gray-700 text-[8px]">Google</span>
                </button>
                <button className="flex flex-col items-center justify-center border border-gray-300 rounded bg-white py-1 px-2 text-[10px] w-[57px] h-[51px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-500 mb-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" stroke="currentColor" />
                    <path d="M3 7l9 6 9-6" strokeWidth="2" stroke="currentColor" />
                  </svg>
                </button>
              </div>

              <div className="flex items-center mb-2">
                <div className="flex-1 h-px bg-gray-300" />
                <span className="mx-2 text-gray-400 text-[10px]">Or, sign-up with your email</span>
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              <form className="space-y-2 mb-1">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full text-xs p-1 border border-gray-300 rounded bg-gray-200 placeholder-gray-500"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full text-xs p-1 border border-gray-300 rounded bg-gray-200 placeholder-gray-500"
                  required
                />
                
                <button
                  type="submit"
                  className="w-full text-xs bg-gray-600 text-white p-1 rounded hover:bg-gray-700"
                >
                  Sign in
                </button>
              </form>

              <div className="text-center text-gray-700 text-[10px] mb-1">
                Dose nott have an account?{" "}
                <a href="/signup" className="text-blue-600 hover:underline">
                  sign in
                </a>
              </div>

              <div className="text-[8px] text-gray-400 text-center">
                By proceeding, you are agreeing to the{" "}
                <a href="#" className="text-blue-500 underline">
                  Terms &amp; Conditions and policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}