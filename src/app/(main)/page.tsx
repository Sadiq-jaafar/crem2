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
import Card from '@/Components/Card'
import FeedCard from '@/Components/FeedCard'
import Header from '@/Components/Header'
import React from 'react'
import { 
  FaBell, 
 
} from 'react-icons/fa'
import Image from 'next/image'
import icons from '../../../constants/icons'

const Page = () => {
  return (
    <div className='relative flex flex-col'>
      <Header />
      <div className="flex flex-row gap-2 mt-4">
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-2 mt-1 overflow-hidden hover:overflow-y-auto scrollbar-hide"
          style={{ 
            height: "400px",
            scrollbarWidth: 'none',  // Firefox
            msOverflowStyle: 'none'  // IE and Edge
          }}
        >
          <Card link="/notifications"  title="Notifications" icon={<FaBell size={16} />} items={Array(5).fill('New notification')} />
           <Card link="/memolist" title="Memo" icon={<Image src={icons.memo} alt="docs" width={16} height={16} />} items={Array(3).fill('New message')} />
          <Card link="/tabs/Departments" title="Departments" icon={<Image src={icons.Departments} alt="dept" width={16} height={16} />} items={Array(4).fill('Pending task')} />
          <Card link="/tabs/Clients" title="Clients" icon={<Image src={icons.Client} alt="clients" width={16} height={16} />} items={Array(2).fill('System alert')} />
          <Card link="/allocations" title="Allocations" icon={<Image src={icons.Tenant} alt="docs" width={16} height={16} />} items={Array(6).fill('Upcoming event')} />
          <Card link="/tenants" title="Tenants" icon={<Image src={icons.Tenant} alt="docs" width={16} height={16} />} items={Array(6).fill('Upcoming event')} />
          <Card link="/tabs/Events" title="Events" icon={<Image src={icons.Meeting} alt="docs" width={16} height={16} />} items={Array(3).fill('New report')} />
          <Card link="/tabs/Settings" title="Settings" icon={<Image src={icons.Settings} alt="docs" width={16} height={16} />} items={Array(3).fill('Configuration')} />
        </div>
        <div className="flex">
          <FeedCard />
        </div>
      </div>
    </div>
  )
}

export default Page