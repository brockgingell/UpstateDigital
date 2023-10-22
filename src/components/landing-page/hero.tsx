'use client'
import Image from 'next/image'
import background from '/public/herobg.png'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'   
import { motion } from 'framer-motion'
import Heropic from '/public/herofinal.svg'

export default function Hero() {
  return (
      <section className='container mt-12 flex w-screen flex-col items-center self-center justify-center gap-2 md:gap-3 xl:gap-10'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-3 md:justify-around lg:gap-16 2xl:gap-32'>
          <div className='flex flex-col w-[300px] mobilemd:w-[360px] tablet:w-[500px] xs:w-[500px] md:w-[460px] xl:w-[560px] md:justify-between items-center gap-2 xl:gap-6'>
            <h1 className=' text-3xl mobilemd:text-4xl xl:text-6xl xl:leading-[70px] text-center md:text-left font-bold'>
              Elevate Your Business with a Modern Website
            </h1>
            <h2 className='text-xl xs:2xl xl:text-3xl text-center xl:leading-[45px] md:text-left text-muted-foreground font-medium'>
              Don't let your outdated website hold your business back any longer. Stay ahead.
            </h2>
            <div className='mt-4  flex flex-col items-center w-full md:items-stretch gap-3 xl:gap-5'>
              <motion.div whileHover={{ scale: 1.1, transition: { duration: 1 }}} whileTap={{ scale: 0.8, transition: { duration: 1 } }} >
                <Link href={siteConfig.mainNav[2].href} className={`w-full max-w-[460px] xl:max-w-[560px] px-8 ${buttonVariants({variant: 'secondary'})}`}>
                  Book a Free Consultation →
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, transition: { duration: 1 }}} whileTap={{ scale: 0.8, transition: { duration: 1 } }} >
                <Link href={siteConfig.mainNav[2].href} className={`w-full max-w-[460px] xl:max-w-[560px] px-8  ${buttonVariants({variant: 'thirdary'})}`}>
                  Learn About Our Process →
                </Link>
              </motion.div>
            </div>
          </div>
          <Heropic className='flex h-auto w-[280px] xs:w-[360px] md:w-[420px] xl:w-[560px]'/>
        </div>
        <svg className='flex animate-bounce' xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <circle cx='12' cy='12' r='10'/>
          <path d='m16 10-4 4-4-4'/>
        </svg>
      </section>
  )
}
