'use client'
import Topbar from '@/app/ui/Shared/Topbar'
import UserCard from '@/app/ui/dashboard/Cards/UserCard'
import CardP1 from '@/app/ui/dashboard/Products/CardP1'
import Searchbar from '@/app/ui/dashboard/navbar/Searchbar'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const UsersPage = () => {

  const [users, setusers] = useState([])


  useEffect(() => {
    const datausers = async () => {
      const res = await axios.get('/api/user')
      setusers(res.data)
    }
    datausers()
  }, [])

  return (
    <main className='p-4 b bg-blue-main  mt-2 flex flex-col items-center'>

      <Topbar value={'users'}/>

      <section border="1" className='w-full max-sm:w-60 flex flex-col  text-center' >
          <CardP1 productsdata={users} param={'users'} />
      </section>

    </main>
  )
}

export default UsersPage