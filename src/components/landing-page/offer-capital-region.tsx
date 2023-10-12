'use client'
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const benefits = [
  'Local SEO',
  'Increased visibility',
  'Targeted marketing',
  'Improved customer engagement',
  'Data-driven insights',
  '24/7 support',
]

export default function OfferCapitalRegion() {
  return (
    <section className="container mx-auto mt-10 flex max-w-7xl flex-col gap-y-5 overflow-hidden rounded-md px-6 py-16 ring-1 ring-thirdary dark:ring-white/40">
            <Image
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
              width={800}
              height={533}
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Local Web Expertise in the Capital Region</h2>
              <p className="mt-6 text-lg leading-8">
              At Upstate Digital Solutions, we’re not just any web developers—we&apos;re your neighbors. We understand the local culture, the market trends, and most importantly, the unique challenges and opportunities businesses face here.
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>

            </div>
        <div
          className="absolute inset-x-0 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          /> 
        </div>
    </section>
  )
}