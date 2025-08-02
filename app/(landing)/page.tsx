import NavbarLanding from '@/app/ui/landing/navbar-landing';
import FooterLanding from '@/app/ui/landing/footer-landing';
import {
  ArrowRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  BellAlertIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import SwiperHero from '@/components/swiper-hero';
import { getTotalPosyandu } from '@/lib/data-posyandu';
import { getTotalKader } from '@/lib/data-kader';

export const metadata = {
  title: 'Beranda | E‑Posyandu Care',
  description: 'Digitalisasi layanan posyandu untuk masyarakat sehat dan terdata',
};

export default async function Page() {
  const totalPosyandu = await getTotalPosyandu();
  const totalKader = await getTotalKader();

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-white via-emerald-50 to-white text-gray-800">
      <NavbarLanding />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 rounded-xl shadow-xl mx-4 md:mx-6 mt-6 px-6 md:px-12 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-5">
          <Image
            src="/logo3.png"
            alt="Logo E-Posyandu"
            width={90}
            height={90}
            className="rounded-full bg-white p-1 shadow-lg ring-2 ring-white"
            priority
          />
          <div>
            <h1 className="text-4xl font-extrabold text-white drop-shadow-sm">
              E‑Posyandu Care
            </h1>
            <p className="text-white text-sm md:text-base mt-1">
              Digitalisasi layanan posyandu untuk masyarakat sehat dan terdata
            </p>
          </div>
        </div>
        <div className="text-white italic text-sm md:text-base text-center md:text-right space-y-1">
          <p>“Melayani dengan data, mengabdi dengan hati.”</p>
          <p className="text-xs opacity-90">Realtime • Terintegrasi • Mudah digunakan</p>
        </div>
      </section>

      {/* Welcome + Swiper Section */}
      <section className="flex flex-col md:flex-row gap-6 mt-16 mx-4 md:mx-6 items-stretch">
        {/* Welcome Text */}
        <div className="flex flex-col justify-center gap-6 bg-white rounded-xl shadow-lg p-6 md:p-10 w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-600">
            Selamat Datang di E‑Posyandu Care
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            <strong>E‑Posyandu Care</strong> adalah sistem informasi digital yang dirancang untuk meningkatkan pelayanan kesehatan balita dan ibu hamil secara terstruktur dan terintegrasi.
          </p>
          <ul className="list-disc ml-5 text-gray-600 text-sm md:text-base space-y-1">
            <li>📊 Catatan pertumbuhan balita realtime</li>
            <li>🤰 Pemantauan ibu hamil & jadwal kunjungan</li>
            <li>📅 Jadwal imunisasi, vitamin, dan kegiatan</li>
            <li>📥 Laporan otomatis ke Dinas Kesehatan</li>
            <li>💬 Informasi dan reminder ke orang tua</li>
          </ul>
        </div>

        {/* Swiper */} 
        <div className="w-full md:w-1/2 flex">
          <div className="rounded-xl shadow-lg bg-white w-full h-full overflow-hidden">
            <SwiperHero />
          </div>
        </div>
      </section>

      {/* Fitur Unggulan */}
      <section className="mt-14 mx-4 md:mx-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-6">
          Fitur Unggulan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <ChartBarIcon className="h-10 w-10 text-emerald-500 mx-auto mb-3" />,
              title: 'Statistik Kesehatan',
              desc: 'Pantau data gizi, tumbuh kembang dan kondisi kesehatan anak secara digital.',
            },
            {
              icon: <UserGroupIcon className="h-10 w-10 text-emerald-500 mx-auto mb-3" />,
              title: 'Manajemen Kader',
              desc: 'Atur data dan aktivitas kader posyandu dalam satu sistem yang terorganisir.',
            },
            {
              icon: <BellAlertIcon className="h-10 w-10 text-emerald-500 mx-auto mb-3" />,
              title: 'Notifikasi & Reminder',
              desc: 'Sampaikan informasi penting langsung ke orang tua lewat notifikasi terjadwal.',
            },
          ].map((fitur, i) => (
            <div
              key={i}
              className="group bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl"
            >
              <div className="transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                {fitur.icon}
              </div>
              <h3 className="font-semibold text-lg mt-2">{fitur.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{fitur.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistik */}
      <section className="mt-20 mx-4 md:mx-6">
        <div className="bg-emerald-600 rounded-xl text-white p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-lg">
          {[
            { label: 'Posyandu Aktif', value: totalPosyandu?.toString() || '0' },
            { label: 'Kader Terdaftar', value: totalKader?.toString() || '0' },
            { label: 'Balita Terdata', value: '0' },
            { label: 'Ibu Hamil Dipantau', value: '0' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-sm opacity-90">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 mx-4 md:mx-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-4">
          Mulai Digitalisasi Posyandu Sekarang
        </h2>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Bergabung bersama ratusan kader dan puskesmas yang telah menggunakan <strong>E‑Posyandu Care</strong>.
        </p>
        <Link href="/auth/login">
          <button className="group bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg inline-flex items-center gap-2 shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95">
            Masuk Sekarang{' '}
            <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Link>
      </section>

      <FooterLanding />
    </main>
  );
}
