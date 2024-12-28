import React from 'react';

type FormTextareaProps = {
  id: string;
  label: string;
  rows?: number;
  placeholder?: string;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const FormTextarea = ({
  id,
  label,
  rows = 4,
  placeholder,
  className = '',
  ...props
}: FormTextareaProps) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};