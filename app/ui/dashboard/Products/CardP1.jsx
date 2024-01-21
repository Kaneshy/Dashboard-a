'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdLink } from 'react-icons/io'

const CardP1 = ({ productsdata, param }) => {
    const [test, settest] = useState([])
    const [first, setfirst] = useState([])
    const [second, setsecond] = useState([])
    const [thirth, setfthirth] = useState([])

    useEffect(() => {
        if (param === 'products') {
            settest(['Image', 'Name', 'Price', 'Stock', 'Color', 'Categoria', 'Size', 'Settings'])
            setfirst(productsdata)
        } else if (param === 'users') {
            settest(['Image', 'Brand', 'Email', 'Phone', 'Manager', 'Address', 'Action', 'Settings'])
            setsecond(productsdata)
        } else if (param === 'providers') {
            settest(['Image', 'Name', 'Email', 'Phone', 'Admin', 'Settings'])
            setfthirth(productsdata)
        } else return;
    }, [productsdata])



    return (
        <main>
            <section>
                <div className='w-full mb-2 flex  justify-between max-sm:hidden '>
                    {test && test.map((section, index) => {
                        return (
                            <p key={`test`+index} className='users_products_link'>{section}</p>
                        )
                    })}
                </div>
            </section>

            {first && (
                <section className='flex flex-col gap-4 '>
                    {first.map((product, index) => {
                        return (
                            <div key={`first`+ index}  className='flex justify-between max-sm:flex-col border border-cyan-600 py-1 px-2 rounded-lg '>
                                <div className='text-center  '>
                                    <div className=' flex w-16 h-16  '>
                                        <img className=' flex object-contain' src={product.imgUrl} width={30} height={30} alt="" />
                                    </div>
                                </div>
                                <div className='users_products_link'>
                                    {product.title}
                                </div>
                                <div className='users_products_link'>
                                    ${product.price}
                                </div>
                                <div className={`users_products_link`}>
                                    <div className={`px-2  rounded-lg ${(product.stock == 0) ? 'bg-red-800 border border-red-400' : ''}`}>{product.stock}</div>

                                </div >
                                <div className='users_products_link max-lg:hidden'>
                                    {product.color}
                                </div>
                                <div className='users_products_link flex gap-2'>
                                    {product.selectedClothing[0]}...
                                </div >
                                <div className='users_products_link flex gap-2 '>
                                    {product.selectedSize.map((item, i) => {
                                        return (
                                            <p key={i}>{item}</p>
                                        )
                                    })}
                                </div>
                                <div className='text-center flex gap-x-2 select-none'>
                                    <Link href={`/dashboard/products/view/${product._id}`} className=' rounded-lg  flex justify-center items-center '>
                                        <p className='px-4 rounded-lg border btn-green text-small-semibold   '>Inspect</p>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </section>
            )}

            {second && (
                <section className='flex flex-col gap-4 '>
                    {second.map((usersdata, index) => {
                        return (
                            <section  key={`second`+ index} className='flex w-full justify-between max-sm:flex-col gap-y-2 border border-cyan-600 p-2 rounded-lg'>
                                <div className='text-center'>
                                    <div className='w-16 h-16 flex object-fill '>
                                        <img src={usersdata.imgUrl} width={30} height={30} className='w-full rounded-full  ' alt="" />
                                    </div>
                                </div>
                                <div className='users_products_link'>
                                    {usersdata.username}
                                </div>
                                <div className='users_products_link'>
                                    {usersdata.email}
                                </div>
                                <div className='users_products_link max-lg:hidden'>
                                    {usersdata.phone}
                                </div >
                                <div className='users_products_link'>
                                    <p className={`px-4 rounded-lg ${usersdata ? ' btn-blue ' : 'bg-red-800'} `}>{usersdata.admin}</p>
                                </div>
                                <div className='text-center flex gap-x-2'>
                                    <Link href={`/dashboard/users/view/${usersdata._id}`} className=' rounded-lg  flex justify-center items-center '>
                                        <p className='px-4 rounded btn-green'>inspect</p>
                                    </Link>
                                </div>
                            </section>
                        )
                    })}
                </section>
            )}

            {thirth && (
                <section className='flex flex-col gap-4 '>
                    {thirth.map((usersdata, index) => {
                        return (
                            <section  key={`thirth`+ index}  className='flex justify-between max-sm:flex-col border border-cyan-600 p-2 rounded-lg '>
                                <div className='text-center'>
                                    <div className='w-16 h-16 flex object-fill '>
                                        <img src={usersdata.imgUrl} width={30} height={30} className='w-full rounded-full  ' alt="" />
                                    </div>
                                </div>
                                <div className='users_products_link items-center flex gap-x-2 '>
                                    {usersdata.brand}
                                    <a href={usersdata.website} className='text-green-400' target='_blank'><IoMdLink size='20' /></a>
                                </div>
                                <div className='users_products_link'>
                                    {usersdata.email}
                                </div>
                                <div className='users_products_link'>
                                    {usersdata.phone}
                                </div >
                                <div className='users_products_link'>
                                    {usersdata.manager}
                                </div >
                                <div className='users_products_link max-md:hidden'>
                                    {usersdata.address}
                                </div >
                                <div className='users_products_link gap-x-2'>
                                    <p className='px-4 rounded-lg btn-blue'>{usersdata.action}</p>
                                </div>
                                <div className='text-center flex gap-x-2'>
                                    <Link href={`/dashboard/providers/view/${usersdata._id}`} className=' rounded-lg  flex justify-center items-center '>
                                        <p className='px-4 rounded btn-green'>INSPECT</p>
                                    </Link>
                                </div>
                            </section>
                        )
                    })}
                </section>
            )}


        </main>

    )
}

export default CardP1