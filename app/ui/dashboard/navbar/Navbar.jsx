import React from 'react'
import Searchbar from './Searchbar'
import GoogleAuth from '../../auth/GoogleAuth'

const Navbar = () => {
  return (
    <main className='p-4 rounded-xl flex justify-between bg-neutral-900 items-center'>
      <section className=' text-cyan-600'>Dashboard</section>
      <section className='flex'> 
      {/* <GoogleAuth /> */}
        <Searchbar />
      </section>
    </main>
  )
}

export default Navbar