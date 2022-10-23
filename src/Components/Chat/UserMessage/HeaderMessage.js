import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
export const HeaderMessage = () => {
    return (
        <div className='bg-[#F0F2F5] px-4 py-2 flex justify-between items-center '>
            {/* ================ profile Logo  =============  */}
            <div className='flex justify-start items-center gap-5'>
                <img className='w-14 rounded-full' src='https://i.ibb.co/Z2Dw3Xv/Hostingimages.jpg' />
                <div>
                    <p className='font-bold'>Joy Pul</p>
                    <span className='text-sm'>+880 1732-023548</span>
                </div>
            </div>
            {/* ======================  */}
            <div className='text-xl flex justify-center items-center gap-7'>
                <AiOutlineSearch />
                <BsThreeDotsVertical />
            </div>
        </div >
    )
}
// 