import React from 'react'
import { Friend } from './Friend'
import { FriendSearch } from './FriendSearch'
import { UserProfileHeader } from './UserProfileHeader'

export const ActiveUser = () => {
  return (
    <div>
      <div className='sticky top-0'>
        <UserProfileHeader />
        <FriendSearch />
      </div>
      <hr />
      <Friend />
    </div>
  )
}  