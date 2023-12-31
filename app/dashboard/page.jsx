import React from 'react'
import Card1 from '../ui/dashboard/Cards/Card1'
import Card2 from '../ui/dashboard/Cards/Card2'
import Chard from '../ui/dashboard/Cards/Chard'

const DashboardPage = () => {
  return (
    <main className=''>
      <div className='home-sv-a pt-4'>
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <section className='p-4 bg-neutral-900 rounded-xl mt-4'>
        <div className='py-4'>
          <h1>Latest Transactions</h1>
        </div>
        <div className='p-4 flex justify-between max-lg:hidden '>
          <p>Nombre</p>
          <p>Status</p>
          <p>Date</p>
          <p>Amount</p>
        </div>
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </section>
      <section className='p-4 bg-neutral-900 rounded-xl mt-4'>
        <Chard/>
      </section>

    </main>
  )
}

export default DashboardPage