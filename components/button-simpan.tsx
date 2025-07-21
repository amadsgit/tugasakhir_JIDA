'use client';

import { ButtonHTMLAttributes } from 'react';
import { Save } from 'lucide-react';

type ButtonSimpanProps = {
  loading?: boolean;
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonSimpan({
  loading = false,
  children,
  ...props
}: ButtonSimpanProps) {
  return (
    <button
      type="submit"
      disabled={loading || props.disabled}
      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-emerald-300 text-white font-semibold text-sm px-6 py-2 rounded-md shadow-md transition"
      {...props}
    >
      {!loading && <Save className="w-4 h-4" />}
      {loading ? 'Menyimpan...' : children ?? 'Simpan'}
    </button>
  );
}
