'use client'
import UserCard from '@/app/ui/dashboard/Cards/UserCard'
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
    <main className='p-4 bg-neutral-900 rounded-xl mt-4'>
      <div className='py-4'>
        <div className='flex justify-between'>
          <Searchbar />
          <div className='bg-purple-900 p-2 rounded-lg'>
            <Link href='/dashboard/users/New'> Add new user </Link>
          </div>
        </div>
      </div>

      <table border="1" className='w-full max-sm:w-60 flex flex-col  text-center' >
        <thead>
          <tr className='w-full flex  justify-between max-sm:hidden '>
            <th ></th>
            <th >Name</th>
            <th >Email</th>
            <th >Phone</th>
            <th >Admin</th>
            <th >Settings</th>
          </tr>
        </thead>
        <tbody className='flex flex-col gap-4 '>
          {users && users.map((x) => {
            return (
              <UserCard key={x._id} usersdata={x} />
            )
          })}

        </tbody>
      </table>
    </main>
  )
}

export default UsersPage