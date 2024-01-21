'use client'
import Searchbar from '@/app/ui/Shared/SearchBar'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'
import CardP1 from '@/app/ui/dashboard/Products/CardP1'
import { FaArrowLeft } from "react-icons/fa";

const SearchPage = ({params}) => {

    const SearchParams = useSearchParams()
    const search = SearchParams.get('q')
    const [products, setproducts] = useState([])

    useEffect(() => {
        const handlesearch = async () => {
            const res = await axios.get(`/api/product/Search/${params.id}?q=${search}`)
            setproducts(res.data)
        }
        handlesearch()

    }, [search]);

    return (
        <>

            <main className='p-4 bg-blue-main rounded-xl mt-4'>
                <div className='py-4'>
                    <div className='flex justify-between'>
                        <div className='flex justify-between select-none'>
                            <Link
                                href={'/dashboard/products'}
                                className=" bg-red text-black px-2 py-2  rounded-full">
                                <FaArrowLeft size={24} />
                            </Link>
                            <Searchbar routeType='search' />
                        </div>
                        <div className='btn-green p-2 rounded-lg'>
                            <Link href='/dashboard/products/New'> Add new product </Link>
                        </div>
                    </div>
                </div>

                <table border="1" className='w-full max-sm:w-60 flex flex-col  text-center' >
                    <thead>
                        <tr className='w-full mb-2 flex  justify-between max-sm:hidden '>
                            <th className='flex px-2'>Image</th>
                            <th className='users_products_link '  >Name</th>
                            <th className='users_products_link'  >Price</th>
                            <th className='users_products_link'  >Stock</th>
                            <th className='users_products_link'  >Color</th>
                            <th className='users_products_link'  >Categorie</th>
                            <th className='users_products_link'  >Size</th>
                            <th className=' text-center flex px-2'  >Settings</th>
                        </tr>
                    </thead>
                    <tbody className='flex flex-col gap-4 '>
                        {products && products.map((x, index) => {
                            return (
                                <CardP1 key={index} productsdata={x} />
                            )
                        })}
                    </tbody>
                </table>
            </main>
        </>
    )
}

export default SearchPage