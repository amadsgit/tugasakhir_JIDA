'use client'

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import TabsPosyandu from '@/components/tabs-dataPosyandu';

// Dynamic import to prevent SSR issues with Chart.js
const PosyanduChart = dynamic(() => import('@/components/posyandu-chart'), {
  ssr: false,
});

export default function StatistikPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-3">
            <div>
                <h1 className="text-2xl font-bold">
                Manajemen Data <span className="">Posyandu & Kader</span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                Informasi & manajemen data posyandu
                </p>
            </div>
            <Link href="/dashboard/manajemen-posyandu/create">
                <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-4 py-2 rounded-md shadow-sm transition">
                <PlusCircle className="w-4 h-4 text-white text-bold" />
                Posyandu
                </button>
            </Link>
        </div>
        <TabsPosyandu />

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Grafik Statistik Posyandu</h2>
        <PosyanduChart />
      </div>
    </div>
  );
}
