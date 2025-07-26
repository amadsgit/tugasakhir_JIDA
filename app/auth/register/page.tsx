'use client';

import { useState, useEffect } from 'react';
import { UserIcon, MailIcon, PhoneIcon, CalendarIcon, HomeIcon, FingerprintIcon, CardSimIcon, LockIcon } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    noHp: '',
    noKK: '',
    nik: '',
    alamat: '',
    tanggalLahir: '',
    role: '',
    password: '',
    confirmPassword: '',
  });

  // get data role
  const [roleOptions, setRoleOptions] = useState<{ id: number; nama: string; slug:string }[]>([]);
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await fetch('/api/role');
        const data = await res.json();
        // Filter hanya role yang diizinkan
        const filtered = data.filter(
          (role: { slug: string }) =>
            role.slug === 'ibu_hamil' || role.slug === 'orang_tua_balita'
        );
        setRoleOptions(filtered);
      } catch (error) {
        console.error('Gagal memuat role:', error);
      }
    };

    fetchRoles();
  }, []);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert('Password dan konfirmasi tidak cocok');
      return;
    }

    const cleanedForm = {
      ...form,
      noHp: form.noHp.replace(/\D/g, ''),
      nik: form.nik.replace(/\D/g, ''),
      noKK: form.noKK?.replace(/\D/g, ''),
    };

    console.log('Form submitted:', cleanedForm);
    // Rencana kirim ke /api/auth/register
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-green-600 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-8 my-4 space-y-6">
        <div className="text-center">
          <img src="/logo3.png" alt="Logo" className="h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Daftar e-Posyandu</h2>
          <p className="text-sm text-gray-500">Untuk Ibu Hamil dan Ibu Balita</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField icon={<UserIcon className="w-5 h-5 text-gray-400" />} name="nama" placeholder="Nama Lengkap" value={form.nama} onChange={handleChange} />
          <InputField icon={<MailIcon className="w-5 h-5 text-gray-400" />} name="email" type="email" placeholder="Email aktif" value={form.email} onChange={handleChange} />
          <InputField icon={<PhoneIcon className="w-5 h-5 text-gray-400" />} name="noHp" placeholder="Nomor HP" value={form.noHp} onChange={handleChange} />
          <InputField icon={<CardSimIcon className="w-5 h-5 text-gray-400" />} name="noKK" placeholder="Nomor Kartu Keluarga" value={form.noKK} onChange={handleChange} />
          <InputField icon={<FingerprintIcon className="w-5 h-5 text-gray-400" />} name="nik" placeholder="NIK" value={form.nik} onChange={handleChange} />
          <InputField icon={<HomeIcon className="w-5 h-5 text-gray-400" />} name="alamat" placeholder="Alamat Lengkap" value={form.alamat} onChange={handleChange} />
          <div>
            <label htmlFor="tanggalLahir" className="block text-sm font-medium text-gray-700 mb-1">
                Tanggal Lahir
            </label>
            <div className="relative">
                <input
                name="tanggalLahir"
                id="tanggalLahir"
                type="date"
                value={form.tanggalLahir}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
                <CalendarIcon className="w-5 h-5 absolute top-2.5 left-3 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Pendaftaran</label>
            <select name="role" value={form.role} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-teal-500" >
              <option value="">Pilih jenis pendaftaran</option>
              {roleOptions.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.nama}
                </option>
              ))}
            </select>
          </div>
          <InputField icon={<LockIcon className="w-5 h-5 text-gray-400" />} name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
          <InputField icon={<LockIcon className="w-5 h-5 text-gray-400" />} name="confirmPassword" type="password" placeholder="Ulangi Password" value={form.confirmPassword} onChange={handleChange} />

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition font-semibold shadow"
          >
            Daftar
          </button>

          <div className="text-center text-sm text-gray-500">
            Sudah punya akun?{' '}
            <Link href="/auth/login" className="text-teal-600 hover:underline">
              Login di sini
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

// Komponen InputField
function InputField({
  icon,
  name,
  placeholder,
  value,
  onChange,
  type = 'text',
}: {
  icon: React.ReactNode;
  name: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
}) {
  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
      />
      <div className="absolute left-3 top-2.5">{icon}</div>
    </div>
  );
}
