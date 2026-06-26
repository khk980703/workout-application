import DashboardLayout from '../components/layout/DashboardLayout'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    redirect('/login')
  }

  return (
    <DashboardLayout>
      <div className="flex flex-1 h-full flex-col items-center justify-between gap-4 p-6">
        <div className="flex flex-col items-center gap-4">
          <div>Calories burnt</div>
          <div>[ ____________________ ]</div>
          <Image
            src="/pixelstar.avif"
            alt="pixel star"
            width={30}
            height={30}
          />
        </div>
        <Image
          src="/babycharlie.jpeg"
          alt="Baby Charlie"
          width={500}
          height={100}
        />
        <div>Charlie is obese</div>
      </div>
    </DashboardLayout>
  )
}
