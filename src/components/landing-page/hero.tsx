'use client'
import Image from 'next/image'
import background from '@/public/herobg.png'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'   
import { motion } from 'framer-motion'
import Devices from 'public/heropic.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Hero() {
  return (
      <section className='container flex w-full flex-col items-center gap-1'>
        <div className='flex flex-col h-[600px] max-w-[1200px] items-center sm:flex-row'>
          <div className='flex flex-col w-[600px] items-center gap-4 justify-evenly'>
            <h1 className='max-w-[400px] text-4xl font-bold'>
              Elevate Your Business with a Modern Website
            </h1>
            <h2 className='max-w-[400px] text-xl font-medium'>
              An outdated website can stall your business. Don't let your competitors outshine you online. Stay ahead.
            </h2>
            <div className='flex flex-col gap-4'>
              <motion.div whileHover={{ scale: 1.1, transition: { duration: 1 }}} whileTap={{ scale: 0.8, transition: { duration: 1 } }} >
                <Link href={siteConfig.mainNav[2].href} className={`w-[400px] ${buttonVariants({variant: 'secondary'})}`}>
                  Book a Free Consultation →
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, transition: { duration: 1 }}} whileTap={{ scale: 0.8, transition: { duration: 1 } }} >
                <Link href={siteConfig.mainNav[2].href} className={`w-[400px] ${buttonVariants({variant: 'thirdary'})}`}>
                  Learn About Our Process →
                </Link>
              </motion.div>
            </div>
          </div>
          <Devices className='flex h-auto w-[600px]'/>
        </div>
        <svg className='flex animate-bounce' xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <circle cx='12' cy='12' r='10'/>
          <path d='m16 10-4 4-4-4'/>
        </svg>
      </section>
  )
}
