
import React from 'react';
import SideBar from './SideBar';

interface LayoutProps {
  children: React.ReactNode; // Define the type for the children prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default Layout;