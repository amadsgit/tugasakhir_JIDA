// components/side-navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { MenuIcon, XIcon, ChevronDown, ChevronRight } from 'lucide-react';

import { flatMenu, menuGroups } from './navbar-links';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [openGroups, setOpenGroups] = useState<{ [key: string]: boolean }>({});

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const renderIcon = (Icon: any) => <Icon className="w-5 h-5" />;

  return (
    <>
      {/* Mobile Topbar */}
      <div className="md:hidden bg-gray-100 text-emerald-800 p-4 flex justify-between items-center">
        <span className="font-bold text-emerald-800 text-lg">E‑Posyandu Care</span>
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
          {/* Menu Home */}
          {(() => {
            const Icon = flatMenu[0].icon;
            const isActive = pathname === flatMenu[0].href;

            return (
              <Link
                href={flatMenu[0].href}
                className={clsx(
                  'flex items-center gap-2 rounded-md px-1 py-2 font-medium hover:bg-sky-100 hover:text-blue-600 mt-1',
                  isActive && 'bg-sky-100 text-blue-500'
                )}
              >
                {renderIcon(Icon)}
                <span>{flatMenu[0].name}</span>
              </Link>
            );
          })()}

          {/* Menu Groups */}
          {menuGroups.map((group) => (
            <div key={group.title}>
              <button
                onClick={() => toggleGroup(group.title)}
                className="w-full flex justify-between items-center text-left text-sm font-semibold text-gray-500 hover:text-blue-600 py-2"
              >
                <span>{group.title}</span>
                {openGroups[group.title] ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>

              {openGroups[group.title] && (
                <div className="ml-2 space-y-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          'flex items-center space-x-2 px-3 py-3 gap-2 rounded hover:text-blue-600 hover:bg-sky-100 text-sm',
                          isActive && 'bg-sky-100 text-blue-500'
                        )}
                      >
                        {renderIcon(Icon)}
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
