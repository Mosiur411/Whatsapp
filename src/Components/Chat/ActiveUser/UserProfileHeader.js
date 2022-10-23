import React from 'react'
import { BiMessageDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
export const UserProfileHeader = () => {
    return (
        <div className='bg-[#F0F2F5] px-4 py-2 flex justify-between items-center'>
            {/* ================ profile Logo  =============  */}
            <img className='w-14 rounded-full' src='https://i.ibb.co/Z2Dw3Xv/Hostingimages.jpg' />
            {/* ======================  */}
            <div className='text-xl flex justify-center items-center gap-7'>
                <TfiReload />
                <BiMessageDetail />
                <BsThreeDotsVertical />
            </div>
        </div>
    )
}
