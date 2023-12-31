import Link from 'next/link'
import React from 'react'

const CardP1 = ({ productsdata }) => {
    return (

        <tr className='flex justify-between max-sm:flex-col '>
            <td className='text-center'>
                <div className='w-16 h-16 flex object-fill '>
                    <img src={productsdata.imgUrl} width={30} height={30} className='w-full  ' alt="" />
                </div>
            </td>
            <td className='users_products_link'>
                {productsdata.title}
            </td>
            <td className='users_products_link'>
                {productsdata.price}
            </td>
            <td className='users_products_link'>
                {productsdata.stock}
            </td >
            <td className='users_products_link'>
                {productsdata.categorie}
            </td >
            <td className='users_products_link'>
                <p className='px-4 rounded-lg bg-light-3'>{productsdata.color}</p>
            </td>
            <td className='text-center flex gap-x-2'>
                <Link href={`/dashboard/products/view/${productsdata._id}`} className=' rounded-lg  flex justify-center items-center '>
                    <p className='px-4 rounded-lg bg-light-4'>Inspect</p>
                </Link>
            </td>
        </tr>
    )
}

export default CardP1