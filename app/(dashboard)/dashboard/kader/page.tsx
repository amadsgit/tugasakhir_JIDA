
import {
  UsersIcon,
  CalendarDaysIcon,
  ClipboardListIcon,
  BabyIcon,
  SyringeIcon,
  ScaleIcon,
  DockIcon
} from 'lucide-react';
import SummaryCard from '@/app/ui/dashboard/summary-card';

export default async function Page() {


  return (
    <div className="p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">
        Dashboard <span className="text-emerald-500">Kader</span> Posyandu
      </h1>
      <p className="text-gray-600 mb-8">
        Selamat datang, berikut ringkasan aktivitas dan data posyandu Anda.
      </p>

      {/* Ringkasan Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <SummaryCard
          title="Jumlah Balita Terdata"
          count="0"
          icon={<BabyIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Jumlah Imunisasi"
          count="0"
          icon={<SyringeIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Jumlah Pemeriksaan"
          count="0"
          icon={<ScaleIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Jumlah Kader Aktif"
          count="0"
          icon={<ClipboardListIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Jumlah Posyandu"
          count="0"
          icon={<UsersIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Jadwal Posyandu"
          count="0"
          icon={<CalendarDaysIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Laporan Bulanan"
          count="0"
          icon={<DockIcon className="w-7 h-7 text-emerald-600" />}
        />
      </div>
    </div>
  );
}
