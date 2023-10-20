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
    <header className='h-[88px] w-full p-4'> {isMenuOpen ? 
      <section className='flex items-center justify-between border-b-2'>
        <NavTitle />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <XIcon className="h-8 w-8 p-[1px]"/>
        </button>
    </section>
      :
    <section className='flex justify-between items-center border-b-2 pb-1'>
      <NavTitle />
      <NavLinks />
      <div className='flex items-center'>
        <NavButtons />
        <Button className='md:hidden' variant="outline" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuIcon size={36} strokeWidth={2.5}/>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </section>
      }
    </header>
  )
}
export default NavBar