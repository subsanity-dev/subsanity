'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', href: '/' },
  { name: 'Licenses', href: '/licenses' },
  { name: 'Compliance', href: '/compliance' },
  { name: 'Settings', href: '/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col min-h-screen">
      <div className="p-6 font-bold text-xl border-b border-gray-700">
        PestComply
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`block px-4 py-2 rounded hover:bg-gray-700 ${
              pathname === item.href ? 'bg-gray-700' : ''
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
