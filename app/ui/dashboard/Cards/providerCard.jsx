import React from 'react'
import Link from 'next/link'
import { IoMdLink } from "react-icons/io";


const ProviderCard = ({ usersdata }) => {

    console.log('moosee', usersdata)
    return (
        <tr className='flex justify-between max-sm:flex-col border border-cyan-600 p-2 rounded-lg '>
            <td className='text-center'>
                <div className='w-16 h-16 flex object-fill '>
                    <img src={usersdata.imgUrl} width={30} height={30} className='w-full rounded-full  ' alt="" />
                </div>
            </td>
            <td className='users_products_link items-center flex gap-x-2 '>
                 {usersdata.brand}
                <a href={usersdata.website} className='text-green-400' target='_blank'><IoMdLink size='20' /></a>
            </td>
            <td className='users_products_link'>
                {usersdata.email}
            </td>
            <td className='users_products_link'>
                {usersdata.phone}
            </td >
            <td className='users_products_link'>
                {usersdata.manager}
            </td >
            <td className='users_products_link max-md:hidden'>
                {usersdata.address}
            </td >
            <td className='users_products_link gap-x-2'>
                <p className='px-4 rounded-lg btn-blue'>{usersdata.action}</p>
            </td>
            <td className='text-center flex gap-x-2'>
                <Link href={`/dashboard/providers/view/${usersdata._id}`} className=' rounded-lg  flex justify-center items-center '>
                    <p className='px-4 rounded btn-green'>INSPECT</p>
                </Link>
            </td>
        </tr>
    )
}

export default ProviderCard