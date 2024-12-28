import React from 'react';

type FormInputProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput = ({
  id,
  label,
  type = 'text',
  placeholder,
  className = '',
  ...props
}: FormInputProps) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};