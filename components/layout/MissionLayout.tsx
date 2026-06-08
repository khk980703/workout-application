import { ReactNode } from 'react'
import BottomNavbar from './BottomNavbar'
import TopNavbar from './TopNavbar'

interface MissionLayoutProps {
  children: ReactNode
}

export default function MissionLayout({ children }: MissionLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <TopNavbar>
        <div className="flex w-full items-center justify-between">
          <div>Mission</div>
          <div>Badge</div>
        </div>
      </TopNavbar>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-6">
        {children}
      </main>

      <BottomNavbar />
    </div>
  )
}
