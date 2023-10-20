import Hero from '@/components/landing-page/hero'
import WhyUs from '@/components/landing-page/why-us'

export default function Home() {
  return (
    <main className='flex flex-col items-center isolate w-screen gap-8 p-0'>
      <Hero />
      <WhyUs />
    </main>
  )
}