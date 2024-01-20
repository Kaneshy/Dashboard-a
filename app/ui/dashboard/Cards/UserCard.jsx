'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const UserCard = ({ usersdata }) => {

    console.log('moosee', usersdata.admin)
    const [admin, setadmin] = useState(true)

    useEffect(() => {
        if(usersdata.admin === 'true') {
            setadmin(true)
            console.log(true)
        } else {
            setadmin(false)
        }
    }, [])
    

    return (
        <tr className='flex w-full justify-between max-sm:flex-col gap-y-2 border border-cyan-600 p-2 rounded-lg'>
            <td className='text-center'>
                <div className='w-16 h-16 flex object-fill '>
                    <img src={usersdata.imgUrl} width={30} height={30} className='w-full rounded-full  ' alt="" />
                </div>
            </td>
            <td className='users_products_link'>
                {usersdata.username}
            </td>
            <td className='users_products_link'>
                {usersdata.email}
            </td>
            <td className='users_products_link max-lg:hidden'>
                {usersdata.phone}
            </td >
            <td className='users_products_link'>
                <p className={`px-4 rounded-lg ${admin ? ' btn-blue ' : 'bg-red-800' } `}>{usersdata.admin}</p>
            </td>
            <td className='text-center flex gap-x-2'>
                <Link href={`/dashboard/users/view/${usersdata._id}`} className=' rounded-lg  flex justify-center items-center '>
                    <p className='px-4 rounded btn-green'>inspect</p>
                </Link>
            </td>
        </tr>
    )
}

export default UserCard


// <main className='rounded-xl hover:bg-neutral-800 p-4 mt-4'>
/* <section className='flex justify-between max-lg:flex-col'>
    <div className='flex items-center gap-4 '>
        <div className='w-16 h-16 flex object-fill '>
            <img src={usersdata.imgUrl} width={30} height={30} className='w-full rounded-full  ' alt="" />
        </div>
        <p>{usersdata.username}</p>
    </div>
    <p>{usersdata.email} </p>
    <p>{usersdata.phone}</p>
    <p> {usersdata.adrees} </p>
    <p className='p-1 rounded-lg bg-red-600'>{usersdata.action}</p>
    <div className='gap-x-2 flex'>
        <Link href={`/dashboard/users/${usersdata._id}`} className='px-4 py-1  rounded-lg bg-slate-700 '>Visit</Link>
        <button className='px-4 py-1  rounded-lg bg-slate-700 '>Delete</button>
    </div>
</section> */