import React from 'react'
import { assets } from "../../assets/assets"
import {useNavigate} from "react-router-dom"

export const SideBar = () => {

const navigate=useNavigate()


    return (

        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white  hidden lg:flex'>
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around '>
                <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer ">
                    <img src={assets.home_icon} className='w-6' />
                    <p className='font-bold'>  Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer '>
                    <img src={assets.search_icon} className='w-6' />
                    <p className='font-bold'>Search </p>
                </div>
            </div>
            <div className="bg-[#121212] h-[85%] rounded">
                <div className='p-4 flex items-center justify-between  '>
                    <div className="flex items-center gap-3">
                        <img src={assets.stack_icon} className="w-8" />
                        <p className='font-semibold'>Your Liberry</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src={assets.arrow_icon} className="w-5" />
                        <img src={assets.plus_icon} className="w-5" />
                    </div>
                </div>
                <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4">
                    <h1>Create Your Play List</h1>
                    <p className="font-light">it's easy we will help you</p>
                    <button className='px-4 py-1.5 bg-white text-[15] text-black rounded-full mt-4'>Create PlayList</button>

                </div>
                <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4 mt-4">
                    <h1>Let's Findsome Podcasts To Folow</h1>
                    <p className="font-light">we'll keep you update on new episode</p>
                    <button className='px-4 py-1.5 bg-white text-[15] text-black rounded-full mt-4'>Browse Podcast</button>

                </div>
            </div>

        </div>






    )
}
