'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchKader, deleteKaderAsync } from '@/store/kaderSlice';
import { selectKaderByPosyandu } from '@/selectors/kaderSelectors';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import ModalKonfirmasi from '@/components/delete-confirmation';
import toast from 'react-hot-toast';

interface Kader {
  id: number;
  nama: string;
  nik: string;
  noHp: string;
  alamat: string;
}

interface ListKaderProps {
  posyanduId: number;
  onEdit: (kader: Kader) => void;
}

export default function ListKader({ posyanduId, onEdit }: ListKaderProps) {
  const dispatch = useAppDispatch();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] =  useState(false);

  const kaderList = useAppSelector(selectKaderByPosyandu(posyanduId)) as Kader[];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await dispatch(fetchKader());
      } finally {
        setLoading(false);
      }
    };

    if (posyanduId) {
      fetchData();
    }
  }, [dispatch, posyanduId]);


  // delete data kader
  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      await dispatch(deleteKaderAsync(selectedId)).unwrap();
      toast.success('Kader berhasil dihapus');
      dispatch(fetchKader()); // Refresh data
    } catch (err) {
      toast.error('Gagal menghapus kader');
      console.error(err);
    } finally {
      setSelectedId(null);
      setOpenModal(false);
    }
  };

  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold mb-4">Daftar Kader</h4>
      <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
        {loading ? (
          <div className="flex justify-center items-center py-16 text-emerald-600">
            <svg className="w-6 h-6 animate-spin mr-2" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            <span className="text-sm font-medium">Memuat data kader...</span>
          </div>
        ) : (
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
              {kaderList.length > 0 ? (
                kaderList.map((kader, index) => (
                  <tr key={kader.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">{index + 1}</td>
                    <td className="px-4 py-2 text-sm font-medium text-gray-800">{kader.nama}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{kader.nik}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{kader.noHp}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{kader.alamat}</td>
                    <td className="flex items-center gap-2 py-2 px-4">
                      <button
                        onClick={() => onEdit(kader)}
                        className="p-2 rounded-md bg-white border border-gray-300 hover:border-teal-500 hover:text-teal-600 transition"
                        title="Edit"
                      >
                        <PencilSquareIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedId(kader.id);
                          setOpenModal(true);
                        }}
                        className="p-2 rounded-md bg-white border border-gray-300 hover:border-rose-500 hover:text-rose-600 transition"
                        title="Hapus"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-4 text-center text-gray-500">
                    Belum ada data kader.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      <ModalKonfirmasi
          key={selectedId ?? 'modal'}
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          onConfirm={handleDelete}
        />
    </div>
  );
}
