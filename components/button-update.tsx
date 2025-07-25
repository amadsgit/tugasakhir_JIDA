'use client';

import { ButtonHTMLAttributes } from 'react';
import { RefreshCcw } from 'lucide-react';

type ButtonUpdateProps = {
  loading?: boolean;
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonUpdate({
  loading = false,
  children,
  ...props
}: ButtonUpdateProps) {
  return (
    <button
      type="submit"
      disabled={loading || props.disabled}
      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-emerald-300 text-white font-semibold text-sm px-6 py-2 rounded-md shadow-md transition"
      {...props}
    >
      <RefreshCcw
        className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`}
      />
      {loading ? 'Mengupdate...' : children ?? 'Update'}
    </button>
  );
}
