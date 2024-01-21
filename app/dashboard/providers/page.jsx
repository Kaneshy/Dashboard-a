'use client'
import Topbar from '@/app/ui/Shared/Topbar'
import ProviderCard from '@/app/ui/dashboard/Cards/providerCard'
import CardP1 from '@/app/ui/dashboard/Products/CardP1'
import Searchbar from '@/app/ui/dashboard/navbar/Searchbar'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const UsersPage = () => {

  const [users, setusers] = useState([])


  useEffect(() => {
    const datausers = async () => {
      const res = await axios.get('/api/providers')
      setusers(res.data)
    }
    datausers()
  }, [])

  return (
    <main className='p-4 bg-blue-main rounded-xl mt-4 flex flex-col items-center'>

      <Topbar value={'providers'}/>

      <section border="1" className='w-full max-sm:w-60 flex flex-col  text-center' >
          <CardP1 productsdata={users} param={'providers'} />
      </section>
    </main>
  )
}

export default UsersPage