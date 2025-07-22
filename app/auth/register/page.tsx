'use client';

import { useState } from 'react';
import { UserIcon, MailIcon, PhoneIcon, CalendarIcon, HomeIcon, FingerprintIcon, LockIcon } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    noHp: '',
    nik: '',
    alamat: '',
    tanggalLahir: '',
    jenis: 'ibu_balita',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // rencana selanjutnya: Kirim ke API backend (dengan validasi + OTP email)
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
          {/* Nama */}
          <InputField icon={<UserIcon className="w-5 h-5 text-gray-400" />} name="nama" placeholder="Nama Lengkap" value={form.nama} onChange={handleChange} />

          {/* Email */}
          <InputField icon={<MailIcon className="w-5 h-5 text-gray-400" />} name="email" type="email" placeholder="Email aktif" value={form.email} onChange={handleChange} />

          {/* No HP */}
          <InputField icon={<PhoneIcon className="w-5 h-5 text-gray-400" />} name="noHp" placeholder="Nomor HP" value={form.noHp} onChange={handleChange} />

          {/* NIK */}
          <InputField icon={<FingerprintIcon className="w-5 h-5 text-gray-400" />} name="nik" placeholder="NIK" value={form.nik} onChange={handleChange} />

          {/* Alamat */}
          <InputField icon={<HomeIcon className="w-5 h-5 text-gray-400" />} name="alamat" placeholder="Alamat Lengkap" value={form.alamat} onChange={handleChange} />

          {/* Tanggal Lahir */}
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


          {/* Jenis Pendaftaran */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Pendaftaran</label>
            <select
              name="jenis"
              value={form.jenis}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-teal-500"
            >
              <option value="ibu_balita">Ibu Balita</option>
              <option value="ibu_hamil">Ibu Hamil</option>
            </select>
          </div>

          {/* Password */}
          <InputField icon={<LockIcon className="w-5 h-5 text-gray-400" />} name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />

          {/* Confirm Password */}
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
