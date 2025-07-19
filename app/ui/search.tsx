'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ChangeEvent } from 'react';

type SearchProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Search({ placeholder = 'Search...', value, onChange }: SearchProps) {
  return (
    <div className="relative w-full">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
      <input
        type="text"
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm placeholder-gray-400 transition duration-150 ease-in-out bg-white shadow-sm"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
