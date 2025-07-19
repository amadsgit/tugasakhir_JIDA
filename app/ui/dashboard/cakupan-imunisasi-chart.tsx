'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export type DataImunisasi = {
  nama_puskesmas: string;
  jenis_kelamin: 'LAKI-LAKI' | 'PEREMPUAN';
  jumlah_bayi_diimunisasi: number;
};

interface ImunisasiChartProps {
  data: DataImunisasi[];
}

export default function CakupanImunisasiChart({ data }: ImunisasiChartProps) {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">Tidak ada data imunisasi.</p>;
  }

  const labels = Array.from(new Set(data.map((d) => d.nama_puskesmas)));

  const dataLaki: number[] = [];
  const dataPerempuan: number[] = [];

  labels.forEach((nama) => {
    let jumlahLaki = 0;
    let jumlahPerempuan = 0;

    data.forEach((d) => {
      if (d.nama_puskesmas === nama) {
        if (d.jenis_kelamin === 'LAKI-LAKI') jumlahLaki += d.jumlah_bayi_diimunisasi;
        if (d.jenis_kelamin === 'PEREMPUAN') jumlahPerempuan += d.jumlah_bayi_diimunisasi;
      }
    });

    dataLaki.push(jumlahLaki);
    dataPerempuan.push(jumlahPerempuan);
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Laki-laki',
        data: dataLaki,
        backgroundColor: 'rgba(16, 185, 129, 0.7)',
      },
      {
        label: 'Perempuan',
        data: dataPerempuan,
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Cakupan Imunisasi Dasar Lengkap per Puskesmas',
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx: any) => `${ctx.dataset.label}: ${ctx.formattedValue} bayi`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Jumlah Bayi',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Puskesmas',
        },
      },
    },
  };

  return (
    <div className="w-full h-full space-y-4 mt-10">
      <div className="relative w-full" style={{ height: '400px' }}>
        <Bar data={chartData} options={options} />
      </div>

      <p className="text-sm text-center text-gray-500">
        Sumber data API:{' '}
        <a
          href="https://opendata.cimahikota.go.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-emerald-600"
        >
          Open Data Kota Cimahi
        </a>
      </p>
    </div>
  );
}
