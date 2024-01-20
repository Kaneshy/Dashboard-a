import Link from 'next/link'
import React from 'react'

const CardP1 = ({ productsdata }) => {
    return (

        <tr className='flex justify-between max-sm:flex-col border border-cyan-600 py-1 px-2 rounded-lg '>
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
            <td className={`users_products_link`}>
                <div className={`px-2  rounded-lg ${(productsdata.stock == 0) ? 'bg-red-800 border border-red-400' : ''}`}>{productsdata.stock}</div>
                
            </td >
            <td className='users_products_link max-lg:hidden'>
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
                    <p className='px-4 rounded-lg border btn-green text-small-semibold   '>Inspect</p>
                </Link>
            </td>
        </tr>
    )
}

export default CardP1