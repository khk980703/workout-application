import { ReactNode } from 'react'
import TopNavbar from './TopNavbar'
import BottomNavbar from './BottomNavbar'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <TopNavbar />

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-6">
        {children}
      </main>

      <BottomNavbar />
    </div>
  )
}
