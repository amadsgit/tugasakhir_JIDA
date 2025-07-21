'use client';

import { useState } from 'react';
import { useAppDispatch } from '@/store';
import { addKader } from '@/store/kaderSlice';
import { Save } from 'lucide-react';

export default function FormKader({ posyanduId }: { posyanduId: number }) {
  const dispatch = useAppDispatch();

  const [nama, setNama] = useState('');
  const [nik, setNik] = useState('');
  const [noHp, setNoHp] = useState('');
  const [alamat, setAlamat] = useState('');

  const handleSubmit = () => {
    if (!nama || !nik || !noHp || !alamat) return;

    dispatch(
      addKader({
        nama,
        nik,
        noHp,
        alamat,
        posyanduId,
      })
    );

    // reset form
    setNama('');
    setNik('');
    setNoHp('');
    setAlamat('');
  };

  return (
    <div className="mb-6 p-4 bg-white shadow-md rounded-xl border">
      <h4 className="text-xl font-semibold mb-4">Tambah Kader</h4> 

      <div className="flex flex-wrap items-end gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Nama</label>
          <input
            className="border px-3 py-2 rounded-md w-48 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            placeholder="Nama Kader"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">NIK</label>
          <input
            className="border px-3 py-2 rounded-md w-48 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            placeholder="NIK"
            value={nik}
            maxLength={16}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ''); // hanya angka
              setNik(value);
            }}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">No HP</label>
          <input
            className="border px-3 py-2 rounded-md w-40 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            placeholder="081xxxxxxxxx"
            value={noHp}
            maxLength={13}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ''); // hanya angka
              setNoHp(value);
            }}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Alamat</label>
          <textarea
            className="border px-3 py-2 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            placeholder="Alamat"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            rows={1}
          />
        </div>

        <button
          onClick={handleSubmit}
          type="button"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-5 py-2 rounded-md shadow-sm transition duration-150 ease-in-out"
        >
          <Save className="w-4 h-4" />
          Simpan
        </button>
      </div>
    </div>
  );
}
