'use client';

import { useParams } from 'next/navigation';
import FormKader from './FormKader';
import ListKader from './ListKader';
import Link from 'next/link';
import ButtonKembali from '@/components/button-kembali';
import { useState } from 'react';

export default function PageKader() {
  const params = useParams(); 
  const posyanduId = Number(params.id);

  const [selectedKader, setSelectedKader] = useState(null);

  const handleEdit = (kader: any) => {
    setSelectedKader(kader);
  };

  const handleSuccess = () => {
    setSelectedKader(null); // reset setelah simpan
  };

  return (
    <div className="p-6">
      <div className="flex mb-3 items-center justify-between">
        <h2 className="text-2xl font-bold mb-4">Manajemen Kader Posyandu</h2>
        <Link href="/dashboard/manajemen-posyandu">
          <ButtonKembali />
        </Link>
      </div>

      <FormKader
        posyanduId={posyanduId}
        selectedKader={selectedKader}
        onSuccess={handleSuccess}
      />

      <ListKader
        posyanduId={posyanduId}
        onEdit={handleEdit} // kirim ke ListKader
      />
    </div>
  );
}
