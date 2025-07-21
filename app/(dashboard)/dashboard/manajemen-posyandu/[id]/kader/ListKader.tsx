'use client';

import { useAppSelector } from '@/store';
import { selectKaderByPosyandu } from '@/selectors/kaderSelectors';
import Link from 'next/link';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';


export default function ListKader({ posyanduId }: { posyanduId: number }) {
  const kaderList = useAppSelector(selectKaderByPosyandu(posyanduId));

  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold mb-4">Daftar Kader</h4>
      <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">#</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Nama</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">NIK</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">No HP</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Alamat</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {kaderList.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-4 text-center text-sm text-gray-500">
                  Belum ada data kader.
                </td>
              </tr>
            ) : (
              kaderList.map((kader, index) => (
                <tr key={kader.id ?? `${kader.nik}-${kader.nama}`} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700">{index + 1}</td>
                  <td className="px-4 py-2 text-sm text-gray-800 font-medium">{kader.nama}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{kader.nik}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{kader.noHp}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{kader.alamat}</td>
                  <td className="flex gap-2 py-2">
                    <Link
                      href="#"
                      className="p-2 rounded-md bg-white border border-gray-300 hover:border-teal-500 hover:text-teal-600 transition"
                      title="Edit"
                    >
                      <PencilSquareIcon className="h-4 w-4" />
                    </Link>

                    <button
                      // onClick={() => openDeleteModal(item.id)}
                      className="p-2 rounded-md bg-white border border-gray-300 hover:border-rose-500 hover:text-rose-600 transition"
                      title="Hapus"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
