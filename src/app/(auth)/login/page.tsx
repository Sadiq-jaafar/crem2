"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import images from "../../../../constants/images";
import icons from "../../../../constants/icons";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    router.push('/'); // Redirect to home page immediately for now

  //   try {
  //     // Replace this with your actual login API call
  //     const response = await fetch('/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Login failed');
  //     }

  //     // If login successful, redirect to home page
  //     router.push('/');
  //   } catch (err) {
  //     setError("Invalid email or password");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Container for aligned logo and card */}
      <div className="w-full max-w-[620px] px-4"> {/* Match card width + padding */}
        {/* Logo and Title */}
        <div className="flex items-center gap-1 w-full mb-2">
          <Image 
            src={icons.logo} 
            alt="CREMS Logo" 
            width={23} 
            height={25} 
            className="" 
          />
          <span className="text-[20px] mr-0.5 font-semibold text-gray-700">CREMS</span>
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
            className="flex justify-between mx-auto"
            style={{
              width: 573,
              height: 357,
              marginTop: 24,
              marginBottom: 24,
              borderRadius: 16,
              background: "#E3E6E5"
            }}
          >
            {/* Left Panel */}
            <div className="flex top-[24px] items-center justify-center w-1/2 p-4">
              <Image
                src={images.signin}
                alt="signin image"
                width={295}
                height={303}
                style={{ objectFit: 'contain' , top:24}}
                priority
                
              />
            </div>

            {/* Right Panel */}
            <div
              className="flex flex-col justify-center relative"
              style={{
                width: 294,
                height: 340,
                padding: '12px',
                margin: 'auto',
              }}
            >
              <h2 className="text-[14px] font-bold mb-2">Welcome To Crems Community</h2>
              <span className="text-xs text-gray-700 mb-1">Continue with</span>
              
              <div className="flex gap-2 mb-2">
                <button className="flex flex-col justify-center items-center border border-gray-700 rounded py-1 px-2 text-[10px] w-[57px] h-[51px]">
                  <Image
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google"
                    width={15}
                    height={15}
                    className="mb-1"
                  />
                  <span className="text-gray-700 text-[8px]">Google</span>
                </button>
                <button className="flex flex-col items-center justify-center border border-gray-700 rounded  py-1 px-2 text-[10px] w-[57px] h-[51px]">
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
                <div className="flex-1 h-px bg-gray-700" />
                <span className="mx-2 text-gray-700 text-[10px]">Or, sign-up with your email</span>
                <div className="flex-1 h-px bg-gray-700" />
              </div>

              <form onSubmit={handleLogin} className="space-y-2 mb-1">
                <div className="relative mb-3 items-center">
                  <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                    <Image src={icons.PlEmail} alt="pwd" width={16} height={16} />
                  </span>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[31px] text-xs pl-8 p-1 border border-gray-300 rounded bg-gray-200 placeholder-gray-500"
                    required
                  />
                </div>

                <div className="relative mb-3 items-center">
                  <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                    <Image src={icons.PlPwd} alt="pwd" width={16} height={16} />
                  </span>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-[31px] text-xs pl-8 p-1 border border-gray-300 rounded bg-gray-200 placeholder-gray-500"
                    required
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-xs mb-2">{error}</div>
                )}
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-[31px] text-xs bg-gray-600 text-white p-1 rounded hover:bg-gray-700 disabled:opacity-50"
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </button>
              </form>

              <div className="text-center text-gray-700 text-[10px] mb-1">
                Dose not have an account?{" "}
                <a href="/signup" className="text-blue-600 hover:underline">
                  sign up
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