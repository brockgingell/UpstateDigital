import { siteConfig } from "@/config/site"
import Link from 'next/link'
import { Icons } from "@/components/ui/icons"
import { ThemeToggle } from '@/components/navbar/theme-toggle'
import { Button } from '@/components/ui/button'


const NavButtons = () => {
  return (
    <div className='flex items-center'>
      <Button variant="outline" size="icon">
        <Link href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
          <Icons.instagram className='hidden h-9 w-9 stroke-2 p-1 md:flex lg:p-[2px]'/>
          <span className="sr-only">Instagram</span>
        </Link>
      </Button>
      <Button variant="outline" size="icon">
        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
          <Icons.twitter className='hidden h-9 w-9 stroke-2 p-1 md:ml-[3px] md:flex lg:p-[2px]'/>
          <span className="sr-only">Twitter</span>
        </Link>
      </Button>
      <ThemeToggle />
    </div>
  )
}
export default NavButtons