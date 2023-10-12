import {FC} from 'react' 
import Link from 'next/link'
import Image from 'next/image'
import Icon from '/public//Icon.svg'

const NavTitle = () => {
  return (
    <Link href="/" className='flex flex-row items-center gap-[3px]'>
      <Icon className='h-[72px] w-auto'/>
      <h1 className='font-bold leading-[24px] tracking-tighter text-2xl'>Upstate <br/> Digital <br /> Design </h1>
    </Link>
  )  
}
export default NavTitle