"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Images from '../../../../constants/images';
import icons from '../../../../constants/icons';

const SignUpCard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState('');
  // const [details, setDetails] = useState({
  //   fullName: '',
  //   phoneNumber: '',
  //   company: '',
  // });
  const [companyDetails, setCompanyDetails] = useState({
    companyName: '',
    website: '',
  });
  // const [avatar, setAvatar] = useState<File | null>(null);
  // const [avatarPreview, setAvatarPreview] = useState<string>('');
  const router = useRouter();

  const TOTAL_STEPS = 7;

  // Handlers (same as before)
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };
  const handleVerificationSubmit = () => setStep(3);
  const handleCompanyDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5);
  };
  // const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     setAvatar(file);
  //     const reader = new FileReader();
  //     reader.onloadend = () => setAvatarPreview(reader.result as string);
  //     reader.readAsDataURL(file);
  //   }
  // };
  // const handleAvatarSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setStep(6);
  // };
  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(7);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Container for aligned logo and card */}
      <div className="w-full max-w-[620px] px-4">
      {/* Logo and Title */}
      <div className="flex items-start w-full h-[35px] max-w-3xl mb-2">
        <Image src={Images.logo} alt="CREMS Logo" width={40} height={40} className="" />
        <span className="text-lg font-semibold text-gray-700">CREMS</span>
      </div>
      {/* Card */}
      <div
        className=" shadow flex-col relative overflow-hidden"
        style={{
          width: 620,
          height: 407,
          borderRadius: 20,
          maxWidth: 620,
         background: "#E3E6E5" ,
        }}
      >
        {/* Card content */}
        <div
          className="flex mx-auto"
          style={{
            width: 553,
            height: 327,
            marginTop: 24,
            marginBottom: 24,
            borderRadius: 16,
          }}
        >
          {/* Left Panel */}
          <div className="flex items-center justify-center w-1/2 p-4">
            <Image
              src={Images.signin}
              alt="signin image"
              width={200}
              height={260}
              style={{ objectFit: 'contain' }}
              className=""
              priority
            />
          </div>
          {/* Right Panel */}
          <div
            className="flex flex-col justify-center relative"
            style={{
              width: 264,
              height: 320,
              left: 0,
              padding: '12px',
              margin: 'auto',
            }}
          >
            {/* Back Button */}
            {step > 1 && step < 7 && (
              <button
                onClick={() => setStep(step - 1)}
                className="absolute items-center justify-center top-2 left-2 text-xl"
                aria-label="Back"
                style={{
                  background: '#D8D9D8',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50px'
                }}
              >
                ←
              </button>
            )}

            {step === 1 ? (
              <>
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
                <form className="space-y-2 mb-1" onSubmit={handleSignUp}>
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
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full text-xs p-1 border border-gray-300 rounded bg-gray-200 placeholder-gray-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full text-xs bg-gray-600 text-white p-1 rounded hover:bg-gray-700"
                  >
                    Sign up
                  </button>
                </form>
                <div className="text-center text-gray-700 text-[10px] mb-1">
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-600 hover:underline">
                    sign in
                  </a>
                </div>
                <div className="text-[8px] text-gray-400 text-center">
                  By proceeding, you are agreeing to the{" "}
                  <a href="#" className="text-blue-500 underline">
                    Terms &amp; Conditions and policy
                  </a>
                </div>
              </>
            ) : step === 2 ? (
              <div className="flex flex-col  w-full">

                <div className="text-[14px] font-bold mt-2 mb-2 ">
                 <h3>Check your email</h3> <br />
                  <div className='text-[10px] font-normal mb-4'>We have sent a confirmation code to jaafarsadiqyusuf@gmail.com
                    <br />{}</div>
                </div>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter the 6-digit code"
                  className="w-full p-2 border border-gray-400 rounded bg-transparent text-white placeholder-gray-400 mb-3 text-xs"
                  style={{
                    background: "rgba(0,0,0,0.2)",
                    color: "#fff",
                  }}
                />
                <div className=" text-[10px]">
                  This code will expire in 1 hour, if you did not receive the email, please check your spam massages
                </div>
                <button
                  onClick={handleVerificationSubmit}
                  className="absolute right-2 bottom-2 bg-gray-700 text-white px-4 py-1 rounded hover:bg-gray-800 text-xs"
                  style={{ width: 80 }}
                >
                  Next
                </button>

                <div className="text-[10px] mt-4">
                  Not recived? <button
                  type="button"
                  className="text-blue-700 text-xs mt-1 mb-1"
                  style={{ background: "none", border: "none", color: "#0057FF" }}
                  tabIndex={-1}
                >
                  send code again
                </button>
                </div>
              </div>
            ) : step === 3 ? (
              <div className="flex flex-col ">
                <h2 className="text-xl font-semibold mb-6">What best describes your organization?</h2>
                <div className='text-[10px] mb-4 align-left'>Please choose one or more</div>
                <div className="grid grid-cols-4 gap-1 w-full max-w-md">
                  {[
                    { label: 'Startup', no: '1-10 people', icon: '🚀' },
                    { label: 'Startup', no: '11-50 people', icon: '🧑‍💼' },
                    { label: 'Startup', no: '50+ people', icon: '🏃‍♂️' },
                    { label: 'Enterprise', icon: '🏢' },
                    { label: 'Non profit', icon: '❤️' },
                    { label: 'Others', icon: '⋯' },
                  ].map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setStep(4)}
                      className="border w-[57px] h-[51px] border-gray-300 rounded-lg py-2 px-1 flex flex-col items-center justify-center hover:bg-gray-100 transition"
                    >
                      <div className="w-[20px] h-[20px] flex items-center justify-center mb-1 text-[20px] leading-none">
                        {item.icon}
                      </div>
                      <div className="text-center text-[6px] leading-tight">{item.label}</div>
                      {item.no && (
                        <div className="text-center text-[6px] leading-tight">{item.no}</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ) : step === 4 ? (
              <div>
                <h2 className="text-[14px] font-bold mt-4 mb-2">Whats your company <br/> Name and URL?</h2>
                <form onSubmit={handleCompanyDetailsSubmit} className="space-y-4">
                  <div className="relative mb-3">
                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                      <Image src={icons.company} alt="company" width={16} height={16} />
                    </span>
                    <input
                      type="text"
                      value={companyDetails.companyName}
                      onChange={(e) => setCompanyDetails({ ...companyDetails, companyName: e.target.value })}
                      placeholder="Company Name"
                      className="w-[263px] h-[32.95px] pl-8 p-2 border rounded bg-gray-50"
                      required
                    />
                  </div>
                  <div className="relative mb-3">
                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                      <Image src={icons.link} alt="link" width={16} height={16} />
                    </span>
                    <input
                      type="url"
                      value={companyDetails.website}
                      onChange={(e) => setCompanyDetails({ ...companyDetails, website: e.target.value })}
                      placeholder="eg www.crems.com"
                      className="w-[263px] h-[32.95px] pl-8 p-2 border rounded bg-gray-50"
                      required
                    />
                  </div>
                  <div className="flex flex-col ">
                    <h3 className='text-[12px] font-bold'>Upload your logo</h3>
                    <button className='bg-white w-[61px] rounded-[4px] h-[25px] text-[12px]
'
                    >
                      Upload
                    </button>
                  </div>

                  <div className="flex flex-end items-right  justify-end mt-4">

                     <button 
                    type="submit"
                    className="w-[72px] h-[37px] bg-gray-700 text-white p-2 rounded hover:bg-gray-800"
                  >
                    Next
                  </button>
                  </div>
                 
                </form>
              </div>
            ) : step === 5 ? (
              <div className="flex flex-col w-full">
                <h2 className="text-xl font-bold mb-2 mt-4">How did you know about us?</h2>
                <div className='text-[10px] mb-4 align-left'>Please choose one or more</div>
                <div className="grid grid-cols-4 gap-1 w-full max-w-md">
                    {[
                    { label: 'Business Partners', icon: '🚀' },
                    { label: 'Friends and Collegues', icon: '🏠' },
                    { label: 'Social Media', icon: '❤️' },
                    { label: 'Blog or Publication', icon: '📋' },
                    { label: 'Startup',  icon: '🏃‍♂️' },
                    { label: 'Non profit', icon: '🏢' },
                    { 
                      label: 'Google search', 
                      icon: <Image 
                      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                      alt="Google"
                      width={20}
                      height={20}
                      />
                    },
                    ].map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setStep(6)}
                      className="border w-[57px] h-[51px] border-gray-300 rounded-lg py-2 px-1 flex flex-col items-center justify-center hover:bg-gray-100 transition"
                    >
                      <div className="w-[20px] h-[20px] flex items-center justify-center mb-1 text-[20px] leading-none">
                      {typeof item.icon === 'string' ? item.icon : item.icon}
                      </div>
                      <div className="text-center text-[6px] leading-tight">{item.label}</div>
                    </button>
                    ))}
                </div>
               <div className="flex flex-end items-right  justify-end mt-4">

                     <button 
                     onClick={() => setStep(6)}
                    type="submit"
                    className="w-[72px] h-[37px] bg-gray-700 text-white p-2 rounded hover:bg-gray-800"
                  >
                    Next
                  </button>
                  </div>
              </div>
            ) : step === 6 ? (
              <div className="flex flex-col w-full">
                <h2 className="text-[13px] font-bold mt-13">What crems application will you be using?</h2>
                <div className='text-[10px]  align-left'>Please choose one or more</div>
                <div className="grid grid-cols-4 gap-1 w-full max-w-md">
                    {[
                    { label: 'Memo', icon: 
                    <Image src={icons.docs} alt="Meeting icon" width={13.58} height={13.58} /> },
                    { label: 'Docs', icon: 
                      <Image src={icons.docs} alt="doc icon" width={13.58} height={13.58} /> 
                     },
                    { label: 'Property', icon:
                      <Image src={icons.Property} alt="Property icon" width={13.58} height={13.58} /> 
                     },
                    { label: 'events', icon: '📋' },
                    { label: 'teams', icon: '⋯' },
                    { label: 'Estates',  icon: '🏃‍♂️' },
                    { label: 'Projects', icon:
                      <Image src={icons.projects} alt="projects icon" width={13.58} height={13.58} /> 
                     },
                    { label: 'Messaging', icon: '📋' },
                    { label: 'Report', icon: '⋯' },
                    { label: 'Feeds',  icon: '🏃‍♂️' },
                    { label: 'Finance', icon:
                      <Image src={icons.Finance} alt="finance icon" width={13.58} height={13.58} /> 
                     },
                    { label: 'Drivers', icon:
                      <Image src={icons.Driver} alt="Meeting icon" width={13.58} height={13.58} /> 
                     },
                    { label: 'marketing', icon: '📋' },
                    { label: 'Grants', icon: '⋯' },
                    { label: 'Others', icon: '⋯' },
                    
                    ].map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setStep(6)}
                      className="border w-[52px] h-[48px] border-gray-300 rounded-lg py-2 px-1 flex flex-col items-center justify-center hover:bg-gray-100 transition"
                    >
                      <div className="w-[10px] h-[10px] flex items-center justify-center mb-1 text-[20px] leading-none">
                      {typeof item.icon === 'string' ? item.icon : item.icon}
                      </div>
                      <div className="text-center text-[10px] leading-tight">{item.label}</div>
                    </button>
                    ))}
                </div>
               <div className="flex flex-end items-right  justify-end mt-4">

                     <button 
                     onClick={handleFinalSubmit}
                    type="submit"
                    className="w-[72px] h-[37px] bg-gray-700 text-white p-2 rounded hover:bg-gray-800"
                  >
                    Finish
                  </button>
                  </div>
              </div>
            ) : step === 7 ? (
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-semibold mb-4">
                  Welcome to Crems!
                </h2>
                
                <p className="text-gray-600 mb-8">
                  Your account has been successfully created. You can now start using our platform.
                </p>

                <button
                  className="inline-block bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800"
                  onClick={() => router.push("/login")}
                >
                  Finish
                </button>

                <div className="mt-6 text-sm text-gray-500">
                  Need help getting started? Check out our{" "}
                  <a href="/guide" className="text-blue-600 hover:underline">
                    quick start guide
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        {/* Progress Bar at the bottom, inside the card */}
        <div
          className="absolute left-0 bottom-0 w-full flex items-center justify-center"
          style={{ height: 40 }}
        >
          <div className="flex w-[553px]">
            {[...Array(TOTAL_STEPS)].map((_, idx) => (
              <div
                key={idx}
                className={`h-[5px] w-[68px] flex-1 mx-1 rounded transition-all duration-300 ${
                  idx < step ? "bg-gray-700" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default SignUpCard;
