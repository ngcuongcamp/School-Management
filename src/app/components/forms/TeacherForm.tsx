"use client"
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import InputField from '../InputField';
import Image from 'next/image';


const schema = z.object({
    username: z.string().min(3, { message: "Username must be at least 3 characters long!" }).max(20, { message: "Password must be at least 20 characters long!" }),
    email: z.string().email({ message: "Invalid email address!" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long!" }),
    firstName: z.string().min(1, { message: "First Name is required!" }),
    lastName: z.string().min(1, { message: "Last Name is required!" }),
    phone: z.string().min(1, { message: "Phone is required!" }),
    address: z.string().min(1, { message: "Address is required!" }),
    birthday: z.date({ message: "Birthday is required!" }),
    sex: z.enum(["male", "female"], { message: "Sex is required!" }),
    img: z.instanceof(File, { message: "Image is required" }),
})

type Inputs = z.infer<typeof schema>

const TeacherForm = ({ type, data }: { type: "create" | "update"; data?: any }) => {
    const test = data
    console.log(test)
    const {
        register, handleSubmit, formState: { errors }
    } = useForm<Inputs>({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: Inputs) => {
        console.log('submit')
        console.log(data);
    };


    return (
        <form className='flex flex-col gap-8' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-xl font-semibold'>
                {type === "create" ? "Create a new teacher" : "Modify teacher's Information"}
            </h1>
            <span className="text-xs text-gray-400 font-medium">
                Authentication Information
            </span>

            <div className="flex justify-between flex-wrap gap-4">
                <InputField
                    label="Username"
                    name="username"
                    defaultValue={data?.username}
                    register={register}
                    error={errors?.username}
                />

                <InputField
                    label="Password"
                    name="password"
                    type="password"
                    defaultValue={data?.password}
                    register={register}
                    error={errors?.password}
                />

                <InputField
                    label="Email"
                    name="email"
                    type='email'
                    defaultValue={data?.email}
                    register={register}
                    error={errors?.email}
                />
            </div>

            <span className="text-xs text-gray-400 font-medium">Personal Information</span>
            <div className="flex justify-between flex-wrap gap-4">
                <InputField
                    label="First Name"
                    name="firstName"
                    defaultValue={data?.firstName}
                    register={register}
                    error={errors.firstName}
                />
                <InputField
                    label="Last Name"
                    name="lastName"
                    defaultValue={data?.lastName}
                    register={register}
                    error={errors.lastName}
                />
                <InputField
                    label="Phone"
                    name="phone"
                    defaultValue={data?.phone}
                    register={register}
                    error={errors.phone}
                />
                <InputField
                    label="Address"
                    name="address"
                    defaultValue={data?.address}
                    register={register}
                    error={errors.address}
                />
                <InputField
                    label="Birthday"
                    name="birthday"
                    defaultValue={data?.birthday}
                    register={register}
                    error={errors.birthday}
                    type="date"
                />
            </div>

            <div className="flex flex-wrap gap-4 justify-between">
                <div className='flex flex-col w-[45%] gap-2'>
                    <label className="text-xs text-gray-500">Sex</label>
                    <select
                        className="ring-[1.5px] ring-gray-300 p-2 outline-none rounded-md text-sm"
                        {...register("sex")}
                        defaultValue={data?.sex}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.sex?.message && (
                        <p className="text-xs text-red-400">
                            {errors.sex.message.toString()}
                        </p>
                    )}
                </div>

                <div className='flex flex-col w-[45%] items-center justify-center'>
                    <label
                        className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
                        htmlFor="img"
                    >
                        <Image src="/upload.png" alt="" width={28} height={28} />
                        <span>Upload a photo</span>
                    </label>
                    <input type="file" id="img" {...register("img")} className="hidden" />
                    {errors.img?.message && (
                        <p className="text-xs text-red-400">
                            {errors.img.message.toString()}
                        </p>
                    )}
                </div>
            </div>

            <button className='bg-blue-400 text-white p-2 rounded-md'>
                {type === "create" ? "Create" : "Update"}
            </button>
        </form>
    )
}

export default TeacherForm