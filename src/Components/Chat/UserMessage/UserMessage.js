import React, { useState } from 'react'
import { HeaderMessage } from './HeaderMessage'
import { BsEmojiSmile } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
import { MdAttachFile } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
export const UserMessage = () => {
  const [submitMessage, setSubmitMessage] = useState('')
  return (
    <div>
      <HeaderMessage />

      {/* ============== input value =============  */}
      <section className=''>
        <div className='w-full flex bg-[#F0F2F5] px-5 py-3 gap-4 justify-start items-center '>
          <div className='flex justify-center items-center gap-6 text-xl'>
            <BsEmojiSmile />
            <MdAttachFile />
          </div>
          <input type='text' onChange={(e) => setSubmitMessage(e.target.value)} placeholder='Type Message' className='w-full bg-[#fff] px-5 py-2 rounded-2xl outline-none' />
          <div className='text-xl'>
            {submitMessage ? <IoSendSharp /> : <BiMicrophone />}
          </div>
        </div>
      </section>
    </div>
  )
}
