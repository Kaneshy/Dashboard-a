'use client'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ViewPage = ({ params }) => {

    const [preValue, setPreValue] = useState({})
    const [selectedClothing, setSelectedClothing] = useState([]);
    const [selectedSize, setselectedSize] = useState([]);
    const rounter = useRouter()

    useEffect(() => {
        const updatedproduct = async () => {
            const resUp = await axios.get(`/api/product/${params.id}`)
            if (resUp.status === 200) {
                setPreValue(resUp.data)
            }
            console.log('eagle', resUp.data)
            console.log('dd', resUp.data.address)
            setSelectedClothing(resUp.data.selectedClothing)
            setselectedSize(resUp.data.selectedSize)

        }
        updatedproduct()
    }, [])

    const handleDelete = async () => {
        try {
            const res = await axios.delete(`/api/product/${params.id}`)
            console.log(res)
            if (res.status == 200) {
                rounter.push('/dashboard/products')
            }
        } catch (error) {
            console.log(error.message, error.status)
        }
    }


    return (
        <main className='max-w-xl mx-auto mt-4 p-4 rounded-lg bg-blue-main'>
            <div className='w-full select-none gap-x-2  mt-4 flex justify-end right-20'>
                <Link href={`/dashboard/products/${params.id}`} className='btn-green  flex justify-center items-center '>
                    <p className='px-6 py-2 rounded '>Edit</p>
                </Link>
                <button onClick={handleDelete} className='btn-green  flex justify-center items-center '>
                    <p className='px-6 py-2 rounded '>Delete</p>
                </button>
            </div>
            <div>
                <h1 className='text-center  font-bold text-2xl text-white border-a1 pb-2 mb-6 '>Upload your video </h1>
                <section className="w-full select-none bg-neutral-950 rounded-2xl items-center flex justify-center mb-4">
                    <div className="h-96 flex ">
                        <img className="flex object-contain" src={preValue.imgUrl} alt="" />
                    </div>
                </section>
            </div>
            <div className="">

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="title" className="text-small-semibold block text-gray-400 font-bold mb-2 ">title (required): </label>
                    <p className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" >{preValue.title}</p>
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="price" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Price (required): </label>
                    <p className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" >{preValue.price}</p>
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="color" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Color (required): </label>
                    <p className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" >{preValue.color}</p>
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="stock" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Stock (required): </label>
                    <p className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" >{preValue.stock}</p>
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="brand" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Brand (Marca): </label>
                    <p className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" >{preValue.brand}</p>
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="sex" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Sex: </label>
                    <p className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" >{preValue.sex}</p>
                </div>

                <section className="mb-4 border-gray-500 border p-2 w-full">
                    <div className="mb-4 border-gray-500 border p-2 w-full">
                        <h3>Categorie:</h3>
                    </div>
                    <div className="mb-4  border-gray-500 border  p-2 w-full">
                        <div className="gap-2 p-2">
                            {selectedClothing.map((item, index) => (
                                <button
                                    style={{ margin: '5px' }}
                                    className="p-2 rounded bg-slate-600" key={`${index * 5}`}>{item}</button>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mb-4 border-gray-500 border p-2 w-full">
                    <div className="mb-4 border-gray-500 border p-2 w-full">
                        <h3>Size (Talla):</h3>
                    </div>
                    <div className="mb-4  border-gray-500 border  p-2 w-full">
                        <div className="gap-2 p-2">
                            {selectedSize.map((item, index) => (
                                <button
                                    style={{ margin: '5px' }}
                                    className="p-2 rounded bg-slate-600" key={`${index * 2}`}>{item}</button>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="description" className="text-small-semibold block text-gray-400 font-bold mb-2">Description:</label>
                    <p className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" >{preValue.desc}</p>
                </div>
            </div>
        </main>
    )
}

export default ViewPage