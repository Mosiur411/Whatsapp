import React from 'react'
import { ActiveUser } from './ActiveUser/ActiveUser'
import { UserMessage } from './UserMessage/UserMessage'

export const Chat = () => {
  return (
    <div className='flex'>
      {/* ========================= Chat List user ================== */}
      <div className='w-4/12 border h-fit'>
        <ActiveUser />
      </div>
      {/* ========================= Chat massage user ================== */}
      <div className='w-8/12  h-[300px] '>
        <UserMessage />
      </div>
    </div>
  )
}
