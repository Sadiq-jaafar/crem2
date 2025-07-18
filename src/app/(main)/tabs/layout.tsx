
import React from 'react';
import Header2 from '@/Components/Header2'


interface LayoutProps {
  children: React.ReactNode; // Define the type for the children prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex-col h-screen dark:bg-gray-900">
      {/* Sidebar */}
      <Header2 />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-200 h-screen dark:bg-gray-900">
        {children}
      </div>
    </div>
  );
};

export default Layout;