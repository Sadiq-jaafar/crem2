import React, { useState } from 'react';
import MemoLogo from './MemoLogo';
import EditHeaderDialog from './EditHeaderDialog';
import { format } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';

interface MemoField {
  label: string;
  value: string;
}

interface MemoDocumentProps {
  settings?: {
    font: string;
    fontWeight: string;
    fontSize: string;
    alignment: string;
  }
}

const MemoDocument = ({ settings = { font: 'inter', fontWeight: 'normal', fontSize: '11', alignment: 'left' } }: MemoDocumentProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const headerData = Object.fromEntries(searchParams);

  const [fields, setFields] = useState<MemoField[]>([
    { label: 'TO:', value: headerData?.to || 'Managing Director' },
    { label: 'Through:', value: headerData?.through || 'IT Department' },
    { label: 'From:', value: 'Admin & Human Resources department' },
    { label: 'Date:', value: format(new Date(), "do MMMM, yyyy") },
    { label: 'Subject:', value: headerData?.subject || 'Request for ITM Disbursement' },
    { label: 'Purpose:', value: headerData?.purpose || '---' },
  ]);

  const [refField, setRefField] = useState(headerData?.ref || 'RHL/ADM$HR/12/20');

  const [content, setContent] = useState<string>(
    'The above subject refers.\n\nKindly approve the disbursement of the sum of Forty-Four Thousand, Thirty Naira Only (54,030.00) for the services provided by ITM for the month of July.\n\nThank you.\n\nRegards,\n\nLidadi Bassey\nAdmin & HR. Manager'
  );

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedField, setSelectedField] = useState<MemoField | null>(null);

  const handleFieldClick = (field: MemoField, index: number) => {
    // Don't allow editing of Date and From fields
    if (field.label === 'Date:' || field.label === 'From:') return;
    
    setSelectedField({ ...field, index } as MemoField);
    setDialogOpen(true);
  };

  const handleRefClick = () => {
    setSelectedField({ label: 'REF:', value: refField } );
    setDialogOpen(true);
  };

  const handleSaveField = (newValue: string) => {
    if (selectedField) {
      if (selectedField.label === 'REF:') {
        setRefField(newValue);
      } else {
        setFields(prev => prev.map((field, index) => 
          field.label === selectedField.label ? { ...field, value: newValue } : field
        ));
      }
    }
  };

  // Apply styles based on settings
  const documentStyle = {
    fontFamily: settings.font === 'inter' ? 'Inter, sans-serif' : 
                settings.font === 'arial' ? 'Arial, sans-serif' : 
                settings.font === 'times' ? 'Times New Roman, serif' : 'Inter, sans-serif',
    fontWeight: settings.fontWeight === 'thin' ? 300 : 
                settings.fontWeight === 'normal' ? 400 : 
                settings.fontWeight === 'bold' ? 700 : 400,
    fontSize: `${settings.fontSize}pt`,
    textAlign: settings.alignment as any
  };

  return (
    <>
      <div className="bg-white p-6 shadow-sm border border-gray-200 rounded-sm min-h-[calc(100vh-8rem)]" style={documentStyle}>
        <div className="flex flex-col items-center mb-4">
          <MemoLogo />
          <div className="text-gray-500 text-sm mt-2">REAL ESTATE & CONSTRUCTION</div>
          <h1 className="text-lg font-semibold mt-4">INTERNAL MEMO</h1>
        </div>

        <div className="flex justify-end mb-6">
          <div className="text-sm">
            <strong>REF:</strong> 
            <span 
              className="cursor-pointer hover:bg-gray-50 px-1 py-0.5 rounded ml-1"
              onClick={handleRefClick}
            >
              {refField}
            </span>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {fields.map((field, index) => (
            <div key={index} className="flex">
              <div className="w-24 font-medium">{field.label}</div>
              <div 
                className={`flex-1 ${
                  field.label !== 'Date:' && field.label !== 'From:' 
                    ? 'cursor-pointer hover:bg-gray-50 px-1 py-0.5 rounded' 
                    : ''
                }`}
                onClick={() => handleFieldClick(field, index)}
              >
                {field.value}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-b border-gray-300 py-4 mb-4">
          <div className="whitespace-pre-line">{content}</div>
        </div>
      </div>

      <EditHeaderDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        field={selectedField}
        onSave={handleSaveField}
      />
    </>
  );
};

export default MemoDocument;
