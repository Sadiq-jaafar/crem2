"use client";

import Image from "next/image";
import images from "../../../constants/images";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Logo and Title */}
      <div className="flex items-center w-full max-w-3xl mb-2">
        <Image src={images.logo2} alt="CREMS Logo" width={100} height={100} className="mr-2" />
        <span className="text-2xl font-semibold text-gray-700">CREMS</span>
      </div>
      {/* Card */}
      <div className="bg-gray-100 rounded-2xl shadow flex w-full max-w-3xl overflow-hidden">
        {/* Left Panel */}
        <div className="flex items-center justify-center w-1/2 bg-gray-100 p-8">
          <Image
            src={images.signin}
            alt="Signin Illustration"
            width={300}
            height={300}
            style={{ width: 235, height: 303, objectFit: "contain" }}
            className=""
            priority
          />
        </div>
        {/* Right Panel */}
        <div className="w-1/2 flex flex-col justify-center p-10">
          <h2 className="text-lg font-bold mb-4">Join Crems Community</h2>
          <span className="text-sm text-gray-700 mb-2">Continue with</span>
          <div className="flex gap-2 mb-4">
            <button className="flex-1 border border-gray-300 rounded bg-white py-2 flex items-center justify-center gap-2">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-gray-700 font-medium">Google</span>
            </button>
            <button className="flex-1 border border-gray-300 rounded bg-white py-2 flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
                <path d="M3 7l9 6 9-6" strokeWidth="2" />
              </svg>
            </button>
          </div>
          <div className="flex items-center mb-4">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="mx-2 text-gray-400 text-xs">Or, sign-up with your email</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          <form className="space-y-3 mb-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded bg-gray-200 placeholder-gray-500"
              disabled
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded bg-gray-200 placeholder-gray-500"
              disabled
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded bg-gray-200 placeholder-gray-500"
              disabled
            />
            <button
              type="button"
              className="w-full bg-gray-600 text-white p-2 rounded hover:bg-gray-700"
              disabled
            >
              Sign up
            </button>
          </form>
          <div className="text-center text-sm text-gray-700 mb-2">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              sign in
            </a>
          </div>
          <div className="text-xs text-gray-400 text-center">
            By proceeding, you are agreeing to the{" "}
            <a href="#" className="text-blue-500 underline">
              Terms &amp; Conditions and policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}