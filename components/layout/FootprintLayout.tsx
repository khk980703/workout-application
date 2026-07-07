import { ReactNode } from 'react'
import BottomNavbar from './BottomNavbar'
import TopNavbar from './TopNavbar'
import SettingsModal from './SettingsModal'

interface FootprintLayoutProps {
  children: ReactNode
}

export default function FootprintLayout({ children }: FootprintLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <TopNavbar>
        <div className="flex w-full items-center justify-between">
          <div>Status</div>
          <SettingsModal />
        </div>
      </TopNavbar>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-6">
        {children}
      </main>

      <BottomNavbar />
    </div>
  )
}

// change Setting with a button that opens a modal with a form that has sign out option
