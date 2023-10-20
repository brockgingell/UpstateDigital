'use client'
import Image from 'next/image'
import background from '@/public/herobg.png'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'   
import { motion } from 'framer-motion'
import Devices from 'public/herofinal.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Hero() {
  return (
      <section className='container mt-8 flex w-screen flex-col items-center self-center justify-center'>
        <div className='flex flex-col max-w-[1200px] items-center justify-center lg:flex-row'>
          <div className='flex flex-col w-[300px] sm:w-[600px] items-center gap-3 justify-evenly'>
            <h1 className='max-w-[400px] text-3xl text-center font-bold'>
              Elevate Your Business with a Modern Website
            </h1>
            <h2 className='max-w-[400px] text-xl text-center text-muted-foreground font-medium'>
              Don't let your outdated website hold your business back any longer. Stay ahead.
            </h2>
            <div className='mt-2 flex flex-col w-full items-center gap-3'>
              <motion.div whileHover={{ scale: 1.1, transition: { duration: 1 }}} whileTap={{ scale: 0.8, transition: { duration: 1 } }} >
                <Link href={siteConfig.mainNav[2].href} className={`w-full px-8 max-w-[400px] ${buttonVariants({variant: 'secondary'})}`}>
                  Book a Free Consultation →
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, transition: { duration: 1 }}} whileTap={{ scale: 0.8, transition: { duration: 1 } }} >
                <Link href={siteConfig.mainNav[2].href} className={`w-full px-8 max-w-[400px] ${buttonVariants({variant: 'thirdary'})}`}>
                  Learn About Our Process →
                </Link>
              </motion.div>
            </div>
          </div>
          <Devices className='flex h-auto w-[300px] sm:w-[600px]'/>
        </div>
        <svg className='flex animate-bounce' xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <circle cx='12' cy='12' r='10'/>
          <path d='m16 10-4 4-4-4'/>
        </svg>
      </section>
  )
}
