'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import ButtonSimpan from '@/components/button-simpan';
import ButtonBatal from '@/components/button-batal';

const enumOptions = [
  'PARIPURNA',
  'PRATAMA',
  'MADYA',
  'PURNAMA',
  'MANDIRI',
  'BELUM_AKREDITASI',
];

type Kelurahan = {
  id: number;
  nama: string;
};

export default function Page() {
  const router = useRouter();
  const namaRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (namaRef.current) {
      namaRef.current.focus();
    }
  }, []);

  const [formData, setFormData] = useState({
    nama: '',
    alamat: '',
    wilayah: '',
    kelurahanId: '',
    penanggungJawab: '',
    noHp: '',
    akreditasi: '',
    longitude: '',
    latitude: '',
  });

  const [kelurahanList, setKelurahanList] = useState<Kelurahan[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch kelurahan
  useEffect(() => {
    const fetchKelurahan = async () => {
      try {
        const res = await fetch('/api/wilayah-kerja');
        if (!res.ok) throw new Error('Gagal ambil kelurahan');
        const data = await res.json();
        setKelurahanList(data);
      } catch (err) {
        console.error(err);
        toast.error('Gagal memuat data kelurahan!');
      }
    };

    fetchKelurahan();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isEmpty = Object.values(formData).some((value) => value === '');
    if (isEmpty) {
      toast.error('Semua field wajib diisi!');
      return;
    }

    const longitude = parseFloat(formData.longitude);
    const latitude = parseFloat(formData.latitude);

    if (isNaN(longitude) || isNaN(latitude)) {
      toast.error('Longitude dan Latitude harus berupa angka.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/posyandu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          longitude,
          latitude,
        }),
      });

      if (!res.ok) throw new Error('Gagal menyimpan data');

      toast.success('Berhasil menambahkan data Posyandu!');
      router.push('/dashboard/manajemen-posyandu');
    } catch (err) {
      console.error(err);
      toast.error('Terjadi kesalahan saat menyimpan data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-3 py-6">
      <div className="max-w-4xl mx-auto">
        <div className="p-6 border bg-white shadow-md rounded-xl">
          <h1 className="text-2xl font-bold mb-8">
            Tambah <span className="">Data Posyandu</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-8">
              {/* --- Nama Posyandu --- */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Nama Posyandu
                </label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Contoh: Posyandu Melati"
                  ref={namaRef}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                />
              </div>

              {/* --- Alamat & Wilayah --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Alamat</label>
                  <input
                    type="text"
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleChange}
                    placeholder="Contoh: Jl. Mawar No. 10"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Wilayah</label>
                  <input
                    type="text"
                    name="wilayah"
                    value={formData.wilayah}
                    onChange={handleChange}
                    placeholder="Contoh: RW 01"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  />
                </div>
              </div>

              {/* --- Penanggung Jawab & No HP --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Penanggung Jawab</label>
                  <input
                    type="text"
                    name="penanggungJawab"
                    value={formData.penanggungJawab}
                    onChange={handleChange}
                    placeholder="Contoh: Aisyah"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">No. HP</label>
                  <input
                    type="tel"
                    name="noHp"
                    value={formData.noHp}
                    onChange={handleChange}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  />
                </div>
              </div>

              {/* --- Koordinat Lokasi --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Longitude</label>
                  <input
                    type="text"
                    name="longitude"
                    value={formData.longitude}
                    onChange={handleChange}
                    placeholder="Contoh: 107.619123"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Latitude</label>
                  <input
                    type="text"
                    name="latitude"
                    value={formData.latitude}
                    onChange={handleChange}
                    placeholder="Contoh: -6.903449"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  />
                </div>
              </div>

              {/* --- Kelurahan & Akreditasi --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Kelurahan</label>
                  <select
                    name="kelurahanId"
                    value={formData.kelurahanId}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  >
                    <option value="">-- Pilih Kelurahan --</option>
                    {kelurahanList.map((k) => (
                      <option key={k.id} value={k.id}>
                        {k.nama}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Akreditasi</label>
                  <select
                    name="akreditasi"
                    value={formData.akreditasi}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  >
                    <option value="">-- Pilih Akreditasi --</option>
                    {enumOptions.map((value) => (
                      <option key={value} value={value}>
                        {value.replace(/([A-Z])/g, ' $1').trim()}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* --- Tombol Aksi --- */}
              <div className="flex justify-end gap-3 pt-8">
                <ButtonBatal onClick={() => router.back()} />
                <ButtonSimpan loading={loading} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
