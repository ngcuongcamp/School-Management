import React from 'react'
import { FieldError } from 'react-hook-form';

type InputFieldProps = {
    label: string;
    type?: string;
    register: any;
    name: string;
    defaultValue?: string;
    error?: FieldError;
    inputProps?: React.InputHTMLAttributes<HTMLElement>;
}

const InputField = ({
    label,
    type = "text",
    register,
    name,
    defaultValue,
    error,
    inputProps
}: InputFieldProps) => {
    return (
        // <div className="flex flex-col gap-2 w-full md:w-1/4 ">
        <div className="flex flex-col gap-2 w-full md:w-[45%] ">
            <label className='text-xs text-gray-500'>{label}</label>
            <input
                type={type}
                {...register(name)}
                className='right-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full border-solid border-2 border-gray-300 outline-none'
                {...inputProps}
                defaultValue={defaultValue}
            />
            {error?.message &&
                <p className='text-xs text-red-400'>
                    {error.message.toString()}
                </p>}
        </div>
    )
}

export default InputField