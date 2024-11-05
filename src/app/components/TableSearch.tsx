import React from 'react'
import Image from 'next/image'

const TableSearch = () => {
    return (
        <div className='w-full md:w-auto flex gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 items-center'>
            <button className="flex items-center justify-center h-[28px] w-[28px] border-2 border-transparent hover:border-purple-500 bg-transparent rounded-full transition-all ">
                <Image className="object-cover w-[14px] h-[14px] " src='/search.png' alt="search-icon" width={14} height={14} />
            </button>
            <input className='w-[200px] p-2 bg-transparent outline-none' type="text" placeholder='Search...' />
        </div>
    )
}

export default TableSearch