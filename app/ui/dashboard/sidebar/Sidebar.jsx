'use client'
import { leftsidebarPages, leftsidebarAnalytics, leftsidebarUser } from '@/constants/index.js'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Sidebar = () => {

  const pathname = usePathname()

  return (
    <section className="custom-scrollbar leftsidebar  ">

      <p className='text-center py-2 text-small-semibold text-cyan-600'>HOME</p>
      <div className="flex w-full flex-1 flex-col gap-3 px-6">
        {leftsidebarPages.map((link) => {
          const isActive = (pathname.includes(link.route) && link.route.length > 1)// || pathname === link.route
          return (
            <Link
              href={link.route}
              key={`${link.label}leftsidebarPages`}
              className={`leftsidebar_link ${isActive && 'bg-green-900 border-l-2 border-green-400 hover:bg-green-600'}`}
            >
              <div className='w-16 flex justify-center'>{link.iconReact}</div>
              <p className={`text-light-1 max-lg:hidden px-4 `}>{link.label}</p>
            </Link>
          )
        })}
      </div>
      <p className='text-center py-2 text-small-semibold text-cyan-600'>ANALYTICS</p>
      <div className="flex w-full flex-1 flex-col gap-3 px-6">
        {leftsidebarAnalytics.map((link, i) => {
          const isActive = (pathname.includes(link.route) && link.route.length > 1)// || pathname === link.route
          return (
            <Link
              href={link.route}
              key={`${link.label}${i}`}
              className={`leftsidebar_link ${isActive && 'bg-green-900 border-l-2 border-green-400 hover:bg-green-600'}`}
            >
              <div className='w-16 flex justify-center'>{link.iconReact}</div>
              <p className={`text-light-1 max-lg:hidden px-4 `}>{link.label}</p>
            </Link>
          )
        })}
      </div>

      <p className='text-center py-2 text-small-semibold text-cyan-600'>SETTINGS</p>
      <div className="flex w-full pt-2 flex-1 flex-col gap-5 px-6 ">
        {leftsidebarUser.map((link) => {
          const isActive = (pathname.includes(link.label) && link.route.length > 1)// || pathname === link.route

          return (
            <Link
              href={`${link.route}`}
              key={`${link.label}leftsidebarUser`}
              className={`leftsidebar_link  ${isActive && 'bg-green-900 border-l-2 border-green-400 hover:bg-green-600'}`}
            >
              <div className='w-16 flex justify-center'>{link.iconReact}</div>
              <p className={`text-light-1 max-lg:hidden px-4 `}>{link.label}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Sidebar