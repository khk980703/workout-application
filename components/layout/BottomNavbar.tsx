'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    label: 'Shopping',
    href: '/shopping',
  },
  {
    label: 'Social',
    href: '/social',
  },
  {
    label: 'Dashboard',
    href: '/',
  },
  {
    label: 'Mission',
    href: '/mission',
  },
  {
    label: 'Footprint',
    href: '/footprint',
  },
]

export default function BottomNavbar() {
  const pathname = usePathname()

  return (
    <nav className="border-t bg-white">
      <div className="mx-auto flex max-w-7xl justify-around py-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`font-medium transition ${
              pathname === item.href ? 'text-blue-600' : 'text-slate-500'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
