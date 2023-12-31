import React from 'react'

const Card1 = () => {
  return (
    <main className='p-4 flex rounded-xl bg-neutral-900'>
        <section>
            <img src="" alt="" />
        </section>
        <section className='flex flex-col'>
            <p>Total Users</p>
            <p>10.273</p>
            <div className='flex gap-x-2'>
                <p className=' text-green-600'>12% </p>
                <p>more thatprevius weeks</p>
            </div>
        </section>
    </main>
  )
}

export default Card1