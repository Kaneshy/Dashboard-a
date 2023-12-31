'use client'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ViewProductPage = ({ params }) => {

    const [preValue, setPreValue] = useState({})
    const router = useRouter()

    useEffect(() => {
        const updateduser = async () => {
            const resUp = await axios.get(`/api/user/${params.id}`)
            if (resUp.status === 200) {
                setPreValue(resUp.data)
            }
            console.log('dd', resUp.data._id)

        }
        updateduser()
    }, [])

    const handleDelete = async () => {
        try {
            const res = await axios.delete(`/api/user/${params.id}`)
            console.log(res)
            if(res.status == 200){
                router.push('/dashboard/users')
            }
        } catch (error) {
            console.log(error.message, error.status)
        }
    }


    return (
        <main>
            <div className='w-full select-none gap-x-2  mt-4 flex justify-end right-20'>
                <Link href={`/dashboard/users/${params.id}`} className='  flex justify-center items-center '>
                    <p className='px-6 py-2 rounded bg-neutral-800'>Edit</p>
                </Link>
                <button onClick={handleDelete} className='  flex justify-center items-center '>
                    <p className='px-6 py-2 rounded bg-neutral-800'>Delete</p>
                </button>
            </div>
            <div>
                <h1 className='text-center  font-bold text-2xl text-white border-a1 pb-2 mb-6 '>Upload your video </h1>
                <section className="w-full bg-neutral-950 rounded-2xl items-center flex justify-center mb-4">
                    <div className="w-52 h-52 flex object-fill">
                        <img className="w-full flex" src={preValue.imgUrl} alt="" />
                    </div>
                </section>
            </div>
            <div className="max-w-xl mx-auto mt-4 p-4 bg-neutral-900 rounded-lg">

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="title" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Username: </label>
                    <p className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" >{preValue.username}</p>
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="price" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Email: </label>
                    <p className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" >{preValue.email}</p>
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="color" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Phone: </label>
                    <p className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" >{preValue.phone}</p>
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="stock" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Address: </label>
                    <p className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" >{preValue.address}</p>
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="size" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Role (is admin?) </label>
                    <p className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" >{preValue.admin}</p>
                </div>

                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="h" className="text-small-semibold block text-gray-400 font-bold mb-2">Action:</label>
                    <p className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" >{preValue.action}</p>
                </div>
                <div className="mb-4 border-gray-500 border   p-2 w-full">
                    <label htmlFor="description" className="text-small-semibold block text-gray-400 font-bold mb-2">Description:</label>
                    <p className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" >{preValue.desc}</p>
                </div>
            </div>
        </main>
    )
}

export default ViewProductPage