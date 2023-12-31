import React from 'react'

const Card2 = () => {
    return (
        <main className='rounded-xl hover:bg-neutral-800 p-4 mt-4'>
            <section className='flex justify-between max-lg:flex-col'>
                <div className='flex'>
                    <img src="" alt="" />
                    <p>John Doe</p>
                </div>
                <div>
                    <p className='p-1 rounded-lg bg-red-600'>Pendient</p>
                </div>
                
                <p>14,004,089,840</p>
                <p> $3,848 </p>
            </section>
        </main>
    )
}

export default Card2