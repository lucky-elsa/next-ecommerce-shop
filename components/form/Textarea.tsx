import React, { InputHTMLAttributes } from "react";
import { Path, UseFormRegister, FieldErrorsImpl } from "react-hook-form";
import { FormTypes } from "types";

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: Path<FormTypes>;
  label: string;
  placeholder: string;
  register: UseFormRegister<FormTypes>;
  errors: Partial<FieldErrorsImpl<FormTypes>>;
}

export const Textarea = ({
  name,
  label,
  placeholder,
  register,
  errors,
}: TextareaProps) => {
  const errorMsg: string | undefined = errors?.[name]?.message;
  const hasError = Boolean(errors && errorMsg);
  return (
    <div className="w-full px-3 mb-6 md:mb-0">
      <label
        htmlFor={name}
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      >
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        {...(register && register(name))}
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
          errorMsg && "border-red-500"
        }`}
        rows={4}
        cols={50}
      />
       <p className="text-red-500 text-xs italic h-6">{ hasError ? errorMsg : ""}</p>
    </div>
  );
};
