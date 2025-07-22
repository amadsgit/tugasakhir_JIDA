'use client';

import { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

function countByField(data: any[], field: string) {
  const result: { [key: string]: number } = {};
  data.forEach((item) => {
    const key = item[field] || 'Tidak diketahui';
    result[key] = (result[key] || 0) + 1;
  });
  return result;
}

export default function PosyanduChart() {
  const [posyandu, setPosyandu] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/posyandu')
      .then((res) => res.json())
      .then((data) => setPosyandu(data));
  }, []);

  const kelurahanCount = countByField(posyandu, 'kelurahan');
  const akreditasiCount = countByField(posyandu, 'akreditasi');

  const barData = {
    labels: Object.keys(kelurahanCount),
    datasets: [
      {
        label: 'Jumlah Posyandu per Kelurahan',
        data: Object.values(kelurahanCount),
        backgroundColor: '#3B82F6',
      },
    ],
  };

  const pieData = {
    labels: Object.keys(akreditasiCount),
    datasets: [
      {
        label: 'Akreditasi',
        data: Object.values(akreditasiCount),
        backgroundColor: ['#60A5FA', '#34D399', '#FBBF24', '#F87171'],
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Grafik Posyandu per Kelurahan</h2>
        <Bar data={barData} />
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Grafik Posyandu per Akreditasi</h2>
        <Doughnut data={pieData} />
      </div>
    </div>
  );
}
