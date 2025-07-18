import React from 'react'
import { secondary } from '../../constants/colors'

function FeedCard() {
  return (
    <div className='fixed top-41 left-255 right-0 z-10 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden flex flex-col w-[240px] h-[380px] shadow-black transition-colors'>
        <div className="items-center w-full" style={{ backgroundColor: secondary }} >Feeds</div>
        <div className="bg-white dark:bg-gray-900 h-[370px] transition-colors">
          
        </div>
    </div>
  )
}

export default FeedCard