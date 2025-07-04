"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search,  ArrowRight, Check, Minus } from 'lucide-react';
import { IoIosRefresh } from "react-icons/io";
import { Button } from '@/Components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import EditHeaderDialog from '@/Components/EditHeaderDialog';
import Image from 'next/image';
import icons from '../../../../../constants/icons';
import Header3 from '@/Components/Header3';
import { FaRegTrashCan } from 'react-icons/fa6';
import { IoShareSocialSharp } from 'react-icons/io5';

interface Memo {
  id: string;
  type: string;
  property: string;
  unit: string;
  date: string;
  paymentStatus: string;
  status: string;
}

const Allocations = () => {
  const navigate = useRouter();
  const [showHeaderDialog, setShowHeaderDialog] = useState(false);
  const [checkedRows, setCheckedRows] = useState<Set<string>>(new Set());
  const [selectValue, setSelectValue] = useState("all");
  const anyChecked = checkedRows.size > 0;

  const memos: Memo[] = [
    {
      id: '1',
      type: 'up',
      property: 'Founting view estate, Gurara AA New site',
      
      unit: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      paymentStatus: 'not paid',
      status: 'unread'
    },
    {
      id: '2',
      type: 'up',
      property: 'Founting view estate, Gurara AA New site',
      
      unit: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      paymentStatus: 'paid',
      status: 'unread'
    },
    {
      id: '3',
      type: 'down',
      property: 'Founting view estate, Gurara AA New site',
      
      unit: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      paymentStatus: 'paid',
      status: 'unread'
    },
    {
      id: '4',
      type: 'up',
      property: 'Founting view estate, Gurara AA New site',
      
      unit: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      paymentStatus: 'not paid',
      status: 'unread'
    },
    {
      id: '5',
      type: 'up',
      property: 'Founting view estate, Gurara AA New site',
      
      unit: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      paymentStatus: 'paid',
      status: 'read'
    },
    {
      id: '6',
      type: 'down',
      property: 'Founting view estate, Gurara AA New site',
      
      unit: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      paymentStatus: 'paid',
      status: 'read'
    },
    {
      id: '7',
      type: 'up',
      property: 'Founting view estate, Gurara AA New site',
      
      unit: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      paymentStatus: 'paid',
      status: 'read'
    },
    {
      id: '8',
      type: 'down',
      property: 'Founting view estate, Gurara AA New site',
      
      unit: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      paymentStatus: 'paid',
      status: 'read'
    },
    {
      id: '9',
      type: 'down',
      property: 'Founting view estate, Gurara AA New site',
      
      unit: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      paymentStatus: 'paid',
      status: 'read'
    },
    {
      id: '10',
      type: 'down',
      property: 'Founting view estate, Gurara AA New site',
      
      unit: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      paymentStatus: 'paid',
      status: 'read'
    },
    {
      id: '11',
      type: 'down',
      property: 'Founting view estate, Gurara AA New site',
      
      unit: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      paymentStatus: 'paid',
      status: 'read'
    },
    {
      id: '12',
      type: 'down',
      property: 'Founting view estate, Gurara AA New site',
      
      unit: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      paymentStatus: 'paid',
      status: 'read'
    },
    {
      id: '13',
      type: 'down',
      property: 'Founting view estate, Gurara AA New site',
      
      unit: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      paymentStatus: 'paid',
      status: 'read'
    },
    {
      id: '14',
      type: 'down',
      property: 'Founting view estate, Gurara AA New site',
      
      unit: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      paymentStatus: 'paid',
      status: 'read'
    },
    {
      id: '15',
      type: 'down',
      property: 'Founting view estate, Gurara AA New site',
      
      unit: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      paymentStatus: 'paid',
      status: 'read'
    },
    {
      id: '16',
      type: 'down',
      property: 'Founting view estate, Gurara AA New site',
      
      unit: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      paymentStatus: 'paid',
      status: 'read'
    },
    {
      id: '17',
      type: 'down',
      property: 'Founting view estate, Gurara AA New site',
      
      unit: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      paymentStatus: 'paid',
      status: 'unread'
    }
  ];

  const sidebarItems = [
    { label: 'All Allocations', count: 199, active: true },
    { label: 'KDM', count: 44 },
    { label: 'FVE', count: 33 },
    { label: 'Park-Lane', count: 10 },
    
  ];

  const handleMemoClick = (memoId: string) => {
    navigate.push(`/memo/${memoId}`);
  };

  const handleNewMemo = () => {
    setShowHeaderDialog(true);
  };

  const handleHeaderDialogSave = (_headerData: any) => {
    // Navigate to memo page with header data
    navigate.push('/allocation');
    setShowHeaderDialog(false);
  };

  const handleHeaderDialogClose = () => {
    setShowHeaderDialog(false);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, memoId: string) => {
    e.stopPropagation();
    setCheckedRows(prev => {
      const newChecked = new Set(prev);
      if (e.target.checked) {
        newChecked.add(memoId);
      } else {
        newChecked.delete(memoId);
      }
      return newChecked;
    });
  };

  return (
    <div className="h-screen relative flex flex-col  bg-gray-100"> {/* Added pt-12 for header space */}
      <Header3 name= "Allocations" />
      {/* Fixed Sidebar */}
      <div className="w-[146px] flex flex-col items-center bg-gray-100 border-r-2 border-gray-200 pt-15 fixed h-full overflow-y-auto no-scrollbar">
        <Button 
          onClick={handleNewMemo}
          className="w-[75px] h-[39px] justify-center mb-6 bg-teal-700 hover:bg-teal-800 text-white"
        >
          New
        </Button>
        
        <div className="space-y-1 w-full px-2">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center px-1 py-2 rounded text-sm cursor-pointer ${
                item.active ? 'bg-gray-300' : 'hover:bg-gray-300'
              }`}
            >
              <span className={item.active ? 'font-medium' : ''}>{item.label}</span>
              <span className="text-gray-500">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 ml-[121px] bg-gray-100 overflow-hidden flex flex-col"> {/* Added flex flex-col */}
        {/* Header with Search */}
        <div className="flex items-center h-8 ml-4 justify-between bg-gray-100 mb-4"> {/* Added h-8 */}
          {/* Left section */}
          <div className="flex items-center gap-2"> {/* Added gap-2 for consistent spacing */}
             <Select value={selectValue} onValueChange={setSelectValue}>
              <SelectTrigger className="h-8 w-15 bg-gray-100 hover:bg-gray-200 border-none">
                <SelectValue
                  className="hover:bg-gray-200"
                  placeholder={
                    <div className="w-4 h-4 bg-gray-100 border-2 border-gray-600 rounded cursor-pointer accent-teal-700"></div>
                  }
                >
                  {selectValue === "read" && (
                    <div className="w-4 h-4 bg-gray-100 border-2 border-gray-600 rounded flex items-center justify-center accent-teal-700">
                      <Check className="w-3 h-3 text-teal-700" />
                    </div>
                  )}
                  {selectValue === "unread" && (
                    <div className="w-4 h-4 bg-gray-100 border-2 border-gray-600 rounded flex items-center justify-center accent-teal-700">
                      <Minus className="w-3 h-3 text-teal-700" />
                    </div>
                  )}
                  {selectValue === "all" && (
                    <div className="w-4 h-4 bg-gray-100 border-2 border-gray-600 rounded accent-teal-700"></div>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-gray-100">
                <SelectItem value="all">
                  All
                </SelectItem>
                <SelectItem value="read" className="hover:bg-gray-200">Read</SelectItem>
                <SelectItem value="unread" className="hover:bg-gray-200">Unread</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon" className="hover:bg-gray-200 h-8 w-8">
              <IoIosRefresh className="h-4 w-4" />
            </Button>
            {anyChecked && (
              <>
                          <Button variant="ghost" size="icon" className="hover:bg-gray-200 h-8 w-8">
                          <FaRegTrashCan className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="hover:bg-gray-200 h-8 w-8">
                            <IoShareSocialSharp className="h-4 w-4" />
                          </Button>
                        </>
                      )}

          
          </div>

          {/* Center section - Search */}
          <div className="relative flex-1 flex items-center mx-4"> {/* Changed width and added flex-1 */}
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search"
              className="w-full h-8 text-xs pl-8 border border-gray-300 rounded-full bg-gray-100 placeholder:text-sm placeholder-teal-700"
              required
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="bg-gray-200 ml-2 rounded-lg flex flex-col h-[calc(100vh-100px)] overflow-hidden scrollbar-none scrollbar-hide no-scrollbar"
         >
          <Table className="h-full scrollbar-hide scrollbar-none overflow-hidden no-scrollbar border-b-0"
          style={{ 
            
            scrollbarWidth: 'none',  // Firefox
            scrollPaddingRight:"none",
            msOverflowStyle: 'none' , // IE and Edge
            overflow:"hidden"
          }}>
            <TableHeader className="sticky top-0 z-10 bg-gray-100">
              <TableRow className="flex w-full border-none"
              >
                <TableHead className="w-8 flex-none border-b-0">
                </TableHead>
                <TableHead className="font-medium w-12 flex-none">Type</TableHead>
                <TableHead className="font-medium w-63 flex-none">Property</TableHead>
                
                <TableHead className="font-medium flex-1">Unit</TableHead>
                <TableHead className="font-medium w-38 flex-none">Payment Status</TableHead>
                <TableHead className="font-medium w-24 flex-none">Date</TableHead>
                <TableHead className="font-medium w-24 flex-none">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="block space-y-1 flex-1 border-t-0 overflow-y-auto overflow-x-hidden border-b-0 scrollbar-none">
              {memos.map((memo) => (
                <TableRow 
                  key={memo.id} 
                  className={`h-[35px] min-h-[35px] max-h-[35px] bg-gray-100 border-b-0 text-[10px] hover:bg-gray-300 cursor-pointer flex w-full items-center ${
                    checkedRows.has(memo.id) ? 'bg-gray-300' : ''
                  }`}
                  onClick={() => handleMemoClick(memo.id)}
                >
                  <TableCell className="w-8 flex-none pl-2">
                    <input
                      type="checkbox"
                      checked={checkedRows.has(memo.id)}
                      className="w-4 h-4 border border-gray-600 rounded cursor-pointer accent-teal-700"
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => handleCheckboxChange(e, memo.id)}
                    />
                  </TableCell>
                  <TableCell className="w-12 flex-none">
                    {memo.type === 'up' ? (
                      <Image src={icons.outgoing} width={16} height={16} alt="Outgoing" />
                    ) : (
                      <Image src={icons.incoming} width={16} height={16} alt="incoming" />
                    )}
                  </TableCell>
                  <TableCell className="text-sm w-63 flex-none whitespace-nowrap overflow-hidden text-ellipsis">{memo.property}</TableCell>
                 
                  <TableCell className="text-sm flex-1 whitespace-nowrap overflow-hidden text-ellipsis">{memo.unit}</TableCell>
                  <TableCell className="text-sm w-38 flex-none whitespace-nowrap overflow-hidden text-ellipsis">
                    {memo.paymentStatus === 'not paid' && (
                      <span className="text-red-600 font-semibold">No Payment</span>
                    )}
                    {memo.paymentStatus === 'paid' && (
                      <span className="text-green-600 font-semibold">Payment Complete</span>
                    )}
                    
                  </TableCell>
                  <TableCell className="text-sm w-24 flex-none">{memo.date}</TableCell>
                  <TableCell className="w-24 flex-none flex items-center justify-center">
                    {memo.status === "read" ? (
                      <Image src={icons.read} width={16} height={16} alt="Read" />
                    ) : (
                      <Image src={icons.unread} width={16} height={16} alt="Unread" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Header Edit Dialog */}
      <EditHeaderDialog
        isOpen={showHeaderDialog}
        onClose={handleHeaderDialogClose}
        field={null}
        onSave={handleHeaderDialogSave}
        isNewMemo={true}
      />
    </div>
  );
};

export default Allocations;

