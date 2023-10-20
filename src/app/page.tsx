import Hero from '@/components/landing-page/hero'
import WhyUs from '@/components/landing-page/why-us'

export default function Home() {
  return (
    <main className='container absolute flex flex-col isolate w-screen gap-8 p-0'>
      <Hero />
      <WhyUs />
    </main>
  )
}