import React from 'react'
import TableSearch from '@/app/components/TableSearch'
import Image from 'next/image'
import { role, parentsData } from '@/lib/data'
import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table'
import Link from 'next/link'
import FormModal from '@/app/components/FormModal'

type Student = {
    id: number;
    name: string
}

type Parent = {
    id: number;
    name: string;
    phone: string;
    email?: string;
    students: Student[];
    address: string;
}

const columns = [
    {
        header: "Info",
        accessor: "info",
    },
    {
        header: "Parent ID",
        accessor: "Parent ID",
        className: "hidden md:table-cell",
    },
    {
        header: "Student Names",
        accessor: "studentNames",
        className: "hidden md:table-cell",
    },
    {
        header: "Phone",
        accessor: "phone",
        className: "hidden lg:table-cell",
    },
    {
        header: "Address",
        accessor: "address",
        className: "hidden lg:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
];

const ParentListPage = () => {

    const renderRow = (item: Parent) => (
        <tr
            key={item.id}
            className="border-b border-gray-200 border-solid even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
            <td className="flex items-center gap-4 p-4">
                {/* <Image
                    src={item.photo || '/default_user.jpg'}
                    alt=""
                    width={40}
                    height={40}
                    className=" w-10 h-10 rounded-full object-cover"
                /> */}
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.email}</p>
                </div>
            </td>

            <td className="hidden md:table-cell align-middle text-gray-500 font-semibold">#{item.id}</td>
            <td className="hidden md:table-cell align-middle">{item.students.map((student) => {
                return `${student.name} (#${student.id})`;
            }).join(", ")}</td>
            <td className="hidden lg:table-cell align-middle">{item.phone}</td>
            <td className="hidden lg:table-cell align-middle">{item.address}</td>
            <td className='align-middle'>
                <div className="flex items-center gap-2">
                    <Link href={`/list/parents/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                            <Image src="/view.png" alt="" width={16} height={16} />
                        </button>
                    </Link>
                    {role === "admin" && (
                        <>
                            <FormModal table="parent" type="update" data={item} />
                            <FormModal table="parent" type="delete" id={item.id} />
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
                <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
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
                            <FormModal table="parent" type="create" />
                        )}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={parentsData} />
            {/* PAGINATION */}
            <Pagination />
        </div>
    );
};

export default ParentListPage