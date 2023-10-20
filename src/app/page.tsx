import Hero from '@/components/landing-page/hero'
import WhyUs from '@/components/landing-page/why-us'
import Reasons from '@/components/landing-page/reasons'

export default function Home() {
  return (
    <main className='flex flex-col items-center isolate w-screen gap-8 p-0'>
      <Hero />
      <WhyUs />
      <Reasons />
    </main>
  )
}