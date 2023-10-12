"use client"
import React from 'react'
import NavTitle from '@/components/navbar/navtitle'
import NavButtons from '@/components/navbar/nav-buttons'
import { NavLinks } from '@/components/ui/navlinks'
import { Button } from '@/components/ui/button'
import { MenuIcon, XIcon } from "lucide-react"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
    <header> {isMenuOpen ? 
      <section>
      <div className="fixed top-0 z-50 flex h-24 w-screen flex-row items-center justify-between border-b-2 bg-background  px-4">
        <div className="top-0 flex h-[72px] items-center md:h-20 xl:h-[88px]">
          <NavTitle />
        </div>
        <div className="absolute right-4 top-8" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <XIcon className="h-8 w-8 p-[1px]"/>
        </div>
      </div>
      <button className='relative top-20 z-40 flex h-screen justify-start bg-background xl:top-[88px]' onClick={() => setIsMenuOpen(false)}>
        <NavLinks />
      </button>
    </section>
      :
    <section className='top-0 flex h-24 p-2 w-screen items-center justify-between border-b-2 px-4 lg:px-8'>
      <NavTitle />
      <NavLinks />
      <div className='flex items-center'>
        <NavButtons />
        <Button className='md:hidden' variant="outline" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuIcon className="p-[2px]" size={36} strokeWidth={2.5}/>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </section>
      }
    </header>
  )
}
export default NavBar