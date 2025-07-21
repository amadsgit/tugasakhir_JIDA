'use client';

import { ArrowLeft } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';

type ButtonKembaliProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonKembali(props: ButtonKembaliProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-200 text-gray-700 font-semibold text-sm px-5 py-2 rounded-md border border-gray-300 transition duration-150 ease-in-out"
      {...props}
    >
      <ArrowLeft className="w-4 h-4" />
      Kembali
    </button>
  );
}
