'use client'

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import OtpInput from '@/components/otp-input';
import { Loader2 } from "lucide-react";

export default function VerifyOtpPage() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [countdown, setCountdown] = useState(600);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  // Ambil email dari localStorage saat pertama render
  useEffect(() => {
    const savedEmail = localStorage.getItem('registerEmail');
    if (savedEmail) setEmail(savedEmail);
  }, []);


  const handleVerify = async () => {
    if (otp.length !== 6) {
      toast.error('Kode OTP harus terdiri dari 6 digit!');
      return;
    }

    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      setMessage(data.message);

      if (res.ok) {
        localStorage.removeItem('registerEmail');
        toast.success('Selamat, Akun berhasil diverifikasi. silahkan login!');
        setTimeout(() => {
          router.push('/auth/login');
        }, 1500);
      }
    } catch (err) {
      toast.error('Gagal verifikasi. Coba lagi!');
    }
    setLoading(false);
  };


  const handleResendOtp = async () => {
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch('/api/auth/resend-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || 'Gagal kirim ulang OTP');
      } else {
        toast.success('OTP baru telah dikirim ke email!');
        setCountdown(600);
        setOtp('');
      }
    } catch (err) {
      toast.error('Terjadi kesalahan, coba lagi.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold text-emerald-500 text-center mb-4">Verifikasi OTP</h2>

      <div className="mb-3 text-sm text-center text-gray-600">
        Kode OTP dikirim ke: <strong>{email || '-'}</strong><br />
        Berlaku selama: <span className="text-red-500 font-semibold">{formatTime(countdown)} </span>
      </div>
      
      <OtpInput onChangeOtp={(val) => setOtp(val)} />
        
      {countdown > 0 ? (
        <button
          onClick={handleVerify}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full disabled:opacity-50"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Memverifikasi...</span>
            </>
          ) : (
            'Verifikasi'
          )}
        </button>
      ) : (
        <button
          onClick={handleResendOtp}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded w-full"
        >
          Kirim ulang OTP
        </button>
      )}

      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  );
}
