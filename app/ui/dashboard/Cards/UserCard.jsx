import React from 'react'
import Link from 'next/link'

const UserCard = ({ usersdata }) => {

    console.log('moosee', usersdata)
    return (
        <tr className='flex justify-between max-sm:flex-col '>
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
            <td className='users_products_link'>
                {usersdata.phone}
            </td >
            <td className='users_products_link'>
                <p className='px-4 rounded-lg bg-light-3'>{usersdata.admin}</p>
            </td>
            <td className='text-center flex gap-x-2'>
                <Link href={`/dashboard/users/view/${usersdata._id}`} className=' rounded-lg  flex justify-center items-center '>
                    <p className='px-4 rounded bg-light-4'>INSPECT</p>
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