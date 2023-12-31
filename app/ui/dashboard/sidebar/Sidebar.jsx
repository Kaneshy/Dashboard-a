'use client'
import { leftsidebarPages, leftsidebarAnalytics, leftsidebarUser } from '@/constants/index.js'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { useState } from 'react'


const Sidebar = () => {

  const pathname = usePathname()
  // const { data: session } = useSession()
  // console.log(session)
  const [signOutBar, setsignOutBar] = useState(false)

  return (
    <section className="custom-scrollbar leftsidebar min-w-80 max-lg:min-w-0 ">
      {/* <section className='flex items-center '>
        <section className='p-1  w-full gap-x-6 flex justify-evenly items-center align-middle '>
          <div
            className=' flex items-center align-middle gap-x-3'
            onClick={() => setsignOutBar(!signOutBar)}
          >

            <div className='w-8 h-8 flex'>
              <img className='rounded-full object-contain ' width={30} height={30} src={session?.user.image} alt="" />
            </div>
            <div>
              <div className='max-xl:hidden'>{session?.user.name}</div>
              <div className='max-xl:hidden'>{session?.user.email}</div>
            </div>

            {signOutBar && (
              <section className='bg-neutral-900 z-50 gap-y-2 absolute flex flex-col  top-20 right-2 text-center text-small-semibold px-4 py-2 rounded-xl  w-28  '>
                <div
                  className='hover:scale-110 hover:bg-neutral-600 rounded-xl p-2 '
                  onClick={() => { signOut() }}
                >Sign Out</div>
              </section>
            )}
          </div>
        </section>
      </section> */}

      {/* 

      <div className="flex w-full  gap-3 px-6 mr-4 ">
        <Link
          href='/'
          className={`leftsidebar_link`}
        >
          <div className='flex w-14  '>
            <img
              src={session.user?.image}
              alt='jj'
              width={14}
              height={14}
              className='w-full rounded-full'
            />
          </div>

          <div className={`text-light-1 max-lg:hidden px-4 `}>
            <p>{session.user?.name}</p>
            <p>{session.user?.email}</p>
          </div>
        </Link>
      </div> */}


      <p className='px-6 py-2'>Pages</p>
      <div className="flex w-full flex-1 flex-col gap-3 px-6">
        {leftsidebarPages.map((link) => {
          const isActive = (pathname.includes(link.route) && link.route.length > 1)// || pathname === link.route
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className={`text-light-1 max-lg:hidden px-4 `}>{link.label}</p>
            </Link>
          )
        })}
      </div>
      <p className='px-6 py-2'>Analitics</p>
      <div className="flex w-full flex-1 flex-col gap-3 px-6">
        {leftsidebarAnalytics.map((link) => {
          const isActive = (pathname.includes(link.route) && link.route.length > 1)// || pathname === link.route
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className={`text-light-1 max-lg:hidden px-4 `}>{link.label}</p>
            </Link>
          )
        })}
      </div>
      {/* <div className="flex w-full pt-2 flex-1 flex-col gap-5 px-6 ">
        {leftsidebarAnalytics.map((link) => {
          const isActive = (pathname.includes(link.label) && link.route.length > 1)// || pathname === link.route

          return (
            <Link
              href={`${link.route}/${link.label}`}
              key={link.label}
              className={`leftsidebar_link  ${isActive && 'bg-primary-500'}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={34}
                height={34}
              />
              <p className={`text-light-1 max-lg:hidden px-4 `}>{link.label}</p>
            </Link>
          )
        })}
      </div> */}
      <p className='px-6 py-2'>User</p>
      <div className="flex w-full pt-2 flex-1 flex-col gap-5 px-6 ">
        {leftsidebarUser.map((link) => {
          const isActive = (pathname.includes(link.label) && link.route.length > 1)// || pathname === link.route

          return (
            <Link
              href={`${link.route}/${link.label}`}
              key={link.label}
              className={`leftsidebar_link  ${isActive && 'bg-primary-500'}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={34}
                height={34}
              />
              <p className={`text-light-1 max-lg:hidden px-4 `}>{link.label}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Sidebar