
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface EditHeaderDialogProps {
  isOpen: boolean;
  onClose: () => void;
  field: {
    label: string;
    value: string;
  } | null;
  onSave: (value: string | any) => void;
  isNewMemo?: boolean;
}

const EditHeaderDialog = ({ isOpen, onClose, field, onSave, isNewMemo = false }: EditHeaderDialogProps) => {
  const [editValue, setEditValue] = useState('');
  const [headerData, setHeaderData] = useState({
    ref: '',
    to: '',
    through: '',
    subject: '',
    purpose: ''
  });

  React.useEffect(() => {
    if (field && !isNewMemo) {
      setEditValue(field.value);
    }
  }, [field, isNewMemo]);

  const handleSave = () => {
    if (isNewMemo) {
      onSave(headerData);
    } else {
      onSave(editValue);
    }
    onClose();
  };

  const handleHeaderDataChange = (key: string, value: string) => {
    setHeaderData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{isNewMemo ? 'Create New Memo' : 'Edit Header'}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Memo head?</label>
            <div className="relative">
              <Input 
                placeholder="Memo head?" 
                className="pr-10"
              />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">REF. no?</label>
            <Input 
              placeholder="REF. no?" 
              value={isNewMemo ? headerData.ref : (field?.label === 'REF:' ? editValue : '')}
              onChange={(e) => isNewMemo ? handleHeaderDataChange('ref', e.target.value) : (field?.label === 'REF:' && setEditValue(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Sending to?</label>
            <div className="relative">
              <Input 
                placeholder="Sending to?" 
                className="pr-10"
                value={isNewMemo ? headerData.to : (field?.label === 'TO:' ? editValue : '')}
                onChange={(e) => isNewMemo ? handleHeaderDataChange('to', e.target.value) : (field?.label === 'TO:' && setEditValue(e.target.value))}
              />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Through?</label>
            <div className="relative">
              <Input 
                placeholder="Through?" 
                className="pr-10"
                value={isNewMemo ? headerData.through : (field?.label === 'Through:' ? editValue : '')}
                onChange={(e) => isNewMemo ? handleHeaderDataChange('through', e.target.value) : (field?.label === 'Through:' && setEditValue(e.target.value))}
              />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Subject?</label>
            <Input 
              placeholder="Subject?" 
              value={isNewMemo ? headerData.subject : (field?.label === 'Subject:' ? editValue : '')}
              onChange={(e) => isNewMemo ? handleHeaderDataChange('subject', e.target.value) : (field?.label === 'Subject:' && setEditValue(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Purpose?</label>
            <div className="flex gap-2">
              <Input 
                placeholder="Purpose?" 
                className="flex-1"
                value={isNewMemo ? headerData.purpose : (field?.label === 'Purpose:' ? editValue : '')}
                onChange={(e) => isNewMemo ? handleHeaderDataChange('purpose', e.target.value) : (field?.label === 'Purpose:' && setEditValue(e.target.value))}
              />
              <Button 
                onClick={handleSave}
                className="bg-teal-700 hover:bg-teal-800 text-white px-8"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditHeaderDialog;
