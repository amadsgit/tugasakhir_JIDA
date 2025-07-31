
import {
  HomeIcon,
  UserGroupIcon,
  UserIcon,
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

export const getFlatMenuByRole = (role: string): NavLink[] => {
  switch (role) {
    case 'admin':
      return [
        { name: 'Home', href: '/dashboard/admin', icon: HomeIcon },
        { name: 'Manajemen Posyandu & Kader', href: '/dashboard/admin/manajemen-posyandu/wilayah-kerja', icon: UserGroupIcon },
        { name: 'Manajemen Akun', href: '/dashboard/admin/manajemen-akun/role', icon: UserIcon },
      ];

    case 'kader':
      return [
        { name: 'Home', href: '/dashboard/kader', icon: HomeIcon },
        { name: 'Input Data Balita', href: '/dashboard/input/balita', icon: ClipboardDocumentIcon },
        { name: 'Input Jadwal Imunisasi', href: '/dashboard/jadwal', icon: CalendarDaysIcon },
        { name: 'Rekap Kehadiran Balita', href: '/dashboard/kehadiran', icon: ClipboardDocumentListIcon },
        { name: 'Status Gizi Balita', href: '/dashboard/status-gizi', icon: IdentificationIcon },
        { name: 'Input Data Ibu Hamil', href: '/dashboard/input/ibu-hamil', icon: DocumentTextIcon },
        { name: 'Pemantauan Kehamilan', href: '/dashboard/pemantauan-kehamilan', icon: ClipboardDocumentIcon },
      ];

    case 'ibu_hamil':
      return [
        { name: 'Home', href: `/dashboard/ibu-hamil`, icon: HomeIcon },
        { name: 'Catatan Ibu Hamil', href: '/dashboard/catatan-ibu-hamil', icon: ClipboardDocumentListIcon },
        { name: 'Jadwal Kunjungan Posyandu', href: '/dashboard/jadwal-kunjungan', icon: CalendarDaysIcon },
      ];

    case 'orang_tua_balita':
      return [
        { name: 'Home', href: `/dashboard/orang-tua-balita`, icon: HomeIcon },
        { name: 'Catatan Balita', href: '/dashboard/catatan-anak', icon: ClipboardDocumentListIcon },
        { name: 'Jadwal Kunjungan Posyandu', href: '/dashboard/jadwal-kunjungan', icon: CalendarDaysIcon },
      ];

    default:
      return [];
  }
};
