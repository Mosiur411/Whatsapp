import React, { useEffect, useState } from 'react'

export const Friend = () => {
    const [friend, setFriend] = useState([])
    useEffect(() => {
        fetch('ChatUser.json')
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setFriend(data)
                }
            });
    }, [])
    return (
        <div className='w-full overflow-y-auto max-h-screen '>
            {
                friend.map(info => <div key={info?.id} className='w-full  flex  gap-4  item-center  cursor-pointer  hover:bg-[#F0F2F5] px-4 mb-3 '>
                    <img className='w-14 rounded-full' src={info?.img} />
                    <div className='w-full flex justify-between items-center border-b '>
                        <div>
                            <p className='font-bold'>{info?.user_names}</p>
                            <span className='text-sm'>{info?.number}</span>
                        </div>
                        <p className='text-sm'>today</p>
                    </div>
                </div>)
            }



        </div>
    )
}
