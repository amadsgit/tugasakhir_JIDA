'use client';

import {
  BellIcon,
  UserCircleIcon,
  PowerIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';


export default function TopNavbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  const showLogoutConfirm = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="bg-white p-6 rounded-md shadow-md border w-[350px] text-center">
            <h2 className="text-xl font-semibold mb-2">Konfirmasi Logout</h2>
            <p className="text-gray-600 mb-4">Apakah Anda yakin ingin keluar?</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-white border rounded hover:bg-gray-200 transition"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  handleLogout();
                  onClose();
                }}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Ya
              </button>
            </div>
          </div>
        );
      },
    });
  };

  const handleLogout = async () => {
    // Mencegah banyak klik
    const button = document.activeElement as HTMLButtonElement;
    if (button) {
      button.disabled = true;
    }

    try {
      if (typeof window !== 'undefined') {
        localStorage.clear();
        sessionStorage.clear();
      }

      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // memastikan permintaan selesai bahkan jika halaman di unload
        keepalive: true,
      });
      
      window.location.replace('/auth/login');
    } catch (error) {
      console.error('Logout error:', error);
      
      window.location.replace('/auth/login');
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }

      if (
        notifRef.current &&
        !notifRef.current.contains(event.target as Node)
      ) {
        setIsNotifOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-gradient-to-br from-emerald-400 to-emerald-500 shadow px-4 py-3 flex justify-between items-center z-50">
      {/* Judul kiri */}
      <h1 className="text-lg font-semibold text-white">Dashboard</h1>

      {/* Kanan: Notifikasi & Profil */}
      <div className="flex items-center space-x-4">
        {/* Notifikasi */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            className="relative text-gray-600 hover:text-emerald-600 transition"
          >
            <BellIcon className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>

          {isNotifOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border rounded-md shadow-lg z-50 overflow-hidden">
              <div className="px-4 py-2 font-semibold text-gray-700 border-b bg-gray-50">
                Notifikasi Terbaru
              </div>
              <ul className="text-sm text-gray-700 max-h-60 overflow-y-auto">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  💉 Jadwal imunisasi besok pukul 08:00
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  🔔 Kegiatan Posyandu minggu depan
                </li>
              </ul>
              <div className="text-right px-4 py-2 text-xs text-blue-500 hover:underline cursor-pointer">
                Lihat semua notifikasi
              </div>
            </div>
          )}
        </div>

        {/* Profil */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <Image
              src="/favicon.ico"
              alt="User Avatar"
              width={32}
              height={32}
              className="rounded-full border"
            />
            <span className="hidden md:block text-sm font-medium text-white font-bold">
              Administrator
            </span>
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50 overflow-hidden">
              <Link
                href="/dashboard/profile"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <UserCircleIcon className="w-5 h-5 text-blue-500" />
                Profil
              </Link>
              <button
                onClick={showLogoutConfirm}
                className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <PowerIcon className="w-5 h-5 text-red-500" />
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
