import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Info, Phone, MapPin, History } from 'lucide-react';

export default async function PosyanduDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const numericId = Number(id);

  const posyandu = await prisma.posyandu.findUnique({
    where: { id: numericId },
  });

  if (!posyandu) return notFound();

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gradient-to-b from-emerald-50 via-white to-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-emerald-700">
            Detail <span className="text-emerald-500">Posyandu</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Informasi lengkap posyandu yang terdaftar
          </p>
        </div>
        <Link
          href="/dashboard/manajemen-posyandu"
          className="bg-gray-100 hover:bg-orange-100 text-orange-600 font-semibold text-sm px-5 py-2 rounded-xl border border-orange-300 transition duration-200"
        >
          Kembali
        </Link>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Informasi Umum */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-md transition p-6">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700 dark:text-white mb-4">
            <Info className="w-5 h-5 text-emerald-500" /> Informasi Umum
          </h2>
          <div className="divide-y divide-gray-200 dark:divide-gray-700 space-y-2 text-gray-600 dark:text-gray-300">
            <p><strong>Nama:</strong> {posyandu.nama}</p>
            <p><strong>Alamat:</strong> {posyandu.alamat}</p>
            <p><strong>Wilayah:</strong> {posyandu.wilayah}</p>
            <p><strong>Kelurahan:</strong> {posyandu.kelurahan}</p>
            <p><strong>Akreditasi:</strong> {posyandu.akreditasi}</p>
          </div>
        </div>

        {/* Kontak & Koordinat */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-md transition p-6">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700 dark:text-white mb-4">
            <Phone className="w-5 h-5 text-emerald-500" /> Kontak & Koordinat
          </h2>
          <div className="divide-y divide-gray-200 dark:divide-gray-700 space-y-2 text-gray-600 dark:text-gray-300">
            <p><strong>Penanggung Jawab:</strong> {posyandu.penanggungJawab}</p>
            <p><strong>No HP:</strong> {posyandu.noHp}</p>
            <p><strong>Latitude:</strong> {posyandu.lattitude}</p>
            <p><strong>Longitude:</strong> {posyandu.longitude}</p>
          </div>
        </div>

        {/* Riwayat */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-md transition p-6 col-span-1 md:col-span-2">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700 dark:text-white mb-4">
            <History className="w-5 h-5 text-emerald-500" /> Riwayat
          </h2>
          <div className="divide-y divide-gray-200 dark:divide-gray-700 space-y-2 text-gray-600 dark:text-gray-300">
            <p><strong>Dibuat:</strong> {new Date(posyandu.createdAt).toLocaleDateString()}</p>
            <p><strong>Diupdate:</strong> {new Date(posyandu.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
