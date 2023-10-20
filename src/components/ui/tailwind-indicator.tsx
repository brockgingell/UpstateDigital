export function TailwindIndicator() {

  return (
    <div className="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
      <div className="block mobile:hidden">mini</div>
      <div className="hidden mobile:block mobilemd:hidden">mobile</div>
      <div className="hidden mobilemd:block mobilelg:hidden">m-md</div>
      <div className="hidden mobilelg:block tablet:hidden">m-lg</div>
      <div className="hidden tablet:block xs:hidden">tablet</div>
      <div className="hidden xs:block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  )
}