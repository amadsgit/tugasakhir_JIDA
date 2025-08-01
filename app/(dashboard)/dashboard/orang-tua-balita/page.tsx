import {
  BabyIcon,
  HeartPulseIcon,
  RulerIcon,
  ThermometerIcon,
} from 'lucide-react';
import SummaryCard from '@/app/ui/dashboard/summary-card';
// import { getTotalBalita, getTotalImunisasi, dll kedepannya..

export default async function Page() {
  return (
    <div className="p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">
        Dashboard <span className="text-emerald-500">Orang Tua Balita</span>
      </h1>
      <p className="text-gray-600 mb-8">
        Selamat datang orang tua balita. Berikut ini adalah rangkuman data balita yang terdaftar di Kartu Keluarga anda.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="Jumlah Balita Terdaftar"
          count="masih pengembangan"
          icon={<BabyIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Imunisasi Terpenuhi"
          count="masih pengembangan"
          icon={<HeartPulseIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Tinggi Badan Terkini"
          count="masih pengembangan"
          icon={<RulerIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Berat Badan Terkini"
          count="masih pengembangan"
          icon={<ThermometerIcon className="w-7 h-7 text-emerald-600" />}
        />
      </div>

      {/* stambahan elanjutnya tabel riwayat atau grafik perkembangan ke depan */}
    </div>
  );
}
