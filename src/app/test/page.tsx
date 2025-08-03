// src/app/test/page.tsx
'use client';

import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function TestPage() {
  const [status, setStatus] = useState('Checking...');

  useEffect(() => {
    async function checkConnection() {
      try {
        const { data, error } = await supabase.from('users').select('*').limit(1);
        if (error) {
          console.error(error);
          setStatus('Supabase connection failed.');
        } else {
          setStatus('Supabase connected successfully!');
        }
      } catch (err) {
        console.error(err);
        setStatus('Connection check failed.');
      }
    }

    checkConnection();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Test Supabase Connection</h1>
      <p>{status}</p>
    </div>
  );
}
