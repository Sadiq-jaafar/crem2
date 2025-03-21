import React from 'react';

function Header() {
  return (
    <div
      className="bg-blue-400 h-[156px] m-0"
      style={{ width: 'calc(100vw - 64px)' }}
    >
      {/* Placeholder Content */}
      <div className="flex items-center justify-center h-full">
        <h1 className="text-white text-2xl font-bold">Header Content</h1>
      </div>
    </div>
  );
}

export default Header;