import { siteConfig } from "@/config/site"
import Link from 'next/link'
import { Icons } from "@/components/ui/icons"
import { ThemeToggle } from '@/components/navbar/theme-toggle'
import { Button } from '@/components/ui/button'


const NavButtons = () => {
  return (
    <div className='flex items-center'>
      <ThemeToggle />
    </div>
  )
}
export default NavButtons