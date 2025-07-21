'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import toast from 'react-hot-toast';
import ButtonUpdate from '@/components/button-update';
import ButtonBatal from '@/components/button-batal';

const enumOptions = [
  'Paripurna',
  'Pratama',
  'Madya',
  'Purnama',
  'Mandiri',
  'Belum_akreditasi',
];

export default function EditPosyanduPage() {
  const router = useRouter();
  const { id } = useParams();
  const namaRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    nama: '',
    alamat: '',
    wilayah: '',
    kelurahan: '',
    penanggungJawab: '',
    noHp: '',
    akreditasi: '',
    longitude: '',
    lattitude: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/posyandu/${id}`);
        if (!res.ok) throw new Error('Gagal mengambil data');

        const data = await res.json();
        setFormData({
          nama: data.nama || '',
          alamat: data.alamat || '',
          wilayah: data.wilayah || '',
          kelurahan: data.kelurahan || '',
          penanggungJawab: data.penanggungJawab || '',
          noHp: data.noHp || '',
          akreditasi: data.akreditasi || '',
          longitude: data.longitude?.toString() || '',
          lattitude: data.lattitude?.toString() || '',
        });
      } catch (err) {
        console.error(err);
        toast.error('Gagal memuat data posyandu');
        router.push('/dashboard/manajemen-posyandu');
      }
    };

    if (typeof id === 'string') fetchData();
  }, [id, router]);

  useEffect(() => {
    if (namaRef.current) {
      namaRef.current.focus();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isEmpty = Object.values(formData).some((value) => !value);
    if (isEmpty) {
      toast.error('Semua field wajib diisi!');
      return;
    }

    const parsedLongitude = parseFloat(formData.longitude);
    const parsedLattitude = parseFloat(formData.lattitude);

    if (isNaN(parsedLongitude) || isNaN(parsedLattitude)) {
      toast.error('Longitude dan Lattitude harus berupa angka desimal.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/posyandu/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          longitude: parsedLongitude,
          lattitude: parsedLattitude,
        }),
      });

      if (!res.ok) throw new Error('Gagal mengupdate data');

      toast.success('Data berhasil diupdate!');
      router.push('/dashboard/manajemen-posyandu');
    } catch (err) {
      console.error(err);
      toast.error('Terjadi kesalahan saat mengupdate data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-3 py-6">
      <div className="max-w-4xl mx-auto">
        <div className="p-4 border bg-white shadow-md rounded-xl border">
          <h1 className="text-2xl font-bold mb-8">
            Edit <span className="">Data Posyandu</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              {[
                { label: 'Alamat', name: 'alamat', placeholder: 'Contoh: Jl. Mawar No. 10' },
                { label: 'Wilayah', name: 'wilayah', placeholder: 'Contoh: RW 01' },
                { label: 'Kelurahan', name: 'kelurahan', placeholder: 'Contoh: Pasirkareumbi' },
                { label: 'Penanggung Jawab', name: 'penanggungJawab', placeholder: 'Contoh: Aisyah' },
                { label: 'No. HP', name: 'noHp', placeholder: 'Contoh: 081234567890', type: 'tel' },
                { label: 'Longitude', name: 'longitude', placeholder: 'Contoh: 107.619123', type: 'text' },
                { label: 'Lattitude', name: 'lattitude', placeholder: 'Contoh: -6.903449', type: 'text' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type || 'text'}
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  />
                </div>
              ))}

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Akreditasi
                </label>
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

            <div className="flex justify-end gap-3 pt-8">
              <ButtonBatal onClick={() => router.back()} />
              <ButtonUpdate loading={loading} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
