'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

type License = {
  id: number;
  name: string;
  expiry_date: string;
};

export default function LicensesPage() {
  const [licenses, setLicenses] = useState<License[]>([]);

  useEffect(() => {
    const fetchLicenses = async () => {
      const { data, error } = await supabase.from('user_licenses').select('*');
      if (error) {
        console.error('Error fetching licenses:', error);
      } else {
        setLicenses(data);
      }
    };

    fetchLicenses();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Licenses</h1>
      {licenses.length === 0 ? (
        <p>No licenses found.</p>
      ) : (
        <ul className="space-y-2">
          {licenses.map((license) => (
            <li key={license.id} className="border p-4 rounded shadow">
              <p><strong>Name:</strong> {license.name}</p>
              <p><strong>Expiry Date:</strong> {license.expiry_date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
