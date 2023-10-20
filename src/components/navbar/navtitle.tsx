import {FC} from 'react' 
import Link from 'next/link'
import Image from 'next/image'
import Icon from '/public/companyicon.svg'
import { fontMono } from '@/lib/fonts'

const NavTitle = () => {
  return (
    <section className={fontMono.className}>
      <Link href="/" className='flex flex-row items-center gap-1'>
        <Icon className='h-[69px] w-auto'/>
        <h1 className='font-semibold text-2xl leading-[26px]'>Upstate <br/> Digital <br /> Design </h1>
      </Link>
    </section>
  )  
}
export default NavTitle