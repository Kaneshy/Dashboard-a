'use client'
import Searchbar from '@/app/ui/Shared/SearchBar'
import CardP1 from '@/app/ui/dashboard/Products/CardP1'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

const ProductsPage = () => {

  const [products, setproducts] = useState([])

  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [test, settest] = useState([1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1])
  const [searchactive, setsearchactive] = useState(false)


  useEffect(() => {
    // const dataproducts = async () => {
    //   const res = await axios.get('/api/product')
    //   setproducts(res.data)
    // }
    // dataproducts()
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    console.log('gs', page)
    try {
      const res = await axios.get(`/api/product?page=${page}`);
      const data = await res.data;

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setproducts((prevPosts) => [...prevPosts, ...data]);
        setPage((prevPage) => prevPage + 1);
      }

    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };



  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchProducts}
      hasMore={hasMore}
      loader={
        <main className='p-4 bg-neutral-900 rounded-xl mt-4'>
          <p className='w-full text-center text-small-regular text-neutral-600'>Loading please wait</p>
        </main>

      }>
      <main className='p-4 bg-neutral-900 rounded-xl mt-4'>
        <div className='py-4'>
          <div className='flex justify-between'>
            <button onClick={() => setsearchactive(!searchactive)}>Search</button>
            {searchactive && (
              <Searchbar routeType='search' />
            )
            }
            <div className='bg-purple-900 p-2 rounded-lg'>
              <Link href='/dashboard/products/New'> Add new product </Link>
            </div>
          </div>
        </div>

        <table border="1" className='w-full max-sm:w-60 flex flex-col  text-center' >
          <thead>
            <tr className='w-full flex  justify-between max-sm:hidden '>
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
    </InfiniteScroll>
  )
}

export default ProductsPage