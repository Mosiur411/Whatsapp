import React, { useEffect, useState } from 'react'
import { ActiveUser } from './ActiveUser/ActiveUser'
import { UserMessage } from './UserMessage/UserMessage'
export const Chat = () => {
  const [friend, setFriend] = useState([])
  const [ClickChat, setClickChat] = useState()
  useEffect(() => {
    fetch('ChatUser.json')
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setFriend(data)
        }
      });
  }, [])
  const Data = friend[ClickChat]

  return (
    <div className='md:flex w-full h-[100vh] overflow-hidden'>
      {/* ========================= Chat List user ================== */}
      <div className='md:w-5/12 lg:w-4/12 border h-fit'>
        <ActiveUser friend={friend} setClickChat={setClickChat} />

      </div>
      {/* ========================= Chat massage user ================== */}
      <div className='md:w-7/12 lg:w-8/12  h-[100vh] '>
        <UserMessage Data={Data} />
      </div>
    </div>
  )
}
