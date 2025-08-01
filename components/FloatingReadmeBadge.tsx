'use client'

import { useState } from 'react';

export default function FloatingReadmeBadge() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white px-4 py-2 text-sm rounded-full shadow-lg shadow-white/30 backdrop-blur-sm ring-1 ring-white/20 hover:bg-blue-700 hover:shadow-white/60 transition duration-300"
        >
        📘 Info Aplikasi
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
          <div className="bg-white max-w-3xl w-full rounded-xl overflow-y-auto max-h-[90vh] p-6 shadow-2xl relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={() => setOpen(false)}
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4">📘 Tentang Aplikasi e-Posyandu Care</h2>
            <div className="prose max-w-none text-sm overflow-y-auto">
              <p><strong>e-Posyandu Care</strong> adalah aplikasi digital untuk mendukung kegiatan Posyandu berbasis Next.js dan PostgreSQL.</p>

              <p className="mt-2">Login untuk Admin & Kader yg sudah terdaftar:</p>
              <span className="font-bold">Admin: <br />
              email : mdahmadline@gmail.com <br />
              pass  : password123
              </span> <br />
              <span className="font-bold">Kader: <br />
              email : ahmadpramesta@gmail.com <br />
              pass  : password123
              </span>


              <p className="mt-2">Fitur yang sudah terbangun:</p>
              <ul className="list-disc ml-6">
                <li>✔ CRUD Kelurahan</li>
                <li>✔ CRUD Posyandu + Chart & GIS Posyandu</li>
                <li>✔ CRUD Kader (dengan Redux)</li>
                <li>✔ CRUD Role</li>
                <li>✔ Login dan Register dengan OTP</li>
                <li>✔ Middleware route & role-based access</li>
              </ul>

              <p className="mt-2">Dibangun menggunakan:</p>
              <ul className="list-disc ml-6">
                <li>Next.js 15.4.1</li>
                <li>Tailwind UI</li>
                <li>NextAuth.js, zod, bcryptjs</li>
                <li>Redux Toolkit</li>
                <li>Prisma + PostgreSQL (Neon)</li>
              </ul>

              <p className="mt-2">Dibuat oleh: Mamad Ahmad</p>

              <p className="mt-4">🔗 <a href="https://tugasakhir-jida.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Lihat aplikasi di Vercel</a></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
