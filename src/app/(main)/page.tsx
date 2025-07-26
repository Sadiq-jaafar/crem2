// import Card from '@/Components/Card'
// import FeedCard from '@/Components/FeedCard'
// import Header from '@/Components/Header'
// import React from 'react'

// const page = () => {
//   return (
//     <div className='relative flex flex-col' >
//       <Header />
//       <div className="flex flex-row gap-2 mt-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-2 mt-1">
//   <Card logo=" Notification" icon="bell" />
//   <Card logo="Messages" icon="envelope" />
//   <Card logo="Tasks" icon="check-circle" />
//   <Card logo="Alerts" icon="alert" />
//   <Card logo="Notification" icon="bell" />
//   <Card logo="Messages" icon="envelope" />
//   <Card logo="Tasks" icon="check-circle" />
//   <Card logo="Alerts" icon="alert" />
// </div>
//         <div className="flex">

//           <FeedCard />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default page

// page.tsx
"use client"
import Card from '@/Components/Card'
import FeedCard from '@/Components/FeedCard'
import Header from '@/Components/Header'
import React from 'react'
import { 
  FaBell, 
 
} from 'react-icons/fa'
import Image from 'next/image'
import icons from '../../../constants/icons'
import { useRouter } from 'next/navigation';

const Page = () => {
  const navigation = useRouter();
  const [canGoBack, setCanGoBack] = React.useState(false);
  const [canGoForward, setCanGoForward] = React.useState(false);

  React.useEffect(() => {
    setCanGoBack(window.history.length > 1);
    setCanGoForward(!!window.history.state && typeof window.history.state.idx === 'number' && window.history.state.idx < window.history.length - 1);
  }, []);

  const onBack = () => {
    navigation.back();
  };
  const onForward = () => {
    navigation.forward();
  };

  return (
    <div className='relative flex flex-col'>
      <Header />
      <div className="h-[calc(100vh-26vh)] w-[calc(100%-23%)] flex-row gap-2 ml-2 mt-5 overflow-hidden">
        <div 
          className=" h-[calc(100vh-26vh)] grid grid-cols-1 sm:grid-cols-2 gap-2 2xl:grid-cols-3 overflow-hidden hover:overflow-y-auto scrollbar-hide "
          style={{ 
            // height: "400px",
            scrollbarWidth: 'none',  // Firefox
            msOverflowStyle: 'none'  // IE and Edge
          }}
        >
          <Card 
          link="/notifications"  title="Notifications" icon={<FaBell size={16} />} items={Array(5).fill('New notification')} itemIconAndText={<Image src={icons.Tenant} alt="docs" width={16} height={16} />} />
           <Card link="/memolist" title="Memo" icon={<Image src={icons.memo} alt="docs" width={16} height={16} />} items={Array(3).fill('New message')} itemIcon={<Image src={icons.incoming} alt="docs" width={16} height={16} />} itemIconAndText={<Image src={icons.unread} alt="docs" width={16} height={16} />} />
          <Card link="/tabs/Departments" title="Departments" icon={<Image src={icons.Departments} alt="dept" width={16} height={16} />} items={Array(4).fill('Pending task')} itemIconAndText={<div className='flex flex-row gap-1'><span>2</span><span/><Image src={icons.Tenant} alt="docs" width={16} height={10} /></div>} />
          <Card link="/tabs/Clients" title="Clients" icon={<Image src={icons.Client} alt="clients" width={16} height={16} />} items={Array(2).fill('System alert')} itemIconAndText={<div className='flex flex-row gap-1'><span>TCA-7/KDM</span><span/><Image src={icons.Client} alt="docs" width={16} height={16} /></div>} />
          <Card link="/allocations" title="Allocations" icon={<Image src={icons.Tenant} alt="docs" width={16} height={16} />} items={Array(6).fill('Upcoming event')} itemIconAndText={<Image src={icons.Tenant} alt="docs" width={16} height={16} />}/>
          <Card link="/tenants" title="Tenants" icon={<Image src={icons.Tenant} alt="docs" width={16} height={16} />} items={Array(6).fill('Upcoming event')} itemIconAndText={<div className='flex flex-row gap-1'><span>TCA-7/KDM</span><span/><Image src={icons.Client} alt="docs" width={16} height={16} /></div>} />
          <Card link="/tabs/Events" title="Events" icon={<Image src={icons.Meeting} alt="docs" width={16} height={16} />} items={Array(3).fill('New report')} itemIconAndText={<div className='flex flex-row gap-1'><span className='text-xs'>ongoing</span><span/><Image src={icons.Client} alt="docs" width={16} height={16} /></div>} />
          <Card 
            link="/tabs/Events" 
            title="Drivers" 
            icon={<Image src={icons.Driver} alt="docs" width={16} height={16} />} 
            items={Array(3).fill('New report')} 
            itemIconAndText={<div className='flex flex-row gap-1'><span className='text-xs'>2/2</span><span/><Image src={icons.Client} alt="docs" width={16} height={16} /></div>} 
            firstItemClassName="font-bold text-4xl h-16" 
            firstItemIconAndText={
              <div className="flex flex-row gap-2 mt-4 h-[calc(100vh-64px)] items-center">
                <span className="text-4xl">2/2</span>
                <Image src={icons.Client} alt="docs" width={24} height={24} />
              </div>
            }
            // The icon size for the first row will be overridden below
          />
          <Card link="/tabs/Settings" title="Settings" icon={<Image src={icons.Settings} alt="docs" width={16} height={16} />} items={Array(3).fill('Configuration')} />
        </div>
        <div className="mt-0 flex">
          <FeedCard />
        </div>
      </div>
      {/* Fixed bottom navigation buttons */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-6 flex space-x-4 z-50">
        <button
          onClick={onBack}
          className="text-gray-700 hover:bg-gray-400 p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed bg-white"
          disabled={!canGoBack}
        >
          <Image
            src={icons.leftAr}
            alt="Left Arrow"
            className="2xl:w-15 2xl:h-15"
            width={20}
            height={20}
          />
        </button>
        <button
          onClick={onForward}
          className="text-gray-700 hover:bg-gray-400 p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed bg-white"
          disabled={!canGoForward}
        >
          <Image
            src={icons.rightAr}
            alt="Right Arrow"
            className="2xl:w-15 2xl:h-15"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  )
}

export default Page