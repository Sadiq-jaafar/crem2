import Card from '@/Components/Card'
import Header from '@/Components/Header'
import React from 'react'

const page = () => {
  return (
    <div >
      <Header/>
      
      <Card logo="Notification" icon="bell"/>
      <Card logo="message" icon="envrlope"/>
    </div>
  )
}

export default page