import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4'>
            {/* SEARCH BAR */}
            <div className='md:!flex hidden   gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 items-center'>
                <button className="flex items-center justify-center h-[28px] w-[28px] border-2 border-transparent hover:border-purple-500 bg-transparent rounded-full transition-all ">
                    <Image className="object-cover w-[14px] h-[14px] " src='/search.png' alt="search-icon" width={14} height={14} />
                </button>
                <input className='w-[200px] p-2 bg-transparent outline-none' type="text" placeholder='Search...' />
            </div>

            {/* ICONS AND USER */}
            <div className='flex items-center gap-6 justify-end w-full'>

                <div className='hidden  justify-center items-center  bg-white rounded-full w-7 h-7 sm:!flex  cursor-pointer transition-all '>
                    <Image src="/message.png" alt="" width={20} height={20} />
                </div>

                <div className='bg-white rounded-full w-7 h-7 hidden items-center justify-center cursor-pointer relative sm:!flex hover:border-purple-500'>
                    <Image src="/announcement.png" alt="acouncement-icon" width={20} height={20} />
                    <div className='absolute -top-3 -right-3 w-5 h-5 s,flex items-center justify-center bg-purple-500 text-white rounded-full text-xs flex'>1</div>
                </div>

                <div className='flex flex-col'>
                    <span className="text-xs leading-3 font-medium">just.ngcuong</span>
                    <span className="text-[10px] text-gray-500 text-right">Admin</span>
                </div>
                <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full" />
            </div>
        </div>
    )
}

export default Navbar