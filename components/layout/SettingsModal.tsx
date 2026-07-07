'use client'

import { useState } from 'react'
import { signout } from '@/app/login/actions'

export default function SettingsModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded border px-3 py-2 hover:bg-slate-100"
      >
        Settings
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          role="dialog"
          aria-modal="true"
          aria-labelledby="settings-title"
        >
          <div className="w-80 rounded-lg bg-white p-5 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 id="settings-title" className="text-lg font-semibold">
                Settings
              </h2>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close settings"
                className="text-xl"
              >
                x
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <button className="rounded border p-2 text-left">Profile</button>

              <form action={signout}>
                <button
                  type="submit"
                  className="w-full rounded bg-red-600 p-2 text-white"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
