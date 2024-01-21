'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import CardP1 from '@/app/ui/dashboard/Products/CardP1'
import { FaArrowLeft } from "react-icons/fa";

const SearchPage = ({ params }) => {

    const [products, setproducts] = useState([])
    const [searchq, setSearchq] = useState("");


    const handlesearch = async () => {
        console.log(`/api/product/Search/${params.id}?q=` + searchq)
        const res = await axios.get(`/api/product/Search/${params.id}?q=` + searchq)
        console.log('erds', res.data)
        setproducts(res.data)
    }

    return (
        <>

            <main className='p-4 bg-blue-main rounded-xl mt-4'>
                <div className='py-4'>
                    <div className='flex justify-between'>
                        <div className='flex select-none'>
                            <div className='flex items-center justify-center'>
                                <Link
                                    href={`/dashboard/${params.id}`}
                                    className=" btn-blue text-sky-400  px-2 py-2  rounded-full">
                                    <FaArrowLeft size={20} />
                                </Link>
                            </div>

                            <div className="flex w-full items-center ml-4 px-4  ">
                                <div className="flex w-full gap-x-4">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={searchq}
                                        onChange={(e) => setSearchq(e.target.value)}
                                        className="border w-full border-gray-600 bg-neutral-900 rounded-full px-4 py-2 focus:outline-none focus:ring focus:border-blue-500  "
                                    />
                                    <button onClick={handlesearch} className='btn-green px-4'>search</button>
                                </div>
                            </div>
                        </div>
                        <div className='btn-green p-2 rounded-lg'>
                            <Link href='/dashboard/products/New'> Add new product </Link>
                        </div>
                    </div>
                </div>


                <main border="1" className='w-full max-sm:w-60 flex flex-col  text-center' >
                    <CardP1 productsdata={products} param={params.id} />
                </main>
            </main>
        </>
    )
}

export default SearchPage