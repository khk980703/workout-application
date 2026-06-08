import DashboardLayout from '../components/layout/DashboardLayout'
import Image from 'next/image'

export default function Home() {
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
