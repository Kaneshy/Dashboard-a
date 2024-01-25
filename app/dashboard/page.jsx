'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card1 from '../ui/dashboard/Cards/Card1'
import Card2 from '../ui/dashboard/Cards/Card2'
import Chard from '../ui/dashboard/Cards/Chard'

const DashboardPage = () => {

  const [valuesH, setvaluesH] = useState({})

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('/api/analytics/totalstock')
      setvaluesH(data.data)
    }
    fetchdata()
  }, [])

  return (
    <main className=''>
      <div className='home-sv-a pt-2'>
        <Card1 valuesH={valuesH.totalValue} titleH={'Total Price Stock'} />
        <Card1 valuesH={valuesH.lengthValue} titleH={'Total Stock'} />
        <Card1 valuesH={valuesH.totalValue} titleH={'Total Iva Stock'} />
        <Card1 valuesH={valuesH.lengthValue} titleH={'Total Taxes Stock'} />
      </div>
      <section className='p-4 bg-blue-main  mt-2'>
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
      <section className='p-4 bg-blue-main  mt-2'>
        <Chard />
      </section>

    </main>
  )
}

export default DashboardPage