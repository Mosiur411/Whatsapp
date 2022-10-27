import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
export const HeaderMessage = ({ Data}) => {
 
    return (
        <>
            {
                Data && <div className='bg-[#F0F2F5] px-4 py-2 flex justify-between items-center '>
                    {/* ================ profile Logo  =============  */}
                    <div className='flex justify-start items-center gap-5'>
                        <img className='w-14 h-14 rounded-full' src={Data?.img} />
                        <div>
                            <p className='font-bold'>{Data?.user_names}</p>
                            <span className='text-sm'>{Data?.number}</span>
                        </div>
                    </div>
                    {/* ======================  */}
                    <div className='text-xl flex justify-center items-center gap-7'>
                        <AiOutlineSearch />
                        <BsThreeDotsVertical />
                    </div>
                </div >
            }
        </>
    )
}
// 