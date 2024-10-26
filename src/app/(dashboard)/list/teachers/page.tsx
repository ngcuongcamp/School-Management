import React from 'react'
import TableSearch from '@/app/components/TableSearch'

const TeachersListPage = () => {
    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>

            {/* TOP */}
            <div className=''>
                <h1>All Teachers</h1>
            </div>

            {/* LIST */}
            <div>
                <TableSearch />
            </div>

            {/* PAGINATION */}
        </div>
    )
}

export default TeachersListPage