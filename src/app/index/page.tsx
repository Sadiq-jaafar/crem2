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
  FaEnvelope, 
  FaCheckCircle, 
  FaExclamationTriangle,
  FaCalendarAlt,
  FaFileAlt,
  FaCog
} from 'react-icons/fa'

const Page = () => {
  return (
    <div className='relative flex flex-col'>
      <Header />
      <div className="flex flex-row gap-2 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-2 mt-1">
          <Card 
            title="Notifications" 
            icon={<FaBell size={16} />} 
            items={Array(5).fill('New notification')}
          />
          <Card 
            title="Messages" 
            icon={<FaEnvelope size={16} />} 
            items={Array(3).fill('New message')}
          />
          <Card 
            title="Tasks" 
            icon={<FaCheckCircle size={16} />} 
            items={Array(4).fill('Pending task')}
          />
          <Card 
            title="Alerts" 
            icon={<FaExclamationTriangle size={16} />} 
            items={Array(2).fill('System alert')}
          />
          <Card 
            title="Calendar" 
            icon={<FaCalendarAlt size={16} />} 
            items={Array(6).fill('Upcoming event')}
          />
          <Card 
            title="Reports" 
            icon={<FaFileAlt size={16} />} 
            items={Array(3).fill('New report')}
          />
          <Card 
            title="Settings" 
            icon={<FaCog size={16} />} 
            items={Array(3).fill('Configuration')}
          />
        </div>
        <div className="flex">
          <FeedCard />
        </div>
      </div>
    </div>
  )
}

export default Page