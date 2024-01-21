'use client'
import { useState } from 'react'
import Searchbar from '@/app/ui/Shared/SearchBar'
import { IoSearchOutline } from 'react-icons/io5'
import Link from 'next/link'


const Topbar = ({ value }) => {

  const [searchactive, setsearchactive] = useState(false)
  console.log('wwww', value)

  return (
    <div className='py-4 flex justify-between w-full gap-x-4 '>
      <div className='flex items-center'>
        <Link
          href={`/dashboard/Search/${value}`}
          className=" btn-blue text-sky-400 px-2 py-2 flex items-center rounded-full">
          <IoSearchOutline size={20} />
        </Link>
      </div>

      <div className='btn-green p-2 rounded-lg'>
        <Link href={`/dashboard/${value}/New`}> Add new product </Link>
      </div>
    </div>
  )
}

export default Topbar