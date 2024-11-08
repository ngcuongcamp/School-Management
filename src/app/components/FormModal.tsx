"use client"

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
    loading: () => <div className="relative w-full h-full top-0 left-0 flex justify-center items-center">
        <span className="loader"></span>
    </div>
})
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
    loading: () => <div className="relative w-full h-full top-0 left-0 flex justify-center items-center">
        <span className="loader"></span>
    </div>
})
const ParentForm = dynamic(() => import("./forms/TeacherForm"), {
    loading: () => <div className="relative w-full h-full top-0 left-0 flex justify-center items-center">
        <span className="loader"></span>
    </div>
})
const SubjectForm = dynamic(() => import("./forms/StudentForm"), {
    loading: () => <div className="relative w-full h-full top-0 left-0 flex justify-center items-center">
        <span className="loader"></span>
    </div>
})
const ClassForm = dynamic(() => import("./forms/StudentForm"), {
    loading: () => <div className="relative w-full h-full top-0 left-0 flex justify-center items-center">
        <span className="loader"></span>
    </div>
})
const LessonForm = dynamic(() => import("./forms/StudentForm"), {
    loading: () => <div className="relative w-full h-full top-0 left-0 flex justify-center items-center">
        <span className="loader"></span>
    </div>
})
const ExamForm = dynamic(() => import("./forms/StudentForm"), {
    loading: () => <div className="relative w-full h-full top-0 left-0 flex justify-center items-center">
        <span className="loader"></span>
    </div>
})
const AssignmentForm = dynamic(() => import("./forms/StudentForm"), {
    loading: () => <div className="relative w-full h-full top-0 left-0 flex justify-center items-center">
        <span className="loader"></span>
    </div>
})
const ResultForm = dynamic(() => import("./forms/StudentForm"), {
    loading: () => <div className="relative w-full h-full top-0 left-0 flex justify-center items-center">
        <span className="loader"></span>
    </div>
})
const AttendanceForm = dynamic(() => import("./forms/StudentForm"), {
    loading: () => <div className="relative w-full h-full top-0 left-0 flex justify-center items-center">
        <span className="loader"></span>
    </div>
})
const EventForm = dynamic(() => import("./forms/StudentForm"), {
    loading: () => <div className="relative w-full h-full top-0 left-0 flex justify-center items-center">
        <span className="loader"></span>
    </div>
})
const AnnouncementForm = dynamic(() => import("./forms/StudentForm"), {
    loading: () => <div className="relative w-full h-full top-0 left-0 flex justify-center items-center">
        <span className="loader"></span>
    </div>
})


const forms: {
    [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
    teacher: (type, data) => <TeacherForm type={type} data={data} />,
    student: (type, data) => <StudentForm type={type} data={data} />,
    parent: (type, data) => <ParentForm type={type} data={data} />,
    subject: (type, data) => <SubjectForm type={type} data={data} />,
    class: (type, data) => <ClassForm type={type} data={data} />,
    lesson: (type, data) => <LessonForm type={type} data={data} />,
    exam: (type, data) => <ExamForm type={type} data={data} />,
    assignment: (type, data) => <AssignmentForm type={type} data={data} />,
    result: (type, data) => <ResultForm type={type} data={data} />,
    attendance: (type, data) => <AttendanceForm type={type} data={data} />,
    event: (type, data) => <EventForm type={type} data={data} />,
    announcement: (type, data) => <AnnouncementForm type={type} data={data} />
};

const FormModal = ({ table, type, data, id }: {
    table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number
}) => {

    const size = type === "create" ? "w-8 h-8" : "w-7 h-7"
    const bgColor = type === "create" ? "bg-lamaYellow" : type === "update" ? "bg-lamaSky" : "bg-lamaPurple"

    const [open, setOpen] = useState(false)

    const Form = () => {
        return type === "delete" && id ? (
            <form className="p-4 flex flex-col gap-4 justify-between items-center">
                <span className="text-cetner font-medium">
                    All data will be lost. Are you sure you want to delete this {table}
                </span>
                <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
                    Delete
                </button>
            </form>) : type === "create" || type == "update" ?
            (
                forms[table](type, data)
            ) :
            "Form not found!"
    }


    return (
        <>
            <button
                className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
                onClick={() => setOpen(true)}
            >
                <Image src={`/${type}.png`} alt="" width={16} height={16} />
            </button>
            {open &&
                <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] min-h-[200px] flex items-center justify-center">
                        <div onClick={() => { setOpen(false) }} className="absolute top-4 right-4 cursor-pointer">
                            <Image src="/close.png" alt="close-icon" width={14} height={14} />
                        </div>
                        <Form />
                    </div>
                </div>}
        </>
    )
}

export default FormModal