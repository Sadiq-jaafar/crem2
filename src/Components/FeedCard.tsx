import React from 'react'
import { secondary } from '../../constants/colors'

function FeedCard() {
  return (
    <div className='absolute border border-gray-300 rounded-lg overflow-hidden flex flex-col w-[240px] h-[380px] shadow-black'>
        <div className=" items-center w-full  "
        style={{ backgroundColor: secondary ,}} 
        
        >Feeds</div>
        <div className="bg-white h-[370px]"></div>
    </div>
  )
}

export default FeedCard