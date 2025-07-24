import React from 'react'
import { secondary } from '../../constants/colors'

function FeedCard() {
  return (
    <div
      className='hidden lg:flex fixed shadow-lg shadow-gray-400 border-gray-300 top-[25.5vh] 2xl:right-20 right-2 z-10 dark:border-gray-700 rounded-lg overflow-hidden flex-col w-[19%] h-[380px] transition-colors lg:w-40 xl:w-[19%] xl:h-[calc(100vh-30vh)] 2xl:w-[18%] 2xl:h-[calc(100vh-25.5px)] 2xl:text-3xl'
    >
   
        <div className="items-center justify-center text-center text-gray-200  flex w-full 2xl:text-[50px] 2xl:h-[100px]" style={{ backgroundColor: secondary }} >Feeds</div>
        <div className="bg-white dark:bg-gray-900 h-full 2xl:text-[100px] font-semibold text-gray-400 transition-colors flex items-center justify-center text-center">
          No Content yet
        </div>
    </div>
  )
}

export default FeedCard