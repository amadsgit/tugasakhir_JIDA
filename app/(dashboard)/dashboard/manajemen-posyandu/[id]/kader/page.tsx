'use client';

import { useParams } from 'next/navigation';
import FormKader from './FormKader';
import ListKader from './ListKader';
import Link from 'next/link';
import ButtonKembali from '@/components/button-kembali';

export default function PageKader() {
  const params = useParams(); 
  const posyanduId = Number(params.id);

  return (
    <div className="p-6">
      <div className="flex mb-3 items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-4">Manajemen Kader Posyandu</h2>
        </div>
        <Link href="/dashboard/manajemen-posyandu">
          <ButtonKembali />
        </Link>
      </div>
      
      <FormKader posyanduId={posyanduId} />
      <ListKader posyanduId={posyanduId} />
    </div>
  );
}
