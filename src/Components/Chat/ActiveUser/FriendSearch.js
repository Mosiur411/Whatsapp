import React from 'react'
import { RiMenu5Line } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
export const FriendSearch = () => {
  return (
    <div className='px-4 py-2 bg-[#fff] '>
        <div className=' flex justify-between items-center gap-10 relative'>
            <input className='w-full outline-none bg-[#F0F2F5] rounded-2xl px-14 py-1' type='search' placeholder='search or stat new chat'/>
            <RiMenu5Line className='text-2xl'/>
            <AiOutlineSearch className='absolute top-[-52] left-[10px] text-xl'/>
        </div>
    </div>
  )
}
