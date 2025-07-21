'use client';

import { ButtonHTMLAttributes } from 'react';
import { XCircle } from 'lucide-react';

type ButtonBatalProps = {
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonBatal({ children, ...props }: ButtonBatalProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 bg-white hover:bg-gray-200 font-medium font-semibold text-sm px-5 py-2 rounded-md border border-gray-300 transition duration-150 ease-in-out"
      {...props}
    >
      <XCircle className="w-4 h-4 text-gray-500" />
      {children ?? 'Batal'}
    </button>
  );
}
