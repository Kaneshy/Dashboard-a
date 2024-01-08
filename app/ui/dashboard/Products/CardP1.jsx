import Link from 'next/link'
import React from 'react'

const CardP1 = ({ productsdata }) => {
    return (

        <tr className='flex justify-between max-sm:flex-col '>
            <td className='text-center  '>
                <div className=' flex w-16 h-16  '>
                    <img className=' flex object-contain' src={productsdata.imgUrl} width={30} height={30} alt="" />
                </div>
            </td>
            <td className='users_products_link'>
                {productsdata.title}
            </td>
            <td className='users_products_link'>
                ${productsdata.price}
            </td>
            <td className='users_products_link'>
                {productsdata.stock}
            </td >
            <td className='users_products_link'>
                {productsdata.color}
            </td>
            <td className='users_products_link flex gap-2'>
                {productsdata.selectedClothing[0]}...
            </td >
            <td className='users_products_link flex gap-2 '>
                {productsdata.selectedSize.map((item, i) => {
                    return (
                        <p key={i}>{item}</p>
                    )
                })}
            </td>
            <td className='text-center flex gap-x-2 select-none'>
                <Link href={`/dashboard/products/view/${productsdata._id}`} className=' rounded-lg  flex justify-center items-center '>
                    <p className='px-4 rounded-lg border hover:bg-purple-800 text-small-semibold border-neutral-700  bg-purple-900'>Inspect</p>
                </Link>
            </td>
        </tr>
    )
}

export default CardP1