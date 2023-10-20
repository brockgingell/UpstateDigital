import Designpic from 'public/designpic.svg'
import Seo from 'public/seopic.svg'
import Custom from 'public/custompic.svg'

export default function Reasons() {
  return (
    <div>
      <Designpic className='flex h-auto w-[280px] xs:w-[360px] md:w-[420px] xl:w-[560px]'/>
      <Seo className='flex h-auto w-[280px] xs:w-[360px] md:w-[420px] xl:w-[560px]'/>
      <Custom className='flex h-auto w-[280px] xs:w-[360px] md:w-[420px] xl:w-[560px]'/>
    </div>
  )
}