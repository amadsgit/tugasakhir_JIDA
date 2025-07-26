// components/navbar-links.tsx
import {
  HomeIcon,
  UserGroupIcon,
  UserIcon,
  ChartBarIcon,
  ClipboardDocumentIcon,
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  IdentificationIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export type NavLink = {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const flatMenu: NavLink[] = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },

  // Admin
  { name: 'Manajemen Posyandu & Kader', href: '/dashboard/manajemen-posyandu/wilayah-kerja', icon: UserGroupIcon },
  // { name: 'Statistik Posyandu', href: '#', icon: ChartBarIcon },
  // { name: 'Statistik Posyandu', href: '/dashboard/statistik', icon: ChartBarIcon },
  { name: 'Manajemen Akun', href: '/dashboard/manajemen-akun/role', icon: UserIcon },

  // Kader / Nakes
  // { name: 'Input Data Balita', href: '/dashboard/input/balita', icon: ClipboardDocumentIcon },
  // { name: 'Input Jadwal Imunisasi', href: '/dashboard/jadwal', icon: CalendarDaysIcon },
  // { name: 'Rekap Kehadiran Balita', href: '/dashboard/kehadiran', icon: ClipboardDocumentListIcon },
  // { name: 'Status Gizi Balita', href: '/dashboard/status-gizi', icon: IdentificationIcon },
  // { name: 'Input Data Ibu Hamil', href: '/dashboard/input/ibu-hamil', icon: DocumentTextIcon },
  // { name: 'Pemantauan Kehamilan', href: '/dashboard/pemantauan-kehamilan', icon: ClipboardDocumentIcon },

  // Orang Tua
  // { name: 'Catatan Balita & Bumil', href: '/dashboard/catatan-anak', icon: ClipboardDocumentListIcon },
  // { name: 'Jadwal Kunjungan Posyandu', href: '/dashboard/jadwal-kunjungan', icon: CalendarDaysIcon },
];

export const menuGroups = [
  {
    title: '👤 Admin Puskesmas',
    items: flatMenu.slice(1, 4),
  },
  {
    title: '👩‍⚕️ Kader Posyandu',
    items: flatMenu.slice(4, 10),
  },
  {
    title: '👩 Orang Tua Balita / Bumil',
    items: flatMenu.slice(10, 12),
  },
];
