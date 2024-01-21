'use client'
import Topbar from '@/app/ui/Shared/Topbar'
import CardP1 from '@/app/ui/dashboard/Products/CardP1'
import axios from 'axios'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

const ProductsPage = () => {

  const [products, setproducts] = useState([])

  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);


  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
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
      <main className='p-4 bg-blue-main rounded-xl mt-4 flex flex-col max-md:items-center'>

        <Topbar value={'products'} />

        <section border="1" className='w-full max-sm:w-60 flex flex-col  text-center' >
          <CardP1 productsdata={products} param={'products'} />
        </section>
      </main>
    </InfiniteScroll>
  )
}

export default ProductsPage