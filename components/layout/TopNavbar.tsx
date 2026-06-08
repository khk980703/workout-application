import { ReactNode } from 'react'

interface TopNavbarProps {
  children: ReactNode
}

export default function TopNavbar({ children }: TopNavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-screen border-b bg-white">
      <div className="flex h-16 w-full items-center px-6">
        {children}
      </div>
    </header>
  )
}
