'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function TopNavbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-6">
        <h1 className="text-xl font-bold">
          <Link
            key={'main'}
            href={'/'}
            className={`font-medium transition ${
              pathname === '/' ? 'text-blue-600' : 'text-slate-500'
            }`}
          >
            {'Charlie'}
          </Link>
        </h1>
      </div>
    </header>
  )
}
