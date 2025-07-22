'use client';

import { MailIcon, LockIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-green-600 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 space-y-6">
        <div className="text-center">
          <img src="/logo3.png" alt="Logo Posyandu" className="h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Login e-Posyandu</h2>
          <p className="text-sm text-gray-500">Silahkan masuk menggunakan email dan password</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
            <MailIcon className="w-5 h-5 absolute top-3 left-3 text-gray-400" />
          </div>

          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
            <LockIcon className="w-5 h-5 absolute top-3 left-3 text-gray-400" />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-1 rounded-md hover:bg-teal-700 transition shadow-md font-semibold"
          >
            Login
          </button>

          <div className="text-center text-sm text-gray-600">
            <Link href="/forgot-password" className="hover:underline">
              Lupa password?
            </Link>
          </div>
        </form>

        <div className="text-center text-sm text-gray-500">
          Belum punya akun?{' '}
          <Link href="/auth/register" className="text-teal-600 hover:underline">
            Daftar sekarang
          </Link><br />
          <Link href="/" className="text-teal-600 hover:underline">
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
}
