import React from 'react'
import TableSearch from '@/app/components/TableSearch'
import Image from 'next/image'
import { role, assignmentsData } from '@/lib/data'
import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table'
import Link from 'next/link'
import FormModal from '@/app/components/FormModal'


type Exam = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    date: string;
};

const columns = [
    {
        header: "Subject Name",
        accessor: "subject",
    },
    {
        header: "Class",
        accessor: "class",
        className: "hidden sm:table-cell",
    },
    {
        header: "Teacher",
        accessor: "teacher",
        className: "hidden sm:table-cell",
    },

    {
        header: "Due Date",
        accessor: "dueDate",
        className: "hidden sm:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
];

const AssignmentListPage = () => {

    const renderRow = (item: Exam) => (
        <tr
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
            <td className="flex items-center gap-4 p-4">
                <div className="flex flex-row gap-2 items-center justify-center">
                    <p className="text-sm text-gray-500 font-semibold">#{item.id}</p>
                    <h3 className="font-semibold">{item.subject}</h3>
                </div>
            </td>

            <td className="hidden sm:table-cell align-middle">{item.class}</td>
            <td className="hidden sm:table-cell align-middle">{item.teacher}</td>
            <td className="hidden sm:table-cell align-middle">{item.date}</td>
            <td className='align-middle'>
                <div className="flex items-center gap-2">
                    <Link href={`/list/exams/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                            <Image src="/view.png" alt="" width={16} height={16} />
                        </button>
                    </Link>
                    {role === "admin" && (
                        <>
                            <FormModal table="assignment" type="update" data={item} />
                            <FormModal table="assignment" type="delete" id={item.id} />
                        </>
                    )}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Assignments</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/filter.png" alt="" width={14} height={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/sort.png" alt="" width={14} height={14} />
                        </button>
                        {role === "admin" && (
                            <FormModal table="assignment" type="create" />
                        )}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
            {/* PAGINATION */}
            <Pagination />
        </div>
    );
};

export default AssignmentListPage