
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { Separator } from "@/Components/ui/separator";
import { Button,  } from "@/Components/ui/button";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, Table, Image, FileText, Send } from 'lucide-react';

interface EditorSidebarProps {
  settings: {
    font: string;
    fontWeight: string;
    fontSize: string;
    alignment: string;
  };
  onSettingsChange: (key: string, value: string) => void;
  onSave: () => void;
}

const EditorSidebar = ({ settings, onSettingsChange, onSave }: EditorSidebarProps) => {
  const handleAlignmentChange = (alignment: string) => {
    onSettingsChange('alignment', alignment);
  };

  return (
    <div className="w-72 bg-white border-l border-gray-200 p-4 font-inter ml-6">
      <div className="space-y-6">
        {/* Typography Section */}
        <div>
          <h3 className="text-sm font-medium mb-2 flex justify-between items-center">
            Typography
            <div className="grid grid-cols-4 h-5 w-5 gap-0.5">
              <div className="bg-gray-800 rounded-sm"></div>
              <div className="bg-gray-800 rounded-sm"></div>
              <div className="bg-gray-800 rounded-sm"></div>
              <div className="bg-gray-800 rounded-sm"></div>
            </div>
          </h3>
          
          <div className="space-y-2">
            <Select 
              value={settings.font} 
              onValueChange={(value: string) => onSettingsChange('font', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Font" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inter">Inter</SelectItem>
                <SelectItem value="arial">Arial</SelectItem>
                <SelectItem value="times">Times New Roman</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex gap-2">
              <Select 
                value={settings.fontWeight} 
                onValueChange={(value: string) => onSettingsChange('fontWeight', value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Weight" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="thin">Thin</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="bold">Bold</SelectItem>
                </SelectContent>
              </Select>
              
              <Select 
                value={settings.fontSize} 
                onValueChange={(value: string) => onSettingsChange('fontSize', value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="9">9</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="11">11</SelectItem>
                  <SelectItem value="12">12</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 mt-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bold className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Italic className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Underline className="h-4 w-4" />
            </Button>
            <span className="mx-1 text-gray-300">|</span>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <span className="text-xs">X<sub>2</sub></span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <span className="text-xs">X<sup>2</sup></span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <span className="text-xs">abc</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <span className="text-sm">Aa</span>
            </Button>
          </div>
        </div>
        
        <Separator />
        
        {/* Alignment Section */}
        <div>
          <h3 className="text-sm font-medium mb-2">Alignment</h3>
          
          <div className="grid grid-cols-5 gap-1 mb-2">
            <Button 
              variant={settings.alignment === 'left' ? 'default' : 'ghost'} 
              size="icon" 
              className="h-8 w-8"
              onClick={() => handleAlignmentChange('left')}
            >
              <AlignLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant={settings.alignment === 'center' ? 'default' : 'ghost'} 
              size="icon" 
              className="h-8 w-8"
              onClick={() => handleAlignmentChange('center')}
            >
              <AlignCenter className="h-4 w-4" />
            </Button>
            <Button 
              variant={settings.alignment === 'right' ? 'default' : 'ghost'} 
              size="icon" 
              className="h-8 w-8"
              onClick={() => handleAlignmentChange('right')}
            >
              <AlignRight className="h-4 w-4" />
            </Button>
            <Button 
              variant={settings.alignment === 'justify' ? 'default' : 'ghost'} 
              size="icon" 
              className="h-8 w-8"
              onClick={() => handleAlignmentChange('justify')}
            >
              <AlignJustify className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <AlignJustify className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-5 gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <div className="flex flex-col items-center justify-center">
                <div className="w-4 h-0.5 bg-gray-700 mb-0.5"></div>
                <div className="w-4 h-0.5 bg-gray-700 mb-0.5"></div>
                <div className="w-4 h-0.5 bg-gray-700"></div>
              </div>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <div className="flex flex-col items-center justify-center">
                <div className="w-4 h-0.5 bg-gray-700 mb-0.5"></div>
                <div className="w-3 h-0.5 bg-gray-700 mb-0.5"></div>
                <div className="w-4 h-0.5 bg-gray-700"></div>
              </div>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <div className="flex flex-col items-center justify-center">
                <div className="w-4 h-0.5 bg-gray-700 mb-0.5"></div>
                <div className="w-4 h-0.5 bg-gray-700 mb-0.5"></div>
                <div className="w-3 h-0.5 bg-gray-700"></div>
              </div>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <div className="flex flex-col items-center justify-center">
                <div className="w-4 h-0.5 bg-gray-700 mb-0.5"></div>
                <div className="w-4 h-0.5 bg-gray-700 mb-0.5"></div>
                <div className="w-4 h-0.5 bg-gray-700"></div>
              </div>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 flex justify-center items-center">
              <span className="text-lg">⊥</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div>
              <p className="text-sm mb-1">Line height</p>
              <div className="flex items-center border rounded-md px-2 py-1.5">
                <span className="text-sm mr-1">A</span>
                <span className="text-sm">Auto</span>
              </div>
            </div>
            <div>
              <p className="text-sm mb-1">Line height</p>
              <div className="flex items-center border rounded-md px-2 py-1.5">
                <span className="text-sm mr-1">|A|</span>
                <span className="text-sm">0</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator />
        
        {/* Insert Section */}
        <div>
          <h3 className="text-sm font-medium mb-2">Insert</h3>
          
          <div className="grid grid-cols-4 gap-2">
            <div className="border rounded-md p-2 flex flex-col items-center justify-center">
              <Table className="h-6 w-6 mb-1" />
              <span className="text-xs">Table</span>
            </div>
            <div className="border rounded-md p-2 flex flex-col items-center justify-center">
              <Image className="h-6 w-6 mb-1" />
              <span className="text-xs">Picture</span>
              <span className="text-xs">▾</span>
            </div>
            <div className="border rounded-md p-2 flex flex-col items-center justify-center">
              <FileText className="h-6 w-6 mb-1" />
              <span className="text-xs">Doc</span>
              <span className="text-xs">▾</span>
            </div>
            <div 
              className="border rounded-md p-2 flex flex-col items-center justify-center bg-teal-600 text-white cursor-pointer hover:bg-teal-700"
              onClick={onSave}
            >
              <Send className="h-6 w-6 mb-1" />
              <span className="text-xs">Send</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <Button variant="outline" size="sm" className="px-2">
              <span className="text-lg">✎</span>
            </Button>
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="sm" className="px-2">100%</Button>
              <Button variant="ghost" size="sm" className="px-2">
                <span className="text-lg">⊖</span>
              </Button>
              <Button variant="ghost" size="sm" className="px-2">
                <span className="text-lg">⊕</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorSidebar;
