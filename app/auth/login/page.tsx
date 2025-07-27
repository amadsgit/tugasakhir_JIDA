'use client';

import { MailIcon, LockIcon, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


const verifyAuthAndRedirect = async (userRole: string) => {
  const roleRoutes: Record<string, string> = {
    administrator: '/dashboard/admin',
    kader: '/dashboard/kader',
    ibu_hamil: '/dashboard/ibu-hamil',
    orang_tua_balita: '/dashboard/orang-tua-balita',
  };

  try {
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const response = await fetch('/api/me', {
      method: 'GET',
      credentials: 'include', // Include cookies
    });

    if (response.ok) {
      const data = await response.json();
      if (data.user) {

        const targetRoute = roleRoutes[userRole] || '/dashboard';
        window.location.href = targetRoute;
        return;
      }
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    const retryResponse = await fetch('/api/me', {
      method: 'GET',
      credentials: 'include',
    });

    if (retryResponse.ok) {
      const retryData = await retryResponse.json();
      if (retryData.user) {
        const targetRoute = roleRoutes[userRole] || '/dashboard';
        window.location.href = targetRoute;
        return;
      }
    }

    toast.error('Terjadi masalah saat redirect. Silakan refresh halaman.');
  } catch (error) {
    console.error('Error verifying authentication:', error);
    toast.error('Terjadi masalah saat redirect. Silakan refresh halaman.');
  }
};

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<{ email?: string[]; password?: string[] }>({});
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (res.status === 400 && result.errors) {
        setLoading(false);
        return setErrors(result.errors);
      }

      if (res.status === 403 && result.unverified) {
        setLoading(false);
        toast.error('Akun belum diverifikasi, silakan masukkan OTP.');
        return router.push(`/auth/verify-otp?email=${encodeURIComponent(form.email)}`);
      }

      if (!res.ok) {
        setLoading(false);
        return toast.error(result.message || 'Login gagal!');
      }

      toast.success('login berhasil, selamat datang kembali!');
      
      await verifyAuthAndRedirect(result.user.role);
    } catch (error) {
      console.error(error);
      toast.error('Terjadi kesalahan saat login.');
      setLoading(false);
    }
  };


  // catatan 
  useEffect(() => {
    toast.custom((t) => (
      <div className="fixed top-4 left-2 z-20">
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-500 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  akun admin & kader
                </p>
                <p className="mt-1 text-sm text-gray-500">
                registrasi hanya untuk <span className="font-bold">akun ibu hamil dan orang tua balita.</span> <br />
                akun dgn <span className="font-bold">role administrator & kader</span> hanya dibuatkan oleh admin. akun sementara yang telah didaftarkan: <br /><br />
                 <span className="font-bold">administrator : email: mdahmadline@gmail.com<br /> pass: password123 <br/>
                  kader: email: ahmadpramesta@gmail.com<br /> pass: password123</span> 
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-teal-600 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    ));
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-green-600 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 space-y-6">
        <div className="text-center">
          <img src="/logo3.png" alt="Logo Posyandu" className="h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Login e-Posyandu</h2>
          <p className="text-sm text-gray-500">Silakan masuk menggunakan email dan password</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {[
            { name: 'email', type: 'email', icon: MailIcon, placeholder: 'Email' },
            { name: 'password', type: 'password', icon: LockIcon, placeholder: 'Password' },
          ].map(({ name, type, icon: Icon, placeholder }) => (
            <div key={name} className="relative">
              <input
                name={name}
                type={type}
                value={form[name as 'email' | 'password']}
                onChange={handleChange}
                placeholder={placeholder}
                required
                className={`w-full px-4 py-2 pl-10 border rounded-md focus:ring-2 focus:outline-none ${
                  errors[name as 'email' | 'password']
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-teal-500'
                }`}
              />
              <Icon className="w-5 h-5 absolute top-3 left-3 text-gray-400" />
              {errors[name as 'email' | 'password'] && (
                <p className="text-sm text-red-600 mt-1">{errors[name as 'email' | 'password']![0]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-1 rounded-md hover:bg-teal-700 transition shadow-md font-semibold flex justify-center items-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Login ... </span>
              </>
            ) : (
              'Login'
            )}
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
            Registrasi sekarang
          </Link>
          <br />
          <Link href="/" className="text-teal-600 hover:underline">
            kembali ke beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
