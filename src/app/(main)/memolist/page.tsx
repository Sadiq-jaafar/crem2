"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Upload, Download, ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import EditHeaderDialog from '@/Components/EditHeaderDialog';
import Image from 'next/image';
import icons from '../../../../constants/icons';

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

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Fixed Sidebar */}
      <div className="w-[146px] flex flex-col items-center bg-gray-300 border-r border-gray-400 pt-4 fixed h-full overflow-y-auto">
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
                item.active ? 'bg-gray-400' : 'hover:bg-gray-400'
              }`}
            >
              <span className={item.active ? 'font-medium' : ''}>{item.label}</span>
              <span className="text-gray-500">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content - with left margin to account for fixed sidebar */}
      <div className="flex-1 p-6 ml-[121px] bg-gray-300 overflow-hidden"> {/* Added overflow-hidden */}
        {/* Header with Search */}
        <div className="flex items-center bg-gray-300 gap-4 ml-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border border-gray-300"></div>
            <Select defaultValue="all">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="outgoing">Outgoing</SelectItem>
                <SelectItem value="incoming">Incoming</SelectItem>
                <SelectItem value="read">Read</SelectItem>
                <SelectItem value="unread">Unread</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search" 
              className="pl-10 bg-gray-100 border-gray-200"
            />
          </div>
          
          <Button variant="ghost" size="icon">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Table */}
        <div className="bg-gray-400 rounded-lg border border-gray-300 flex flex-col h-[calc(100vh-180px)]"> {/* Added flex, flex-col and height calculation */}
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-gray-300">
              <TableRow className="border-b border-gray-400 flex w-full">
                <TableHead className="w-12 flex-none">
                  <div className="w-4 h-4 border border-gray-400"></div>
                </TableHead>
                <TableHead className="font-medium w-20 flex-none">Type</TableHead>
                <TableHead className="font-medium w-32 flex-none">Ref. no.</TableHead>
                <TableHead className="font-medium w-40 flex-none">To</TableHead>
                <TableHead className="font-medium flex-1">Subject</TableHead>
                <TableHead className="font-medium w-24 flex-none">Date</TableHead>
                <TableHead className="font-medium w-28 flex-none">Amount</TableHead>
                <TableHead className="font-medium w-24 flex-none">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="block space-y-1 overflow-y-auto overflow-x-hidden">
              {memos.map((memo) => (
                <TableRow 
                  key={memo.id} 
                  className="h-[35px] min-h-[35px] max-h-[35px] bg-gray-300 border border-gray-400 text-[12px] hover:bg-gray-400 cursor-pointer flex w-full items-center"
                  onClick={() => handleMemoClick(memo.id)}
                >
                  <TableCell className="w-12 flex-none">
                    <div className="w-4 h-4 border border-gray-300"></div>
                  </TableCell>
                  <TableCell className="w-20 flex-none">
                    {memo.type === 'up' ? (
                      <Image src={icons.outgoing} width={16} height={16} alt="Outgoing" />
                    ) : (
                      <Image src={icons.incoming} width={16} height={16} alt="incoming" />
                    )}
                  </TableCell>
                  <TableCell className="text-sm w-32 flex-none">{memo.refNo}</TableCell>
                  <TableCell className="text-sm w-40 flex-none">{memo.to}</TableCell>
                  <TableCell className="text-sm flex-1">{memo.subject}</TableCell>
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
