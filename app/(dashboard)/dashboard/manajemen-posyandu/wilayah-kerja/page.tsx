'use client'

import { useState, useEffect } from 'react';
import TabsPosyandu from '@/components/tabs-dataPosyandu';
import Link from 'next/link';
import { PlusCircle, MapIcon } from 'lucide-react';

export default function Page() {
  const [kelurahan, setKelurahan] = useState([]);
  const [nama, setNama] = useState('');
  const [loading, setLoading] = useState(false);

  // Ambil data kelurahan dari API
  const fetchKelurahan = async () => {
    try {
      const res = await fetch('/api/wilayah-kerja');
      const data = await res.json();
      setKelurahan(data);
    } catch (err) {
      console.error('Gagal fetch kelurahan:', err);
    }
  };

  useEffect(() => {
    fetchKelurahan();
  }, []);

  // Simpan data kelurahan baru
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama) return;
    setLoading(true);
    try {
      const res = await fetch('/api/wilayah-kerja', {
        method: 'POST',
        body: JSON.stringify({ nama }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        setNama('');
        fetchKelurahan(); // refresh data
      }
    } catch (err) {
      console.error('Gagal tambah kelurahan:', err);
    } finally {
      setLoading(false);
    }
  };

  // Hapus kelurahan
  const handleDelete = async (id: number) => {
    if (!confirm('Yakin ingin menghapus?')) return;
    try {
      await fetch(`/api/wilayah-kerja/${id}`, {
        method: 'DELETE',
      });
      fetchKelurahan();
    } catch (err) {
      console.error('Gagal hapus kelurahan:', err);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h1 className="text-2xl font-bold">
            Manajemen Data <span>Posyandu & Kader</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Informasi & manajemen data posyandu
          </p>
        </div>
        <Link href="/dashboard/manajemen-posyandu/create">
          <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-4 py-2 rounded-md shadow-sm transition">
            <PlusCircle className="w-4 h-4" />
            Posyandu
          </button>
        </Link>
      </div>

      <TabsPosyandu />

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mt-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <MapIcon className="w-5 h-5" /> Wilayah Kerja Puskesmas
        </h2>

        {/* Form Tambah Kelurahan */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Nama Kelurahan"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-sm"
            >
              {loading ? 'Menyimpan...' : 'Simpan'}
            </button>
          </div>
        </form>

        {/* List Kelurahan */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-200 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-700 text-left">
              <tr>
                <th className="p-3 border-b">No</th>
                <th className="p-3 border-b">Nama Kelurahan</th>
                <th className="p-3 border-b">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {kelurahan.length === 0 ? (
                <tr>
                  <td colSpan={3} className="p-3 text-center text-gray-500">
                    Belum ada data kelurahan.
                  </td>
                </tr>
              ) : (
                kelurahan.map((item: any, index: number) => (
                  <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="p-3 border-b">{index + 1}</td>
                    <td className="p-3 border-b">{item.nama}</td>
                    <td className="p-3 border-b">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:underline text-sm"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
