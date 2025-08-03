// src/app/(app)/layout.tsx

import Sidebar from '@/components/Sidebar'
import '@/app/globals.css'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-6">{children}</main>
    </div>
  )
}
