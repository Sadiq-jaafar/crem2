// src/Components/LogoContext.tsx
"use client"; // Add this directive since we're using React hooks

import React, { createContext, useContext, useState } from 'react';

interface LogoContextType {
  selectedLogo: number;
  setSelectedLogo: (logo: number) => void;
}

const LogoContext = createContext<LogoContextType | undefined>(undefined);

export const LogoProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedLogo, setSelectedLogo] = useState<number>(1);

  return (
    <LogoContext.Provider value={{ selectedLogo, setSelectedLogo }}>
      {children}
    </LogoContext.Provider>
  );
};

export const useLogo = (): LogoContextType => {
  const context = useContext(LogoContext);
  if (!context) {
    throw new Error('useLogo must be used within a LogoProvider');
  }
  return context;
};