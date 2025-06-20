"use client"
import React, { useState } from 'react';
import MemoDocument from '@/Components/MemoDocument';
import EditorSidebar from '@/Components/EditorSidebar';
import { useToast } from '@/hooks/use-toast';
import Header3 from '@/Components/Header3';

const Index = () => {
  const { toast } = useToast();
  const [documentSettings, setDocumentSettings] = useState({
    font: 'inter',
    fontWeight: 'normal',
    fontSize: '11',
    alignment: 'left'
  });

  const handleSave = () => {
    toast({
      title: "Memo saved",
      description: "Your memo has been saved successfully.",
    });
  };

  const handleSettingsChange = (key: keyof typeof documentSettings, value: string) => {
    setDocumentSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="h-screen bg-gray-100">
      <Header3/>
      <main className="mx-auto px-4 py-6 sm:px-6">
        <div className="flex justify-between">
          <div className="flex-1 mr-4">
            {/* <div className="flex justify-end mb-4">
              <button 
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Save Memo
              </button>
            </div> */}
            <MemoDocument settings={documentSettings} />
          </div>
          <EditorSidebar 
            settings={documentSettings} 
            onSettingsChange={handleSettingsChange} 
            onSave={handleSave}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
