'use client'

import dynamic from 'next/dynamic';
import TabsPane from '@/components/tab-pane-manajemen-posyandu';

// Dynamic import
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
        </div> 
        <TabsPane />

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Grafik Statistik Posyandu</h2>
        <PosyanduChart />
      </div>
    </div>
  );
}
