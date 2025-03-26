import Card from '@/Components/Card'
import FeedCard from '@/Components/FeedCard'
import Header from '@/Components/Header'
import React from 'react'

const page = () => {
  return (
    <div className='relative flex flex-col' >
      <Header />
      <div className="flex flex-row gap-2 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
  <Card logo="Notification" icon="bell" />
  <Card logo="Messages" icon="envelope" />
  <Card logo="Tasks" icon="check-circle" />
  <Card logo="Alerts" icon="alert" />
  <Card logo="Notification" icon="bell" />
  <Card logo="Messages" icon="envelope" />
  <Card logo="Tasks" icon="check-circle" />
  <Card logo="Alerts" icon="alert" />
</div>
        <div className="flex">

          <FeedCard />
        </div>
      </div>
    </div>
  )
}

export default page