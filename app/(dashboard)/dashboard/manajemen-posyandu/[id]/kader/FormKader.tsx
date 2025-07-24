'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/store/kader';
import {
  createKaderAsync,
  fetchKader,
  updateKaderAsync,
} from '@/store/kader/kaderSlice';
import { Save } from 'lucide-react';
import toast from 'react-hot-toast';

interface Kader {
  id: number;
  nama: string;
  nik: string;
  noHp: string;
  alamat: string;
}

interface FormKaderProps {
  posyanduId: number;
  selectedKader?: Kader | null;
  onSuccess?: () => void;
  onEditDone?: () => void; // optional callback untuk reset selectedKader di parent
}

export default function FormKader({
  posyanduId,
  selectedKader,
  onSuccess,
  onEditDone,
}: FormKaderProps) {
  const dispatch = useAppDispatch();

  const [nama, setNama] = useState('');
  const [nik, setNik] = useState('');
  const [noHp, setNoHp] = useState('');
  const [alamat, setAlamat] = useState('');
  const [loading, setLoading] = useState(false);

  // Auto isi form saat mode edit
  useEffect(() => {
    if (selectedKader) {
      setNama(selectedKader.nama || '');
      setNik(selectedKader.nik || '');
      setNoHp(selectedKader.noHp || '');
      setAlamat(selectedKader.alamat || '');
    } else {
      setNama('');
      setNik('');
      setNoHp('');
      setAlamat('');
    }
  }, [selectedKader]);

  const handleSubmit = async () => {
    if (!nama.trim()) return toast.error('Nama wajib diisi');
    if (!nik || nik.length !== 16) return toast.error('NIK harus 16 digit angka');
    if (!noHp || noHp.length < 12) return toast.error('No HP minimal 12 digit angka');
    if (!alamat.trim()) return toast.error('Alamat wajib diisi');

    const payload = { nama, nik, noHp, alamat, posyanduId };
    setLoading(true); // mulai loading

    try {
      if (selectedKader) {
        await dispatch(updateKaderAsync({ id: selectedKader.id, data: payload })).unwrap();
        toast.success('Data kader berhasil diperbarui!');
      } else {
        await dispatch(createKaderAsync(payload)).unwrap();
        toast.success('Kader berhasil ditambahkan!');
      }

      await dispatch(fetchKader());
      onSuccess?.();
      onEditDone?.();
    } catch (err) {
      toast.error('Gagal menyimpan data kader');
      console.error(err);
    } finally {
      setLoading(false); // selesai loading
      setNama('');
      setNik('');
      setNoHp('');
      setAlamat('');
    }
  };

  return (
    <div className="mb-6 p-4 bg-white shadow-md rounded-xl border">
      <h4 className="text-xl font-semibold mb-4">
        {selectedKader ? 'Edit Kader' : 'Tambah Kader'}
      </h4>

      <div className="flex flex-wrap items-end gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Nama</label>
          <input
            className="border px-3 py-2 rounded-md w-48 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            placeholder="Contoh: Siti Aminah"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">NIK</label>
          <input
            className="border px-3 py-2 rounded-md w-48 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            placeholder="Contoh: 32101xxxxx"
            value={nik}
            maxLength={16}
            onChange={(e) => setNik(e.target.value.replace(/\D/g, ''))}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">No HP</label>
          <input
            className="border px-3 py-2 rounded-md w-40 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            placeholder="Contoh: 081xxx"
            value={noHp}
            maxLength={13}
            onChange={(e) => setNoHp(e.target.value.replace(/\D/g, ''))}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Alamat</label>
          <textarea
            className="border px-3 py-2 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            placeholder="Contoh: Jl. M.T. Haryono"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            rows={1}
          />
        </div>

        <button
          onClick={handleSubmit}
          type="button"
          disabled={loading}
          className={`inline-flex items-center gap-2 ${
            loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
          } text-white font-semibold text-sm px-5 py-2 rounded-md shadow-sm transition duration-150 ease-in-out`}
        >
          <Save className="w-4 h-4" />
          {loading ? (selectedKader ? 'Mengupdate...' : 'Menyimpan...') : selectedKader ? 'Update' : 'Simpan'}
        </button>
      </div>
    </div>
  );
}
