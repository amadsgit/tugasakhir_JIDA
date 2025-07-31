'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { MenuIcon, XIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';

import { getFlatMenuByRole } from './navbar-links';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const role = session?.user?.role || 'guest';
  const flatMenu = getFlatMenuByRole(role);

  const renderIcon = (Icon: any) => <Icon className="w-5 h-5" />;

  return (
    <>
      {/* Mobile Topbar */}
      <div className="md:hidden bg-gray-100 text-emerald-800 p-4 flex justify-between items-center">
        <span className="font-bold text-teal-800 text-lg">E‑Posyandu Care</span>
        <button onClick={() => setOpen(!open)}>
          {open ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-white text-gray-500 w-64 fixed inset-y-0 left-0 transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative transition duration-200 z-50`}
      >
        <div className="p-4 font-bold text-xl text-emerald-700 border-b border-gray-100">
          E‑Posyandu Care
        </div>

        <nav className="px-2 py-2 space-y-2">
          {flatMenu.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'flex items-center gap-2 rounded-md px-1 py-2 font-medium hover:bg-teal-100 hover:text-teal-700 mt-1',
                  isActive && 'bg-teal-100 text-teal-700'
                )}
              >
                {renderIcon(Icon)}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
