import { data } from 'autoprefixer'
import React from 'react'
import '../../Styles/Styles.css'
export const ShowMessage = ({ Data }) => {
    const messages = [
        {
            id: 1,
            one: {
                fast: 'Can be verified 1',
                img: "https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
            },
            two: {
                second: "Your error message says permission denied, npm global installs must be given root privileges.",
                img: "https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
            }
        },
        {
            id: 2,
            one: {
                fast: 'Can be verified 2',
                img: "https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
            },
            two: {
                second: "Your error message says permission denied, npm global installs must be given root privileges.",
                img: "https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
            }
        }

    ]
    return (
        <>
            {
                Data && <div className='w-full h-[82vh] overflow-y-auto max-h-screen Chat_images '>
                    {
                        messages && messages.map(message => <div key={message.id} class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                            {
                                message?.one && <div class="flex items-end">
                                    <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                        <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{message?.one?.fast}</span></div>
                                    </div>
                                    <img src={message?.two?.img} class="w-6 h-6 rounded-full order-1" />
                                </div>
                            }

                            {
                                message?.two && <div class="flex items-end justify-end">
                                    <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                        <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{message?.two?.second}</span></div>
                                    </div>
                                    <img src={message?.two?.img} alt="My profile" class="w-6 h-6 rounded-full order-1" />
                                </div>
                            }




                        </div>)
                    }






















                    {/* <div className='flex p-1'>
                       ================= lest site sms show ============== 
                        <div className='flex-1'>
                            <h1>This is a lest site  </h1>
                        </div>
                        ================= right site sms show ============== 
                        <div className='flex-1'>
                            <h1>This is a right site</h1>
                        </div>
                    </div> */}

                </div>
            }

            {
                !Data && <div className='w-full h-[100vh] bg-[#F0F2F5] flex justify-center items-center text-center '>
                    <div>
                        <img src={require('../../../assets/notuserselect.png')} />

                    </div>

                </div>
            }


        </>

    )
}
