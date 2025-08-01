import {
  UsersIcon,
  CalendarIcon,
  HeartIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';

import SummaryCard from '@/app/ui/dashboard/summary-card';
// import your data functions kedepannya

export default async function Page() {
  // Dummy values sementara
  const jumlahPemeriksaan = '0';
  const usiaKehamilan = '0';
  const statusRisiko = '0';
  const jadwalPemeriksaan = '0';
  const jumlahTT = '0';

  return (
    <div className="p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">
        Dashboard <span className="text-emerald-500">Ibu Hamil</span>
      </h1>
      <p className="text-gray-600 mb-8">
        Selamat datang ibu hamil, berikut adalah ringkasan kehamilan Anda.
      </p>

      {/* Ringkasan Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <SummaryCard
          title="Jumlah Pemeriksaan"
          count={jumlahPemeriksaan.toString()}
          icon={<UsersIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Usia Kehamilan"
          count={usiaKehamilan}
          icon={<CalendarIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Status Risiko"
          count={statusRisiko}
          icon={<ShieldCheckIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Jadwal Pemeriksaan Selanjutnya"
          count={jadwalPemeriksaan}
          icon={<CalendarIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Jumlah Imunisasi TT"
          count={jumlahTT.toString()}
          icon={<HeartIcon className="w-7 h-7 text-emerald-600" />}
        />
        <SummaryCard
          title="Berat Badan Ibu"
          count="0"
          icon={<ArrowTrendingUpIcon className="w-7 h-7 text-emerald-600" />}
        />
      </div>

      {/* Riwayat dan Edukasi */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-emerald-700 mb-4">Riwayat Tekanan Darah & HB</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>✔️ 24 Mei: TD 110/70 mmHg, HB 11.2 g/dL</li>
            <li>✔️ 26 Juni: TD 120/80 mmHg, HB 11.6 g/dL</li>
            <li>✔️ 24 Juli: TD 115/75 mmHg, HB 12.0 g/dL</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-emerald-700 mb-4">Edukasi Kesehatan</h2>
          <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
            <li>Konsumsi tablet tambah darah setiap hari</li>
            <li>Perbanyak makan protein & zat besi</li>
            <li>Hindari rokok dan minuman bersoda</li>
            <li>Lakukan senam hamil secara rutin</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
