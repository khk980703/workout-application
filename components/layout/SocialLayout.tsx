import { ReactNode } from 'react'
import BottomNavbar from './BottomNavbar'
import TopNavbar from './TopNavbar'

interface SocialLayoutProps {
  children: ReactNode
}

export default function SocialLayout({ children }: SocialLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-6">
        {children}
      </main>

      <BottomNavbar />
    </div>
  )
}
