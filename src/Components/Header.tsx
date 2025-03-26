import Image from 'next/image';
import React from 'react';
import images from '../../constants/images';

function Header() {
  return (
    <div
      className="h-[156px] relative "
      // style={{ width: '100vw' }}
    >
      {/* Background Image */}
      <Image
        src={images.Header}
        alt="Header Background"
        fill // Fill the parent container
        style={{ objectFit: 'cover' }} // Ensure the image covers the entire div
      />

      {/* Placeholder Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-2xl font-bold">Header Content</h1>
      </div>
    </div>
  );
}

export default Header;