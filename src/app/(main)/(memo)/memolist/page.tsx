"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Upload, Download, ArrowUp, RefreshCw, ArrowRight } from 'lucide-react';
import { IoIosRefresh } from "react-icons/io";
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import EditHeaderDialog from '@/Components/EditHeaderDialog';
import Image from 'next/image';
import icons from '../../../../../constants/icons';
import Header3 from '@/Components/Header3';
import Header from '@/Components/Header';

interface Memo {
  id: string;
  type: string;
  refNo: string;
  to: string;
  subject: string;
  date: string;
  amount: string;
  status: string;
}

const MemoList = () => {
  const navigate = useRouter();
  const [showHeaderDialog, setShowHeaderDialog] = useState(false);
  const [checkedRows, setCheckedRows] = useState<Set<string>>(new Set());

  const memos: Memo[] = [
    {
      id: '1',
      type: 'up',
      refNo: 'RHL/ADM/05/05',
      to: 'Managing director',
      subject: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      amount: '3,000,000.00',
      status: 'Paid'
    },
    {
      id: '2',
      type: 'up',
      refNo: 'RHL/ADM/05/05',
      to: 'Managing director',
      subject: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      amount: '3,000,000.00',
      status: 'Paid'
    },
    {
      id: '3',
      type: 'down',
      refNo: 'RHL/ADM/05/05',
      to: 'Managing director',
      subject: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      amount: '3,000,000.00',
      status: 'Paid'
    },
    {
      id: '4',
      type: 'up',
      refNo: 'RHL/ADM/05/05',
      to: 'Managing director',
      subject: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      amount: '3,000,000.00',
      status: 'Paid'
    },
    {
      id: '5',
      type: 'up',
      refNo: 'RHL/ADM/05/05',
      to: 'Managing director',
      subject: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      amount: '3,000,000.00',
      status: 'Paid'
    },
    {
      id: '6',
      type: 'down',
      refNo: 'RHL/ADM/05/05',
      to: 'Managing director',
      subject: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      amount: '3,000,000.00',
      status: 'Paid'
    },
    {
      id: '7',
      type: 'up',
      refNo: 'RHL/ADM/05/05',
      to: 'Managing director',
      subject: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      amount: '3,000,000.00',
      status: 'Paid'
    },
    {
      id: '8',
      type: 'down',
      refNo: 'RHL/ADM/05/05',
      to: 'Managing director',
      subject: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      amount: '3,000,000.00',
      status: 'Paid'
    },
    {
      id: '9',
      type: 'down',
      refNo: 'RHL/ADM/05/05',
      to: 'Managing director',
      subject: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      amount: '3,000,000.00',
      status: 'Paid'
    },
    {
      id: '10',
      type: 'down',
      refNo: 'RHL/ADM/05/05',
      to: 'Managing director',
      subject: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      amount: '3,000,000.00',
      status: 'Paid'
    },
    {
      id: '11',
      type: 'down',
      refNo: 'RHL/ADM/05/05',
      to: 'Managing director',
      subject: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      amount: '3,000,000.00',
      status: 'Paid'
    },
    {
      id: '12',
      type: 'down',
      refNo: 'RHL/ADM/05/05',
      to: 'Managing director',
      subject: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      amount: '3,000,000.00',
      status: 'Paid'
    },
    {
      id: '13',
      type: 'down',
      refNo: 'RHL/ADM/05/05',
      to: 'Managing director',
      subject: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      amount: '3,000,000.00',
      status: 'Paid'
    },
    {
      id: '14',
      type: 'down',
      refNo: 'RHL/ADM/05/05',
      to: 'Managing director',
      subject: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      amount: '3,000,000.00',
      status: 'Paid'
    },
    {
      id: '15',
      type: 'down',
      refNo: 'RHL/ADM/05/05',
      to: 'Managing director',
      subject: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      amount: '3,000,000.00',
      status: 'Paid'
    },
    {
      id: '16',
      type: 'down',
      refNo: 'RHL/ADM/05/05',
      to: 'Managing director',
      subject: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      amount: '3,000,000.00',
      status: 'Paid'
    },
    {
      id: '17',
      type: 'down',
      refNo: 'RHL/ADM/05/05',
      to: 'Managing director',
      subject: 'Purchase of electrical appliances at FVE......',
      date: '14/05/2025',
      amount: '3,000,000.00',
      status: 'Paid'
    }
  ];

  const sidebarItems = [
    { label: 'All Memos', count: 199, active: true },
    { label: 'My Memos', count: 44 },
    { label: 'My Teams', count: 33 },
    { label: 'Drafts', count: 10 },
    { label: 'Approved', count: 10 },
    { label: 'Pending', count: 7 },
    { label: 'Paid', count: 33 },
    { label: 'Rejected', count: 9 },
    { label: 'Completed', count: 70 }
  ];

  const handleMemoClick = (memoId: string) => {
    navigate.push(`/memo/${memoId}`);
  };

  const handleNewMemo = () => {
    setShowHeaderDialog(true);
  };

  const handleHeaderDialogSave = (_headerData: any) => {
    // Navigate to memo page with header data
    navigate.push('/memo');
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
      <Header3 />
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
              className={`flex justify-between items-center px-3 py-2 rounded text-sm cursor-pointer ${
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
            <Select defaultValue="all">
              <SelectTrigger className="h-8 w-15 bg-gray-100 hover:bg-gray-200 border-none">
                <SelectValue placeholder={<div className="w-4 h-4 bg-gray-100 border-2 border-gray-600 rounded cursor-pointer accent-teal-700"></div>} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all"><div className="w-4 h-4 bg-gray-100 border-1 border-gray-600 rounded cursor-pointer accent-teal-700"></div></SelectItem>
                <SelectItem value="outgoing">Outgoing</SelectItem>
                <SelectItem value="incoming">Incoming</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="ghost" size="icon" className="hover:bg-gray-200 h-8 w-8">
              <IoIosRefresh className="h-4 w-4" />
            </Button>

            <Select defaultValue="all">
              <SelectTrigger className="h-8 w-28 bg-gray-100 hover:bg-gray-200 border-none">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="outgoing">Outgoing</SelectItem>
                <SelectItem value="incoming">Incoming</SelectItem>
              </SelectContent>
            </Select>
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
                <TableHead className="font-medium w-32 flex-none">Ref. no.</TableHead>
                <TableHead className="font-medium w-40 flex-none">To</TableHead>
                <TableHead className="font-medium flex-1">Subject</TableHead>
                <TableHead className="font-medium w-24 flex-none">Date</TableHead>
                <TableHead className="font-medium w-28 flex-none">Amount</TableHead>
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
                  <TableCell className="text-sm w-32 flex-none">{memo.refNo}</TableCell>
                  <TableCell className="text-sm w-40 flex-none ">{memo.to}</TableCell>
                  <TableCell className="text-sm flex-1 whitespace-nowrap overflow-hidden text-ellipsis">{memo.subject}</TableCell>
                  <TableCell className="text-sm w-24 flex-none">{memo.date}</TableCell>
                  <TableCell className="text-sm w-28 flex-none">{memo.amount}</TableCell>
                  <TableCell className="w-24 flex-none">
                    <span className="text-sm text-green-600 font-medium">{memo.status}</span>
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

export default MemoList;

//  <div className="flex items-center ml-4 justify-between bg-gray-100 mb-4">
//           {/* Left section */}
//           <div className="flex items-center">
//             {/* <input
//               type="checkbox"
//               className="w-4 h-4 border border-gray-600 rounded cursor-pointer accent-teal-700"
//               onClick={(e) => e.stopPropagation()}
//               onChange={(e) => {
//                 // Add your checkbox change handler here
//                 console.log('Checkbox clicked:', e.target.checked);
//               }}
//             />
//             <Button variant="ghost" size="icon" className="h-8 w-8">
//               <ArrowDown className="h-4 w-4" />
//             </Button> */}
//             <Select defaultValue="all">
//               <SelectTrigger className="h-8 w-15 bg-gray-100 border-none">
//                 <SelectValue placeholder={<div className="w-4 h-4 bg-gray-100 border-2 border-gray-600 rounded cursor-pointer accent-teal-700"></div>} />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all"><div className="w-4 h-4 bg-gray-100 border-1 border-gray-600 rounded cursor-pointer accent-teal-700"></div></SelectItem>
//                 <SelectItem value="outgoing">Outgoing</SelectItem>
//                 <SelectItem value="incoming">Incoming</SelectItem>
//               </SelectContent>
//             </Select>
              
//               <Button variant="ghost" size="icon" className="h-8 w-8">
//               <IoIosRefresh className="h-4 w-4" />
//             </Button>

//             <Select defaultValue="all">
//               <SelectTrigger className="h-8 w-28 bg-gray-100 hover:bg-gray-200 border-none">
//                 <SelectValue placeholder="All Types" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Types</SelectItem>
//                 <SelectItem value="outgoing">Outgoing</SelectItem>
//                 <SelectItem value="incoming">Incoming</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Center section - Search */}
//           <div className="relative mb-3 items-center w-full">
                            
                            
//                             <input
//                               type="search"
//                               placeholder="Search"
                             
//                               className="w-full h-[31px] text-xs pl-8 p-1 border border-gray-300 rounded-full bg-gray-100 placeholder:text-sm placeholder-teal-700"
//                               required
//                             />
//                             <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
//                               <ArrowRight className="h-4 w-4" />
//                             </span>
                          
//           {/* <div className=" ml-0 w-full flex flex-row items-center max-w-xl ">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//             <Input 
//               type="search"
//               placeholder="Search" 
//               className="h-8 pl-10 pr-4 w-400 bg-white border-gray-200 rounded"
//             />
//              Right section
//           <Button variant="ghost" size="icon" className="h-8 w-8 mr-4">
//             <ArrowRight className="h-4 w-4" />
//           </Button> */}
           
                            
                           
                      
                          
//           </div>

//           {/* Right section
//           <Button variant="ghost" size="icon" className="h-8 w-8">
//             <ArrowRight className="h-4 w-4" />
//           </Button> */}
//         </div>